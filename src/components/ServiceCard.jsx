import React from "react";

export default function ServiceCard({ image, title, price, link }) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 mb-4">{price}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block bg-blue-700 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-800 transition-colors duration-200"
                >
                    Mais Informações
                </a>
            </div>
        </div>
    );
}