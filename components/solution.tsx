"use client";

import { CheckCircle2, ShieldCheck, Eye, Lock, X } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
    {
        icon: Eye,
        title: "Show The Price",
        desc: "State your starts-from price upfront. It scares away cheap leads and attracts people with budget."
    },
    {
        icon: ShieldCheck,
        title: "Explain The Process",
        desc: "Make them read how you work before they can contact you. No more confused prospects."
    },
    {
        icon: Lock,
        title: "Filter The Junk",
        desc: "Add a few simple questions. If they're too lazy to answer, they weren't going to buy anyway."
    }
];

export function Solution() {
    return (
        <section id="solution" className="py-32 bg-zinc-950 border-y border-zinc-900 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20 space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                        <CheckCircle2 className="w-4 h-4" />
                        The Solution
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold">The <span className="text-white">Qualification Engine</span></h2>
                    <p className="text-xl text-zinc-400">
                        Replace your "easy" funnel with a page that <span className="text-white font-serif italic font-normal">actually filters</span>.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: The Features */}
                    <div className="space-y-8">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex gap-6 items-start group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                                    <f.icon className="w-6 h-6 text-zinc-400 group-hover:text-primary transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{f.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed text-lg">
                                        {f.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side: The Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative group perspective-1000"
                    >
                        {/* Ambient Glow */}
                        <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full z-0 opacity-50 group-hover:opacity-75 transition-opacity duration-1000" />



                        {/* Glassmorphic Card Container */}
                        <div className="relative z-10 bg-zinc-950/80 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_50px_-10px_rgba(249,115,22,0.15)] group-hover:border-primary/30">

                            {/* Premium Card Badge - Inside */}
                            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full font-bold text-[10px] sm:text-xs shadow-lg flex items-center gap-1.5 sm:gap-2 border border-white/20">
                                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                Pre-Vetted
                            </div>

                            {/* Inner Noise */}
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />

                            {/* Header Gradient */}
                            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-primary via-orange-400 to-primary opacity-50" />

                            <div className="p-6 sm:p-8 space-y-8 relative">
                                <div className="space-y-2 border-b border-white/5 pb-6">
                                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-500/10 text-green-500 border border-green-500/20">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        Qualified Lead Criteria
                                    </h3>
                                    <p className="text-zinc-500 text-sm pl-[3.25rem]">The standard every lead must meet.</p>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { text: "Knows your starting price", valid: true },
                                        { text: "Understands your timeline", valid: true },
                                        { text: "Has budget approved", valid: true },
                                        { text: "Ready to book a call", valid: true },
                                        { text: "Just \"browsing\" / low intent", valid: false }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                                            className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${item.valid
                                                ? 'bg-gradient-to-r from-zinc-900/50 to-zinc-900/10 border-zinc-800 hover:border-green-500/30 hover:bg-zinc-900/80'
                                                : 'bg-red-950/10 border-red-900/20 opacity-60 hover:opacity-100 hover:bg-red-900/10'
                                                }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                {item.valid ? (
                                                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                                                ) : (
                                                    <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)]" />
                                                )}
                                                <span className={`text-lg font-medium ${item.valid ? 'text-zinc-200' : 'text-red-400 line-through decoration-red-900/50'}`}>
                                                    {item.text}
                                                </span>
                                            </div>

                                            {item.valid ? (
                                                <CheckCircle2 className="w-5 h-5 text-green-500 opacity-50" />
                                            ) : (
                                                <X className="w-5 h-5 text-red-500 opacity-50" />
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
