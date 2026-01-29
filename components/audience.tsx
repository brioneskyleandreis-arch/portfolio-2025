"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export function Audience() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-zinc-800/20 blur-[100px] rounded-full -z-10" />

            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold">Built for Businesses & Agencies Running <span className="text-primary font-serif italic font-normal">Paid Traffic</span></h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
                    {/* NOT FOR */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="group space-y-8 p-8 md:p-10 rounded-3xl bg-zinc-900/20 border border-zinc-800 hover:border-red-900/50 transition-all duration-300 hover:bg-zinc-900/40 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-zinc-950/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <h3 className="text-2xl font-bold text-zinc-500 group-hover:text-red-400 transition-colors flex items-center gap-3 relative z-10">
                            <div className="p-2 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-red-900/50 group-hover:bg-red-900/10 group-hover:text-red-500 transition-all">
                                <X className="w-5 h-5" />
                            </div>
                            This is NOT for:
                        </h3>
                        <ul className="space-y-6 relative z-10">
                            {[
                                "Anyone obsessed with cheap lead volume",
                                "Offers that avoid talking about price",
                                "Businesses relying only on instant forms"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 text-zinc-600 group-hover:text-zinc-400 items-start transition-colors">
                                    <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-red-500/50 shrink-0 transition-colors" />
                                    <span className="text-lg font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* IS FOR - THE HERO CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative group"
                    >
                        {/* Outer Glow */}
                        <div className="absolute -inset-[1px] bg-gradient-to-b from-orange-500/30 to-transparent rounded-[2rem] blur-sm opacity-60 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute -inset-1 bg-gradient-to-b from-orange-600/10 to-transparent rounded-[2.2rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />

                        <div className="h-full space-y-8 p-8 md:p-10 rounded-3xl bg-zinc-900/90 backdrop-blur-xl border border-white/5 relative z-10 transition-transform duration-300 group-hover:-translate-y-1 shadow-[0_0_40px_-10px_rgba(249,115,22,0.15)] group-hover:shadow-[0_0_60px_-15px_rgba(249,115,22,0.25)] overflow-hidden">
                            <div className="absolute top-0 right-0 p-3 pl-6 pb-4 bg-orange-600/10 rounded-bl-3xl border-b border-l border-orange-500/20 text-xs font-bold text-orange-500 tracking-widest uppercase backdrop-blur-sm z-20">
                                Ideal Fit
                            </div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3 relative z-10">
                                <div className="p-2 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/20"><Check className="w-5 h-5" /></div>
                                This IS for:
                            </h3>
                            <ul className="space-y-6 relative z-10">
                                {[
                                    "Marketing agencies running Meta ads",
                                    "Small businesses running their own ads",
                                    "Service providers selling premium offers",
                                    "Teams tired of low-intent leads"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 font-medium items-start group/item">
                                        <div className="mt-1 p-0.5 rounded-full bg-orange-500/10 text-orange-500 group-hover/item:bg-orange-500 group-hover/item:text-white transition-colors duration-300">
                                            <Check className="w-4 h-4 shrink-0" />
                                        </div>
                                        <span className="text-lg text-zinc-200 group-hover/item:text-white transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-16 text-xl font-medium text-zinc-500"
                >
                    If your ads already work, this makes them work <span className="font-serif italic font-normal text-white">smarter</span>.
                </motion.p>
            </div>
        </section>
    );
}
