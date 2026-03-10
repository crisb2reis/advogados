"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2, User, Phone, Mail, MessageSquare } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const TENANT_ID = "660e8400-e29b-41d4-a716-446655440001";

export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        nome: "",
        whatsapp: "",
        email: "",
        assunto: "Consultoria Jurídica",
        mensagem: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const supabase = createClient();

            const { error } = await supabase.from('leads').insert({
                tenant_id: TENANT_ID,
                name: formData.nome,
                phone: formData.whatsapp,
                email: formData.email,
                status: 'NOVO',
                extra_data: {
                    assunto: formData.assunto,
                    mensagem: formData.mensagem
                }
            });

            if (error) throw error;
            setIsSubmitted(true);
        } catch (error) {
            console.error('Erro ao salvar lead:', error);
            alert('Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <section id="agendar" className="py-24 bg-primary text-white">
                <div className="container mx-auto px-4 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/5 p-12 rounded-2xl border border-white/10 text-center backdrop-blur-sm"
                    >
                        <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
                            <CheckCircle className="w-10 h-10 text-accent" />
                        </div>
                        <h2 className="text-4xl font-serif font-bold mb-6 italic text-accent">Solicitação Recebida</h2>
                        <p className="text-white/70 text-lg font-light leading-relaxed mb-10">
                            Agradecemos seu contato. Nossa equipe jurídica analisará sua mensagem e entrará em contato em breve para agendar sua consulta.
                        </p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="btn-accent px-10 py-4 text-lg"
                        >
                            Voltar
                        </button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="agendar" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-accent font-semibold tracking-widest uppercase text-sm">Atendimento Especializado</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-primary">Agende sua <span className="italic">Consulta</span></h2>
                        <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
                            Preencha os dados abaixo para que possamos entender seu caso e agendar um atendimento personalizado.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-primary/60 ml-2">Nome Completo</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                                        <input
                                            required
                                            value={formData.nome}
                                            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                            type="text"
                                            placeholder="Ex: João Silva"
                                            className="w-full bg-slate-50 border-transparent focus:border-accent/50 focus:bg-white focus:ring-4 focus:ring-accent/5 rounded-2xl py-4 pl-12 pr-6 transition-all outline-none font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-primary/60 ml-2">WhatsApp</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                                        <input
                                            required
                                            value={formData.whatsapp}
                                            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                            type="tel"
                                            placeholder="(11) 99999-9999"
                                            className="w-full bg-slate-50 border-transparent focus:border-accent/50 focus:bg-white focus:ring-4 focus:ring-accent/5 rounded-2xl py-4 pl-12 pr-6 transition-all outline-none font-medium"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-primary/60 ml-2">E-mail</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                                        <input
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            type="email"
                                            placeholder="contato@exemplo.com"
                                            className="w-full bg-slate-50 border-transparent focus:border-accent/50 focus:bg-white focus:ring-4 focus:ring-accent/5 rounded-2xl py-4 pl-12 pr-6 transition-all outline-none font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-primary/60 ml-2">Assunto</label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                                        <select
                                            value={formData.assunto}
                                            onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                                            className="w-full bg-slate-50 border-transparent focus:border-accent/50 focus:bg-white focus:ring-4 focus:ring-accent/5 rounded-2xl py-4 pl-12 pr-6 transition-all outline-none font-medium appearance-none cursor-pointer"
                                        >
                                            <option>Consultoria Jurídica</option>
                                            <option>Direito Civil</option>
                                            <option>Direito Empresarial</option>
                                            <option>Direito do Trabalho</option>
                                            <option>Outros</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-primary/60 ml-2">Resumo do Caso (Opcional)</label>
                                <textarea
                                    value={formData.mensagem}
                                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                                    rows={4}
                                    placeholder="Descreva brevemente sua situação..."
                                    className="w-full bg-slate-50 border-transparent focus:border-accent/50 focus:bg-white focus:ring-4 focus:ring-accent/5 rounded-2xl py-6 px-6 transition-all outline-none font-medium resize-none"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                disabled={isLoading}
                                type="submit"
                                className="w-full btn-primary py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 mt-10 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        Enviando...
                                        <Loader2 className="w-6 h-6 animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        Solicitar Agendamento
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </motion.button>

                            <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
                                Atendimento em conformidade com o Código de Ética da OAB.
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-0 -translate-x-1/2 translate-y-1/2" />
        </section>
    );
}
