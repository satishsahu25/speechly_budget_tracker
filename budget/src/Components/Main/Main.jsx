import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";

import Form from "./Form/TransactionForm";
import useStyles from "./style";
import List from "./List/List";

const Main = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Smart Budget" subheader="Powered by Speechly"/>
  
   <CardContent>
          <Typography align="center" variant="h5">
            Total Balance $10
          </Typography>
          <Typography
          variant="subtitle1"
          style={{lineHeight:'1.5rem',
            marginTop:'20px'
        }}
          >
            {/* info card */}
            Trying saying something
          </Typography>
          <Divider/>
          <Form/>
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <List/>
                </Grid>
            </Grid>

        </CardContent>
    </Card>
   
  );
};

export default Main;
