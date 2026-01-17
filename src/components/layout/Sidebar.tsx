import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md min-h-screen px-4 py-6">
      <h2 className="text-xl font-bold mb-8">AI Support</h2>

      <nav className="space-y-4">
        <Link className="block p-2 rounded hover:bg-gray-100" to="/dashboard">
          Dashboard
        </Link>

        <Link className="block p-2 rounded hover:bg-gray-100" to="/tickets">
          Tickets
        </Link>

        <Link className="block p-2 rounded hover:bg-gray-100" to="/agents">
          Agents
        </Link>

        <Link className="block p-2 rounded hover:bg-gray-100" to="/reports">
          Reports
        </Link>

        <Link className="block p-2 rounded hover:bg-gray-100" to="/settings">
          Settings
        </Link>
      </nav>
    </div>
  );
}
