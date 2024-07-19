import axios from 'axios';
import JWTdecode from 'jwt-decode';
import { Response } from '../types';
const API_URL = import.meta.env.VITE_API_URL;

const getAxiosAuthInstance = () => {
	const instance = axios.create();
	instance.interceptors.request.use(async (config) => {
		config.withCredentials = true;
		const tokens = {};
		if (!document.cookie) return config;
		document.cookie.split(';').map((cookie) => {
			const [key, value] = cookie.split('=');
			tokens[key.trim()] = value;
		});
		if (!tokens['accessToken'] || !tokens['refreshToken']) return config;
		const decodedAccessToken = JWTdecode(tokens['accessToken']);
		const decodedRefreshToken = JWTdecode(tokens['refreshToken']);

		if (decodedAccessToken.exp < Date.now()) {
			if (decodedRefreshToken.exp < Date.now()) {
				window.location.href = '/';
				return config;
			}
			await ApiService.get<Response<null>>('auth/refresh', {
				withCredentials: true,
			});
		}
		return config;
	});
	return instance;
};

class ApiService {
	static async get(
		url,
		config,
	) {
		if (config?.protected) {
			const res = await getAxiosAuthInstance().get(
				API_URL + url,
				config,
			);
			return res;
		}
		const res = await axios.get(API_URL + url, config);
		return res;
	}
	static async post(
		url,
		data,
		config,
	) {
		if (config?.protected) {
			const res = getAxiosAuthInstance().post(
				API_URL + url,
				data,
				config,
			);
			return res;
		}

		const res = await axios.post(API_URL + url, data, config);
		return res;
	}
	static async put(
		url,
		data,
		config,
	) {
		if (config?.protected) {
			const res = getAxiosAuthInstance().put(
				API_URL + url,
				data,
				config,
			);
			return res;
		}

		const res = await axios.put(API_URL + url, data, config);
		return res;
	}
	static async delete(
		url,
		config
	) {
		if (config?.protected) {
			const res = getAxiosAuthInstance().delete(
				API_URL + url,
				config,
			);
			return res;
		}
		const res = await axios.delete(API_URL + url, config);
		return res;
	}
}

export const getSearch = (searchParams) => {
	const search = searchParams.toString();
	return search ? JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) }) : '';
}

export default ApiService;
