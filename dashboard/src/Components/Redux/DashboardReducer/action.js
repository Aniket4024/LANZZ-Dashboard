import { DASHBOARD_PHONE, TASKS } from "../actionType"

export const TasksState = ()=>(dispatch)=>{
    dispatch ({type:TASKS})
}
export const DashboardPhone = ()=>(dispatch)=>{
    dispatch ({type:DASHBOARD_PHONE})
}