import React from "react";

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
import LoginApp from "./LoginApp";

const AppContainer = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <LoginApp />
      </Grid>
    </Grid>
  );
};

export default AppContainer;
