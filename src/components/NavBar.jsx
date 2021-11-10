import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={5}>
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
              <Grid item> <Button color="inherit">Home</Button> </Grid>
              <Grid item> <Button color="inherit">Products</Button> </Grid>
              <Grid item> <Button color="inherit">Team</Button> </Grid>
              <Grid item> <Button color="inherit">Testimonials</Button> </Grid>
              <Grid item> <Button color="inherit">Pricing</Button> </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar