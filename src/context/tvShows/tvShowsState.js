import React, { useReducer } from 'react'
import axios from 'axios'

import TVShowsContext from './tvShowsContext'
import tvShowsReducer from './tvShowsReducer'

import {
  GET_POPULAR_TVSHOWS,
  GET_NOW_PLAYING_TVSHOWS,
  GET_TOP_RATED_TVSHOWS,
} from '../types'

const API_KEY = process.env.REACT_APP_API_KEY
const baseURL = 'https://api.themoviedb.org/3/'

const TVShowsState = ({ children }) => {
  // const [pageNumber, setPageNumber] = useState(1)
  const initialState = {
    popularTVShows: [],
    popularTVShowsPage: 1,
    topRatedTVShows: [],
    nowPlayingTVShows: [],
    nowPlayingTVShowsPage: 1,
  }

  const [state, dispatch] = useReducer(tvShowsReducer, initialState)

  // get popular TVShows
  const getPouplarTVShows = async () => {
    try {
      const res = await axios.get(
        `${baseURL}tv/popular?api_key=${API_KEY}&language=en-US&page=${state.popularTVShowsPage}&include_adult=false`
      )

      dispatch({
        type: GET_POPULAR_TVSHOWS,
        payload: res.data.results,
      })
    } catch (err) {
      console.log(err)
    }
  }
  // top rated TVShows
  const getTopRatedTVShows = async () => {
    try {
      const res = await axios.get(
        `${baseURL}tv/top_rated?api_key=${API_KEY}&language=en-US`
      )

      dispatch({
        type: GET_TOP_RATED_TVSHOWS,
        payload: res.data.results,
      })
    } catch (err) {
      console.log(err)
    }
  }

  // now playing TVShows
  const getNowPlayingTVShows = async () => {
    try {
      const res = await axios.get(
        `${baseURL}tv/on_the_air?api_key=${API_KEY}&language=en-US&page=${state.nowPlayingTVShowsPage}`
      )

      dispatch({
        type: GET_NOW_PLAYING_TVSHOWS,
        payload: res.data.results,
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <TVShowsContext.Provider
      value={{
        popularTVShows: state.popularTVShows,
        topRatedTVShows: state.topRatedTVShows,
        nowPlayingTVShows: state.nowPlayingTVShows,
        searchResult: state.searchResult,
        getPouplarTVShows,
        getTopRatedTVShows,
        getNowPlayingTVShows,
      }}
    >
      {children}
    </TVShowsContext.Provider>
  )
}

export default TVShowsState
