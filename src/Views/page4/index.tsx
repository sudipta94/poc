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
import data from "./Views/data/accountdata.json;

const Page4 = () => {
  const Carss: any[] = [
    {
      name: "Limousine",
      picture: "pic1.jpg",
      price: "$50000",
    },
    {
      name: "Convertibles",
      picture: "pic2.jpg",
      price: "$30000",
    },
    {
      name: "Micro Car",
      picture: "pic3.jpg",
      price: "$20000",
    },
    {
      name: "City Cars",
      picture: "pic1.jpg",
      price: "$10000",
    },
  ];
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
  const [Cars, setCar] = useState<any[]>([Carss[0]]);

  const Apicall = () => {
    let payload: any = require('./data/accountdata.json');
    axios
      .get("https://mocki.io/v1/d55c6c4e-aa96-4247-852d-b146061b57da", payload)
      .then((response) => {
        setprice(response.data.price);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const AddNew = () => {
    let car: any[] = JSON.parse(JSON.stringify(Cars));
    car.push(
      car.length < Carss.length ? Carss[car.length] : Carss[Carss.length - 1]
    );
    setCar(car);
    handleClose();
  };
  return (
    <div style={{ margin: 15 }}>
      <div>
      <div>Name : {data.name}</div>
      <div>Email : {data.email}</div>
      <div>Website : {data.website}</div>
      <div><label>Country :</label>
      </div>
  </div>
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
            Get Car Details
          </Typography>
        </Grid>
      </Grid>
      {!selectcard && (
        <Grid container justifyContent={"center"}>
          <Grid item>
            <Button
              style={{ width: 350, marginTop: 20 }}
              size="large"
              variant="contained"
              onClick={() => SetselectCard(true)}
            >
              Select Car
            </Button>
          </Grid>
        </Grid>
      )}
      <Grid container direction={"row"}>
        {selectcard &&
          Cars.map((item, index) => (
            <Card
              style={{ width: 350, height: 450 }}
              // onClick={() => setSelectedCar(item.name)}
              className="card"
              sx={{
                Width: 345,
                margin: 2,
                backgroundColor: selectedCar == item.name ? "#D6DED7" : "#ffff",
              }}
            >
              <CardHeader
                title={item.name}
                subheader={`Price : ${item.price}`}
              />
              <CardMedia
                component="img"
                height="400"
                image={require(`../../assets/${item.picture}`)}
                alt="Paella dish"
              />
            </Card>
          ))}
        {selectcard && (
          <Grid item>
            <Button
              style={{ width: 350, marginTop: 20, marginBottom: 10 }}
              size="large"
              variant="contained"
              onClick={() => handleClickOpen()}
            >
              Add car
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid item>
          {!!price && (
            <Typography style={{ fontSize: 20 }}>
              YOUR PREMIUM IS : <b>{price}</b>
            </Typography>
          )}
        </Grid>
      </Grid>
      {selectcard && (
        <Grid container justifyContent={"center"}>
          <Grid item>
            <Button
              style={{ width: 350, marginTop: 20, marginBottom: 10 }}
              size="large"
              variant="contained"
              onClick={() => Apicall()}
            >
              Get Quote
            </Button>
          </Grid>
        </Grid>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add another car</DialogTitle>
        <DialogContent>
          <Grid container justifyContent={"center"} padding={4}>
            <Grid item xs={10} style={{ margin: 2 }}>
              <TextField
                id="outlined-basic"
                style={{ width: "100%" }}
                label="Car Model"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={10} style={{ margin: 2 }}>
              <TextField
                id="outlined-basic"
                style={{ width: "100%" }}
                label="Year"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => AddNew()} autoFocus>
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Page4;
