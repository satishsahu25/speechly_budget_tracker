import React from 'react'
import { Card,CardHeader,CardContent,Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'
import useStyles from './styles'
import useTransactions from '../../useTransactions'

const Details = ({title}) => {

const classes=useStyles();
const {totals,chartdata}=useTransactions(title);
console.log(chartdata);
return (
    <Card className={title==='Income'?classes.income:classes.expense}>
        <CardHeader title={title}>
            <CardContent>
                <Typography variant='h5'>
                   ${totals}
                </Typography>
                <Doughnut data={chartdata}/>
            </CardContent>

        </CardHeader>
    </Card>
  )
}

export default Details