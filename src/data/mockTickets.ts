export type Ticket = {
  id: number;
  subject: string;
  customer: string;
  priority: "Low" | "Medium" | "High";
  status: "Open" | "In Progress" | "Resolved";
  assignedTo: string;
  description: string;
  activity: { time: string; text: string }[];
};

// export const tickets: Ticket[] = [
//   {
//     id: 1,
//     subject: "Billing issue",
//     customer: "John Doe",
//     priority: "High",
//     status: "Open",
//     assignedTo: "Sarah",
//     description:
//       "The customer cannot complete their billing payment. Card details failing.",
//     activity: [
//       { time: "2 hours ago", text: "Agent Sarah viewed the ticket." },
//       { time: "1 hour ago", text: "Customer added more card details." },
//     ],
//   },

//   {
//     id: 2,
//     subject: "Unable to login",
//     customer: "Alice",
//     priority: "Medium",
//     status: "Resolved",
//     assignedTo: "Mike",
//     description:
//       "Customer unable to login due to password reset loop. Issue resolved.",
//     activity: [
//       { time: "5 hours ago", text: "Agent Mike reset user password." },
//       { time: "4 hours ago", text: "Customer confirmed successful login." },
//     ],
//   },

  

  
 
// ];


export const tickets: Ticket[] = [
  {
    id: 1,
    subject: "Billing issue",
    customer: "John Doe",
    priority: "High",
    status: "Open",
    assignedTo: "Sarah",
    description:
      "The customer cannot complete their billing payment. Card details failing.",
    activity: [
      { time: "2 hours ago", text: "Agent Sarah viewed the ticket." },
      { time: "1 hour ago", text: "Customer added more card details." },
    ],
  },
  {
    id: 2,
    subject: "Unable to login",
    customer: "Alice",
    priority: "Medium",
    status: "Resolved",
    assignedTo: "Mike",
    description:
      "Customer unable to login due to password reset loop. Issue resolved.",
    activity: [
      { time: "5 hours ago", text: "Agent Mike reset user password." },
      { time: "4 hours ago", text: "Customer confirmed successful login." },
    ],
  },

  {
    id: 3,
    subject: "Account suspended",
    customer: "Bob Smith",
    priority: "High",
    status: "In Progress",
    assignedTo: "Sarah",
    description: "Customer reports account was suspended without notice.",
    activity: [{ time: "3 hours ago", text: "Ticket assigned to Sarah." }],
  },
  {
    id: 4,
    subject: "Feature request",
    customer: "Emma",
    priority: "Low",
    status: "Open",
    assignedTo: "Mike",
    description: "Request to add dark mode support.",
    activity: [{ time: "1 day ago", text: "Feature request logged." }],
  },
  {
    id: 5,
    subject: "Slow performance",
    customer: "Daniel",
    priority: "Medium",
    status: "In Progress",
    assignedTo: "Alex",
    description: "Application performance degrades during peak hours.",
    activity: [{ time: "6 hours ago", text: "Agent Alex investigating logs." }],
  },
  {
    id: 6,
    subject: "Refund request",
    customer: "Sophia",
    priority: "Low",
    status: "Resolved",
    assignedTo: "Sarah",
    description: "Customer requesting refund for unused subscription.",
    activity: [{ time: "2 days ago", text: "Refund processed." }],
  },
  {
    id: 7,
    subject: "Email notifications not received",
    customer: "Chris",
    priority: "Medium",
    status: "Open",
    assignedTo: "Mike",
    description: "User not receiving email notifications.",
    activity: [{ time: "3 hours ago", text: "Ticket created." }],
  },
  {
    id: 8,
    subject: "Mobile app crash",
    customer: "Laura",
    priority: "High",
    status: "In Progress",
    assignedTo: "Alex",
    description: "App crashes on launch on Android devices.",
    activity: [{ time: "30 minutes ago", text: "Crash logs requested." }],
  },
  {
    id: 9,
    subject: "Password reset email expired",
    customer: "Kevin",
    priority: "Low",
    status: "Resolved",
    assignedTo: "Sarah",
    description: "Reset link expires too quickly.",
    activity: [{ time: "1 day ago", text: "Expiry window increased." }],
  },
  {
    id: 10,
    subject: "Cannot upload files",
    customer: "Nina",
    priority: "Medium",
    status: "Open",
    assignedTo: "Mike",
    description: "File upload fails with timeout error.",
    activity: [{ time: "2 hours ago", text: "Issue reproduced." }],
  },

  // --- IDs 11–50 (shortened pattern for readability) ---
  ...Array.from({ length: 40 }, (_, i) => {
    const id = i + 11;
    const priorities = ["Low", "Medium", "High"] as const;
    const statuses = ["Open", "In Progress", "Resolved"] as const;
    const agents = ["Sarah", "Mike", "Alex", "Emma"];

    return {
      id,
      subject: `Support request #${id}`,
      customer: `Customer ${id}`,
      priority: priorities[id % 3],
      status: statuses[id % 3],
      assignedTo: agents[id % 4],
      description: `General support inquiry regarding issue #${id}.`,
      activity: [
        { time: "1 hour ago", text: "Ticket created." },
        { time: "30 minutes ago", text: "Agent reviewing the issue." },
      ],
    };
  }),
];
