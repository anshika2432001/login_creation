import React from 'react';
import {Grid, Box,  RadioGroup, FormControlLabel, Divider, Radio, Typography, FormControl, TextField, MenuItem, Stack, Button} from "@mui/material";
const Login = () => {
  return (
    <>
    <Grid  sx={{bgcolor:'#bbdefb',mx:2,py:"8px"}}>
        <Box sx={{bgcolor: 'primary.main', fontWeight: 'bold',mt: '8px', color:'white', py: '8px', borderRadius: '2px', }}>Login Creation Through Excel</Box>
    </Grid>
    <Divider color='blue'/>
    <Grid container  columnSpacing={1} sx={{mx: 2, width: "97.5%"}}  >
        <Grid item xs sx={{bgcolor: "#bbdefb", height: "fit-content"}}>
            <Stack direction='row'>
                <Typography sx={{fontWeight: 'bold', pr:'20px', pt:'6px'}}>Login Type:</Typography>
                <FormControl>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group" row>
                        <FormControlLabel value="Trust" control={<Radio size="small"/>} label="Trust"  />
                        <FormControlLabel value="EHS" control={<Radio size="small" />} label="EHS" />
                    </RadioGroup>
                </FormControl>
            </Stack>
        </Grid>
        <Divider orientation='vertical' color='blue' flexItem />
        <Grid item xs sx={{bgcolor: "#bbdefb"}} >
            <Box>
            <Typography  sx={{display: "flex", alignItems: "left",fontWeight: 'bold' }}>Department:</Typography>
            <TextField label="----Select----" select fullWidth sx={{bgcolor: "white"}}>
                <MenuItem value="one">One</MenuItem>
                <MenuItem value="two">Two</MenuItem>
                <MenuItem value="three">Three</MenuItem>
            </TextField>
            </Box>
        </Grid>
        <Divider orientation='vertical' color='blue' flexItem />
        <Grid item xs sx={{bgcolor: "#bbdefb", height: "fit-content"}} >
            <Stack direction='row' spacing={2}>
                <Typography sx={{fontWeight: 'bold'}}>File Upload:</Typography>
                <a href='#' style={{color:'primary.main'}}>(Download Template)</a>
            </Stack>
            <Stack direction='row' spacing={1}>
                <Button variant='outlined' sx={{bgcolor: "white", color: "black",textTransform: 'none'}}>Choose File</Button>
                <Typography>No file chosen</Typography>
            </Stack>
        </Grid>
    </Grid>
    <Stack my={4} spacing={2} direction='row' sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Button variant='contained' sx={{borderRadius: 8, px: 4,textTransform: 'none'}} > Submit</Button>
        <Button variant='contained' sx={{borderRadius: 8, px: 4,textTransform: 'none'}}> Reset</Button>
    </Stack>
    
    </>
  )
}

export default Login
