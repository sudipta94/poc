import { Button, Divider, Grid, TextField ,Icon} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import "./page1.css";

const Page1 = () => {
  let navigateTo = useNavigate();
  const Navigate = () => {
    navigateTo("/page2");
  };
  return (
    <div style={{ margin: 15 }} >
      <Grid container style={{ paddingTop: 10 }}>
        <Grid xs={2}>
          <img
            height={50}
            width={50}
            src={require("../../assets/download.png")}
          />
        </Grid>
        <Grid xs={2}>
          <Typography style={{ fontSize: 30 }}>Insurance Quote</Typography>
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
      <Divider/>
      <Grid container style={{ paddingTop: 250, paddingLeft: 350}}>
       <DirectionsCarFilledIcon color="secondary" sx={{ fontSize: 100 }}/>
       <Grid item xs={7} style={{ margin: 2 }}>
          <Button size="large" variant="contained" onClick={() => Navigate()}>
            Start Quote
          </Button>
       </Grid>
      </Grid>
    </div>
  );
};

export default Page1;
