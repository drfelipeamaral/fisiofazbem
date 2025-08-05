import React from "react";

export default function Sidebar({ aberto, aoFechar }) {
    return (
        <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform z-50 ${aberto ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div className="p-4 flex flex-col space-y-4">
                <button
                    onClick={aoFechar}
                    className="text-right text-gray-500 font-bold text-xl"
                >
                    &times;
                </button>
                <a href="/blog" className="text-lg hover:underline">
                    Blog
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=+5511999999999"
                    className="text-lg hover:underline"
                >
                    Agendamento Online
                </a>
            </div>
        </div>
    );
}
