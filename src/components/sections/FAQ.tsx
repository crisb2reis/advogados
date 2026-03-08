"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "Como funciona a primeira consulta jurídica?",
        answer: "A primeira consulta serve para entendermos os detalhes do seu caso, analisarmos as fundamentações legais e traçarmos as primeiras estratégias. Pode ser realizada tanto de forma presencial quanto online, conforme sua conveniência."
    },
    {
        question: "Quais documentos devo levar para a consulta?",
        answer: "É recomendável trazer documentos de identificação pessoal (RG/CPF) e todos os registros relacionados ao caso (contratos, conversas, e-mails, processos anteriores, etc.). O envio digital prévio também é possível para agilizar a análise."
    },
    {
        question: "Quanto custa um processo jurídico?",
        answer: "Os custos variam conforme a complexidade da área jurídica e as especificidades de cada demanda. Seguimos rigorosamente a tabela de honorários da OAB e oferecemos transparência total em todos os orçamentos apresentados."
    },
    {
        question: "O atendimento pode ser feito totalmente online?",
        answer: "Sim, realizamos atendimentos jurídicos por videochamada e dispomos de ferramentas para assinatura digital de documentos e procurações, permitindo que cuidemos do seu caso de onde quer que você esteja."
    },
    {
        question: "Quanto tempo pode durar um processo judicial?",
        answer: "A duração de um processo judicial depende de diversos fatores, como a esfera da justiça e a complexidade da causa. Durante a consulta, fornecemos uma estimativa realista baseada em casos similares e jurisprudência atual."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="section-padding bg-secondary relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-accent font-bold tracking-widest uppercase mb-4 block"
                    >
                        Dúvidas Frequentes
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6"
                    >
                        Perguntas <span className="text-accent underline decoration-accent/20">Frequentes</span>
                    </motion.h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
                        Esclareça suas principais dúvidas sobre nossos serviços e o funcionamento do sistema jurídico brasileiro. Estamos aqui para ajudar com total transparência.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-white rounded-xl shadow-sm border ${openIndex === index ? 'border-accent' : 'border-gray-100'} transition-all duration-300 overflow-hidden`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`text-xl font-serif font-bold ${openIndex === index ? 'text-accent' : 'text-primary'}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full ${openIndex === index ? 'bg-accent/10' : 'bg-secondary'}`}>
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-accent" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-primary" />
                                    )}
                                </div>
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 pb-8 px-6' : 'max-h-0 opacity-0 overflow-hidden'}`}
                            >
                                <div className="pt-2 text-lg text-text-muted leading-relaxed font-light">
                                    {faq.answer}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        </section>
    );
}
