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
} from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useState } from "react";
import "./page4.css";
import axios from "axios";
const Page4 = () => {
  const [selectcard, SetselectCard] = useState<boolean>(false);
  const [selectedCar, setSelectedCar] = useState<string>("");
  const Cars: any[] = [
    {
      name: "Limousine",
      picture: "pic1.jpg",
      price: "$50000",
      description:
        "If you are looking for a luxury car, then Limousine is a perfect choice for you. The features in these cars are designed in such a way that they fulfil all the glamorous needs. The outer body is sleek and has luxurious compartments inside, making it one of the most expensive vehicles. These cars have a separate area for the driver, and the passengers have a different domain with the partition between the two. Toyota century, Hyundai Equus limousine, Great wall hover, and Chrysler 300 limousine are some of the limousines in production.",
    },
    // {
    //   name: "Convertibles",
    //   picture: "pic2.jpg",
    //   price: "$30000",
    //   description:
    //     "If you are looking for a luxury car, then Limousine is a perfect choice for you. The features in these cars are designed in such a way that they fulfil all the glamorous needs. The outer body is sleek and has luxurious compartments inside, making it one of the most expensive vehicles. These cars have a separate area for the driver, and the passengers have a different domain with the partition between the two. Toyota century, Hyundai Equus limousine, Great wall hover, and Chrysler 300 limousine are some of the limousines in production.",
    // },
    // {
    //   name: "Micro Car",
    //   picture: "pic3.jpg",
    //   price: "$20000",
    //   description:
    //     "If you are looking for a luxury car, then Limousine is a perfect choice for you. The features in these cars are designed in such a way that they fulfil all the glamorous needs. The outer body is sleek and has luxurious compartments inside, making it one of the most expensive vehicles. These cars have a separate area for the driver, and the passengers have a different domain with the partition between the two. Toyota century, Hyundai Equus limousine, Great wall hover, and Chrysler 300 limousine are some of the limousines in production.",
    // },
    // {
    //   name: "City Cars",
    //   picture: "pic1.jpg",
    //   price: "$10000",
    //   description:
    //     "If you are looking for a luxury car, then Limousine is a perfect choice for you. The features in these cars are designed in such a way that they fulfil all the glamorous needs. The outer body is sleek and has luxurious compartments inside, making it one of the most expensive vehicles. These cars have a separate area for the driver, and the passengers have a different domain with the partition between the two. Toyota century, Hyundai Equus limousine, Great wall hover, and Chrysler 300 limousine are some of the limousines in production.",
    // },
  ];
  const Apicall = () => {
    let payload: any = {
      example: 45,
      example2: "jdjd",
    };
    axios
      .post("http://exampleap.com", payload)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
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
              onClick={() => setSelectedCar(item.name)}
              className="card"
              sx={{
                maxWidth: 345,
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
                height="194"
                image={require(`../../assets/${item.picture}`)}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                {/* <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton> */}
              </CardActions>
            </Card>
          ))}
        <Grid item>
            <Button
              style={{ width: 350, marginTop: 20, marginBottom: 10 }}
              size="large"
              variant="contained"
              onClick={() => Apicall()}
            >
              Add car
            </Button>
          </Grid>  
      </Grid>
      {selectedCar != "" && (
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
    </div>
  );
};

export default Page4;
