import React from 'react'
import { DASHBOARD_PHONE, TASKS } from '../actionType';

const initialState = {
  dashboardPhone:true,
  tasks:false
};

export const reducer = (state = initialState, {type,payload}) => {
  switch(type){
      case TASKS:
        return {...state,tasks:true,dashboardPhone:false}
      case DASHBOARD_PHONE:
        return {...state,dashboardPhone:true,tasks:false}
      default:
        return 0
  }
}


// export const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case LOGIN_REQUEST:
//       return { ...state, isLoading: true };
//     case LOGIN_SUCCESS:
//       return { ...state, isLoading: false, isAuth: true, token: payload };
//     case LOGIN_FAILURE:
//       return { ...state, isLoading: false, isError: true };
//     case USER_REQUEST:
//       return { ...state, isLoading: true };
//     case USER_SUCCESS:
//       return { ...state, isLoading: false, token: payload, users: payload, isAuth: true };
//     case USER_FAILURE:
//       return { ...state, isLoading: false, isError: true };
//     default:
//       return state;
//   }
// };
