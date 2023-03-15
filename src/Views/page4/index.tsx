import { ExpandMore } from "@mui/icons-material";
import {
  Grid,
  Typography,
  Divider,
  Button,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useState } from "react";
import "./page4.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Page4 = () => {
  const Drivers: any[] = [
    {
      name: "Paul Dobson",
      LicenseState: "Wisconsin",
      License: "AR3214",
    },
    {
      name: "Andrew Dobson",
      LicenseState: "Wisconsin",
      License: "AR3214",
    },
    {
      name: "Thomas Dobson",
      LicenseState: "Wisconsin",
      License: "AR3214",
    },
  ];
  let navigateTo = useNavigate();
  const Navigate = () => {
    navigateTo("/page5");
  };
  const [selectcard, SetselectCard] = useState<boolean>(false);
  const [selectedCar, setSelectedCar] = useState<string>("");
  const [price, setprice] = useState<string>("");
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [Cars, setCar] = useState<any[]>([]);
  const AddNew = () => {
    let car: any[] = JSON.parse(JSON.stringify(Cars));
    car.push(
      car.length < Drivers.length
        ? Drivers[car.length]
        : Drivers[Drivers.length - 1]
    );
    setCar(car);
    handleClose();
  };
  return (
    <div style={{ margin: 15 }}>
      <div></div>
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
            Driver Details
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid item>
          <Button
            style={{ width: 350, marginTop: 20 }}
            size="large"
            variant="contained"
            onClick={() => handleClickOpen()}
          >
            Add Driver
          </Button>
        </Grid>
      </Grid>
      <Grid container direction={"row"}>
        {selectcard &&
          Cars.map((item, index) => (
            <Card
              style={{ width: 250, height: 200 }}
              onClick={() => setSelectedCar(item.name)}
              className="card"
              sx={{
                Width: 30,
                margin: 2,
              }}
            >
              <CardHeader title={item.name} />
              <CardHeader title={item.LicenseState} />
              <CardHeader title={item.License} />
            </Card>
          ))}
      </Grid>
      {!!Cars && Cars.length > 0 && (
        <Grid item xs={7} style={{ margin: 2 }}>
          <Grid container justifyContent={"center"}>
            <Grid item>
              <Button
                style={{ width: 350, marginTop: 20 }}
                size="large"
                variant="contained"
                onClick={() => Navigate()}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Adding Driver</DialogTitle>
        <DialogContent>
          <Grid container justifyContent={"center"} padding={4}>
            <Grid item xs={10} style={{ margin: 2 }}>
              <TextField
                id="outlined-basic"
                style={{ width: "100%" }}
                label="Driver Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={10} style={{ margin: 2 }}>
              <TextField
                id="outlined-basic"
                style={{ width: "100%" }}
                label="License Number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={10} style={{ margin: 2 }}>
              <TextField
                id="outlined-basic"
                style={{ width: "100%" }}
                label="License State"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              AddNew();
              SetselectCard(true);
            }}
            autoFocus
          >
            ADD Driver
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Page4;
