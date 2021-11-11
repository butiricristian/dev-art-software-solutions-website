import { Box } from '@mui/system'
import React from 'react'

const BaseSection = ({name, height = '100vh', children}) => {
  return (
    <Box name={name} sx={{height: height}}>
      {children}
    </Box>
  )
}
export default BaseSection