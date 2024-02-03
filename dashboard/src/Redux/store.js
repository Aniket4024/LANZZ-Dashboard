import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from 'redux-thunk';
import {reducer as DashboardReducer} from "./DashboardReducer/reducer";
import {reducer as TaskReducer} from "./TaskReducer/reducer";


const rootReducer = combineReducers({
    DashboardReducer,
    TaskReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))