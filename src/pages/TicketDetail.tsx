import { useParams, useNavigate } from "react-router-dom";
import { tickets } from "../data/mockTickets";
import { useState } from "react";

export default function TicketDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ticket = tickets.find((t) => t.id === Number(id));

  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  if (!ticket) return <p className="text-red-500">Ticket not found.</p>;

  // Mock AI Summary generator
  const generateSummary = async () => {
    setLoading(true);
    setSummary("");

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock AI response
    const mockSummary = `
Customer ${ticket.customer} reported: "${ticket.description}".
Priority is ${ticket.priority} and current status is ${ticket.status}.
Recent activity indicates the issue is being handled by ${ticket.assignedTo}.
    `;

    setSummary(mockSummary.trim());
    setLoading(false);
  };

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
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Ticket Information</h2>

        <div className="grid grid-cols-2 gap-4">
          <p>
            <span className="font-medium">Customer:</span> {ticket.customer}
          </p>
          <p>
            <span className="font-medium">Priority: </span><span
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
          </p>
          <p>
            <span className="font-medium">Status:</span> {ticket.status}
          </p>
          <p>
            <span className="font-medium">Assigned To:</span>{" "}
            {ticket.assignedTo}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Description</h2>
        <p>{ticket.description}</p>
      </div>

      {/* Activity */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
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
      <button
        onClick={generateSummary}
        disabled={loading}
        className="
          bg-blue-600 text-white px-4 py-2 rounded
          hover:bg-blue-700
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {loading ? "Generating…" : "Generate AI Summary"}
      </button>

      {/* Display AI Summary */}
      {summary && (
        <div className="mt-6 bg-blue-50 p-4 rounded border border-blue-200">
          <h2 className="text-lg font-semibold mb-2">AI Summary</h2>
          <p className="text-gray-800 whitespace-pre-line">{summary}</p>
        </div>
      )}
    </div>
  );
}
