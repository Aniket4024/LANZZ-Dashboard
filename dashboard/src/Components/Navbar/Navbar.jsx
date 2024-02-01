import React from 'react'
import style from "../../CSS/Navbar.module.css"
import { IoNotifications, IoSearch, IoSettingsOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div id={style.navbar}>
      <h1>Phone Dashboard</h1>
      <div id={style.Nav2}>
        <div>
          <IoSearch color='#B0AEAE' style={{marginTop:"-2px",fontSize:"18px"}}/>
          <input type="search" placeholder='Search Here....' name="" id="" />
        </div>
        <button ><IoSettingsOutline color='#94A3B8'style={{fontSize:"18px"}}/></button>
        <button><IoNotifications color='#94A3B8' style={{fontSize:"18px"}}/></button>
      </div>
    </div>
  )
}

export default Navbar
