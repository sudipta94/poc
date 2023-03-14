import {
  Button,
  Grid,
  Typography,
  Divider,
  TextField,
  Icon,
} from "@mui/material";
import React from "react";
import jsonData from "./accountdata.json";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Page2 = () => {
  let navigateTo = useNavigate();
  const Navigate = () => {
    navigateTo("/page4");
  };
  
  const PostData = () => {
    let payload: any = JSON.stringify(jsonData);
    axios
      .post("https://mocki.io/v1/d55c6c4e-aa96-4247-852d-b146061b57da", payload)
      .then((response) => {
        
      })
      .catch((err) => {
        console.log(payload)
        console.log(err);
      });
  };
  return (
    <div style={{ margin: 15 }}>
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
      <Grid container justifyContent={"center"} marginTop={3}>
        <Grid item>
          <Typography
            style={{ fontSize: 20, fontWeight: "600", alignContent: "right" }}
          >
            Get Address Details
          </Typography>
        </Grid>
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
          <Grid container direction={"row"}>
            <Grid item xs={6} paddingRight={0.5}>
              <TextField
                id="outlined-basic"
                style={{ width: "100%" }}
                label="State"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} paddingLeft={0.5}>
              <TextField
                id="outlined-basic"
                style={{ width: "100%" }}
                label="Zip"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7} style={{ margin: 2 }}>
          <Grid container justifyContent={"center"}>
            <Grid item>
              <Button
                style={{ width: 350, marginTop: 20 }}
                size="large"
                variant="contained"
                onClick={() => {Navigate();PostData()}}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page2;
