import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ReactCardCarousel from 'react-card-carousel'
import { getGeneres } from '../../utils/geners'
import TopRatedCard from './TopRatedCard'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '45rem',
    width: '75vw',
    margin: '1rem auto 5rem auto',
  },
}))

const CardCarousel = ({ type, itemList }) => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <ReactCardCarousel autoplay={true} autoplay_speed={5000}>
          {type === 'movies'
            ? itemList.map((item, index) => {
                const {
                  backdrop_path,
                  title,
                  vote_average,
                  release_date,
                  overview,
                  genre_ids,
                } = item
                return (
                  <TopRatedCard
                    key={index}
                    imageURl={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                    title={title}
                    rating={vote_average}
                    release_date={release_date}
                    geners={getGeneres(genre_ids)}
                    overview={overview}
                  />
                )
              })
            : itemList.map((movieItem, index) => {
                const {
                  backdrop_path,
                  name,
                  vote_average,
                  first_air_date,
                  genre_ids,
                  overview,
                } = movieItem
                return (
                  <TopRatedCard
                    key={index}
                    imageURl={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                    title={name}
                    rating={vote_average}
                    release_date={first_air_date}
                    geners={getGeneres(genre_ids)}
                    overview={overview}
                  />
                )
              })}
        </ReactCardCarousel>
      </div>
    </>
  )
}

export default CardCarousel
