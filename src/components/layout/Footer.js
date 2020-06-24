import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// assets import
import tmdb_icon from '../../assets/tmdb_icon.svg'

const useStyles = makeStyles(() => ({
  root: {
    height: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '0.5px solid #ccc',
  },
  footerText: {
    fontSize: '1rem',
    fontWeight: '600',
    marginRight: '1rem',
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <Paper elevation={5} className={classes.root}>
      <Typography variant="h6" className={classes.footerText}>
        &copy; RMDb 2020
      </Typography>
      <img src={tmdb_icon} alt="" height={28} />
    </Paper>
  )
}

export default Footer
