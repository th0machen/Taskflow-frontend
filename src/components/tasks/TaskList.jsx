import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          category={task.category}
          priority={task.priority}
          status={task.status}
        />
      ))}
    </div>
  );
}

export default TaskList;
