const Task = (props) => {

    {/*Very simple and messy but works, simple check what priority type is and change accordingly */}
    let priorityColor = 'green';

    if (props.priority === "high") {
        priorityColor = "red";
    }

    if (props.priority === 'medium') {

        priorityColor = 'orange';
    }
    
    return (

        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>

            
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
            {/*new prop class created here, in same vein as title */}
            <p className ="description">{props.description}</p>  
            <p className ="priority" style={{ color: priorityColor}}>
            {props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>



        </div>
    )
}

export default Task;
