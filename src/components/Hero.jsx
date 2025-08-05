import React from "react";

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-blue-50 to-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
            {/* Texto principal */}
            <div className="flex-1 mb-8 md:mb-0 md:mr-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
                    Seja Bem-Vindo
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                    Descubra uma abordagem de fisioterapia e pilates inovadora para melhorar sua saúde e qualidade de vida.
                </p>
                <a
                    href="https://www.fisiofazbem.com"
                    target="_self"
                    className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-800 transition-colors duration-200"
                    aria-label="Saiba Mais"
                >
                    Saiba Mais
                </a>
            </div>
            {/* Imagem principal */}
            <div className="flex-1 flex justify-center">
                <img
                    src="https://static.wixstatic.com/media/eac736_879c391a37b644eb900abcdc56957ce6~mv2.jpg/v1/fill/w_1080,h_959,al_c,q_85,enc_avif,quality_auto/eac736_879c391a37b644eb900abcdc56957ce6~mv2.jpg"
                    alt="Nossos Serviços"
                    className="rounded-2xl shadow-lg object-cover w-full max-w-md h-auto"
                />
            </div>
        </section>
    );
}