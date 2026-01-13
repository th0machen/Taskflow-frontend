import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/tasks">Task Board</Link></li>
        <li><Link to="/tasks/new">Add Task</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
