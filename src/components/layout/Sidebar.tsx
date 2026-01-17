import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional icons from lucide-react

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Dashboard", to: "/dashboard" },
    { name: "Tickets", to: "/tickets" },
    { name: "Agents", to: "/agents" },
    { name: "Reports", to: "/reports" },
    { name: "Settings", to: "/settings" },
  ];

  return (
    <>
      {/* Hamburger Button - mobile only */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white shadow rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar overlay - mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-md px-4 py-6 z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:shadow-none
        `}
      >
        <h2 className="text-xl font-bold mb-8">AI Support</h2>

        <nav className="space-y-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block p-2 rounded hover:bg-gray-100"
              onClick={() => setIsOpen(false)} // auto-close on mobile
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
