import React, { useState } from "react";
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
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";

const Transition = (props) => {
  return <Slide direction="up" {...props} />;
};
const Settlement = () => {
  const options = ["Delay in Salary", "Loss in Business", "Medical Expense", "Other"];
  const navigate = useNavigate();

  const [isBillerOpen, setisBillerOpen] = useState(false);
  const hideBottomBiller = () => {
    setisBillerOpen(false);
  navigate("/loan-details-approved")
  };

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
          label={"Outstanding Amount"}
          sx={{ width: "95%", mt: 2 }}
          type="text"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          size={"small"}
          label={"Settlement Offer"}
          sx={{ width: "95%", mt: 2 }}
          type="text"
        />
      </Grid>

      <Grid item xs={12}>
        <Button
          sx={{ float: "right", mt: 2, mr: 3 }}
          variant="contained"
          onClick={() => setisBillerOpen(!isBillerOpen)}
        >
          Analyse
        </Button>
      </Grid>
      <Box sx={{ maxWidth: "400px" }}>
        <Dialog
          fullScreen
          sx={{
            // mt: "22rem",
            mt: "auto",
            mb: { sm: "3rem", xs: "0" },
            maxWidth: { sm: "550px", xs: "100%" },
            maxHeight: "220px",
            mx: "auto",
            borderRadius: "10px",
          }}
          open={isBillerOpen}
          onClose={hideBottomBiller}
          TransitionComponent={Transition}
        >
          <List>
            <ListItem button>
              <ListItemText secondary="Pay Now" />
              <IconButton
                edge="start"
                color="inherit"
                onClick={hideBottomBiller}
                sx={{ float: "right" }}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </ListItem>
            <Divider />
          </List>
          <Grid item container sx={{ px: 2 }}>
            <Grid item xs={12} sx={{mt:2}}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "15px",

                  /* or 157% */

                  color: "#000000",
                }}
              >
                “Your settlement offer has been approved pending final review. Lender’s
                Representative will contact you about the next steps.”
              </Typography>
            </Grid>

            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button onClick={hideBottomBiller} sx={{ mt: 4, mr: 3 }} variant="contained">
                submit
              </Button>
            </Grid>
          </Grid>
        </Dialog>
      </Box>
    </Grid>
  );
};

export default Settlement;
