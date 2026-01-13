function TaskCard({ title, category, priority, status }) {
  return (
    <div className="task-card">
      <h4>{title}</h4>
      <p>{category}</p>
      <p>Priority: {priority}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default TaskCard;
