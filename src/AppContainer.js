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
import LoginApp from './LoginApp';


const AppContainer = () => {
  return (
    <Grid container>
      <Grid item xs={4} sx={{ margin: "3rem auto" , boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", height:"90vh", borderRadius:'10px', minWidth:"280px"}}>
<LoginApp/>
      </Grid>
    </Grid>
  )
}

export default AppContainer