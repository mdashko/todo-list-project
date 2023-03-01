import "./App.css";
import {useState} from "react";
import {Task} from "./components/task/Task";
import {Modal} from "./components/modal/Modal";

function App() {
    const [todoLst, setTodoLst] = useState([]);
    const [taskName, setTaskName] = useState("");
    const [descr, setDescr] = useState("");
    const [error, setError] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [selectIndex, setSelectIndex] = useState(0);

    const handleTaskName = (event) => {
        setTaskName(event.target.value);
    };

    const handleDescr = (event) => {
        setDescr(event.target.value);
    };

    const createTask = () => {
        if (taskName) {
            const task = {
                taskID: (todoLst[todoLst.length - 1]?.taskID || 0) + 1,
                taskName: taskName,
                taskDescr: descr,
                taskStatus: false,
            };
            setTodoLst([...todoLst, task]);
            setError(false);
        } else {
            setError(true);
        }
    };

    const changeStatus = (id) => {
        setTodoLst(todoLst.map((task) => {
            return {...task, taskStatus: task.taskID === id ? !task.taskStatus : task.taskStatus};
        }));
    };

    return (<div className="App">
        <div className="addTask">
            <div>
                <p>Title:</p>
                <input
                    style={{borderColor: error ? "red" : "inherit"}}
                    placeholder="Enter title"
                    onChange={handleTaskName}
                />
                {error && <p className="errorText">
                    This field is empty
                </p>}
            </div>
            <div>
                <p>Decription:</p>
                <input placeholder="Enter description" onChange={handleDescr}/>
            </div>
            <button type="submit" onClick={createTask}>
                Create
            </button>
        </div>
        <div>
            <div className="menuBar">
                <p>ID</p>
                <p>TITLE</p>
                <p>DESCRIPTION</p>
                <p>STATUS</p>
            </div>
            <div className="list">
                {todoLst.map((task, index) => {
                    return (<Task
                        taskState={task}
                        changeStatus={changeStatus}
                        onClick={() => {
                            setIsShow(true);
                            setSelectIndex(index);
                        }}
                    />);
                })}

                {isShow && (<Modal
                    isShow={isShow}
                    taskName={todoLst[selectIndex].taskName}
                    taskDescr={todoLst[selectIndex].taskDescr}
                    taskStatus={todoLst[selectIndex].taskStatus}
                    onClose={() => setIsShow(false)}
                />)}
            </div>
        </div>
    </div>);
}

export default App;
