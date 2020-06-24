import {
  GET_POPULAR_MOVIES,
  GET_NOW_PLAYING_MOVIES,
  GET_TOP_RATED_MOVIES,
  SEARCH_MOVIES,
  SET_LOADING,
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: [...state.popularMovies, ...action.payload],
        popularMoviesPage: state.popularMoviesPage + 1,
      }
    case GET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.payload,
      }
    case GET_NOW_PLAYING_MOVIES:
      return {
        ...state,
        nowPlayingMovies: [...state.nowPlayingMovies, ...action.payload],
        nowPlayingMoviesPage: state.nowPlayingMoviesPage + 1,
      }
    case SEARCH_MOVIES:
      return {
        ...state,
        searchResult: action.payload,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      }
    default:
      return state
  }
}
