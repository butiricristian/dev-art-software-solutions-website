import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import NavItem from './NavItem';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" elevation={5}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" fontWeight={700}>
              DevArt
            </Typography>
            <Typography variant="subtitle2" fontWeight={400} sx={{ marginTop: "-6px" }}>
              Software Solutions
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={2}>
              <Grid item> <NavItem to="home">Home</NavItem> </Grid>
              <Grid item> <NavItem to="products">Products</NavItem> </Grid>
              <Grid item> <NavItem to="team">Team</NavItem> </Grid>
              <Grid item> <NavItem to="testimonials">Testimonials</NavItem> </Grid>
              <Grid item> <NavItem to="pricing">Pricing</NavItem> </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar