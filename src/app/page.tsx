"use client";

import Header from "@/components/ui/Header";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import About from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import ContactForm from "@/components/sections/ContactForm";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PainPoints />
      <About />
      <HowItWorks />
      <ContactForm />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
