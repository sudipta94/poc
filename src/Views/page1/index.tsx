import { Button, Divider, Grid, TextField, Icon } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import "./page1.css";

const Page1 = () => {
  const [select, SetSelect] = useState<number>(1);
  let navigateTo = useNavigate();
  const Navigate = () => {
    navigateTo("/page2");
  };
  return (
    <div
      style={{
        margin: 15,
        height: "calc(100vh - 30px)",
        flex: 1,
      }}
    >
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
      <Grid
        container
        flexGrow={1}
        alignItems={"center"}
        justifyContent={"center"}
        style={{ paddingTop: 20 }}
      >
        <Grid
          item
          width={600}
          minHeight={700}
          style={{ borderBottom: "2px solid #42b6f5" }}
        >
          <Grid container>
            <Grid item height={60} width={"100%"}>
            
            </Grid>
            <Grid
              item
              minHeight={640}
              width={"100%"}
              style={{
                borderLeft: "2px solid #42b6f5",
                borderRight: "2px solid #42b6f5",
                textAlign: "center",
                padding: 20,
              }}
            >
              <Typography style={{ fontWeight: "bold", fontSize: 30 }}>
                Let's get started.
              </Typography>
              {select == 1 ? (
                <Grid
                  container
                  flexDirection={"row"}
                  height={"100%"}
                  width={"100%"}
                  justifyContent="space-between"
                >
                </Grid>
              ) : (
                <Grid
                  container
                  flexDirection={"row"}
                  height={"100%"}
                  width={"100%"}
                  justifyContent="space-between"
                >
                  <Grid
                    item
                    xs={3.5}
                    height={160}
                    style={{
                      border: "2px solid #42b6f5",
                      borderRadius: 10,
                      cursor: "pointer",
                    }}
                  >
                    <Grid>
                      <EmojiTransportationIcon
                        sx={{ fontSize: 100, color: "#42b6f5" }}
                      />
                    </Grid>
                    <Typography style={{ fontSize: 22, fontWeight: "bold" }}>
                      Car
                    </Typography>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page1;
