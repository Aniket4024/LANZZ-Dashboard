import {COMPLETED, IMPORTANT, OPEN, PENDING} from "../actionType"

export const CreateTask =(data)=>(dispatch)=>{
    dispatch({type:OPEN,payload:data})
}

export const ImportantTask =(data)=>(dispatch)=>{
    dispatch({type:IMPORTANT,payload:data})
}

export const PendingTask = (data)=>(dispatch)=>{
    dispatch({type:PENDING,payload:data})
}

export const CompletedTask = (data)=>(dispatch)=>{
    dispatch({type:COMPLETED,payload:data})
}