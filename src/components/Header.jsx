"use client"
import React, { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import Sidebar from "./Sidebar";
import BotaoLogin from "./BotaoLogin";

export default function Header() {
  const [sidebarAberta, setSidebarAberta] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-white shadow-md fixed w-full z-50">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Fisio Faz Bem" className="h-12" />
        </div>

        {/* Redes sociais */}
        <div className="hidden md:flex space-x-4 text-xl text-gray-700">
          <a
            href="https://wa.me/seu_numero"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/seu_perfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/seu_perfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Menu + Login */}
        <div className="flex items-center space-x-4">
          {/* ✅ Botão Menu */}
          <button
            onClick={() => setSidebarAberta(true)}
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Menu
          </button>
          <BotaoLogin />
        </div>
      </header>

      <Sidebar aberto={sidebarAberta} aoFechar={() => setSidebarAberta(false)} />
    </>
  );
}
