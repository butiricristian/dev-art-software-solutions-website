import React from 'react'
import { Typography } from "@mui/material"
import BaseSection from './BaseSection'

const Products = ({name}) => {
  return (
    <BaseSection name={name}>
      <Typography variant="h1">Products</Typography>
    </BaseSection>
  )
}

export default Products