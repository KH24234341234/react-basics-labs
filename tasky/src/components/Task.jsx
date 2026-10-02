import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import Chip from '@mui/material/Chip';




const Task = (props) => {

  {/*Very simple and messy but works, simple check what priority type is and change accordingly */ }
  let priorityColor = 'green';

  if (props.priority === "high") {
    priorityColor = "red";
  }

  if (props.priority === 'medium') {

    priorityColor = 'orange';
  }

  return (
    <Grid
      key={props.id}
      size={{ xs: 12, sm: 6, md: 4 }}
    >
      <Card
        sx={{
          backgroundColor: props.done ? 'lightgrey' : 'lightblue',
          padding: '20px'
        }}
      >
        <CardHeader
          title={props.title}
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            borderRadius: '3px',
            padding: '20px',
            textAlign: 'center'
          }}
        />

        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'baseline',
              mb: 2,
              padding: '20px'
            }}
          >
            <Typography
              component="p"
              variant="subtitle2"
              color="text.primary"
            >
              Due: {props.deadline}
            </Typography>
          </Box>
          

           <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'baseline',
              mb: 2,
              padding: '20px'
            }}
          >

          <Chip
            label={`Priority: ${props.priority}`}
            color={
              props.priority === 'high'
                ? 'error'
                : props.priority === 'medium'
                  ? 'warning'
                  : 'success'
            }
          />

          <Chip
            label={props.done ? 'Completed' : 'Not completed'}
            color={props.done ? 'success' : 'default'}
            variant={props.done ? 'filled' : 'outlined'}
          />

          </Box>

        <Typography
          component="p"
          variant="subtitle1"
          align="center"
          sx={{ fontStyle: 'bold' }}
        >
          {props.description}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          justifyContent: 'space-between',
          padding: '15px'
        }}
      >
        <Button
          variant="contained"
          size="small"
          color="success"
          startIcon={<CheckCircleIcon />}
          onClick={props.markDone}
        >
          Done
        </Button>

        <Button
          variant="contained"
          size="medium"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={props.deleteTask}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
    </Grid >



  )
}

export default Task;
