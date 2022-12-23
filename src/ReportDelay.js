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
  InputAdornment,
  Button,
  Card,
} from "@mui/material";

const ReportDelay = () => {
  const options = ["Delay in Salary", "Loss in Business", "Medical Expense", "Other"];
  return (
    <Grid continer sx={{ mt: { sm: 2, xs: -2 }, mx: 2 }}>
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: 500, fontSize: "20px" }} color="#4164AB">
          Rakshit
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Typography sx={{ fontWeight: 500, fontSize: "16px" }} color="rgb(0, 0, 0,)">
          Report Delay in Payment
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {" "}
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          sx={{ width: "95%", mt: 2 }}
          size="small"
          w
          disableClearable
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Reason"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          size={"small"}
          label={"How much you can pay"}
          sx={{ width: "95%", mt: 2 }}
          type="text"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          size={"small"}
          sx={{ width: "95%", mt: 2 }}
          type="date"
          inputProps={{ step: 300 }}
          label={"When you can pay"}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>

      <Grid item xs={12}>
        <Button sx={{ float: "right", mt: 2, mr: 3 }} variant="contained">
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default ReportDelay;
