import React from 'react'
import style from "../../CSS/Tasks.module.css"
import { MdOutlineNoteAlt, MdOutlineStickyNote2, MdOutlineTask } from "react-icons/md";
import { LuFilePlus2, LuFileWarning } from "react-icons/lu";
import TaskBox from './TaskBox';



const Tasks = () => {
  return (
    <div id={style.Tasks}>
      <div id={style.T1}>
        <select name="" id="">
            <option value=""> Today</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>
        <div>
            <button>All Task</button>
            <button><MdOutlineNoteAlt style={{marginTop:"-4px",fontSize:"18px"}}/>Open Task</button>
            <button><MdOutlineStickyNote2 style={{marginTop:"-4px",fontSize:"18px"}}/> Pending Task</button>
            <button><MdOutlineTask style={{marginTop:"-4px",fontSize:"18px"}}/> Completed Task</button>
            <button><LuFileWarning style={{marginTop:"-5px",fontSize:"16px"}}/> Important Task</button>
        </div>
        <button>
            <LuFilePlus2 style={{marginTop:"-5px",fontSize:"16px"}}/>
            Create Task
        </button>
      </div>
      <div id={style.T2}>
        {
            [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(()=>{
                return <TaskBox/>
            })
        }
      </div>
    </div>
  )
}

export default Tasks
