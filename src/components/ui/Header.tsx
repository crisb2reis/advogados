"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
                        <span className="text-white font-serif font-bold text-xl italic">A</span>
                    </div>
                    <span className={`font-serif font-bold text-2xl tracking-tight ${isScrolled ? "text-primary" : "text-white"}`}>ADVOGADOS PRO</span>
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                    {["Serviços", "Sobre", "Áreas", "FAQ", "Contato"].map((item) => (
                        <Link key={item} href={`#${item.toLowerCase()}`} className={`font-medium transition-colors hover:text-accent ${isScrolled ? "text-gray-700" : "text-white/90"}`}>
                            {item}
                        </Link>
                    ))}
                    <Link href="#agendar" className="bg-accent text-white px-6 py-2.5 rounded-md font-semibold hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/20">
                        Agendar Consulta
                    </Link>
                </nav>

                <Link href="https://wa.me/5511999999999" className="md:hidden text-white bg-primary p-2 rounded-full">
                    <MessageSquare size={24} />
                </Link>
            </div>
        </header>
    );
}
