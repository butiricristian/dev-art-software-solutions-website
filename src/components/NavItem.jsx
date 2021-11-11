import { Button, useTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-scroll'

const NavItem = ({to, children}) => {
  const theme = useTheme()

  return(
    <Link
      to={to}
      spy={true}
      smooth={true}
      activeClass="active"
      color="inherit"
      offset={parseInt(theme.spacing(-8))}
      duration={500}
    >
      <Button color="inherit">{children}</Button>
    </Link>
  )
}

export default NavItem