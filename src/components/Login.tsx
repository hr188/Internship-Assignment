import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const defaultTheme = createTheme();

export default function Login() {
  const Navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState<{
    status: string;
    message: string;
  }>({
    status: "error",
    message: "Try Again! Some went wrong",
  });

  interface User {
    enteredName: string;
    enteredNumber: number;
    enteredEmail: string;
  }

  const [userData, setUserData] = useState<User>({
    enteredName: "",
    enteredNumber: 0,
    enteredEmail: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData((prev) => {
      return { ...prev, enteredName: event.target.value };
    });
  };

  const numberHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData((prev) => {
      return { ...prev, enteredNumber: Number(event.target.value) };
    });
  };
  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData((prev) => {
      return { ...prev, enteredEmail: event.target.value };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      userData.enteredEmail &&
      userData.enteredName &&
      userData.enteredNumber
    ) {
      setAlertMessage({
        status: "success",
        message: "Login Successfull",
      });
      setOpen(true);
      const data = {
        name: userData.enteredName,
        number: userData.enteredNumber,
        email: userData.enteredEmail,
      };
      localStorage.setItem("user", JSON.stringify(data));
      setTimeout(() => {
        Navigate("/home");
      }, 3000);
    } else {
      setAlertMessage({
        status: "error",
        message: "Input Fields can't be left Empty",
      });
      setOpen(true);
      console.log("Try Again!");
    }
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={alertMessage.status === "success" ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {alertMessage.message}
        </Alert>
      </Snackbar>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={userData.enteredName || []}
                onChange={nameHandler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="number"
                label="Phone Number"
                type="number"
                id="number"
                autoComplete="number"
                value={userData.enteredNumber || []}
                onChange={numberHandler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={userData.enteredEmail || []}
                onChange={emailHandler}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
