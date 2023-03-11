import { Grid, Typography, Divider, TextField } from "@mui/material";
import React from "react";

const Page2 = () => {
  return (
    <div>
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
      <Grid container justifyContent={"center"} padding={4}>
        <Grid item xs={7} style={{ margin: 2 }}>
          <TextField
            id="outlined-basic"
            style={{ width: "100%" }}
            label="Outlined"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={7} style={{ margin: 2 }}>
          <TextField
            id="outlined-basic"
            style={{ width: "100%" }}
            label="Outlined"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={7} style={{ margin: 2 }}>
          <TextField
            id="outlined-basic"
            style={{ width: "100%" }}
            label="Outlined"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={7} style={{ margin: 2 }}>
          <TextField
            id="outlined-basic"
            style={{ width: "100%" }}
            label="Outlined"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Page2;
