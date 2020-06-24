import React, { useState, useEffect, Fragment } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Loading from '../layout/Loading'
import { Paper, Container, Typography, Grid, Card } from '@material-ui/core'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import TvIcon from '@material-ui/icons/Tv'
import StopIcon from '@material-ui/icons/Stop'
import { makeStyles } from '@material-ui/core/styles'
import SectionHeading from '../layout/SectionHeading'

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    height: '80vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '45rem',
    },
  },
  innerHeroContainer: {
    width: '80vw',
    height: '60vh',
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
      height: '30rem',
    },
  },
  posterImg: {
    width: '30%',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '36%',
    },
  },
  movieTitle: {
    fontSize: '2.2rem',
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
      fontWeight: 700,
    },
  },
  movieSubheading: {
    fontSize: '1rem',
    fontWeight: 600,
    marginTop: '1rem',
  },
  movieContent: {
    fontSize: '0.8rem',
    fontWeight: 500,
    opacity: 0.8,
    maxHeight: '8.5rem',
    overflow: 'hidden',
  },
  rating: {
    height: '2.8rem',
    width: '2.8rem',
    backgroundColor: 'rgb(238, 193, 0,0.4)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  headerPaper: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: '#fff',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem',
    },
  },
  headerBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '5rem',
  },
  headerBottomContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomHeaderIcon: {
    fontSize: '2.2rem',
    marginRight: '0.5rem',
  },
  castGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailRect: {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    marginTop: '0.5rem',
    backgroundColor: 'rgb(238, 193, 0,0.4)',
    width: '9rem',
    padding: '0.2rem',
    borderRadius: '2px',
  },
  goBackLink: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
    display: 'flex',
    position: 'absolute',
    top: '4.5rem',
    left: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    transition: ' all .1s ease-in',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}))

const TVSeriesDetails = (props) => {
  const classes = useStyles()

  const baseUrl = 'https://api.themoviedb.org/3/tv/'
  const baseImageURL = 'https://image.tmdb.org/t/p/original/'

  const API_KEY = process.env.REACT_APP_API_KEY
  let { tv_series_id } = useParams()

  const [tvSeries, setTvSeries] = useState(null)
  const [casts, setCasts] = useState([])

  useEffect(() => {
    axios
      .get(`${baseUrl}${tv_series_id}?api_key=${API_KEY}`)
      .then((res) => setTvSeries(res.data))
      .catch((err) => console.log(err))

    axios
      .get(`${baseUrl}${tv_series_id}/credits?api_key=${API_KEY}`)
      .then((res) => setCasts(res.data.cast))
      .catch((err) => console.log(err))
    // eslint-disable-next-line
  }, [tv_series_id])
  // console.log(tvSeries)

  if (tvSeries === null) {
    return <Loading />
  }

  return (
    <Fragment>
      {tvSeries.length !== 0 ? (
        <Fragment>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(${baseImageURL}${tvSeries.backdrop_path})`,
            }}
            className={classes.heroContainer}
          >
            {/* go back link */}
            <Link to="/tv-shows" className={classes.goBackLink}>
              <ArrowBackIcon
                style={{ fontSize: '1.5rem', marginRight: '0.2rem' }}
              />{' '}
              Back
            </Link>
            <div className={classes.innerHeroContainer}>
              <img
                src={`${baseImageURL}${tvSeries.poster_path}`}
                alt=""
                className={classes.posterImg}
              />
              <div style={{ padding: '1rem 0 0 2rem' }}>
                <Typography variant="h4" className={classes.movieTitle}>
                  {tvSeries.name}
                </Typography>
                <Typography variant="body1" className={classes.movieContent}>
                  {tvSeries.tagline}
                </Typography>
                <Typography variant="h6" className={classes.movieSubheading}>
                  PLOT
                </Typography>
                <Typography variant="body1" className={classes.movieContent}>
                  {tvSeries.overview}
                </Typography>
                <div style={{ display: 'flex' }}>
                  <div>
                    <Typography
                      variant="h6"
                      className={classes.movieSubheading}
                    >
                      Rating
                    </Typography>
                    <Typography variant="body1" className={classes.rating}>
                      {tvSeries.vote_average}
                    </Typography>
                  </div>
                  <div style={{ marginLeft: '1rem' }}>
                    <Typography
                      variant="h6"
                      className={classes.movieSubheading}
                    >
                      Popularity
                    </Typography>
                    <Typography variant="body1" className={classes.rating}>
                      {Math.round(tvSeries.popularity)}%
                    </Typography>
                  </div>
                </div>
                <Typography className={classes.detailRect}>
                  First Aired on {tvSeries.first_air_date}
                </Typography>
                <Typography className={classes.detailRect}>
                  Total Seasons: {tvSeries.number_of_seasons}
                </Typography>
                <Typography className={classes.detailRect}>
                  {tvSeries.status}
                </Typography>
              </div>
            </div>
          </div>
          <Paper className={classes.headerPaper}>
            <Container className={classes.headerBottom}>
              <div className={classes.headerBottomContainer}>
                <QueryBuilderIcon className={classes.bottomHeaderIcon} />
                <p>Eposide Runtime: {tvSeries.episode_run_time} mins</p>
              </div>
              <div className={classes.headerBottomContainer}>
                <TvIcon className={classes.bottomHeaderIcon} />
                <p>Episodes: {tvSeries.number_of_episodes} </p>
              </div>
              <div className={classes.headerBottomContainer}>
                <StopIcon className={classes.bottomHeaderIcon} />
                <p>Last Aired on:{tvSeries.last_air_date}</p>
              </div>
            </Container>
          </Paper>
          <Paper>
            <Container>
              <SectionHeading title="Shows Casts" />
              <Grid container spacing={5} className={classes.castGrid}>
                {casts.map((cast, index) => {
                  const { profile_path, name, character } = cast
                  return (
                    <Grid item key={index}>
                      <Card>
                        <img
                          src={`${baseImageURL}${profile_path}`}
                          alt=""
                          style={{
                            width: '12rem',
                            height: '15rem',
                          }}
                        />
                        <div style={{ marginLeft: '0.5rem' }}>
                          <Typography
                            style={{ fontSize: '0.9rem', fontWeight: 'bold' }}
                          >
                            {name}
                          </Typography>
                          <Typography
                            style={{ fontSize: '0.75rem', opacity: '0.8' }}
                          >
                            as {character}
                          </Typography>
                        </div>
                      </Card>
                      <br />
                    </Grid>
                  )
                })}
              </Grid>
            </Container>
          </Paper>
        </Fragment>
      ) : (
        <Loading />
      )}
    </Fragment>
  )
}

export default TVSeriesDetails
