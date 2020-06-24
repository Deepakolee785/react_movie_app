import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'

const Error404 = () => {
  return (
    <div
      style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
      }}
    >
      <SentimentVeryDissatisfiedIcon />
      <p>404 Error Page not found</p>
      <br />
      <br />
      <Button variant="contained">
        <Link to="/" style={{ textDecoration: 'inherit' }}>
          Go Back to home
        </Link>
      </Button>
    </div>
  )
}

export default Error404
