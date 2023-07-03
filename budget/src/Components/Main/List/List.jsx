import React,{useContext} from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide
} from "@material-ui/core";

// imported the provider so that we can access it

import { ExpenseTrackerContext } from "../../context/context";
import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./style";

const List = () => {
  const classes = useStyles();
  const globalstate=useContext(ExpenseTrackerContext);
  const {deleteTransactions,addTransactions,transactions}=globalstate;
  // console.log(globalstate);

//   const transactions = [
//     { id: 1,type:"Expense",category:"Salary",amount:50,date:"Wed Dec 16"},
//     { id: 2,type:"Salary",category:"Salary",amount:36,date:"Wed Dec 20"},
//     { id: 3,type:"Income",category:"Expense",amount:500,date:"Wed Dec 15"},
//     { id: 4,type:"Salary",category:"Grocery",amount:60,date:"Wed Dec 30"}
// ];

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
         <Slide
         direction="down"
         in
         mountOnEnter
         unmountOnExit
         key={transaction.id}
       >
       <ListItem>
           <ListItemAvatar>
               <Avatar className={transaction.type==='Income'?classes.avatarIncome:classes.avatarExpense}>
                   <MoneyOff/>
               </Avatar>
           </ListItemAvatar>
           <ListItemText 
           primary={transaction.category}
           secondary={`$${transaction.amount}-${transaction.date}`}
           />
           <ListItemSecondaryAction>
               <IconButton edge="end" aria-label="delete" onClick={()=>deleteTransactions(transaction.id)}>
                   <Delete />
               </IconButton>
           </ListItemSecondaryAction>
       </ListItem>
       </Slide>
      ))}
    </MUIList>
  );
};

export default List;
