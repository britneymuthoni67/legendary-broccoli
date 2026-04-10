function TodoItem({ task, toggleTask, deleteTask }) {
  return (
    <li>
      <span
        onClick={toggleTask}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {task.text}
      </span>

      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}

export default TodoItem;
