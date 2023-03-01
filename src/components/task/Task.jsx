export const Task = (props) => {
    const {
        taskID,
        taskName,
        taskDescr,
        taskStatus
    } = props.taskState;
    return (
        <div className="task" onClick={props.onClick}>
            <p className="task_task-id">{taskID} </p>
            <p className="task_task-name">{taskName}</p>
            <p className="task_task-descr">{taskDescr}</p>
            <input
                onClick={(e) => {
                    e.stopPropagation();
                }}
                type="checkbox"
                onChange={(e) => {
                    props.changeStatus(taskID);
                }}
                checked={taskStatus}
            />
        </div>
    );
};
