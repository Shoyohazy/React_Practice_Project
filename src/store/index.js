import { createSlice } from "@reduxjs/toolkit";

import { configureStore } from "@reduxjs/toolkit";

const initialCounterState = {counter : 0 , showCounter : true}

const counterSlice = createSlice({
    name : 'counter',
    initialState: initialCounterState,
    reducers:{
        increment(state , action) {
            state.counter++;
        },
        decrement(state , action){
            state.counter--;
        },
        increase(state , action){
            state.counter = state.counter + action.payload;
        },
        toggle(state , action){
            state.showCounter = !action.payload;
        }
    }
})

const initialAuthState = {isAuthenticated : false}

const authSlice  = createSlice({
    name: 'auth',
    initialState : initialAuthState,
    reducers : {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})

const store = configureStore({
    reducer : {counter : counterSlice.reducer , auth : authSlice.reducer}
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
