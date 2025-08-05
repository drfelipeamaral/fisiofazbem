"use client";
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
      <header className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-white shadow-lg fixed w-full z-50">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img
              src="/logo.png"
              alt="Fisio Faz Bem"
              className="h-12 w-auto drop-shadow-md transition-transform duration-200 hover:scale-105"
            />
          </a>
        </div>

        {/* Redes sociais */}
        <div className="hidden md:flex space-x-4 text-2xl text-blue-700">
          <a
            href="https://wa.me/seu_numero"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors duration-200"
            aria-label="Whatsapp"
          >
            <FaWhatsapp className="rounded-full shadow hover:scale-110 transition-transform duration-200" />
          </a>
          <a
            href="https://instagram.com/seu_perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram className="rounded-full shadow hover:scale-110 transition-transform duration-200" />
          </a>
          <a
            href="https://facebook.com/seu_perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-900 transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebook className="rounded-full shadow hover:scale-110 transition-transform duration-200" />
          </a>
        </div>

        {/* Menu + Login */}
        <div className="flex items-center space-x-3">
          {/* Botão Menu */}
          <button
            onClick={() => setSidebarAberta(true)}
            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Abrir menu"
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
