import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { expenseReducer } from "./expenses";

export default (history: History) =>
    combineReducers({
        router: connectRouter(history),
        expenseReducer
    });