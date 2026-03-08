"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, GraduationCap, Building2, UserPlus, CheckCircle2 } from "lucide-react";

const qualifications = [
    { icon: <GraduationCap size={20} className="text-accent" />, text: "Graduação em Direito pela Faculdade de São Paulo" },
    { icon: <Award size={20} className="text-accent" />, text: "Pós-graduação em Direito Civil e Processual Civil" },
    { icon: <Building2 size={20} className="text-accent" />, text: "Registro Profissional Ativo (OAB/SP 123.456)" },
    { icon: <UserPlus size={20} className="text-accent" />, text: "Membro Efetivo da Comissão de Direitos do Consumidor" },
    { icon: <CheckCircle2 size={20} className="text-accent" />, text: "Mais de 15 anos de experiência jurídica sólida" },
];

export default function About() {
    return (
        <section id="sobre" className="section-padding bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/advogado.png"
                                alt="Dr. Cristiano Reis - Advogado"
                                width={600}
                                height={700}
                                className="object-cover"
                            />
                            <div className="absolute top-8 left-8 bg-accent text-white px-5 py-2.5 rounded-lg font-bold shadow-lg">
                                OAB/SP 123.456
                            </div>
                        </div>
                        {/* Background elements */}
                        <div className="absolute -bottom-10 -right-10 w-full h-full bg-primary/5 rounded-2xl -z-10 translate-x-4 translate-y-4" />
                        <div className="absolute -top-10 -left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col"
                    >
                        <span className="text-accent font-semibold tracking-widest uppercase mb-4 block underline decoration-primary/20 decoration-2 underline-offset-8">
                            Sobre o Escritório
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                            Excelência Jurídica baseada em <span className="text-accent italic">Ética e Compromisso.</span>
                        </h2>
                        <div className="prose prose-lg text-text-muted mb-10 leading-relaxed font-light">
                            <p className="mb-6">
                                Nosso escritório é reconhecido pela excelência no atendimento jurídico personalizado, combinando anos de experiência com uma visão moderna e humanizada do direito.
                            </p>
                            <p>
                                Cada caso é tratado com máximo rigor técnico e discrição, buscando sempre as estratégias legais mais eficazes para garantir a proteção plena dos interesses de nossos clientes em todas as esferas.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-1 gap-6 mb-10">
                            {qualifications.map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-4 p-4 rounded-xl border border-gray-100 hover:border-accent/30 hover:bg-accent/5 transition-all">
                                    <div className="flex-shrink-0 w-10 h-10 bg-white shadow-sm border border-gray-100 flex items-center justify-center rounded-lg">
                                        {item.icon}
                                    </div>
                                    <span className="text-gray-700 font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <button className="btn-primary w-fit group">
                            Conheça Nossa Equipe
                            <CheckCircle2 className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
