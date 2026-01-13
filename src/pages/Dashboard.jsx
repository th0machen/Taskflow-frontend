import TaskList from "../components/tasks/TaskList";
import mockTasks from "../data/mockTasks";

function Dashboard() {
      console.log(mockTasks);
  return (
    <>
      <h2>Dashboard</h2>
      <p>Welcome to TaskFlow</p>
      <TaskList tasks={mockTasks} />
    </>
  );
}

export default Dashboard;
