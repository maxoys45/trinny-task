import { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import CircularProgress from '@material-ui/core/CircularProgress'

import { getCardDetails } from './api'
import styles from './styles'

const ProblemTwo = ({ classes }: any) => {
  const initialCardState = {
    title: '',
    imgSrc: '',
    body: '',
    loading: true,
  }

  const [cardState, setCardState] = useState(initialCardState)

  useEffect(() => {
    try {
      // @ts-ignore
      getCardDetails().then(data => {
        if (!data) {
          throw new Error('No Data')
        }

        setCardState({
          title: data.title,
          imgSrc: data.imgSrc,
          body: data.body,
          loading: false,
        })
      })
    } catch (e) {
      throw e
    }
  }, [])

  const { title, imgSrc, body, loading } = cardState

  if (loading) {
    return (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          component='img'
          image={imgSrc}
          alt=''
        />

        <CardContent className={classes.content}>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>

          <div
            className={classes.body}
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </CardContent>
      </Card>
    </div>
  )
}

// @ts-ignore
export default withStyles(styles)(ProblemTwo)
