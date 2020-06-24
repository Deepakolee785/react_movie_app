import React from 'react'
import { Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import StarIcon from '@material-ui/icons/Star'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',

    width: '100%',

    // backgroundImage:
    //   'linear-gradient(rgba(255,255,255,0.01),rgba(255,255,255,0.08),rgba(255,255,255,0.15),rgba(255,255,255,0.2), rgba(255,255,255,0.8)), url("https://image.tmdb.org/t/p/original/3CIae0GrhKTIzNS3FYYvT8P9D3w.jpg")',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  movieTitle: {
    color: '#fff',
    paddingTop: '36vh',
    // paddingBottom: '1rem',
    paddingLeft: '1vw',
    fontSize: '2.5rem',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
  genre: {
    color: '#fff',
    paddingBottom: '1rem',
    fontSize: '0.7rem',
    paddingLeft: '1vw',
    opacity: '0.6',
  },
  movieDesc: {
    color: '#fff',
    maxWidth: '70vh',
    paddingLeft: '1vw',
    maxHeight: '6.35rem',
    display: 'block',
    overflow: 'hidden',
    fontSize: '.9rem',
    textOverflow: 'ellipsis',
    opacity: '0.7',
    [theme.breakpoints.down('sm')]: {
      fontSize: '.85rem',
    },
  },
  popularity: {
    color: '#fff',
    paddingLeft: '1vw',
    fontWeight: 600,
    marginTop: '0.5rem',
    opacity: '0.8',
  },
  popularityRound: {
    padding: '0.2rem 0.6rem',
    borderRadius: '50px',
    backgroundColor: '#635004',
  },
}))

const HeroSection = (props) => {
  const {
    imagePath,
    title,
    descriptionOverview,
    popularity,
    rating,
    genre,
  } = props
  const classes = useStyles()
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.0),rgba(0,0,0,2)), url("${imagePath}")`,
      }}
    >
      <Container>
        <Typography className={classes.movieTitle} variant="h2">
          {title}
        </Typography>
        <Typography className={classes.genre}>{genre}</Typography>
        <Typography variant="body1" className={classes.movieDesc}>
          {descriptionOverview}
        </Typography>

        <Typography variant="body1" className={classes.popularity}>
          Popularity:{' '}
          <span className={classes.popularityRound}>
            {Math.round(popularity)}%
          </span>
        </Typography>
        <Typography variant="body1" className={classes.popularity}>
          Rating:{' '}
          <span className={classes.popularityRound}>
            {rating}
            <StarIcon style={{ fontSize: '0.8rem', color: 'yellow' }} />
          </span>
        </Typography>
      </Container>
    </div>
  )
}

export default HeroSection
