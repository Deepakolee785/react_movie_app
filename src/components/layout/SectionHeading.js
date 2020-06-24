import React from 'react'
import { Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: '1.6rem',
    fontWeight: 700,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '4rem',
    paddingBottom: '2rem',
    '&&::after': {
      content: "''",
      display: 'block',
      height: '6.5px',
      width: '5.5rem',
      borderRadius: '2rem',
      backgroundColor: '#eec100',
    },
  },
}))

const SectionHeading = ({ title }) => {
  const classes = useStyles()
  return (
    <Typography variant="h5" className={classes.heading}>
      {title}
    </Typography>
  )
}

export default SectionHeading
