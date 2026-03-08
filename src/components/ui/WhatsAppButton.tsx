"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

export default function WhatsAppButton() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 group"
        >
            <Link
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 pr-1"
            >
                <span className="hidden group-hover:block bg-white text-primary font-bold px-4 py-2 rounded-xl shadow-2xl border border-gray-100 transition-all text-sm uppercase tracking-widest whitespace-nowrap">
                    Falar com um Advogado
                </span>
                <div className="w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all border-4 border-white/20">
                    <MessageSquare size={32} />
                </div>
            </Link>

            {/* Dynamic pulse effect */}
            <div className="absolute inset-0 bg-[#25D366] rounded-2xl animate-ping -z-10 opacity-20" />
        </motion.div>
    );
}
