import {
  Button,
  Grid,
  Typography,
  Divider,
  TextField,
  Icon,
} from "@mui/material";
import React from "react";
import "./page2.css";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

const Page2 = ({ MainPayload, Setpayload }: any) => {
  const {
    control,
    register,
    handleSubmit,
    formState,
    setValue,
    getValues,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();
  let navigateTo = useNavigate();
  const Navigate = () => {
    navigateTo("/page3");
  };
  const submit = (formdata: any) => {
    Setpayload({
      ...MainPayload,
      ...formdata,
    });
    Navigate();
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
            Get Basic Details
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent={"center"} padding={4}>
        <Grid item xs={7} style={{ margin: 2 }}>
          <Controller
            control={control}
            name="firstName"
            defaultValue={""}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                id="outlined-basic"
                style={{ width: "100%" }}
                label="First Name"
                variant="outlined"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                error={!!errors["firstName"]}
                helperText={
                  errors.customer_name &&
                  `${errors.customer_name.message}* This field is Required`
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={7} style={{ margin: 2 }}>
          <Controller
            control={control}
            name="lastName"
            defaultValue={""}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                id="outlined-basic"
                style={{ width: "100%" }}
                label="Last Name"
                variant="outlined"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                error={!!errors["lastName"]}
                helperText={
                  errors.customer_name &&
                  `${errors.customer_name.message}* This field is Required`
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={7} style={{ margin: 2 }}>
          <TextField
            id="outlined-basic"
            style={{ width: "100%" }}
            label="Date of Birth
            (MM/DD/YYYY)"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={7} style={{ margin: 2 }}>
          <TextField
            id="outlined-basic"
            style={{ width: "100%" }}
            label="Gender"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={7} style={{ margin: 2 }}>
          <TextField
            id="outlined-basic"
            style={{ width: "100%" }}
            label="Marital Status"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={7} style={{ margin: 2 }}>
          <TextField
            id="outlined-basic"
            style={{ width: "100%" }}
            label="Email Address"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={7} style={{ margin: 2 }}>
          <TextField
            id="outlined-basic"
            style={{ width: "100%" }}
            label="Phone No"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={7} style={{ margin: 2 }}>
          <Grid container justifyContent={"center"}>
            <Grid item>
              <Button
                style={{ width: 350, marginTop: 20 }}
                size="large"
                variant="contained"
                onClick={handleSubmit(submit)}
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
