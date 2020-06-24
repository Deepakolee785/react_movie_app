import React, { useContext } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Home from './components/pages/Home'
import Search from './components/pages/Search'
import TVShows from './components/pages/TVShows'

import ThemeContext from './context/theme/themeContext'
import MoviesState from './context/movies/MoviesState'
import TVShowsState from './context/tvShows/tvShowsState'
import MovieDetails from './components/pages/MovieDetails'
import Error404 from './components/pages/Error404'
import TVSeriesDetails from './components/pages/TVSeriesDetails'

const themeDark = createMuiTheme({
  palette: {
    type: 'dark',
  },
})
const themeLight = createMuiTheme({
  palette: {
    type: 'light',
  },
})

const App = () => {
  const { isDark } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <MoviesState>
        <TVShowsState>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/tv-shows" component={TVShows} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/movie/:movie_id" component={MovieDetails} />
              <Route
                exact
                path="/tv-series/:tv_series_id"
                component={TVSeriesDetails}
              />
              <Route exact path="*" component={Error404} />
            </Switch>
            <Footer />
          </Router>
        </TVShowsState>
      </MoviesState>
    </ThemeProvider>
  )
}

export default App
