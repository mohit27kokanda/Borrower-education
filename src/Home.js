import react from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Typography, Card, Box } from '@mui/material'
import GaugeChart from 'react-gauge-chart'
const Home = () => {
  return (
    <div>
      <Typography variant='h3' color='#4164AB'>User</Typography>
      <Card>
        <div>
          <Typography variant='h4' color='#4164AB'>User</Typography>
        </div>
        <div>
          <GaugeChart id="gauge-chart6" percent={0.9} nrOfLevels={5} needleBaseColor="#000" cornerRadius={0} arcPadding={0.012} arcWidth={0.7} hideText={true} colors={['#F15A24', '#FBB03B', '#D9E021', '#39B54A', '#006837']} />
        </div>
        <div>
          <Box component="span" sx={{ border: '1px', p:2 }}>
            <Typography>Total Loans</Typography>
            <Typography>5</Typography>
          </Box>
          <Box component="span" sx={{ border: '1px' }}>
            <Typography>Total Outstanding</Typography>
            <Typography>$1,000,000</Typography>
          </Box>
        </div>
      </Card>
    </div>
  )
}

export default Home;