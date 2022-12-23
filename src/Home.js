import react from "react";
import { useState, useEffect } from "react";
import { Typography, Box, Stack, Grid, Button, Card } from "@mui/material";
import GaugeChart from "react-gauge-chart";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import TimerIcon from "@mui/icons-material/Timer";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SpeedIcon from "@mui/icons-material/Speed";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Chart from "./Chart";
import { getLoans } from "./service";
import uniqolor from "uniqolor";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const userDetails = JSON.parse(localStorage.getItem("user"));
  const [loanDetails, setLoanDetails] = useState([]);
  const [cibilScore, setCibilScore] = useState();
  const [totalLoans, setTotalLoans] = useState();
  const [totalOutstanding, setTotalOutstanding] = useState();
  const [emiOverdue, setEmiOverdue] = useState();
  const [pieChartData, setPieChartData] = useState({});
  const navigate = useNavigate();

  const colors = [
    "#36cfc9",
    "#38c3d0",
    "#3bb2d1",
    "#3da1d3",
    "#4090d4",
    "#4280d5",
    "#4570d7",
    "#4760d8",
    "#4a50d9",
    "#574cda",
    "#6b4fdb",
    "#7f51dd",
    "#9254de",
  ];

  useEffect(() => console.log(colors), []);

  useEffect(() => {
    loadPage(userDetails["id"]);
  }, []);

  async function loadPage(id) {
    const loanData = await getLoans(id);
    setLoanDetails(loanData["data"]);
    setCibilScore(loanData["cibil_score"]);
    setTotalLoans(loanData["data"].length);
    setTotalOutstanding(loanData["total_outstanding_amount"]);
    setEmiOverdue(loanData["total_emi_amount"]);
    setPieChartData(loanData["product_type_pie_chart_data"]);
  }
  const impact = (value) => {
    if (value === "high") return <ArrowUpwardIcon sx={{ color: "red" }} />;
    if (value === "low") return <ArrowDownwardIcon sx={{ color: "green" }} />;
    if (value === "medium") return <DragHandleIcon sx={{ fontSize: { sm: "14px", xs: "10px" } }} />;
  };
  const LoanCard = (loan) => {
    const loanInfo = loan.loan;
    return (
      <Grid
        container
        sx={{ background: "#FAFAFA", border: "1px solid #DDDDDD", borderRadius: "4px", mt: 1 }}
      >
        <Stack sx={{}}>
          <Grid container>
            <Grid xs={11}>
              <Box sx={{ pt: 1 }}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "#535353",
                    px: 1,
                  }}
                >
                  {loanInfo["company_name"].toUpperCase()}
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    px: 1,
                  }}
                >
                  <span style={{ color: "rgba(83, 83, 83, 0.75)", fontWeight: 400 }}>
                    Amount Due:
                  </span>
                  <span style={{ color: "#00000", fontWeight: 600 }}>
                    ₹{loanInfo["emi_amount"]}
                  </span>
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    px: 1,
                  }}
                >
                  <span style={{ color: "rgba(83, 83, 83, 0.75)", fontWeight: 400 }}>Loan:</span>
                  <span style={{ color: "#00000", fontWeight: 600 }}>{loanInfo["loan_type"]}</span>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={1} sx={{}}>
              <Box
                sx={{ cursor: "pointer", float: "right", p: 1 }}
                onClick={() => navigate("/loan-details")}
              >
                <ArrowForwardIosIcon />
              </Box>
            </Grid>
          </Grid>

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
                endIcon={impact(loanInfo["money_impact"])}
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
                endIcon={impact(loanInfo["urgency"])}
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
                endIcon={impact(loanInfo["cibil_impact"])}
              >
                CIBIL
              </Button>
            </Box>
          </Stack>
          <Box></Box>
        </Stack>
      </Grid>
    );
  };
  return (
    <Grid container sx={{ mt: { sm: 2, xs: -2 },px:2 }}>
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: 500, fontSize: "20px" }} color="#4164AB">
          {userDetails["user_name"]}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mt: 2 }}>
          <Grid container sx={{ backgroundColor: "#F3F3F3", pb: 1 }}>
            <Grid item xs={12} sx={{ px: 2, py: 1, backgroundColor: "#fff" }}>
              <Typography sx={{ fontWeight: 500, fontSize: "16px" }} color="#00000">
                CIBIL SCORE - {cibilScore}
              </Typography>
            </Grid>
            <Grid xs={7} sx={{ mt: 1 }}>
              <GaugeChart
                style={{ marginLeft: "-28px" }}
                id="gauge-chart6"
                percent={cibilScore / 1300}
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
                <Typography>{totalLoans}</Typography>
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
                  ₹{totalOutstanding}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid xs={12}>
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
                  ₹{emiOverdue}
                </span>
              </Typography>
            </Grid>
            <Grid xs={7} sx={{ mt: 1 }}>
              <Box sx={{ ml: 3, mb: 1, width: 120 }}>
                <Chart pieChartData={pieChartData} />
              </Box>
            </Grid>
            <Grid item xs={5} sx={{ mt: 2 }}>
              {Object.keys(pieChartData).map((loan_type, index) => (
                <Box sx={{ display: "flex", mt: { sm: 1, xs: 0.5 } }}>
                  {" "}
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "3px",
                      backgroundColor: colors[index],
                      margin: "4px 5px",
                    }}
                  ></div>
                  <span>{loan_type.toUpperCase()}</span>
                </Box>
              ))}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sx={{ p: 1 }}>
              {loanDetails.map((loan) => {
                return <LoanCard loan={loan} />;
              })}
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
