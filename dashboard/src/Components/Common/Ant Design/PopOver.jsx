import React from 'react';
import { Button, Popover, ConfigProvider } from 'antd';
import { HiOutlineDotsVertical } from "react-icons/hi";
import style from "../../../CSS/PopOver.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { CompletedTask, CreateTask, ImportantTask, PendingTask } from '../../../Redux/TaskReducer/action';


const text = <span>Title</span>;

const buttonWidth = 80;
const PopOver = ({id}) => {

  const {all,open,important} = useSelector((store)=>{
      return {
        open: store.TaskReducer.open,
        all: store.TaskReducer.all,
        important: store.TaskReducer.important,
      }
  })



  const dispatch = useDispatch();
  

  const HandleOpen = ()=>{
    console.log(all)
    all.map((e)=>{
      if(e.id===id){
        dispatch(CreateTask({...e,status:"open"}))
      }
    })
  }
  const HandlePending = ()=>{

    all.map((e)=>{
      if(e.id===id){
        dispatch(PendingTask({...e,status:"pen."}))
      }
    })

    // dispatch(PendingTask())
  }
  const HandleCompleted = ()=>{
    all.map((e)=>{
      if(e.id===id){
        dispatch(CompletedTask({...e,status:"Done"}))
      }
    })
  }
  const HandleImportant = ()=>{
    all.map((e)=>{
      if(e.id===id){
        dispatch(ImportantTask({...e,status:"IMP"}))
      }
    })
  }
  
  const content = (
    <div id={style.content}>
      <button onClick={()=>HandleOpen()}>Open</button>
      <button onClick={()=>HandlePending()}>Pending</button>
      <button onClick={()=>HandleCompleted()}>Completed</button>
      <button onClick={()=>HandleImportant()}>Important</button>
    </div>
  );

  return <ConfigProvider
    button={{
      style: {
        width: buttonWidth,
        margin: 4,
      },
    }}
  >
    <div className="demo">
      {/* <div
        style={{
          marginInlineStart: buttonWidth + 4,
          whiteSpace: 'nowrap',
        }}
      >
        <Popover placement="topLeft" title={text} content={content}>
          <Button>TL</Button>
        </Popover>
        <Popover placement="top" title={text} content={content}>
          <Button>Top</Button>
        </Popover>
        <Popover placement="topRight" title={text} content={content}>
          <Button>TR</Button>
        </Popover>
      </div> */}
      {/* <div
        style={{
          width: buttonWidth,
          float: 'inline-start',
        }}
      >
        <Popover placement="leftTop" title={text} content={content}>
          <Button>LT</Button>
        </Popover>
        <Popover placement="left" title={text} content={content}>
          <Button>Left</Button>
        </Popover>
        <Popover placement="leftBottom" title={text} content={content}>
          <Button>LB</Button>
        </Popover>
      </div> */}
      <div
        style={{
        //   width: buttonWidth,
        //   marginInlineStart: buttonWidth * 4 + 24,
        cursor:"pointer"
        }}
      >

        
        <Popover placement="rightTop" content={content}>
          <HiOutlineDotsVertical/>
        </Popover>


        {/* <Popover placement="right" title={text} content={content}>
          <Button>Right</Button>
        </Popover>
        <Popover placement="rightBottom" title={text} content={content}>
          <Button>RB</Button>
        </Popover> */}
      </div>
      {/* <div
        style={{
          marginInlineStart: buttonWidth,
          clear: 'both',
          whiteSpace: 'nowrap',
        }}
      >
        <Popover placement="bottomLeft" title={text} content={content}>
          <Button>BL</Button>
        </Popover>
        <Popover placement="bottom" title={text} content={content}>
          <Button>Bottom</Button>
        </Popover>
        <Popover placement="bottomRight" title={text} content={content}>
          <Button>BR</Button>
        </Popover>
      </div> */}
    </div>
  </ConfigProvider>
};
export default PopOver;