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
        {/* <Grid item>
          <DirectionsCarFilledIcon color="secondary" sx={{ fontSize: 100 }} />
        </Grid>

        <Grid item style={{ margin: 2 }}>
          <Button
            size="large"
            style={{ width: 280 }}
            variant="contained"
            onClick={() => Navigate()}
          >
            Start Quote
          </Button>
        </Grid> */}
        <Grid
          item
          width={600}
          minHeight={700}
          style={{ borderBottom: "2px solid #42b6f5" }}
        >
          <Grid container>
            <Grid item height={60} width={"100%"}>
              <Grid container direction={"row"}>
                <Grid
                  onClick={() => SetSelect(1)}
                  item
                  xs={6}
                  height={60}
                  style={{
                    textAlign: "center",
                    borderTop:
                      select == 1 ? "2px solid #42b6f5" : "2px solid #d1d1d1",
                    borderRight: select == 1 ? "2px solid #42b6f5" : "",
                    borderLeft:
                      select == 1 ? "2px solid #42b6f5" : "2px solid #d1d1d1",
                    borderBottom: select == 2 ? "2px solid #42b6f5" : "",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: 22,
                      fontWeight: 600,
                      color: "#42b6f5",
                      marginTop: 10,
                    }}
                  >
                    Personal
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  height={60}
                  onClick={() => SetSelect(2)}
                  style={{
                    textAlign: "center",
                    borderTop:
                      select == 2 ? "2px solid #42b6f5" : "2px solid #d1d1d1",
                    borderRight:
                      select == 2 ? "2px solid #42b6f5" : "2px solid #d1d1d1",
                    borderLeft: select == 2 ? "2px solid #42b6f5" : "",
                    borderBottom: select == 1 ? "2px solid #42b6f5" : "",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: 22,
                      fontWeight: 640,
                      color: "#42b6f5",
                      marginTop: 10,
                    }}
                  >
                    Business
                  </Typography>
                </Grid>
              </Grid>
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
                Get A Quote
              </Typography>
              {select == 1 ? (
                <Grid
                  container
                  flexDirection={"row"}
                  height={"100%"}
                  width={"100%"}
                  justifyContent="space-between"
                >
                  <Grid
                    onClick={() => Navigate()}
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
                      <DirectionsCarFilledIcon
                        sx={{ fontSize: 100, color: "#42b6f5" }}
                      />
                    </Grid>
                    <Typography style={{ fontSize: 22, fontWeight: "bold" }}>
                      Car
                    </Typography>
                  </Grid>
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
                      <DirectionsCarFilledIcon
                        sx={{ fontSize: 100, color: "#42b6f5" }}
                      />
                    </Grid>
                    <Typography style={{ fontSize: 22, fontWeight: "bold" }}>
                      Car
                    </Typography>
                  </Grid>
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
                      <DirectionsCarFilledIcon
                        sx={{ fontSize: 100, color: "#42b6f5" }}
                      />
                    </Grid>
                    <Typography style={{ fontSize: 22, fontWeight: "bold" }}>
                      Car
                    </Typography>
                  </Grid>
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
