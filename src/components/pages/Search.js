import React, { useState, useContext } from 'react'
import {
  TextField,
  Container,
  Paper,
  Grid,
  Box,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import MoodIcon from '@material-ui/icons/Mood'
import { Link } from 'react-router-dom'

import MoviesContext from '../../context/movies/moviesContext'

import loadingImg from '../../assets/serchbar_loding.svg'
import movies_banner from '../../assets/movies_banner.jpg'
import MuiCard from '../layout/MuiCard'

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    height: '50vh',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.6)),url(${movies_banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formSelect: {
    width: '60vw',
    marginTop: '1.5rem',
    backgroundColor: 'rgba(238, 193, 0, 1)',
    paddingLeft: '.5rem',
    fontSize: '0.8rem',
    fontWeight: 500,
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '10rem',
  },
  placeholder: {
    '&::placeholder': {
      // color: 'blue',
    },
  },
}))

const Search = () => {
  const classes = useStyles()

  const { searchMovies, searchResult, loading } = useContext(MoviesContext)

  const [query, setQuery] = useState('')

  const handleChange = (event) => setQuery(event.target.value)

  const handleSearch = (event) => {
    searchMovies(query)
    event.preventDefault()
  }

  return (
    <Paper className={classes.container}>
      <Box component="div" className={classes.header}>
        <form onSubmit={handleSearch}>
          <TextField
            onChange={handleChange}
            value={query}
            fullWidth
            placeholder="Search Movie"
            className={classes.formSelect}
            InputProps={{
              disableUnderline: true,
              startAdornment: <SearchIcon />,
              endAdornment: loading && (
                <img
                  src={loadingImg}
                  alt=""
                  style={{ height: '1.5rem', paddingRight: '0.5rem' }}
                />
              ),
              classes: { input: classes.placeholder },
            }}
          />
        </form>
      </Box>
      <Container>
        <Box
          component="div"
          style={{
            minHeight: '40vh',
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {searchResult === null ? (
            <>
              <MoodIcon style={{ color: '#eec100' }} />
              <Typography variant="h6" style={{ fontSize: '1rem' }}>
                Search your Favourite Movie
              </Typography>
            </>
          ) : (
            <>
              {searchResult.length === 0 ? (
                <Typography
                  style={{
                    fontSize: '1rem',
                    margin: '1rem auto',
                    textAlign: 'right',
                  }}
                >
                  No results found for your query <strong>"{query}"</strong>
                </Typography>
              ) : (
                <Typography
                  style={{
                    fontSize: '1rem',
                    margin: '1rem auto',
                    textAlign: 'right',
                  }}
                >
                  Result for <strong>"{query}"</strong> ( {searchResult.length}{' '}
                  items found )
                </Typography>
              )}
              <hr />
              <br />
              <Grid
                container
                spacing={4}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {searchResult.map((movie) => {
                  const {
                    id,
                    poster_path,
                    title,
                    vote_average,
                    release_date,
                    genre_ids,
                  } = movie
                  return (
                    <Link
                      key={id}
                      to={`/movie/${id}`}
                      style={{ textDecoration: 'initial' }}
                    >
                      <Grid item>
                        <MuiCard
                          poster_path={poster_path}
                          title={title}
                          rating={vote_average}
                          release_date={release_date}
                          genre_ids={genre_ids}
                        />
                      </Grid>
                    </Link>
                  )
                })}
              </Grid>
            </>
          )}
        </Box>
      </Container>
      <br />
      <br />
    </Paper>
  )
}

export default Search
