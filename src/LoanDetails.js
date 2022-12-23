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
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import TimerIcon from "@mui/icons-material/Timer";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SpeedIcon from "@mui/icons-material/Speed";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const LoanDetails = () => {
  const data = [
    { key: "Amount Due: ", value: "₹1,50,0000" },
    { key: "Loan:  ", value: "Car Loan" },
    { key: "Total Outstanding: ", value: "₹2,50,0000" },
    { key: "Amount Paid:", value: "₹1,00,0000" },
    { key: "Balance Amount:", value: "₹1,50,0000" },
    { key: "Principal Outstanding: ", value: "Car Loan" },
    { key: "Interest Outstanding:", value: "₹1,50,0000" },
    { key: "EMI Tenure: ", value: "24 Months" },
    { key: "EMI Due Amount: ", value: "₹75,0000" },
    { key: "Due Date:  ", value: "10/Dec/2022" },
  ];
  return (
    <Grid continer sx={{ mt: { sm: 2, xs: -2 }, mx: 2 }}>
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: 500, fontSize: "20px" }} color="#4164AB">
          Rakshit
        </Typography>
      </Grid>
      <Card sx={{ mt: 2 }}>
        <Grid container sx={{ pb: 1 }}>
          {data.map(({ key, value }) => (
            <Grid item xs={12} sx={{ mt: 1 }}>
              {" "}
              <Typography
                sx={{
                  fontSize: "14px",
                  px: 1,
                }}
              >
                <span style={{ color: "rgba(83, 83, 83, 0.75)", fontWeight: 400 }}>{key}</span>
                <span style={{ color: "#00000", fontWeight: 600 }}>{value}</span>
              </Typography>
            </Grid>
          ))}
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
        </Grid>
      </Card>
    </Grid>
  );
};

export default LoanDetails;
