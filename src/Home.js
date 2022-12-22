import react from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
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
import GaugeChart from "react-gauge-chart";

const Home = () => {
  const LoanCard = () => (
    <Grid
      container
      sx={{ background: "#FAFAFA", border: "1px solid #DDDDDD", borderRadius: "4px" }}
    >
      <Stack direction={"column"}>
        <Box>
          <Typography>Rakshit Walia</Typography>
        </Box>
        <Box>
          <Typography>Amount Due: ₹1,50,0000</Typography>
        </Box>
        <Box></Box>
        <Box></Box>v<Box></Box>
      </Stack>
    </Grid>
  );
  return (
    <Grid continer sx={{ mt: { sm: 2, xs: -2 }, mx: 2 }}>
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: 500, fontSize: "20px" }} color="#4164AB">
          Rakshit
        </Typography>
      </Grid>

      <Card sx={{ mt: 2 }}>
        <Grid container sx={{ backgroundColor: "#F3F3F3", pb: 1 }}>
          <Grid item xs={12} sx={{ px: 2, py: 1, backgroundColor: "#fff" }}>
            <Typography sx={{ fontWeight: 500, fontSize: "16px" }} color="#00000">
              CIBIL SCORE - 868
            </Typography>
          </Grid>
          <Grid xs={7} sx={{ mt: 1 }}>
            <GaugeChart
              style={{ marginLeft: "-28px" }}
              id="gauge-chart6"
              percent={0.9}
              nrOfLevels={5}
              needleBaseColor="#000"
              cornerRadius={0}
              arcPadding={0.012}
              arcWidth={0.7}
              hideText={true}
              colors={["#F15A24", "#FBB03B", "#D9E021", "#39B54A", "#006837"]}
            />
            <Typography sx={{ fontWeight: 400, fontSize: "12px", ml: 2 }}>
              *CIBIL Score refresh every month
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ mt: 1 }}>
            <Box sx={{ display: "flex", mt: { sm: 1, xs: 0.1 } }}>
              {" "}
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  backgroundColor: "#F15A24",
                  margin: "4px 5px",
                }}
              ></div>
              <span>Very Poor</span>
            </Box>
            <Box sx={{ display: "flex", mt: { sm: 1, xs: 0.1 } }}>
              {" "}
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  backgroundColor: "#FBB03B",
                  margin: "4px 5px",
                }}
              ></div>
              <span>Poor</span>
            </Box>
            <Box sx={{ display: "flex", mt: { sm: 1, xs: 0.1 } }}>
              {" "}
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  backgroundColor: "#D9E021",
                  margin: "4px 5px",
                }}
              ></div>
              <span>Fair</span>
            </Box>
            <Box sx={{ display: "flex", mt: { sm: 1, xs: 0.1 } }}>
              {" "}
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  backgroundColor: "#39B54A",
                  margin: "4px 5px",
                }}
              ></div>
              <span>Good</span>
            </Box>
            <Box sx={{ display: "flex", mt: { sm: 1, xs: 0.1 } }}>
              {" "}
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  backgroundColor: "#006837",
                  margin: "4px 5px",
                }}
              ></div>
              <span>Excellent</span>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                background: "#FFF",
                border: "1px solid #DDDDDD",
                borderRadius: "4px",
                mx: 1,
                p: 1,
                textAlign: "center",
              }}
            >
              <Typography sx={{ textAlign: "center" }}>Total Loans</Typography>
              <Typography>5</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                background: "#FFF",
                border: "1px solid #DDDDDD",
                borderRadius: "4px",
                mx: 1,
                py: 1,
                textAlign: "center",
              }}
            >
              <Typography>Total Outstanding</Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  color: "#212121",
                }}
              >
                $1,000,000
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
      <Card sx={{ mt: 2 }}>
        <Grid container sx={{ backgroundColor: "#F3F3F3", pb: 1 }}>
          <Grid item xs={12} sx={{ px: 2, py: 1, backgroundColor: "#fff" }}>
            <Typography sx={{ fontWeight: 500, fontSize: "16px" }} color="#00000">
              EMI Overdue{" "}
              <span
                style={{
                  fontWeight: 600,
                  fontSize: "18px",
                  color: "#212121",
                }}
              >
                $1,000,000
              </span>
            </Typography>
          </Grid>
          <Grid xs={7} sx={{ mt: 1 }}></Grid>
          <Grid item xs={5} sx={{ mt: 1 }}>
            <Box sx={{ display: "flex", mt: { sm: 1, xs: 0.5 } }}>
              {" "}
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  backgroundColor: "#40A9FF",
                  margin: "4px 5px",
                }}
              ></div>
              <span>Home Loan</span>
            </Box>
            <Box sx={{ display: "flex", mt: { sm: 1, xs: 0.5 } }}>
              {" "}
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  backgroundColor: "#36CFC9",
                  margin: "4px 5px",
                }}
              ></div>
              <span>Gold Loan</span>
            </Box>
            <Box sx={{ display: "flex", mt: { sm: 1, xs: 0.5 } }}>
              {" "}
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  backgroundColor: "#597EF7",
                  margin: "4px 5px",
                }}
              ></div>
              <span>Personal Loan</span>
            </Box>
            <Box sx={{ display: "flex", mt: { sm: 1, xs: 0.5 } }}>
              {" "}
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  backgroundColor: "#9254DE",
                  margin: "4px 5px",
                }}
              ></div>
              <span>Car Loan</span>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Home;
