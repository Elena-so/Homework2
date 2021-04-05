import React from 'react'

import Color from "./Color";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { useColors } from "./ColorProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const ColorList = () => {
  const classes = useStyles();
  const { colors } = useColors();
  return (
    <div className={classes.root}> 
    
      {colors.length === 0 ? (
        <p>No Colors Listed. (Add a Color)</p>
      ) : (
          colors.map((c) => <Paper ><Color key={c.id} {...c} /></Paper>)
        )}
    </div>
  );
};

export default ColorList;
