// import { useNavigate, useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useTickets } from "../context/TicketContext";

// export default function TicketForm() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { tickets, addTicket, updateTicket } = useTickets();

//   const editingTicket = tickets.find((t) => t.id === Number(id));

//   const [form, setForm] = useState({
//     subject: "",
//     customer: "",
//     priority: "Low",
//     status: "Open",
//     assignedTo: "",
//     description: "",
//   });

//   // Populate form when editing
//   useEffect(() => {
//     if (editingTicket) {
//       setForm({
//         subject: editingTicket.subject,
//         customer: editingTicket.customer,
//         priority: editingTicket.priority,
//         status: editingTicket.status,
//         assignedTo: editingTicket.assignedTo,
//         description: editingTicket.description,
//       });
//     }
//   }, [editingTicket]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (editingTicket) {
//       updateTicket({ ...editingTicket, ...form });
//     } else {
//       addTicket({
//         id: Date.now(),
//         ...form,
//         activity: [],
//       });
//     }

//     navigate("/tickets");
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">
//         {editingTicket ? "Edit Ticket" : "Create New Ticket"}
//       </h1>

//       <form
//         className="grid grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow"
//         onSubmit={handleSubmit}
//       >
//         <input
//           className="border p-2 rounded"
//           placeholder="Subject"
//           value={form.subject}
//           onChange={(e) => setForm({ ...form, subject: e.target.value })}
//         />

//         <input
//           className="border p-2 rounded"
//           placeholder="Customer Name"
//           value={form.customer}
//           onChange={(e) => setForm({ ...form, customer: e.target.value })}
//         />

//         <select
//           className="border p-2 rounded"
//           value={form.priority}
//           onChange={(e) => setForm({ ...form, priority: e.target.value })}
//         >
//           <option>Low</option>
//           <option>Medium</option>
//           <option>High</option>
//         </select>

//         <select
//           className="border p-2 rounded"
//           value={form.status}
//           onChange={(e) => setForm({ ...form, status: e.target.value })}
//         >
//           <option>Open</option>
//           <option>In Progress</option>
//           <option>Resolved</option>
//         </select>

//         <input
//           className="border p-2 rounded col-span-2"
//           placeholder="Assigned To"
//           value={form.assignedTo}
//           onChange={(e) => setForm({ ...form, assignedTo: e.target.value })}
//         />

//         <textarea
//           className="border p-2 rounded col-span-2 h-32"
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//         />

//         <button className="bg-blue-600 text-white px-4 py-2 rounded col-span-2 hover:bg-blue-700">
//           {editingTicket ? "Update Ticket" : "Create Ticket"}
//         </button>
//       </form>
//     </div>
//   );
// }
