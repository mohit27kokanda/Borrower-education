import React from 'react'
import {
  Drawer,
  Divider,
  Typography,
  Box,
  Select,
  InputLabel,
  InputGroup,
  MenuItem,
  OutlinedInput,
  FormControl,
  styled,
  InputBase,
  Autocomplete,
  TextField,
  Collapse,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Switch,
  Stack,
  Grid,
  Paper,
  IconButton,
  Snackbar,
  Modal,
  FormHelperText,
  Tooltip,
} from "@mui/material";
import logo from "./img/Logo.svg"

const LoginApp = () => {
  return (
    <div>
      <Grid container sx={{}} className='login-continer'>
        <Grid item xs={12} sx={{ }}>
      
          <Grid sx={{textAlign:'center'}}>
          <img style={{ }} src={logo} alt="Logo" />
          <Typography className='login-helper' >
          Avoid hassle during payments
 Pay all your Loans instantly!
          </Typography>

          </Grid>
         
     

        </Grid>

      </Grid>



    </div>
  )
}

export default LoginApp