import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from "../../CSS/Body.module.css"
import Footer from '../Footer'
import PhoneDash from '../Phone-Dashboard/PhoneDash'
import { useSelector } from 'react-redux'
import Tasks from '../Tasks/Tasks'

const Body = () => {


  const {tasks,dashboardPhone} = useSelector((store)=>{
    return {
      tasks: store.DashboardReducer.tasks,
      dashboardPhone: store.DashboardReducer.dashboardPhone
    }
  })





  return (
    <div id={style.body}>
      <Navbar/>
      {
        dashboardPhone ? <PhoneDash/> : tasks ? <Tasks/> : <Tasks/> 
      }
      <Footer/>
    </div>
  )
}

export default Body
