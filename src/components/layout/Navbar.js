import React, { useState, useContext } from 'react'

import {
  AppBar,
  Toolbar,
  Container,
  Switch,
  Hidden,
  IconButton,
  Typography,
  Drawer,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
} from '@material-ui/core'
import { Menu, Theaters, HighlightOff, Tv, Search } from '@material-ui/icons'

import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'

//asset images
import app_logo from '../../assets/app_logo.svg'
import tmdb_icon from '../../assets/tmdb_icon.svg'

// theme context
import ThemeContext from '../../context/theme/themeContext'

const useStyles = makeStyles((theme) => ({
  hamburgerMenuBtn: {
    marginRight: '0.5rem',
  },
  hamburgerMenuIcon: {
    fontSize: '1.65',
  },
  appLogo: {
    height: '2.2rem',
  },
  drawerAppLogo: {
    height: '1.8rem',
  },
  navLink: {
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    opacity: 0.8,
    fontSize: '0.85rem',
    padding: '1px 10px',
  },
  activNavItem: {
    color: '#EEC100',
    fontSize: '0.85rem',
    fontWeight: 'bold',
  },
}))

const Navbar = () => {
  const classes = useStyles()

  const { isDark, toggleTheme } = useContext(ThemeContext)

  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => setOpenDrawer(!openDrawer)

  return (
    <AppBar position="sticky" color="inherit">
      <Container>
        <Toolbar>
          {/* Mobile Nav */}
          <Hidden smUp>
            <IconButton
              className={classes.hamburgerMenuBtn}
              onClick={toggleDrawer}
            >
              <Menu className={classes.hamburgerMenuIcon} />
            </IconButton>
            <Drawer open={openDrawer} onClose={toggleDrawer}>
              <ListItem style={{ width: '65vw' }}>
                <ListItemIcon>
                  <img
                    src={app_logo}
                    className={classes.drawerAppLogo}
                    alt="RMDb"
                  />
                </ListItemIcon>
                <ListItemSecondaryAction>
                  <IconButton onClick={toggleDrawer}>
                    <HighlightOff style={{ color: '#d9232f' }} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <NavLink to="/" className={classes.navLink}>
                <ListItem
                  button
                  style={{ width: '60vw' }}
                  onClick={toggleDrawer}
                >
                  <ListItemIcon>
                    <Theaters />
                  </ListItemIcon>
                  <ListItemText>Movies</ListItemText>
                </ListItem>
              </NavLink>
              <NavLink to="/tv-shows" className={classes.navLink}>
                <ListItem button onClick={toggleDrawer}>
                  <ListItemIcon>
                    <Tv />
                  </ListItemIcon>

                  <ListItemText>TV Series</ListItemText>
                </ListItem>
              </NavLink>
              <NavLink to="/search" className={classes.navLink}>
                <ListItem button onClick={toggleDrawer}>
                  <ListItemIcon>
                    <Search />
                  </ListItemIcon>
                  <ListItemText>Search</ListItemText>
                </ListItem>
              </NavLink>
            </Drawer>
          </Hidden>

          {/* logo */}
          <NavLink to="/">
            <img src={app_logo} className={classes.appLogo} alt="RMDb" />
          </NavLink>
          <span style={{ flex: 1 }}></span>

          {/* desktop Nav */}
          <Hidden xsDown>
            <Typography style={{ color: 'inherit', opacity: 0.8 }}>
              <NavLink
                exact
                to="/"
                className={classes.navLink}
                activeClassName={classes.activNavItem}
              >
                Movies
              </NavLink>
            </Typography>

            <Typography>
              <NavLink
                exact
                to="/tv-shows"
                className={classes.navLink}
                activeClassName={classes.activNavItem}
              >
                TV Shows
              </NavLink>
            </Typography>

            <Typography style={{ marginRight: '3.2%' }}>
              <NavLink
                exact
                to="/search"
                className={classes.navLink}
                activeClassName={classes.activNavItem}
              >
                Search
              </NavLink>
            </Typography>
          </Hidden>

          {/* toggle theme */}
          <Switch
            checked={isDark}
            color="default"
            onChange={toggleTheme}
            style={{ color: isDark ? 'white' : 'black' }}
          />
          {/* Powered by logo */}
          <Hidden xsDown>
            <img
              src={tmdb_icon}
              height="25"
              alt="RMDb"
              style={{ paddingLeft: '2%' }}
            />
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
