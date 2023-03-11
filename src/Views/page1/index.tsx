import { Button, Divider, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  let navigateTo = useNavigate();
  const Navigate = () => {
    navigateTo("/page2");
  };
  return (
    <div style={{ margin: 15 }}>
      <Grid container style={{ paddingTop: 10 }}>
        <Grid item xs={7} style={{ margin: 2 }}>
          <Button variant="contained" onClick={() => Navigate()}>
            Start Quote
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page1;
