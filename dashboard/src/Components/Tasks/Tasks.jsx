// import React from 'react'
import style from "../../CSS/Tasks.module.css"
import { MdOutlineNoteAlt, MdOutlineStickyNote2, MdOutlineTask } from "react-icons/md";
import { LuFilePlus2, LuFileWarning } from "react-icons/lu";
import TaskBox from './TaskBox';

import React, { useEffect, useState } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
import BarChart from "../Common/Ant Design/BarChart";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Common/Ant Design/Modal";
import ModalPop from "../Common/Ant Design/Modal";
import { getTasks } from "../../Redux/TaskReducer/action";



const Tasks = () => {

    const dispatch = useDispatch();

    const { tasks } = useSelector((store) => ({
        tasks: store.TaskReducer.tasks
    }));
    const [state,setState] = useState("All")

   


    const CreateTaskButn = ()=>{
        
    }

    useEffect(()=>{
        dispatch(getTasks());
    },[])


  return (
    <div id={style.Tasks}>


        <div id={style.TasksP1}>
            <div>
                {/* <BarChart/> */}
                {/* <Modal/> */}
            </div>
        </div>

      <div id={style.T1}>
        <select name="" id="">
            <option value=""> Today</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>
        <div>
            <Badge count={10} size="large" style={{fontSize:"10px",backgroundColor:"#6366F1"}}>
                <button id={style.B1} onClick={()=>setState("ALL")}>All Task</button>
            </Badge>
            <Badge count={11} size="large" style={{fontSize:"10px",backgroundColor:"rgb(0, 183, 255)"}}>
                <button id={style.B2} onClick={()=>setState("OPEN")} ><MdOutlineNoteAlt style={{marginTop:"-4px",fontSize:"18px"}}/>Open Task</button>
            </Badge>
            <Badge count={120} size="large" style={{fontSize:"10px",backgroundColor:"rgb(255, 200, 0)"}}>
                <button id={style.B3} onClick={()=>setState("PENDING")} ><MdOutlineStickyNote2 style={{marginTop:"-4px",fontSize:"18px"}}/> Pending Task</button>
            </Badge>
            <Badge count={89} size="large" style={{fontSize:"10px",backgroundColor:"#22CC5E"}}>
                <button id={style.B4} onClick={()=>setState("COMPLETED")} ><MdOutlineTask style={{marginTop:"-4px",fontSize:"18px"}}/> Completed Task</button>
            </Badge>
            <Badge count={829} size="large" style={{fontSize:"10px",backgroundColor:"#EF4444"}}>
                <button id={style.B5} onClick={()=>setState("IMPORTANT")} ><LuFileWarning style={{marginTop:"-5px",fontSize:"16px"}}/> Important Task</button>
            </Badge>
        </div>
        {/* <button id={style.CreateButn} onClick={()=>CreateTaskButn()}>
            <LuFilePlus2 style={{marginTop:"-5px",fontSize:"16px"}}/>
            Create Task
        </button> */}
        <ModalPop/>
      </div>

      


      <div id={style.T2}>
        {
            tasks?.map((e)=>{
                return <TaskBox {...e} />
            })
        }
      </div>
    </div>
  )
}

export default Tasks





// const App: React.FC = () => (
//   <Space size="middle">
//     <Badge count={5}>
//       <Avatar shape="square" size="large" />
//     </Badge>
//     <Badge count={0} showZero>
//       <Avatar shape="square" size="large" />
//     </Badge>
//     <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
//       <Avatar shape="square" size="large" />
//     </Badge>
//   </Space>
// );

// export default App;