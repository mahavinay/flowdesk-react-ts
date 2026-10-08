import {useState} from "react";
import type { Task } from "../types/task";

interface AddTaskFormProps {
    onAddTask: (task: Task) => void;
}

function AddTaskForm({onAddTask} : AddTaskFormProps) {
    const [title, setTitle] = useState("");

    return (
        <form onSubmit={(event) =>{
            event.preventDefault();

            const newTask :Task = {
                id: Date.now(),
                title,
                description: "",
                status:'todo',
                priority: 'medium'
            }

            onAddTask(newTask)
            setTitle('')
        }}>
            <h2>Add Task</h2>
            <input type="text" value={title}
            placeholder="Task Title" 
            onChange={(e) => setTitle(e.target.value)}/>

            <button type='submit'>Add Task</button>
        </form>
    )
}

export default AddTaskForm;