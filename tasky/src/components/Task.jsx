const Task = (props) => {
    
    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
            {/*new prop class created here, in same vein as title */}
            <p className ="description">{props.description}</p>  
        </div>
    )
}

export default Task;
