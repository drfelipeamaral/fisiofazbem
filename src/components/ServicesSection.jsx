import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
    {
        image: "https://static.wixstatic.com/media/eac736_9bcda398ff0248f3bdc0ba7c0e48d50f~mv2.jpg/v1/fill/w_710,h_293,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/eac736_9bcda398ff0248f3bdc0ba7c0e48d50f~mv2.jpg",
        title: "Traumato-ortopedia",
        price: "Após avaliação",
        link: "https://www.fisiofazbem.com/service-page/traumato-ortopedia-1",
    },
    {
        image: "https://static.wixstatic.com/media/eac736_93e4548f048e4c018714826685d2ad27~mv2.jpg/v1/fill/w_710,h_293,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/eac736_93e4548f048e4c018714826685d2ad27~mv2.jpg",
        title: "Pilates",
        price: "",
        link: "https://www.fisiofazbem.com/service-page/pilates-1",
    },
    {
        image: "https://static.wixstatic.com/media/eac736_2befcf294ecd43c3ac9f927f3a66ea07~mv2.jpg/v1/fill/w_710,h_293,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/eac736_2befcf294ecd43c3ac9f927f3a66ea07~mv2.jpg",
        title: "Estética",
        price: "Entrar em contato",
        link: "https://www.fisiofazbem.com/service-page/estética",
    },
    {
        image: "https://static.wixstatic.com/media/eac736_e887b581f64a4094b9b2dc751f8abaea~mv2.jpg/v1/fill/w_710,h_293,fp_0.50_0.50,q_80,enc_auto/eac736_e887b581f64a4094b9b2dc751f8abaea~mv2.jpg",
        title: "Avaliação de fisioterapia",
        price: "Entrar em contato",
        link: "https://www.fisiofazbem.com/service-page/avaliação-de-fisioterapia",
    },
    {
        image: "https://static.wixstatic.com/media/11062b_82ad6d155a9b42ad825d13f8bf74d353~mv2.jpg/v1/fill/w_710,h_293,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_82ad6d155a9b42ad825d13f8bf74d353~mv2.jpg",
        title: "Fisioterapia Esportiva",
        price: "Após avaliação",
        link: "https://www.fisiofazbem.com/service-page/fisioterapia-esportiva",
    },
    {
        image: "https://static.wixstatic.com/media/11062b_fed102bafed040f78d99d5b35f51f46b~mv2.jpg/v1/fill/w_710,h_293,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_fed102bafed040f78d99d5b35f51f46b~mv2.jpg",
        title: "Consulta Online",
        price: "Entrar em contato",
        link: "https://www.fisiofazbem.com/service-page/consulta-online",
    },
    {
        image: "https://static.wixstatic.com/media/eac736_b9da33ef219e4cb4bac667399eec86c4~mv2.jpg/v1/fill/w_710,h_293,fp_0.50_0.50,q_80,enc_auto/eac736_b9da33ef219e4cb4bac667399eec86c4~mv2.jpg",
        title: "Massagem Terapêutica",
        price: "Entrar em contato",
        link: "https://www.fisiofazbem.com/service-page/massagem-terapêutica",
    },
    {
        image: "https://static.wixstatic.com/media/eac736_2ef28798633f4e9f89385aa778d01277~mv2.jpg/v1/fill/w_710,h_293,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/eac736_2ef28798633f4e9f89385aa778d01277~mv2.jpg",
        title: "Respiratória",
        price: "Após avaliação",
        link: "https://www.fisiofazbem.com/service-page/respiratória",
    },
    {
        image: "https://static.wixstatic.com/media/eac736_9577542a502b48b4b8bee72201d1efa5~mv2.jpg/v1/fill/w_710,h_293,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/eac736_9577542a502b48b4b8bee72201d1efa5~mv2.jpg",
        title: "Injetáveis no reumatismo",
        price: "Após avaliação",
        link: "https://www.fisiofazbem.com/service-page/injetáveis-no-reumatismo",
    },
];

export default function ServicesSection() {
    return (
        <section className="py-12 px-6 md:px-16 bg-blue-50">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Serviços</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                    <ServiceCard key={idx} {...service} />
                ))}
            </div>
        </section>
    );
}