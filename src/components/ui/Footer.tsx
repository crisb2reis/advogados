"use client";

import { motion } from "framer-motion";
import { MessageSquare, Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contato" className="bg-primary pt-24 pb-8 overflow-hidden relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-4 gap-16 mb-20 text-white">
                    <div className="lg:col-span-2 space-y-8">
                        <Link href="/" className="flex items-center space-x-2 w-fit">
                            <div className="w-12 h-12 bg-accent flex items-center justify-center rounded-xl shadow-lg shadow-accent/20">
                                <span className="text-white font-serif font-bold text-2xl italic">A</span>
                            </div>
                            <span className="font-serif font-bold text-3xl tracking-tight text-white">ADVOGADOS PRO</span>
                        </Link>
                        <p className="text-xl text-white/50 max-w-md font-light leading-relaxed">
                            Excelência jurídica para proteger o seu futuro. Atuamos com ética, transparência e total compromisso com os resultados de nossos clientes.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
                                <Linkedin size={22} className="text-white" />
                            </Link>
                            <Link href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
                                <Instagram size={22} className="text-white" />
                            </Link>
                            <Link href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
                                <Facebook size={22} className="text-white" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-2xl font-serif font-bold mb-8 text-accent">Links Rápidos</h4>
                        <ul className="space-y-4">
                            {['Home', 'Serviços', 'Sobre', 'FAQ', 'Agendar'].map((link) => (
                                <li key={link}>
                                    <Link href={`#${link.toLowerCase()}`} className="text-lg text-white/60 hover:text-accent transition-colors flex items-center space-x-2 group">
                                        <div className="w-1 h-1 bg-accent/30 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                                        <span>{link}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-2xl font-serif font-bold mb-8 text-accent">Contato Direto</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4 group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-accent/10 transition-colors">
                                    <Phone size={22} className="text-accent" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-sm uppercase tracking-widest font-bold mb-1">Telefone</p>
                                    <p className="text-lg text-white group-hover:text-accent transition-colors font-medium">(11) 99999-9999</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4 group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-accent/10 transition-colors">
                                    <Mail size={22} className="text-accent" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-sm uppercase tracking-widest font-bold mb-1">E-mail</p>
                                    <p className="text-lg text-white group-hover:text-accent transition-colors font-medium">contato@advogadopro.com.br</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4 group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-accent/10 transition-colors">
                                    <MapPin size={22} className="text-accent" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-sm uppercase tracking-widest font-bold mb-1">Escritório</p>
                                    <p className="text-lg text-white group-hover:text-accent transition-colors font-medium">Av. Paulista, 1000 - São Paulo, SP</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 text-center space-y-6">
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-white/30 uppercase tracking-widest font-bold">
                        <span>OAB/SP 123.456</span>
                        <span>CNPJ: 00.000.000/0001-00</span>
                        <Link href="#" className="hover:text-accent transition-colors">Política de Privacidade</Link>
                        <Link href="#" className="hover:text-accent transition-colors">Termos de Uso</Link>
                    </div>
                    <p className="text-white/20 text-sm leading-relaxed max-w-2xl mx-auto">
                        &copy; {currentYear} Advogados Pro. Todos os direitos reservados. Design e desenvolvimento por Antigravity.
                    </p>
                </div>
            </div>

            {/* Decorative patterns */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/0 to-primary/10 shadow-inner -z-10" />
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 -translate-x-1/2" />
        </footer>
    );
}
