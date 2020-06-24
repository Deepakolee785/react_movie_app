import React, { Fragment, useContext, useEffect } from 'react'

import { Paper, Container } from '@material-ui/core'

import SectionHeading from '../layout/SectionHeading'
import HeroSection from '../layout/HeroSection'
import Loading from '../layout/Loading'

import TVShowsContext from '../../context/tvShows/tvShowsContext'
import CardGrid from '../layout/CardGrid'
import CardCarousel from '../layout/CardCarousel'
import { getGeneres } from '../../utils/geners'

const TVShows = () => {
  const baseImageURL = 'https://image.tmdb.org/t/p/original/'

  const {
    popularTVShows,
    topRatedTVShows,
    nowPlayingTVShows,
    getPouplarTVShows,
    getTopRatedTVShows,
    getNowPlayingTVShows,
  } = useContext(TVShowsContext)

  useEffect(() => {
    getPouplarTVShows()
    getTopRatedTVShows()
    getNowPlayingTVShows()

    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      {/* header banner */}
      {popularTVShows.length !== 0 ? (
        <HeroSection
          imagePath={`${baseImageURL}${popularTVShows[0].backdrop_path}`}
          title={popularTVShows[0].original_name}
          descriptionOverview={popularTVShows[0].overview}
          popularity={popularTVShows[0].popularity}
          rating={popularTVShows[0].vote_average}
          genre={getGeneres(popularTVShows[0].genre_ids)}
        />
      ) : (
        <Loading />
      )}

      <Paper style={{ margin: '-1.5rem' }}>
        <Container>
          <SectionHeading title="Popular TV Shows" />

          {popularTVShows.length !== 0 ? (
            <CardGrid
              popularItemList={popularTVShows}
              load={getPouplarTVShows}
            />
          ) : (
            <Loading />
          )}
          <SectionHeading title="Top Rated TV shows" />
          {topRatedTVShows.length !== 0 ? (
            <CardCarousel itemList={topRatedTVShows} />
          ) : (
            <Loading />
          )}

          <SectionHeading title="TV Shows on The Air" />

          {nowPlayingTVShows.length !== 0 ? (
            <CardGrid
              popularItemList={nowPlayingTVShows}
              load={getNowPlayingTVShows}
            />
          ) : (
            <Loading />
          )}
        </Container>
      </Paper>
    </Fragment>
  )
}

export default TVShows
