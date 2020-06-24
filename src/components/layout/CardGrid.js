import React, { Fragment } from 'react'
import { Grid, Button } from '@material-ui/core'
import MuiCard from './MuiCard'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: '#fff',
    backgroundColor: '#EEC100',
    textTransform: 'initial',
    margin: '3rem 0',
    left: '50%',
    transform: ' translate(-50%, -50%)',
  },
}))

const CardGrid = ({ type, popularItemList, load }) => {
  const classes = useStyles()
  return (
    <Fragment>
      <Grid container spacing={4} className={classes.root}>
        {type === 'movies'
          ? popularItemList.map((item, index) => {
              if (type === 'movies') {
              }
              const {
                id,
                poster_path,
                title,
                vote_average,
                release_date,
                genre_ids,
              } = item
              return (
                <Grid item key={index}>
                  <Link
                    to={`/movie/${id}`}
                    style={{ textDecoration: 'initial' }}
                  >
                    <MuiCard
                      poster_path={poster_path}
                      title={title}
                      rating={vote_average}
                      release_date={release_date}
                      genre_ids={genre_ids}
                    />
                  </Link>
                </Grid>
              )
            })
          : popularItemList.map((movieItem, index) => {
              const {
                id,
                poster_path,
                name,
                vote_average,
                first_air_date,
                genre_ids,
              } = movieItem
              return (
                <Grid item key={index}>
                  <Link
                    to={`/tv-series/${id}`}
                    style={{ textDecoration: 'initial' }}
                  >
                    <MuiCard
                      poster_path={poster_path}
                      title={name}
                      rating={vote_average}
                      release_date={first_air_date}
                      genre_ids={genre_ids}
                    />
                  </Link>
                </Grid>
              )
            })}
      </Grid>
      <Button onClick={load} variant="contained" className={classes.button}>
        Load More
      </Button>

      <br />
      <br />
    </Fragment>
  )
}

export default CardGrid
