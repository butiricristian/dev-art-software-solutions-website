import React from 'react'
import { Typography } from "@mui/material"
import BaseSection from './BaseSection'

const Pricing = ({name}) => {
  return (
    <BaseSection name={name} sx={{height: '100vh'}}>
      <Typography variant="h1">Pricing</Typography>
    </BaseSection>
  )
}
export default Pricing