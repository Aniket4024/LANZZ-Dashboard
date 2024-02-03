import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';

const BarChart = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: 'task',
      value: 10,
    },
  ]
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1.25,
    label: {
      Type: 'spider',
      labelHeight:20,
      content: '{name}\n{percentage}',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export default BarChart

// ReactDOM.render(<DemoPie />, document.getElementById('container'));

// const BarChart = ()=>{
//     return <DemoPie/>
// }

// export default BarChart




// import React, { useState, useEffect } from 'react';
// import { Pie } from '@ant-design/plots';

// const BarChart = () => {
//   const data = [
//     {
//       type: '分类一',
//       value: 27,
//     },
//     {
//       type: '分类二',
//       value: 25,
//     },
//     {
//       type: '分类三',
//       value: 18,
//     },
//     {
//       type: '分类四',
//       value: 15,
//     },
//     {
//       type: '分类五',
//       value: 10,
//     },
//     {
//       type: '其他',
//       value: 5,
//     },
//   ];
//   const config = {
//     appendPadding: 10,
//     data,
//     angleField: 'value',
//     colorField: 'type',
//     radius: 0.8,
//     label: {
//       Type: 'outer',
//     },
//     interactions: [
//       {
//         type: 'element-active',
//       },
//     ],
//   };
//   return <Pie {...config} />;
// };

// export default BarChart;