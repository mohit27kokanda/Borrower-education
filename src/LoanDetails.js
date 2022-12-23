import React, { useState, useEffect, useLocation } from "react";
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
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import TimerIcon from "@mui/icons-material/Timer";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SpeedIcon from "@mui/icons-material/Speed";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BottomSheet from "./BottomSheet";

import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import paymentImage1 from "../src/img/Frame4.svg";
import paymentImage2 from "../src/img/Frame2.svg";
import paymentImage3 from "../src/img/Frame3.svg";
import { getLoanDetails } from "./service";

const Transition = (props) => {
  return <Slide direction="up" {...props} />;
};

const LoanDetails = () => {
  const [isBottomSheetOpen, setisBottomSheetOpen] = useState(false);
  const [isPayNowOpen, setisPayNowOpen] = useState(false);
  const [isBillerOpen, setisBillerOpen] = useState(false);
  const navigate = useNavigate();
  const [loanDetails, setLoanDetails] = useState([]);
  const userDetails = JSON.parse(localStorage.getItem("user"));
  const loanId = localStorage.getItem("loanId");
  var url = window.location.href.indexOf("/loan-details-approved") > -1;
  // var params = new URLSearchParams(url2.search);
  // const url = window.location.contains("/loan-details-approved");
  console.log("url", url);

  // useEffect(()=>{}, [])

  useEffect(() => {
    console.log("useEffect");
    loadPage(loanId);
  }, []);

  const loadPage = async (loanId) => {
    const loanData = await getLoanDetails(loanId);
    console.log(loanData);
    const formattedData = Object.keys(loanData || {}).map((key) => ({
      key: snakeCaseToTitleCase(key),
      value: loanData[key],
    }));
    setLoanDetails(formattedData);
  };

  const snakeCaseToTitleCase = (str) =>
    str
      .split("_")
      .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(" ");

  const hideBottom = () => {
    setisBottomSheetOpen(false);
  };
  const hideBottomPayNow = () => {
    setisPayNowOpen(false);
  };
  const hideBottomBiller = () => {
    setisBillerOpen(false);
  };
  const options = ["a", "b"];

  // const bottomSheet = () => ;
  return (
    <Grid continer sx={{ mt: { sm: 2, xs: -2 }, mx: 2 }}>
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: 500, fontSize: "20px" }} color="#4164AB">
          {userDetails["user_name"]}
        </Typography>
      </Grid>
      <Card sx={{ mt: 2 }}>
        <Grid container sx={{ pb: 1 }}>
          <Grid item xs={11}>
            {loanDetails?.map(({ key, value }) => (
              <Grid item sx={{ mt: 1 }}>
                {" "}
                <Typography
                  sx={{
                    fontSize: "14px",
                    px: 1,
                  }}
                >
                  <span style={{ color: "rgba(83, 83, 83, 0.75)", fontWeight: 400 }}>
                    {key + ": "}
                  </span>
                  <span style={{ color: "#00000", fontWeight: 600 }}>{value}</span>
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={1} sx={{ p: 1 }}>
            <MoreVertIcon
              onClick={() => setisBottomSheetOpen(!isBottomSheetOpen)}
              sx={{ float: "right", cursor: "pointer" }}
            />
          </Grid>

          <Grid item xs={12} sx={{}}>
            <Stack direction={"row"} sx={{ my: 1 }}>
              <Box>
                <Button
                  variant="outlined"
                  size={"small"}
                  sx={{
                    textTransform: "none",
                    border: "1px solid grey",
                    color: "grey",
                    ml: 1,
                    fontSize: { sm: "14px", xs: "10px" },
                  }}
                  startIcon={<CurrencyRupeeIcon sx={{ fontWeight: 600, color: "#585858" }} />}
                  endIcon={<ArrowUpwardIcon sx={{ color: "red" }} />}
                >
                  Money Impact
                </Button>
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  size={"small"}
                  sx={{
                    textTransform: "none",
                    border: "1px solid grey",
                    color: "grey",
                    ml: 1,
                    fontSize: { sm: "14px", xs: "10px" },
                  }}
                  startIcon={<TimerIcon sx={{ color: "#585858" }} />}
                  endIcon={<ArrowDownwardIcon sx={{ color: "green" }} />}
                >
                  Urgency
                </Button>
              </Box>

              <Box>
                <Button
                  variant="outlined"
                  size={"small"}
                  sx={{
                    textTransform: "none",
                    border: "1px solid grey",
                    color: "grey",
                    ml: 1,
                    fontSize: { sm: "14px", xs: "10px" },
                  }}
                  startIcon={
                    <SpeedIcon sx={{ color: "#585858", fontSize: { sm: "14px", xs: "10px" } }} />
                  }
                  endIcon={<DragHandleIcon sx={{ fontSize: { sm: "14px", xs: "10px" } }} />}
                >
                  CIBIL
                </Button>
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              mt: 1,
              m: 2,
              mb: 1,
              p: 1,
              background: "#FAFAFA",
              border: "1px solid #DDDDDD",
              borderRadius: "4px",
            }}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                color: "#221122",
              }}
            >
              CIBIL Impact
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                color: "rgba(83, 83, 83, 0.85)",
              }}
            >
              EBC is 1 - “You have missed one EMI on this loan, pay the next EMI and you will see no
              impact on your CIBIL Score”
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              mt: 1,
              m: 2,
              mb: 1,
              p: 1,
              background: "#FAFAFA",
              border: "1px solid #DDDDDD",
              borderRadius: "4px",
            }}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                color: "#221122",
              }}
            >
              CIBIL Impact
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                color: "rgba(83, 83, 83, 0.85)",
              }}
            >
              EBC is 1 - “You have missed one EMI on this loan, pay the next EMI and you will see no
              impact on your CIBIL Score”
            </Typography>
          </Grid>
          {url && (
            <Grid
              item
              xs={12}
              sx={{
                mt: 1,
                m: 2,
                mb: 1,
                p: 1,
                background: "#FAFAFA",
                border: "1px solid #DDDDDD",
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  px: 1,
                }}
              >
                <span style={{ color: "rgba(83, 83, 83, 0.75)", fontWeight: 400 }}>
                  Settlement Amount:
                </span>
                <span
                  style={{ fontSize: "22px", color: "#00000", fontWeight: 600, paddingLeft: "5px" }}
                >
                  ₹2,40,0000
                </span>
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  px: 1,
                }}
              >
                <span style={{ color: "rgba(83, 83, 83, 0.75)", fontWeight: 400 }}>Reason:</span>
                <span style={{ color: "#00000", fontWeight: 600 }}>
                  <Button sx={{ml:1}} size="small" variant="outlined" color="success">
                    Approved
                  </Button>
                </span>
              </Typography>
            </Grid>
          )}

          <Divider />
          <Grid xs={12}></Grid>
          <Grid xs={12}>
            <Button
              sx={{ float: "right", mr: 2 }}
              variant="contained"
              onClick={() => {
                false ? setisPayNowOpen(!isPayNowOpen) : setisBillerOpen(!isBillerOpen);
              }}
            >
              Pay Now
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Box sx={{ maxWidth: "400px" }}>
        <Dialog
          fullScreen
          sx={{
            // mt: "22rem",
            mt: "auto",
            mb: { sm: "3rem", xs: "0" },
            maxWidth: { sm: "550px", xs: "100%" },
            maxHeight: "210px",
            mx: "auto",
            borderRadius: "10px",
          }}
          open={isBottomSheetOpen}
          onClose={hideBottom}
          TransitionComponent={Transition}
        >
          <List>
            <ListItem button>
              <ListItemText secondary="Actions on your Loan" />
              <IconButton
                edge="start"
                color="inherit"
                onClick={hideBottom}
                sx={{ float: "right" }}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </ListItem>
            <Divider />

            <Divider />
            <ListItem button onClick={() => navigate("/report-delay")}>
              <ListItemText primary="Report Delay in Payment" />
              <IconButton
                edge="start"
                color="inherit"
                onClick={hideBottom}
                sx={{ float: "right" }}
                aria-label="close"
              >
                <NavigateNextIcon />
              </IconButton>
            </ListItem>
            <Divider />
            <ListItem button onClick={() => navigate("/settlement")}>
              <ListItemText primary="Raise Settlement Request" />
              <IconButton
                edge="start"
                color="inherit"
                onClick={hideBottom}
                sx={{ float: "right" }}
                aria-label="close"
              >
                <NavigateNextIcon />
              </IconButton>
            </ListItem>
          </List>
        </Dialog>
      </Box>
      <Box sx={{ maxWidth: "400px" }}>
        <Dialog
          fullScreen
          sx={{
            // mt: "22rem",
            mt: "auto",
            mb: { sm: "3rem", xs: "0" },
            maxWidth: { sm: "550px", xs: "100%" },
            maxHeight: "250px",
            mx: "auto",
            borderRadius: "10px",
          }}
          open={isPayNowOpen}
          onClose={hideBottomPayNow}
          TransitionComponent={Transition}
        >
          <List>
            <ListItem button>
              <ListItemText secondary="Pay Now" />
              <IconButton
                edge="start"
                color="inherit"
                onClick={hideBottomPayNow}
                sx={{ float: "right" }}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </ListItem>
            <Divider />
          </List>
          <Grid item container>
            <Grid item xs={12} sx={{ mt: 1, m: 2, mb: 1, p: 1 }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",

                  color: "#535353",
                }}
              >
                Choose your mode of payment
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",

                  color: "#212121",
                }}
              >
                Biller: LOANTAP CREDIT PRODUCTS PRIVATE LIMITED
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",

                  color: "#212121",
                }}
              >
                Amount: ₹ 2000
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Grid container>
                <Grid xs={3}>
                  <Button>
                    <Box sx={{ width: { sm: "280px", xs: "200px" } }}>
                      <img src={paymentImage1} alt="" />
                    </Box>
                  </Button>
                </Grid>
                <Grid xs={3}>
                  {" "}
                  <Button>
                    <Box sx={{ width: { sm: "280px", xs: "200px" } }}>
                      <img src={paymentImage2} alt="" />
                    </Box>
                  </Button>
                </Grid>
                <Grid xs={3}>
                  {" "}
                  <Button>
                    <Box sx={{ width: { sm: "280px", xs: "200px" } }}>
                      <img src={paymentImage3} alt="" />
                    </Box>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Dialog>
      </Box>
      <Box sx={{ maxWidth: "400px" }}>
        <Dialog
          fullScreen
          sx={{
            // mt: "22rem",
            mt: "auto",
            mb: { sm: "3rem", xs: "0" },
            maxWidth: { sm: "550px", xs: "100%" },
            maxHeight: "350px",
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
                    label="Select Bank"
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
                label={"Enter Account Number"}
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
                label={"Enter IFSC Code"}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button onClick={hideBottomBiller} sx={{ mt: 2, mr: 3 }} variant="contained">
                Add Biller
              </Button>
            </Grid>
          </Grid>
        </Dialog>
      </Box>
    </Grid>
  );
};

export default LoanDetails;
