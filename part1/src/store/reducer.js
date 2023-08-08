// const defaultState = {
//     user: 'admin'
// };


// export default function rootReducer (state = defaultState, action) {
//     // 通过action的值来判断state里数据的值
//         return state;
// }
import userReducer from './user/userStore'
import { combineReducers } from 'redux'

export default combineReducers({
     userReducer
})