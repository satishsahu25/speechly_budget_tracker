import React ,{useState,useContext} from 'react'
import { TextField,Typography,Grid,Button,
    FormControl,InputLabel,Select,MenuItem } from '@material-ui/core'

import useStyles from './style'
import { ExpenseTrackerContext } from '../../context/context';
//to create new id for transactions we are using uuid
import {v4 as uuidv4} from 'uuid';
import { incomeCategories,expenseCategories } from '../../../constants/category';
import formatedate from '../../../utils/formatdate';


const initialState={
  amount:'',
  category:'',
  type:'Income',
  date:formatedate(new Date()),
}

const TransactionForm = () => {

  const classes=useStyles();
  const [formdata,setformdata]=useState(initialState);
  const {addTransactions}=useContext(ExpenseTrackerContext);

  const createTransaction=()=>{
    if (Number.isNaN(Number(formdata.amount)) || !formdata.date.includes('-')) return;

    if (incomeCategories.map((iC) => iC.type).includes(formdata.category)) {
      setformdata({ ...formdata, type: 'Income' });
    } else if (expenseCategories.map((iC) => iC.type).includes(formdata.category)) {
      setformdata({ ...formdata, type: 'Expense' });
    }
    const transaction={...formdata,amount:Number(formdata.amount),id:uuidv4()};
    addTransactions(transaction);
    setformdata(initialState); //resetting the formdata
  }

    const selectedcategories=formdata.type==='Income'?incomeCategories:expenseCategories;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align='center' variant='subtitle1' gutterBottom>
          {/* ..... */}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>
          Type</InputLabel>

          <Select value={formdata.type} onChange={(e)=>setformdata({...formdata,type:e.target.value})}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        {/* first spread the old data then add the new one */}
        <Select value={formdata.category} onChange={(e)=>setformdata({...formdata,category:e.target.value})}>
          {/* <MenuItem value="business">Business</MenuItem>
          <MenuItem value="salary">Salary</MenuItem> */}
          {selectedcategories.map((c)=>(
            <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>
          )
              
          )}
        </Select>
        </FormControl>
      </Grid>
    <Grid item xs={6}>
      <TextField type="number" label="Amount" fullWidth 
      value={formdata.amount} 
      onChange={(e)=>setformdata({...formdata,amount:e.target.value})} />
    </Grid>
    <Grid item xs={6}>
      <TextField type="date" label="Date" fullWidth
      value={formdata.date} 
      onChange={(e)=>setformdata({...formdata,date:formatedate(e.target.value)})} 
      />
    </Grid>
    <Button className={classes.button}
     variant="outlined" color="primary" 
     fullWidth
     onClick={createTransaction}
     >
      Create
    </Button>

    </Grid>
  )
}

export default TransactionForm 