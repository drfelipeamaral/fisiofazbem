import React from "react";
import { FaUser } from "react-icons/fa";

export default function BotaoLogin() {
  return (
    <a
      href="/login"
      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      <FaUser />
      <span>Fazer login</span>
    </a>
  );
}
