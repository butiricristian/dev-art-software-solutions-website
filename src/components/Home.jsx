import { Button, Grid, Typography, useTheme } from "@mui/material";
import { Box } from '@mui/system';
import React from 'react';
import DevelopmentIllustration from '../assets/Development.svg';
import BaseSection from './BaseSection';

const Home = ({name}) => {
  const theme = useTheme()
  const appBarHeight = theme.spacing(8)

  return (
    <BaseSection name={name} height={`calc(70vh - ${appBarHeight})`}>
      <Grid container justifyContent="space-between" alignItems="center" padding={6} sx={{height: '100%'}}>
        <Grid item sm={4} >
          <Typography variant="h2" component="p" fontWeight={600}>Digitalize your business</Typography>
          <Typography variant="h6" component="p" fontWeight={300}>Digitalize your business</Typography>
          <Grid fullWidth container spacing={2} justifyContent="space-between">
            <Grid xs={12} sm={6} item> <Button color="primary" fullWidth variant="contained">Contact</Button> </Grid>
            <Grid xs={12} sm={6} item> <Button color="primary" fullWidth variant="outlined">Services</Button> </Grid>
          </Grid>
        </Grid>
        <Grid item sm={8} >
          <Box alignItems="center" justifyContent="center" sx={{width: '100%'}}>
            <img src={DevelopmentIllustration} alt="Development" sx={{maxWidth: '100%'}}/>
          </Box>
        </Grid>
      </Grid>
    </BaseSection>
  )
}

export default Home