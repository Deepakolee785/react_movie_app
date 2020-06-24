import React, { useReducer } from 'react'
import axios from 'axios'

import MoviesContext from './moviesContext'
import moviesReducer from './moviesReducer'

import {
  GET_POPULAR_MOVIES,
  GET_NOW_PLAYING_MOVIES,
  GET_TOP_RATED_MOVIES,
  SEARCH_MOVIES,
  SET_LOADING,
} from '../types'

const API_KEY = process.env.REACT_APP_API_KEY
const baseURL = 'https://api.themoviedb.org/3/'

const MoviesState = (props) => {
  const initialState = {
    popularMovies: [],
    popularMoviesPage: 1,
    topRatedMovies: [],
    nowPlayingMovies: [],
    nowPlayingMoviesPage: 1,
    searchResult: null,
    loading: false,
  }

  const [state, dispatch] = useReducer(moviesReducer, initialState)

  // get popular movies
  const getPouplarMovies = async () => {
    try {
      const res = await axios.get(
        `${baseURL}movie/popular?api_key=${API_KEY}&language=en-US&page=${state.popularMoviesPage}&include_adult=false`
      )
      // console.log(res.data)

      dispatch({
        type: GET_POPULAR_MOVIES,
        payload: res.data.results,
      })
    } catch (err) {
      console.log(err)
    }
  }
  // top rated movies
  const getTopRatedMovies = async () => {
    try {
      const res = await axios.get(
        `${baseURL}movie/top_rated?api_key=${API_KEY}&language=en-US`
      )
      // console.log(res.data)

      dispatch({
        type: GET_TOP_RATED_MOVIES,
        payload: res.data.results,
      })
    } catch (err) {
      console.log(err)
    }
  }

  // now playing movies
  const getNowPlayingMovies = async () => {
    try {
      const res = await axios.get(
        `${baseURL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=${state.nowPlayingMoviesPage}`
      )

      dispatch({
        type: GET_NOW_PLAYING_MOVIES,
        payload: res.data.results,
      })
    } catch (err) {
      console.log(err)
    }
  }

  // set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }

  // search movies
  const searchMovies = async (query) => {
    setLoading()
    try {
      const res = await axios.get(
        `${baseURL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      )

      dispatch({
        type: SEARCH_MOVIES,
        payload: res.data.results,
      })
      setLoading()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <MoviesContext.Provider
      value={{
        popularMovies: state.popularMovies,
        topRatedMovies: state.topRatedMovies,
        nowPlayingMovies: state.nowPlayingMovies,
        searchResult: state.searchResult,
        loading: state.loading,
        getPouplarMovies,
        getTopRatedMovies,
        getNowPlayingMovies,
        searchMovies,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  )
}

export default MoviesState
