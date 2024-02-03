import React, { useEffect, useRef, useState } from 'react';
import  "../../../CSS/ModalPop.css"
import { LuFilePlus2 } from "react-icons/lu";
import { Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CreateTask, ImportantTask } from '../../../Redux/TaskReducer/action';
import { isDisabled, isVisible } from '@testing-library/user-event/dist/utils';




const ModalPop = () => {

    const {all,open,important} = useSelector((store)=>{
        return {
          open: store.TaskReducer.open,
          all: store.TaskReducer.all,
          important: store.TaskReducer.important,
        }
    })
    

    const dispatch = useDispatch();


    const [isModalOpen, setIsModalOpen] = useState("");
    
    

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [Checked,setChecked] = useState(false)

    const TitleP = useRef(null)
    const DescriptionP = useRef(null)
    

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = (e) => {

        setIsModalOpen(false);

        if(title.length===0){
            e.target.disabled=false
        }

        const d = new Date(); 

        const newTask={
            id:open.length,
            title:title?title:"No Title",
            description:description?description:"No Description",
            date:d.toString().split(" ")[1]+" "+d.toString().split(" ")[2]+", "+d.toString().split(" ")[3],
            time: d.toString().split(" ")[4].split(":")[0]+":"+d.toString().split(" ")[4].split(":")[1],
            status:Checked?"IMP" : "Open"
        }

        
        if(Checked){
            dispatch(ImportantTask(newTask))
        }
        else{
            dispatch(CreateTask(newTask))
        }
        
        setTitle("");
        setDescription("");
        setChecked(false)

    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const HandleTitle = (e)=>{

        if(e.target.value.length>=45){
            TitleP.current.style.color="red"
        }
        else if(e.target.value.length>=20 && e.target.value.length<=45){
            TitleP.current.style.color="green"
        }
        else{
            TitleP.current.style.color="#94A3B8"
        }
        setTitle(e.target.value);

    }
    const HandleDescription = (e)=>{
        if(e.target.value.length>=149){
            DescriptionP.current.style.color="red"
        }
        else if(e.target.value.length>=50 && e.target.value.length<=149){
            DescriptionP.current.style.color="green"
        }
        else{
            DescriptionP.current.style.color="#94A3B8"
        }
        setDescription(e.target.value);
    }

    const HandleCheck = (e)=>{
        setChecked(e.target.checked)
    }

    


    return (
        <>
        <Button type="primary" onClick={showModal} id="ModalButn">
            <LuFilePlus2/> Create Task
        </Button>
        <Modal 
            title="Create Task" 
            open={isModalOpen} 
            onOk={handleOk} 
            onCancel={handleCancel} 
            id="ModalContentBox"
            okText="Create"
        >
            <h4>Task Title</h4>
            <input type="text" placeholder='Title...' onChange={(e)=>HandleTitle(e)} value={title} maxlength="45" spellCheck="false"/>
            <br />
            <p ref={TitleP}>Title must have atleast 20 charachter but not more than 45 characters!</p>
            <br />
            <h4>Task Description</h4>
            <textarea type="text" placeholder='Description...' onChange={(e)=>HandleDescription(e)} value={description} maxlength="150" spellCheck="false"/>
            <br />
            <p ref={DescriptionP}>Description must have atleast 100 charachter but not more than 150 characters!</p>
            <br />
            <div>
                <input type="checkbox" id="CheckInpt" value='Important' checked={Checked} onChange={(e)=>HandleCheck(e)}/>
                <label style={{color:Checked?"#6366F1":"#94A3B8"}}  >Mark as Importnt Task!</label>
            </div>
        </Modal>
        </>
    );
};
export default ModalPop;