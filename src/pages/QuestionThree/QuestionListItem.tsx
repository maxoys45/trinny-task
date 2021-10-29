import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import Divider from '@material-ui/core/Divider'
const useStyles = makeStyles(() => ({
  header: {
    fontWeight: 'bold',
    display: 'inline',
    marginRight: 4,
  },
  label: {
    display: 'inline',
  },
}))

export const QuestionListItem = ({
  item: { icon, name, species, id, description },
  divider,
}: any) => {
  const Icon = icon
  const classes = useStyles()

  return (
    <>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar>
            <Icon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText
          // This is spitting out an error about nesting block level elements inside a <p> but it seems unrelated to the task. I've supressed a few of the errors from the children but didn't get round to re-factoring the whole ListItemText component.
          primary={`${name}: ${species ? species : 'Other'}`}
          secondary={
            <>
              <div>
                <Typography
                  variant='subtitle2'
                  component={'span'}
                  className={classes.header}
                >
                  Description:
                </Typography>
                <Typography
                  variant='body2'
                  component={'span'}
                  className={classes.label}
                >
                  {description}
                </Typography>
              </div>

              <div>
                <Typography
                  variant='subtitle2'
                  component={'span'}
                  className={classes.header}
                >
                  Guid:
                </Typography>
                <Typography
                  variant='body2'
                  component={'span'}
                  className={classes.label}
                >
                  {id ? id : 'ERROR '}
                </Typography>
              </div>
            </>
          }
        />
      </ListItem>

      {divider && <Divider variant='middle' />}
    </>
  )
}
