import React from 'react'
// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import Button from '@mui/material/Button'
// import Checkbox from '@mui/material/Checkbox'
// import FormControlLabel from '@mui/material/FormControlLabel'
import { TextField, InputAdornment, Button, Checkbox, FormControlLabel, Typography} from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
const LoginApp = () => {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            name=""
          />
        }
        label="By checking you consent to access your credit report from CIBIL." />

      <TextField
        id="outlined-start-adornment"
        sx={{
          m: 1, width: '25ch', '& fieldset': {
            borderRadius: '2px',
          }
        }}
        placeholder='Enter Mobile Number'
        InputProps={{
          startAdornment: <InputAdornment position="start">+91</InputAdornment>,
        }}

      />
      <TextField
        id="outlined-start-adornment"
        sx={{
          m: 1, width: '25ch', '& fieldset': {
            borderRadius: '2px',
          }
        }}
        placeholder='Enter Pan Number'
        InputProps={{
          startAdornment: <InputAdornment position="start">Pan No.</InputAdornment>,
        }}
      />
      <TextField
        id="outlined-start-adornment"
        size="small"
        sx={{
          '& fieldset': {
            borderRadius: '2px',
          }
        }}
        placeholder='Enter Pan Number'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon color='primary' />
            </InputAdornment>
          ),
        }}
      />
      <Button variant="outlined" size='large' sx={{
        borderRadius: '2px',
      }}>Get OTP</Button>
       <Typography variant="h4" color="#535353" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h4" color="#555770" gutterBottom>
        h4. Heading
      </Typography>
            <Button variant="contained" color="primary">
  Proceed
</Button>
    </div>
  )
}

export default LoginApp