import React from 'react'
import loading from '../../assets/loading.svg'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const Loading = () => {
  const classes = useStyles()
  return (
    <span className={classes.root}>
      <img src={loading} alt="loading.." />
    </span>
  )
}

export default Loading
