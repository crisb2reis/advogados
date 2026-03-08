"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Escritório de Advocacia"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl text-white"
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 bg-accent/20 border border-accent/30 rounded-full text-accent font-semibold tracking-wider text-sm uppercase">
                            Excelência e Confiança Jurídica
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
                            Defendendo seus <span className="text-accent underline decoration-accent/30">direitos</span> com compromisso.
                        </h1>
                        <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
                            Assessoria jurídica especializada para pessoas e empresas que buscam segurança, clareza e resultados sólidos em todas as instâncias legais.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#agendar" className="btn-accent text-lg px-8 py-4 group">
                                Agendar Consulta
                                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="https://wa.me/5511999999999" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-all backdrop-blur-sm">
                                <Phone className="mr-2" size={20} />
                                Falar com um Advogado
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white/10 shadow-2xl">
                            <Image
                                src="/advogado.png"
                                alt="Advogado Especialista"
                                width={500}
                                height={600}
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                                <p className="text-accent font-semibold mb-1">Dr. Cristiano Reis</p>
                                <p className="text-sm text-white/70 tracking-widest uppercase">Especialista em Direito Civil & Empresarial</p>
                            </div>
                        </div>
                        {/* Abstract golden element */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/20 rounded-full blur-2xl" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
            </motion.div>
        </section>
    );
}
