import { useState } from "react";

type Ticket = {
  id: number;
  subject: string;
  customer: string;
  priority: "Low" | "Medium" | "High";
  status: "Open" | "In Progress" | "Resolved";
  assignedTo: string;
};

const mockTickets: Ticket[] = [
  {
    id: 1,
    subject: "Billing issue",
    customer: "John Doe",
    priority: "High",
    status: "Open",
    assignedTo: "Sarah",
  },
  {
    id: 2,
    subject: "Unable to login",
    customer: "Alice",
    priority: "Medium",
    status: "Resolved",
    assignedTo: "Mike",
  },
  {
    id: 3,
    subject: "Password reset",
    customer: "David",
    priority: "Low",
    status: "In Progress",
    assignedTo: "Emma",
  },
];

export default function Tickets() {
  const [search, setSearch] = useState("");

  const filteredTickets = mockTickets.filter((ticket) =>
    ticket.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Tickets</h1>

      {/* Search + Filter Row */}
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search tickets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-64"
        />

        <select className="p-2 border rounded">
          <option>All Priorities</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3">ID</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Priority</th>
              <th className="p-3">Status</th>
              <th className="p-3">Assigned To</th>
            </tr>
          </thead>

          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{ticket.id}</td>
                <td className="p-3">{ticket.subject}</td>
                <td className="p-3">{ticket.customer}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      ticket.priority === "High"
                        ? "bg-red-500"
                        : ticket.priority === "Medium"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  >
                    {ticket.priority}
                  </span>
                </td>
                <td className="p-3">{ticket.status}</td>
                <td className="p-3">{ticket.assignedTo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
