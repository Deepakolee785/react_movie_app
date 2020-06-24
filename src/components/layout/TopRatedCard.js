import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import StarIcon from '@material-ui/icons/Star'

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    height: 'auto',
    width: 'auto',
    color: '#FFF',
    fontSize: '12px',
    // textTransform: 'uppercase',
    borderRadius: '10px',
  },
}))

const TopRatedCard = ({
  imageURl,
  title,
  rating,
  release_date,
  geners,
  overview,
}) => {
  const classes = useStyles()
  return (
    <div className={classes.cardContainer}>
      <Card>
        <CardMedia
          style={{
            height: '58vh',
            width: '55vw',
          }}
          image={imageURl}
        />
        <CardContent>
          <Typography variant="body1" component="h2">
            {title}
          </Typography>
          <Typography color="textSecondary">
            <StarIcon style={{ color: '#FFC107' }} />
            {rating === 0 ? 'N/A' : rating} | {release_date}
          </Typography>
          <Typography variant="body2" component="p">
            {geners}
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            style={{ fontSize: '0.8rem', opacity: '0.5' }}
          >
            <span
              style={{
                fontWeight: 'bold',
                opacity: '1',
              }}
            >
              Overview:
            </span>
            {overview}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default TopRatedCard
