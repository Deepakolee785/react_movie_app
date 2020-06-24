import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import StarIcon from '@material-ui/icons/Star'
import { getGeneres } from '../../utils/geners'
const useStyles = makeStyles({
  root: {
    width: 282,
    height: '37rem',
    transition: 'all 100ms ease-in-out',
    '&:hover': {
      transform: 'scale(1.01)',
      opacity: '0.9',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: '.85rem',
    fontWeight: 'bold',
    textOverflow: 'ellipsis',
    width: 275,
  },
  media: {
    height: '20rem',
    width: '20rem',
    paddingTop: '56.25%', // 16:9
  },
  pos: {
    fontSize: '.8rem',
  },
  genre: {
    fontSize: '0.8rem',
  },
})

export default function MuiCard(props) {
  const classes = useStyles()
  const { variant, poster_path, title, rating, release_date, genre_ids } = props

  return (
    <Card className={classes.root} variant={variant}>
      <CardMedia
        className={classes.media}
        image={`https://image.tmdb.org/t/p/original/${poster_path}`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <StarIcon style={{ color: '#FFC107' }} />
          {rating === 0 ? 'N/A' : rating} | {release_date}
        </Typography>
        <Typography variant="body2" component="p" className={classes.genre}>
          {getGeneres(genre_ids)}
        </Typography>
      </CardContent>
    </Card>
  )
}
