import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import TicketDetail from "./pages/TicketDetail";

export default function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Login />} />

      {/* Protected Layout */}
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      <Route
        path="/tickets"
        element={
          <Layout>
            <Tickets />
          </Layout>
        }
      />

      <Route
        path="/tickets/:id"
        element={
          <Layout>
            <TicketDetail />
          </Layout>
        }
      />
    </Routes>
  );
}
