import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from 'redux-thunk';
import {reducer as DashboardReducer} from "./DashboardReducer/reducer";


const rootReducer = combineReducers({
    DashboardReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))