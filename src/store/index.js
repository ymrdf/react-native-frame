import { createStore } from 'redux';
// Action
const increaseAction = { type: 'increase' }

// Reducer
const counter = (count, action)=>{
    switch (action.type) {
        case 'increase':
            return Object.assign({},count,{ number: count.number + 1 });
        default:
            return count
    }
}
const login = (logined,action)=>{
    switch (action.type) {
        case 'loginInt':
            return true;
        case 'loginOut':
            return false;
        default:
            return logined
    }
}
const reducer=(state, action)=>{
    return {
        count:counter(state.count,action),
        logined:login(state.logined,action),
    }
}


const initState={
    count:{
        number:0,
    },
    logined:false,
}
// Store
const store = createStore(reducer,initState);
export default store;