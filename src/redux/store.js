import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import userReducer from './slices/UserSlice';
const reducers = combineReducers({
    user: userReducer
})

const persistConfig = {
    key: 'vocmaps',
    storage,
}

const store = configureStore({
    reducer: persistReducer(persistConfig, reducers),
    devTools: true,
});

export const persistedStore = persistStore(store);
export default store;