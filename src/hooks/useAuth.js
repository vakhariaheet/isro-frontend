import { useDispatch, useSelector } from "react-redux"
import ApiService from "../utils/ApiService";
import { setUser } from "../redux/Slices/UserSlice";

const useAuth = () => { 
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const login = async (username, password) => { 
        if (!username || !password) throw new Error({
            message: 'Username and password are required',
            isSuccess: false,
            data:{}
        });
        const data = await ApiService.post('/auth/login', { username, password });
        const { user, tokens } = data.data;
        dispatch(setUser({ ...user, tokens }));
        localStorage.setItem('accessToken', tokens.accessToken);
        localStorage.setItem('refreshToken', tokens.refreshToken);
        return data;
    }

    const register = async (name, username, email, password) => { 
        if (!name || !username || !email || !password) throw new Error({
            message: 'All fields are required',
            isSuccess: false,
            data:{}
        });
        const data = await ApiService.post('/auth/register', {
            name, username, email, password
        });
        
        return data;
    }



    const logout = async () => { 
        await ApiService.post('/auth/logout', {}, { protected: true });
        dispatch(setUser({}));
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }




    return {
        user,
        login,
        register,
        logout
    };
}

export default useAuth;