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
];
