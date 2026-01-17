// import { createContext, useContext, useState, ReactNode } from "react";
// import { tickets as initialTickets, Ticket } from "../data/mockTickets";

// type TicketContextType = {
//   tickets: Ticket[];
//   addTicket: (ticket: Ticket) => void;
//   updateTicket: (ticket: Ticket) => void;
//   deleteTicket: (id: number) => void;
// };

// const TicketContext = createContext<TicketContextType | undefined>(undefined);

// export const TicketProvider = ({ children }: { children: ReactNode }) => {
//   const [tickets, setTickets] = useState<Ticket[]>(initialTickets);

//   const addTicket = (ticket: Ticket) => {
//     setTickets((prev) => [...prev, ticket]);
//   };

//   const updateTicket = (updated: Ticket) => {
//     setTickets((prev) =>
//       prev.map((t) => (t.id === updated.id ? updated : t))
//     );
//   };

//   const deleteTicket = (id: number) => {
//     setTickets((prev) => prev.filter((t) => t.id !== id));
//   };

//   return (
//     <TicketContext.Provider value={{ tickets, addTicket, updateTicket, deleteTicket }}>
//       {children}
//     </TicketContext.Provider>
//   );
// };

// export const useTickets = () => {
//   const context = useContext(TicketContext);
//   if (!context) {
//     throw new Error("useTickets must be used inside TicketProvider");
//   }
//   return context;
// };
