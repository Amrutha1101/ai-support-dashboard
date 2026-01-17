import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { tickets } from "../data/mockTickets";

// --------------------
// Types
// --------------------
type Status = "Open" | "In Progress" | "Resolved";
type Priority = "High" | "Medium" | "Low";

interface PriorityStat {
  name: Priority;
  value: number;
  open: number;
  inProgress: number;
  resolved: number;
}

interface AgentStat {
  name: string;
  tickets: number;
  open: number;
  inProgress: number;
  resolved: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: PriorityStat | AgentStat;
  }>;
}

const PRIORITIES = ["High", "Medium", "Low"] as const;

export default function Dashboard() {
  // Ticket counts
  const totalTickets = tickets.length;
  const openTickets = tickets.filter(t => t.status === "Open").length;
  const inProgressTickets = tickets.filter(
    t => t.status === "In Progress"
  ).length;
  const resolvedTickets = tickets.filter(t => t.status === "Resolved").length;

  // Priority breakdown
  const priorityStats: PriorityStat[] = PRIORITIES.map(priority => {
    const filtered = tickets.filter(t => t.priority === priority);
    return {
      name: priority,
      value: filtered.length,
      open: filtered.filter(t => t.status === "Open").length,
      inProgress: filtered.filter(t => t.status === "In Progress").length,
      resolved: filtered.filter(t => t.status === "Resolved").length,
    };
  });

  // Status breakdown (pie)
  const ticketStats: { name: Status; value: number }[] = [
    { name: "Open", value: openTickets },
    { name: "In Progress", value: inProgressTickets },
    { name: "Resolved", value: resolvedTickets },
  ];

  // Agent workload
  const agentWorkload: AgentStat[] = Array.from(
    new Set(tickets.map(t => t.assignedTo))
  ).map(agent => {
    const filtered = tickets.filter(t => t.assignedTo === agent);
    return {
      name: agent,
      tickets: filtered.length,
      open: filtered.filter(t => t.status === "Open").length,
      inProgress: filtered.filter(t => t.status === "In Progress").length,
      resolved: filtered.filter(t => t.status === "Resolved").length,
    };
  });

  const COLORS = ["#ef4444", "#eab308", "#22c55e"];

  // Custom tooltip (per bar)
  const CustomBarTooltip = ({
    active,
    payload,
  }: CustomTooltipProps) => {
    if (!active || !payload || payload.length === 0) return null;

    const data = payload[0].payload;

    return (
      <div className="bg-white p-3 rounded-lg shadow border text-sm space-y-1">
        <p className="font-semibold">{data.name}</p>
        <p>Total: {"tickets" in data ? data.tickets : data.value}</p>
        <p className="text-blue-600">Open: {data.open}</p>
        <p className="text-yellow-600">
          In Progress: {data.inProgress}
        </p>
        <p className="text-green-600">Resolved: {data.resolved}</p>
      </div>
    );
  };

  // AI Insights Summary
  const aiSummary = `
There are currently ${openTickets} open tickets and ${inProgressTickets} in progress.
${priorityStats[0].value} high-priority cases need urgent attention.
${resolvedTickets} tickets have already been resolved.
${agentWorkload.length} agents are actively working on issues.
  `.trim();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard Analytics</h1>

      {/* AI Insights Panel */}
      <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">
          AI Insights Summary
        </h2>
        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
          {aiSummary}
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-gray-500">Total Tickets</p>
          <p className="text-4xl font-bold">{totalTickets}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-gray-500">Open Tickets</p>
          <p className="text-4xl font-bold">{openTickets}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-gray-500">Resolved Tickets</p>
          <p className="text-4xl font-bold">{resolvedTickets}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Status Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Status Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ticketStats}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {ticketStats.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Agent Workload */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Agent Workload
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={agentWorkload}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomBarTooltip />} />
              <Bar dataKey="tickets" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Priority Chart */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">
          Priority Breakdown
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={priorityStats}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomBarTooltip />} />
            <Bar dataKey="value">
              {priorityStats.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
