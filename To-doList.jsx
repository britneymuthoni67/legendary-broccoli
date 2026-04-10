import TodoItem from "./TodoItem";

function TodoList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          toggleTask={() => toggleTask(index)}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
