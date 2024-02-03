import React, { useEffect, useRef, useState } from 'react';
import { Collapse } from 'antd';
import "../../../CSS/Accordian.css"
import TimeLine from './TimeLine';
import { MdOutlineDashboard } from "react-icons/md";
import { useSelector } from 'react-redux';


const { Panel } = Collapse;



const items = [
  {
    children: 'Activites',
  },
  {
    children: 'Phone',
  },
  {
    children: 'Sales',
  },
  {
    children: 'Email',
  },
  {
    children: 'SMS',
  },
]

const Accordian = ({HandleClick}) => {

  const {tasks,dashboardPhone} = useSelector((store)=>{
    return {
      tasks: store.DashboardReducer.tasks,
      dashboardPhone: store.DashboardReducer.dashboardPhone
    }
  })

  
  const DashboardSwitch = useRef(null);
  const [HeaderSwitch,setHeaderSwitch] = useState(true)
  
  const header1 = <div className='Menu'><MdOutlineDashboard  style={{fontSize:"18px",color:HeaderSwitch?"white":"#94A3B8"}}/> Dashboard</div>
  
  
  useEffect(()=>{
    DashboardSwitch.current.style.backgroundColor="#6366F1"
    document.getElementsByTagName("span")[1].style.color="white"
    document.getElementsByTagName("span")[0].style.color="white"
  },[])


  const onChange1 = (key) => {

    if(key[0]==1){
      DashboardSwitch.current.style.backgroundColor="#6366F1"
      document.getElementsByTagName("span")[1].style.color="white"
      document.getElementsByTagName("span")[0].style.color="white"
      setHeaderSwitch(true)
    }
    else{
      DashboardSwitch.current.style.backgroundColor="#0F172A";
      document.getElementsByTagName("span")[1].style.color="#94A3B8"
      document.getElementsByTagName("span")[0].style.color="#94A3B8"
      setHeaderSwitch(false)
    }


    HandleClick()

  };


  return <Collapse expandIconPosition='end' defaultActiveKey={['1']}  onChange={onChange1} ref={DashboardSwitch} className="Collapse" >
      <Panel 
        header={header1}
        key="1"
      >
        <TimeLine items={items} className="TimeLineAcordian"/>
      </Panel>
  </Collapse>
};
export default Accordian;


