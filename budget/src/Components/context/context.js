import React,{useReducer,createContext} from 'react';

import contextReducer from './contextReducer';

const initialState = [];

export const ExpenseTrackerContext=createContext(initialState);

export const Provider=({children})=>{
    //use reducer is used as state state but when some complex logic to implement
    // const [state,dispatch]=useReducer(reducer,initialState,init);
    const [transactions,dispatch]=useReducer(contextReducer ,initialState);

    //Actions creators
    const deleteTransactions =(id)=>{
        dispatch({type:"DELETE_TRANSACTION",payload:id});
    }    
    const addTransactions =(id)=>{
        dispatch({type:"ADD_TRANSACTION",payload:id});
    }

    // console.log(transactions);

    return (
        // all components will have access to this property appname
        <ExpenseTrackerContext.Provider value={{
            deleteTransactions:deleteTransactions,
            addTransactions:addTransactions,
            transactions
            }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}