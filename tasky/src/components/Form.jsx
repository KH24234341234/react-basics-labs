<<<<<<< HEAD
const AddTaskForm = (props) => {

  return (
    <div>
      <form onSubmit={props.submit}>
        <label>
            Task title:
            <input type="text" name="title" required onChange={(event) => props.change(event)} />
        </label>
        <br />
        <label>
            Due date:
            <input type="date" name="deadline" required onChange={(event) => props.change(event)} />
        </label>
        <br />
        <label>
            Details:
            <input type="text" name="description" onChange={(event) => props.change(event)} />
        </label>
        <input type="submit" value="Submit" />

        
        <label>
            Priority:
            <select className="prioritySelect" name="priority" required onChange={props.change} defaultValue="low"> 
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </label>

        
        </form>
    </div>
  )
=======
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const AddTaskForm = (props) => {

    return (

        <Box
            component="form"
            sx={{
                '& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
            }}
            onSubmit={props.submit}
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    name="title"
                    label="Task Title"
                    slotProps={{ inputLabel: { shrink: true } }}
                    onChange={(event) => props.change(event)}
                />
            </div>

            <div>
                <TextField
                    required
                    name="deadline"
                    label="Deadline"
                    slotProps={{ inputLabel: { shrink: true } }}
                    type="date"
                    onChange={(event) => props.change(event)}
                />
            </div>

            <div>
                <TextField
                    name="description"
                    id="outlined-multiline-static"
                    label="Task Details"
                    slotProps={{ inputLabel: { shrink: true } }}
                    multiline
                    rows={4}
                    onChange={(event) => props.change(event)}
                />
            </div>

            <div>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                        m: 1,
                        p: 1,
                        width: '95%'
                    }}
                >
                    Add Task
                </Button>
            </div>
        </Box>




    )
>>>>>>> b41be19 (Tasky Lab 3 Done)
};

export default AddTaskForm;
