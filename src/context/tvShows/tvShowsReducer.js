import {
  GET_POPULAR_TVSHOWS,
  GET_NOW_PLAYING_TVSHOWS,
  GET_TOP_RATED_TVSHOWS,
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_POPULAR_TVSHOWS:
      return {
        ...state,
        popularTVShows: [...state.popularTVShows, ...action.payload],
        popularTVShowsPage: state.popularTVShowsPage + 1,
      }
    case GET_TOP_RATED_TVSHOWS:
      return {
        ...state,
        topRatedTVShows: action.payload,
      }
    case GET_NOW_PLAYING_TVSHOWS:
      return {
        ...state,
        nowPlayingTVShows: [...state.nowPlayingTVShows, ...action.payload],
        nowPlayingTVShowsPage: state.nowPlayingTVShowsPage + 1,
      }

    default:
      return state
  }
}
