import React, { Fragment, useContext, useEffect } from 'react'
import { Paper, Container } from '@material-ui/core'

import SectionHeading from '../layout/SectionHeading'
import HeroSection from '../layout/HeroSection'
import Loading from '../layout/Loading'

import MoviesContext from '../../context/movies/moviesContext'
import CardGrid from '../layout/CardGrid'
import CardCarousel from '../layout/CardCarousel'
import { getGeneres } from '../../utils/geners'

const Home = () => {
  const baseImageURL = 'https://image.tmdb.org/t/p/original/'

  const {
    popularMovies,
    getPouplarMovies,
    topRatedMovies,
    getTopRatedMovies,
    nowPlayingMovies,
    getNowPlayingMovies,
  } = useContext(MoviesContext)

  useEffect(() => {
    getPouplarMovies()
    getTopRatedMovies()
    getNowPlayingMovies()

    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      {popularMovies.length !== 0 ? (
        <HeroSection
          imagePath={`${baseImageURL}${popularMovies[0].backdrop_path}`}
          title={popularMovies[0].original_title}
          descriptionOverview={popularMovies[0].overview}
          popularity={popularMovies[0].popularity}
          rating={popularMovies[0].vote_average}
          genre={getGeneres(popularMovies[0].genre_ids)}
        />
      ) : (
        <Loading />
      )}

      <Paper style={{ margin: '-1.5rem' }}>
        <Container>
          <SectionHeading title="Popular Movies" />
          {popularMovies.length !== 0 ? (
            <CardGrid
              type="movies"
              popularItemList={popularMovies}
              load={getPouplarMovies}
            />
          ) : (
            <Loading />
          )}
          <SectionHeading title="Top Rated Movies" />

          {topRatedMovies.length !== 0 ? (
            <CardCarousel type="movies" itemList={topRatedMovies} />
          ) : (
            <Loading />
          )}
          <SectionHeading title="Now Playing Movies" />
          {nowPlayingMovies.length !== 0 ? (
            <CardGrid
              type="movies"
              popularItemList={nowPlayingMovies}
              load={getNowPlayingMovies}
            />
          ) : (
            <Loading />
          )}
        </Container>
      </Paper>
    </Fragment>
  )
}

export default Home
