//reducer is afcuntion that takes old states and fcuntion and return a new state

const contextReducer=(state,action)=>{
let transactions;
    switch(action.type){
        case 'DELETE_TRANSACTION':
            transactions=state.filter((t)=>t.id!==action.payload);
            return transactions; //remaining after deletion
        case 'ADD_TRANSACTION':
            //adding new transaction in old
            //new one at start and rest after it
            transactions=[action.payload,...state];
            return transactions;
        default:
                return state;
        
    }





}

export default contextReducer