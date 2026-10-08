import type { Task } from "../types/task";

interface TaskListProps {
  tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <section>
      <h2>Tasks</h2>
      {!tasks.length ? (<p>No Tasks available</p>) : (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong>
            <span>-{task.status}</span>
          </li>
        ))}
      </ul>
      )}
    </section>
  );
}

export default TaskList;
