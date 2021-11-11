import React from 'react'
import { Typography } from "@mui/material"
import BaseSection from './BaseSection'

const Testimonials = ({name}) => {
  return (
    <BaseSection name={name} sx={{height: '100vh'}}>
      <Typography variant="h1">Testimonials</Typography>
    </BaseSection>
  )
}

export default Testimonials