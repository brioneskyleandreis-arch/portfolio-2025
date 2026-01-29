"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
    return (
        <section id="cta" className="py-32 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative group"
                >
                    {/* Gradient Border Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-orange-600/50 rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000" />

                    <div className="relative bg-zinc-950/90 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 px-6 py-12 md:p-16 text-center overflow-hidden">

                        {/* Inner Subtle Noise/Texture */}
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />

                        {/* Decorative Top Shine */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <div className="relative z-10 space-y-10">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                                    Stop Relying on <br />
                                    <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                                        Low-Intent Lead Forms
                                    </span>
                                </h2>

                                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                                    Pair them with a <span className="text-zinc-200 font-medium">qualification engine</span> that filters out the noise and protects your time.
                                </p>
                            </div>

                            <div className="flex flex-col items-center gap-6">
                                <Button
                                    asChild
                                    size="lg"
                                    className="relative h-14 md:h-20 px-6 md:px-12 text-base md:text-xl rounded-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white shadow-[0_0_40px_-10px_rgba(249,115,22,0.6)] hover:shadow-[0_0_60px_-10px_rgba(249,115,22,0.8)] hover:scale-[1.02] transition-all duration-300 border-t border-white/20 group/btn"
                                >
                                    <a href="https://wa.me/+639663417745" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                                        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
                                        <span>Message Kyle on WhatsApp</span>
                                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-1 transition-transform" />
                                    </a>
                                </Button>


                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
