import { useState } from "react";
import { tickets as ticketData } from "../data/mockTickets";
import { Link } from "react-router-dom";

export default function Tickets() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  // FILTER LOGIC
  const filteredTickets = ticketData.filter(ticket => {
    const matchesSearch =
      ticket.subject.toLowerCase().includes(search.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || ticket.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" || ticket.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tickets</h1>

      {/* SEARCH + FILTERS */}
      <div className="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row gap-4 items-center">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by subject or customer"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        />

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
          className="border p-2 rounded w-full md:w-1/4"
        >
          <option>All</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>

        {/* Priority Filter */}
        <select
          value={priorityFilter}
          onChange={e => setPriorityFilter(e.target.value)}
          className="border p-2 rounded w-full md:w-1/4"
        >
          <option>All</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        {/* Reset Button */}
        <button
          onClick={() => {
            setSearch("");
            setStatusFilter("All");
            setPriorityFilter("All");
          }}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Reset
        </button>
      </div>

      {/* TICKETS TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Subject</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Priority</th>
              <th className="p-3">Status</th>
              <th className="p-3">View</th>
            </tr>
          </thead>

          <tbody>
            {filteredTickets.map(ticket => (
              <tr
                key={ticket.id}
                className="border-t hover:bg-gray-50 cursor-pointer transition"
              >
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
                <td className="p-3">
                  <Link
                    to={`/tickets/${ticket.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}

            {filteredTickets.length === 0 && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-gray-500">
                  No tickets found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
