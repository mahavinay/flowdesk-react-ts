import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import type { Task } from "./types/task";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

const initialTasks: Task[] = [
{
  id:1,
  title: 'Learn React',
  description: 'Get started with React',
  status: 'in-progress',
  priority: 'high'
},
{
  id:2,
  title: 'Build FlowDesk App',
  description: 'Create the first version of FlowDesk',
  status: 'todo',
  priority: 'high'
},
{
  id: 3,
  title: 'Write tests',
  description: 'Add Component Test',
  status: 'todo',
  priority: 'medium'
}

]



function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (task: Task) => {
    setTasks((currentTasks) => [...currentTasks, task]);
  }
  
  return (
    <div>
      <Sidebar />

      <div>
        <Header />
        <main>
          <h2>Dashboard</h2>
          <AddTaskForm onAddTask={addTask} />
          <TaskList tasks={tasks} />
        </main>
      </div>
    </div>
  );
}

export default App;
