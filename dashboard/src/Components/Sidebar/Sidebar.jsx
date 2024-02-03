import React from 'react'
import style from "../../CSS/Sidebar.module.css"
import LanzzLogo from "../../Media/LANZZ LOGO.png"
import Accordian from '../Common/Ant Design/Accordian'
import { MdCalendarMonth, MdOutlineDesktopWindows, MdTask } from 'react-icons/md'
import { FaFacebookMessenger, FaSquarePhone } from "react-icons/fa6";
import { IoCopy } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux'
import { DashboardPhone, TasksState } from '../../Redux/DashboardReducer/action'





const Menus = [
  {
    id:1,
    title:"Desktop",
    icon:<MdOutlineDesktopWindows />

  },
  {
    id:2,
    title:"Phone",
    icon:<FaSquarePhone/>
  },
  {
    id:3,
    title:"Chat",
    icon:<FaFacebookMessenger/>
  },
  {
    id:4,
    title:"Indox",
    icon:<IoCopy/>
  },
  {
    id:5,
    title:"Tasks",
    icon:<MdTask/>
  },
  {
    id:6,
    title:"Calendar",
    icon:<MdCalendarMonth/>
  },
]


const Sidebar = () => {

  const dispatch = useDispatch();
  const {tasks,dashboardPhone} = useSelector((store)=>{
    return {
      tasks: store.DashboardReducer.tasks,
      dashboardPhone: store.DashboardReducer.dashboardPhone
    }
  })
  


  const HandleClick = (e)=>{
    if(e?.id===5){
      dispatch(TasksState())
    }
    if(!e){
      dispatch(DashboardPhone())
    }
  }

  return (
    <div id={style.Sidebar}>
        <div id={style.logo}>
            <img src={LanzzLogo} alt="LANZZ" />
        </div>
        <div id={style.menus}>
            <Accordian HandleClick={HandleClick}/>
            {
              Menus.map((e)=>{
                return <div key={e.id} className={style.menu} onClick={()=>HandleClick(e)}>{e.icon} {e.title}</div>
              })
            }
        </div>
    </div>
  )
}

export default Sidebar
