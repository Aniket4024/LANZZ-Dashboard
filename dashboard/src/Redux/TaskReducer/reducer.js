import { CREATE_TASK, GET_TASKS, UPDATE_TASK } from "../actionType";


const initialState = {
    tasks:[
        
    ]
}


export const reducer = (state=initialState,{type,payload}) => {
  switch (type){
    case GET_TASKS:
        return {...state,tasks:[...payload]}
    case CREATE_TASK:
        return {...state,tasks:[...state.tasks,payload]}
    case UPDATE_TASK:
        return {...state,tasks:state.tasks.map((e)=>e.id===payload.id?payload:e)}
    default:
        return state;
  }
}


