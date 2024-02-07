import style from "../../CSS/TaskBox.module.css"
import { HiOutlineDotsVertical } from "react-icons/hi";
import PopOver from "../Common/Ant Design/PopOver";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../../Redux/TaskReducer/action";
import { IoTrashOutline } from "react-icons/io5";




const TaskBox = ({id,title,description,date,time,status}) => {

    const dispatch = useDispatch();

    const [tempTitle,setTempTitle] = useState("")
    const [tempDesc,setTempDesc] = useState("")

    const OpenStyle = {
        color:"rgb(0, 183, 255)",
        backgroundColor:"rgb(0, 183, 255, 0.33)"
    }
    const PendingStyle = {
        color:"rgb(255, 200, 0)",
        backgroundColor:"rgb(255, 200, 0, 0.33)"
    }
    const CompletedStyle = {
        color:"#22CC5E",
        backgroundColor:"rgb(34, 204, 94, 0.33)"
    }
    const ImportantStyle = {
        color:"#EF4444",
        backgroundColor:"rgba(239, 68, 68, 0.33)"
    }


    const HandleTitle = (e)=>{
        setTempTitle(e.target.value);
    }
    const EnterTitle = (e)=>{
    //    if(e.keyCode===13){
    //         dispatch(updateTask({...e,title:tempTitle}));
    //    }
    }


    const HandleDescription = (e)=>{
        setTempDesc(e.target.value)
    }
    const EnterDescription = (e)=>{
        
     }



    useEffect(()=>{
        setTempTitle(title)
        setTempDesc(description)
    },[])

  return (
    <div className={style.TaskBox}>
        <div>
            <div>
                <textarea style={{
                    fontSize:"15px",
                    fontWeight:"700",
                    fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                    // width:"185px",
                    maxWidth:"185px",
                    minWidth:"185px",
                    // height:"45px",
                    maxHeight:"40px",
                    minHeight:"40px",
                    border:"0px",
                    resize:"none",
                    outline:"0",
                    overflow:"hidden"
                }} 
                    type="text" 
                    maxLength={45}
                    spellcheck="false"
                    value={tempTitle}
                    onChange={(e)=>HandleTitle(e)}
                    onKeyDown={(e)=>EnterTitle(e)}
                />
                <textarea style={{
                    fontSize:"10px",
                    fontWeight:"500",
                    fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                    // width:"185px",
                    maxWidth:"190px",
                    minWidth:"193px",
                    // height:"45px",
                    maxHeight:"52px",
                    minHeight:"52px",
                    border:"0px",
                    resize:"none",
                    outline:"0",
                    overflow:"hidden"
                }} 
                    type="text" 
                    maxLength={150}
                    spellcheck="false"
                    value={tempDesc}
                    onChange={(e)=>HandleDescription(e)}
                    onKeyDown={(e)=>EnterDescription(e)}
                />
            </div>
            <div className={style.dateTag}>
                <h6>{date}</h6> 
                <div></div> 
                <h6>{time} </h6>
                {/* {Number(time.split(":")[0]) >= 12 ? "PM" : "AM"} */}
            </div>
        </div>
        <div>
            <div style={
                status==="open"?
                OpenStyle:status==="pen."?
                PendingStyle:status==="Done"?
                CompletedStyle:status==="IMP"?
                ImportantStyle:OpenStyle
            }
            >
                {status}
            </div>
            <div>
                <IoTrashOutline style={{margin:"50px auto 0px 20px",color:"red"}}/>
                <PopOver id={id} style={{margin:"0px auto 0px 20px"}}/>
            </div>
        </div>
    </div>
  )
}

export default TaskBox;




