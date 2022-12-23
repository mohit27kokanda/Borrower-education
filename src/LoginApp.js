import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import FormControlLabel from '@mui/material/FormControlLabel'
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Stack,
  Grid,
  InputAdornment,
  Button,
} from "@mui/material";
import logo from "./img/Logo.svg";
import { createUser } from "./service";

const LoginApp = () => {

  const [mobileNumber, setMobileNumber] = useState()
  const [panNumber, setPanNumber] = useState()
  const navigate = useNavigate();

  async function onSignUp(){
    const userDetails = await createUser(mobileNumber, panNumber)
    localStorage.setItem('user', JSON.stringify(userDetails))
    navigate('/home')
  }

  return (
    <div>
      <Grid container sx={{}} className="login-continer">
        <Grid item xs={12} sx={{}}>
          <Grid sx={{ textAlign: "center" }}>
            <img style={{}} src={logo} alt="Logo" />
            <Typography className="login-helper">
              Avoid hassle during payments Pay all your Loans instantly!
            </Typography>
          </Grid>
          <Grid container sx={{ mx: 2, mt: { xs: 5, sm: 7 } }}>
            <Grid item>
              <Typography sx={{ color: " #535353", fontWeight: 500, fontSize: "20px" }}>
                SignUp
              </Typography>

              <Typography sx={{ color: "#555770;", fontWeight: 400, fontSize: "16px", mt: 1 }}>
                Sign-up and track your Loans
              </Typography>
            </Grid>

            <Grid xs={12} sx={{ mt: 2 }}>
              <TextField
                id="outlined-start-adornment"
                size="small"
                sx={{
                  width: "90%",
                  "& fieldset": {
                    borderRadius: "2px",
                  },
                }}
                placeholder="Enter Mobile Number"
                InputProps={{
                  startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                }}
                type="number"
                value={mobileNumber}
                onChange={(e)=>setMobileNumber(e.target.value)}
              />
            </Grid>

            <Grid xs={12} sx={{ mt: 2 }}>
              <TextField
                size="small"
                id="outlined-start-adornment"
                sx={{
                  width: "90%",
                  "& fieldset": {
                    borderRadius: "2px",
                  },
                }}
                placeholder="Enter Pan Number"
                InputProps={{
                  startAdornment: <InputAdornment position="start">Pan No.</InputAdornment>,
                }}
                value={panNumber}
                onChange={(e)=>setPanNumber(e.target.value.toUpperCase())}
              />
            </Grid>
            <Grid xs={12} sx={{ mt: 2 }}>
              <FormControlLabel
                control={<Checkbox name="" />}
                label="By checking you consent to access your credit report from CIBIL."
              />
            </Grid>
            <Grid xs={12} sx={{ mt: 2 }}>
              <Stack direction={"row"}>
                <TextField
                  id="outlined-start-adornment"
                  size="small"
                  sx={{
                    width: { xs: "60%", sm: "67%" },

                    "& fieldset": {
                      borderRadius: "2px",
                    },
                  }}
                  placeholder="Verification Code"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: "2px",
                    ml: 2,
                  }}
                >
                  Get OTP
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <Typography color="#535353" gutterBottom>
                <span style={{ color: "#555770" }}>Didn’t receive OTP?</span>
                <span style={{ color: "#1890FF" }}> Resend OTP</span>
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ mt: { xs: 4, sm: 6 } }}>
              <Typography gutterBottom>
                <span style={{ color: "#555770" }}>Have an account? </span>
                <span style={{ color: "#1890FF" }}> Login</span>
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2, textAlign: "center" }}>
              <Button onClick={()=>onSignUp()} variant="contained" color="primary">
                Proceed
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginApp;
