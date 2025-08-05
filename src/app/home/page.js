import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ServicesSection />
    </div>
  );
}
