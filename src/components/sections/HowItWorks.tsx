"use client";

import { motion } from "framer-motion";
import { MessageSquare, Gavel, CheckCircle } from "lucide-react";

const steps = [
    {
        icon: <MessageSquare className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />,
        title: "1. Consulta Inicial",
        description: "Análise minuciosa do caso e orientação jurídica inicial para identificar os melhores caminhos legais."
    },
    {
        icon: <Gavel className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />,
        title: "2. Estratégia Jurídica",
        description: "Definição de uma estratégia legal personalizada e fundamentada, focada em maximizar as chances de sucesso."
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />,
        title: "3. Representação Plena",
        description: "Acompanhamento rigoroso em todas as etapas do processo, garantindo que seus direitos sejam defendidos até a resolução final."
    }
];

export default function HowItWorks() {
    return (
        <section className="section-padding bg-primary relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 text-white">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold mb-6"
                    >
                        Como Funciona Nosso Atendimento
                    </motion.h2>
                    <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full shadow-lg shadow-accent/20" />
                    <p className="text-lg text-white/80 font-light leading-relaxed">
                        Um processo estruturado para oferecer clareza, transparência e segurança em cada etapa da sua jornada jurídica conosco.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 relative">
                    {/* Connector line for desktop */}
                    <div className="hidden lg:block absolute top-[2.75rem] left-[10%] right-[10%] h-[1px] bg-white/20 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 bg-white shadow-xl shadow-black/20 rounded-2xl flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-accent transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-white/70 leading-relaxed max-w-xs mx-auto font-light">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />
        </section>
    );
}
