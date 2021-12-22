import Task from "./Task";
import { TaskContext } from "./Context";
import { useContext } from "react";
export default function Tasks({ onDelete, onToggle }) {
  const ctasks=useContext(TaskContext)
  return (
    <>
      {ctasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}
