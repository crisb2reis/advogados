"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, ShoppingCart, FileText, Scale, ShieldCheck } from "lucide-react";

const painPoints = [
    {
        icon: <Briefcase className="w-8 h-8 text-primary" />,
        title: "Problemas Trabalhistas?",
        description: "Defesa de direitos do trabalhador, demissões, horas extras e assédio moral com foco em resultados rápidos."
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Conflitos Familiares?",
        description: "Assessoria em divórcios, guarda de filhos, pensão alimentícia e sucessões com abordagem humanizada."
    },
    {
        icon: <ShoppingCart className="w-8 h-8 text-primary" />,
        title: "Direito do Consumidor?",
        description: "Proteção contra práticas abusivas, cobranças indevidas e danos morais em relações de consumo."
    },
    {
        icon: <FileText className="w-8 h-8 text-primary" />,
        title: "Dúvidas em Contratos?",
        description: "Elaboração e análise detalhada de contratos civis e comerciais para garantir sua segurança jurídica."
    },
    {
        icon: <Scale className="w-8 h-8 text-primary" />,
        title: "Ações de Indenização?",
        description: "Busca por reparação de danos morais e materiais causados por terceiros ou empresas."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: "Defesa Criminal?",
        description: "Representação técnica e estratégica em inquéritos e processos criminais com sigilo absoluto."
    }
];

export default function PainPoints() {
    return (
        <section id="servicos" className="section-padding bg-secondary relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6"
                    >
                        Seu caso jurídico em boas mãos
                    </motion.h2>
                    <p className="text-lg text-text-muted leading-relaxed">
                        Atuamos em diversas frentes para proteger seus interesses e garantir que você tenha a melhor orientação legal possível.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={point.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card group hover:bg-primary transition-all duration-500"
                        >
                            <div className="mb-6 p-4 bg-primary/5 rounded-lg inline-block group-hover:bg-white/10 transition-colors">
                                {point.icon}
                            </div>
                            <h3 className="text-xl font-serif font-bold text-primary mb-4 group-hover:text-white transition-colors">
                                {point.title}
                            </h3>
                            <p className="text-text-muted leading-relaxed group-hover:text-white/80 transition-colors">
                                {point.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        </section>
    );
}
