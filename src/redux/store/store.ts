import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import {
    applyMiddleware,
    compose,
    createStore,
    StoreEnhancer,
    Store,
} from 'redux';
import {
    persistReducer,
    persistStore,
    PersistConfig,
    Persistor,
} from 'redux-persist';
import { AppActions } from "../types/actions";
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import createRootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

const reducer = persistReducer(persistConfig, createRootReducer(history))
export const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware, routerMiddleware(history))

export const store: Store<any, any> = createStore(reducer, composeWithDevTools(enhancer))
export const persistor = (callback?: () => void): Persistor => persistStore(store, undefined, callback)

export default store;