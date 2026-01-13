import Layout from "./components/layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import TaskBoard from "./pages/TaskBoard";
import TaskDetails from "./pages/TaskDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<TaskBoard />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
