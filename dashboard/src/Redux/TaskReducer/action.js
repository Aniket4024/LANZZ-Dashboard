import axios from "axios"
import { CREATE_TASK, GET_TASKS, UPDATE_TASK } from "../actionType"


export const getTasks = ()=>(dispatch)=>{

    axios.get("http://localhost:8080/tasks")
    .then((res)=>{
        dispatch({type:GET_TASKS,payload:res.data})
    })
    .catch((err)=>{
        console.log("Data Not Found!")
        console.log(err)
    })

}

export const createTask = (data)=>(dispatch)=>{
    axios.post("http://localhost:8080/tasks",data)
    .then((res)=>{
        dispatch({type:CREATE_TASK,payload:res.data})
        // console.log(res.data)
    })
    .catch((err)=>{
        console.log("Data Not Found!")
        console.log(err)
    })
}

// export const updateTask = (data)=>(dispatch)=>{
//     axios.patch(`http://localhost:8080/tasks/${data.id}`,data)
//     .then((res)=>{
//         dispatch({type:UPDATE_TASK,payload:res.data})
//         // console.log(res.data)
//     })
//     .catch((err)=>{
//         console.log("Data Not Found!")
//         console.log(err)
//     })
// }


export const deleteTask = (id)=>(dispatch)=>{
    axios.delete(`http://localhost:8080/tasks/${id}`)
}