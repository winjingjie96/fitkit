import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
    justifySelf:'center',
  },
});



export default function DiscreteSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Typography id="discrete-slider-restrict" gutterBottom>
        Restricted values
      </Typography> */}
      <Slider
        defaultValue={20}

        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={props.stages}
      />
    </div>
  );
}
