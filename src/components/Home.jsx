import React from 'react'
import { Button, Grid, Typography, useTheme } from "@mui/material"
import BaseSection from './BaseSection'
import { Box } from '@mui/system';
import DevelopmentIllustration from '../assets/Development.svg'

const Home = ({name}) => {
  const theme = useTheme()
  const appBarHeight = theme.spacing(8)

  return (
    <BaseSection name={name} height={`calc(100vh - ${appBarHeight})`}>
      <Grid container justifyContent="space-between" alignItems="center" padding={6}>
        <Grid item marginLeft={8}>
          <Typography variant="h1" component="div" fontWeight={600} sx={{marginBlockStart: 0}}>DevArt</Typography>
          <Typography variant="h6" component="div" fontWeight={300}>Digitalize your business</Typography>
          <Grid container spacing={2}>
            <Grid item> <Button color="primary" fullWidth variant="contained">Contact</Button> </Grid>
            <Grid item> <Button color="primary" fullWidth variant="outlined">Services</Button> </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Box alignItems="center" justifyContent="center">
            <img src={DevelopmentIllustration} alt="Development"/>
          </Box>
        </Grid>
      </Grid>
    </BaseSection>
  )
}

export default Home