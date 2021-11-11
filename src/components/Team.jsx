import React from 'react'
import { Typography } from "@mui/material"
import { Box } from '@mui/system'
import BaseSection from './BaseSection'

const Team = ({name}) => {
  return (
    <BaseSection name={name} sx={{height: '100vh'}}>
      <Typography variant="h1">Team</Typography>
    </BaseSection>
  )
}

export default Team