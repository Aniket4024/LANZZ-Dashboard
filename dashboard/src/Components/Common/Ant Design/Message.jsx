import React from 'react';
import { Button, message, Space } from 'antd';


const Message = ({IsSucess}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Task Deleted',
    });
  };
//   const error = () => {
//     messageApi.open({
//       type: 'error',
//       content: 'This is an error message',
//     });
//   };
//   const warning = () => {
//     messageApi.open({
//       type: 'warning',
//       content: 'This is a warning message',
//     });
//   };
  return (
    <>
      {contextHolder}
      {/* <Space> */}
            <Button style={{padding:"0px 10px",height:"24px",border:"0px"}} onClick={success}>Yes</Button>
      {/* </Space> */}
    </>
  );
};
export default Message;