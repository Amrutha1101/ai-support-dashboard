import Ticket  from "../data/mockTickets";

export function getTicketInsights(tickets: Ticket[]) {
  const open = tickets.filter(t => t.status === "Open").length;
  const inProgress = tickets.filter(t => t.status === "In Progress").length;
  const resolved = tickets.filter(t => t.status === "Resolved").length;

  const high = tickets.filter(t => t.priority === "High").length;
  const medium = tickets.filter(t => t.priority === "Medium").length;
  const low = tickets.filter(t => t.priority === "Low").length;

  const agents: Record<string, number> = {};
  tickets.forEach(t => {
    agents[t.assignedTo] = (agents[t.assignedTo] || 0) + 1;
  });

  const customers: Record<string, number> = {};
  tickets.forEach(t => {
    customers[t.customer] = (customers[t.customer] || 0) + 1;
  });

  // Generate simple AI-style automated summary
  const summary = `
There are currently ${open} open tickets and ${inProgress} in progress. 
${high} high-priority issues need urgent attention. 
${resolved} tickets have been resolved successfully. 
${Object.keys(agents).length} agents are actively handling tickets.
  `;

  return {
    statusCounts: { open, inProgress, resolved },
    priorityCounts: { high, medium, low },
    agents,
    customers,
    summary: summary.trim(),
  };
}
