import { useParams, useNavigate } from "react-router-dom";
import { tickets } from "../data/mockTickets";

export default function TicketDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // <-- hook to navigate programmatically

  const ticket = tickets.find((t) => t.id === Number(id));

  if (!ticket) {
    return <p className="text-red-500">Ticket not found.</p>;
  }

  return (
    <div>
      {/* Back Button */}
      <button
        onClick={() => navigate("/tickets")}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back to Tickets
      </button>

      <h1 className="text-2xl font-bold mb-6">Ticket #{ticket.id}</h1>

      {/* Ticket Info */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Ticket Information</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-medium">Customer:</p>
            <p>{ticket.customer}</p>
          </div>

          <div>
            <p className="font-medium">Priority:</p>
            <span
              className={`px-3 py-1 rounded text-white ${
                ticket.priority === "High"
                  ? "bg-red-500"
                  : ticket.priority === "Medium"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }`}
            >
              {ticket.priority}
            </span>
          </div>

          <div>
            <p className="font-medium">Status:</p>
            <p>{ticket.status}</p>
          </div>

          <div>
            <p className="font-medium">Assigned To:</p>
            <p>{ticket.assignedTo}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-3">Description</h2>
        <p>{ticket.description}</p>
      </div>

      {/* Activity Timeline */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-3">Activity</h2>

        <div className="space-y-4">
          {ticket.activity.map((act, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <p className="text-sm text-gray-500">{act.time}</p>
              <p>{act.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Summary Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Generate AI Summary
      </button>
    </div>
  );
}
