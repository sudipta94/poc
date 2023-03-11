import { Button,Grid, Typography, Divider, TextField, Icon } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  let navigateTo = useNavigate();
  const Navigate = () => {
    navigateTo("/page3");
  };
  return (
    <div >
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
      <Divider />
      <Grid xs={2}>
      <Typography style={{ fontSize: 20 ,alignContent: "right"}}>Get Address Details</Typography>
        </Grid>
      <Grid container justifyContent={"center"} padding={4}>
        <Grid item xs={7} style={{ margin: 2 }}>
          <TextField
            id="outlined-basic"
            style={{ width: "100%" }}
            label="Street Address"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={7} style={{ margin: 2 }}>
          <TextField
            id="outlined-basic"
            style={{ width: "100%" }}
            label="Apartment, Suite, Building, Floor, etc.
            optional"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={7} style={{ margin: 2 }}>
          <TextField
            id="outlined-basic"
            style={{ width: "100%" }}
            label="City"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={7} style={{ margin: 2 }}>
          <TextField
            id="outlined-basic"
            style={{ width: "50%" }}
            label="State"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={7} style={{ margin: 2 }}>
          <TextField
            id="outlined-basic"
            style={{ width: "50%" }}
            label="Zip"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={7} style={{ margin: 2 }}>
          <Button size="large" variant="contained" onClick={() => Navigate()}>
            Continue
          </Button>
       </Grid>
      </Grid>
    </div>
  );
};

export default Page2;
