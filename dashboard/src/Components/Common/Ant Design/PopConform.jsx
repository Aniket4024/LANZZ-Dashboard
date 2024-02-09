import React from 'react';
import { Button, Popconfirm, ConfigProvider } from 'antd';
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../Redux/TaskReducer/action';
import Message from './Message';
const text = 'Are you sure to delete this task?';
const description = 'Delete the task';




const buttonWidth = 80;
const PopConform = ({id}) => {

    const dispatch = useDispatch();



    const HandleConform = ()=>{
        dispatch(deleteTask(id));
    }
    


  return <ConfigProvider
    button={{
    //   style: {
    //     // width:"50px"
    //   },
    }}
  >

    <div className="demo">
      {/* <div
        style={{
          marginInlineStart: buttonWidth,
          whiteSpace: 'nowrap',
        }}
      >
        <Popconfirm
          placement="topLeft"
          title={text}
          description={description}
          okText="Yes"
          cancelText="No"
        >
          <Button>TL</Button>
        </Popconfirm>
        <Popconfirm
          placement="top"
          title={text}
          description={description}
          okText="Yes"
          cancelText="No"
        >
          <Button>Top</Button>
        </Popconfirm>
        <Popconfirm
          placement="topRight"
          title={text}
          description={description}
          okText="Yes"
          cancelText="No"
        >
          <Button>TR</Button>
        </Popconfirm>
      </div> */}

      {/* <div
        style={{
          width: buttonWidth,
          float: 'inline-start',
        }}
      >
        <Popconfirm
          placement="leftTop"
          title={text}
          description={description}
          okText="Yes"
          cancelText="No"
        >
          <Button>LT</Button>
        </Popconfirm>
        <Popconfirm
          placement="left"
          title={text}
          description={description}
          okText="Yes"
          cancelText="No"
        >
          <Button>Left</Button>
        </Popconfirm>
        <Popconfirm
          placement="leftBottom"
          title={text}
          description={description}
          okText="Yes"
          cancelText="No"
        >
          <Button>LB</Button>
        </Popconfirm>
      </div> */}

      <div>

        <Popconfirm
          placement="rightTop"
          title={text}
          description={description}
          cancelText="No"
          okText={<Message IsSucess={IoTrashOutline}/>}
          onConfirm={()=>HandleConform()}
        >
            
          <Button style={{margin:"60px auto 0px 0px",color:"red",cursor:"pointer",border:"0px",padding:"0px"}}><IoTrashOutline /></Button>
        </Popconfirm>

        {/* <Popconfirm
          placement="right"
          title={text}
          description={description}
          okText="Yes"
          cancelText="No"
        >
          <Button>Right</Button>
        </Popconfirm>
        <Popconfirm
          placement="rightBottom"
          title={text}
          description={description}
          okText="Yes"
          cancelText="No"
        >
          <Button>RB</Button>
        </Popconfirm> */}
      </div>

      {/* <div
        style={{
          marginInlineStart: buttonWidth,
          clear: 'both',
          whiteSpace: 'nowrap',
        }}
      >
        <Popconfirm
          placement="bottomLeft"
          title={text}
          description={description}
          okText="Yes"
          cancelText="No"
        >
          <Button>BL</Button>
        </Popconfirm>
        <Popconfirm
          placement="bottom"
          title={text}
          description={description}
          okText="Yes"
          cancelText="No"
        >
          <Button>Bottom</Button>
        </Popconfirm>
        <Popconfirm
          placement="bottomRight"
          title={text}
          description={description}
          okText="Yes"
          cancelText="No"
        >
          <Button>BR</Button>
        </Popconfirm>
      </div> */}
    </div>
    
  </ConfigProvider>
};
export default PopConform;