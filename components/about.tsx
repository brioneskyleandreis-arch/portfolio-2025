"use client";

import Image from "next/image";
import { CheckCircle2, Award } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-32 bg-zinc-950 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* LEFT: Image & Social Proof */}
                    <div className="relative order-2 lg:order-1 flex justify-center lg:block">
                        {/* Decorative Background for Image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-zinc-800 rounded-full opacity-30 animate-pulse-slow pointer-events-none"></div>

                        <div className="relative z-10">
                            {/* Profile Image Frame */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative w-80 h-80 md:w-96 md:h-96 mx-auto lg:mx-0"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 rotate-6 opacity-20 blur-xl"></div>
                                <div className="absolute inset-0 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm -rotate-3 overflow-hidden">
                                    {/* This is a placeholder frame */}
                                </div>
                                <div className="absolute inset-0 rounded-3xl border-2 border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl rotate-0 transition-transform duration-500 hover:rotate-2">
                                    <Image
                                        src="/my-pic.png"
                                        alt="Kyle Andrei Briones"
                                        fill
                                        className="object-contain"
                                    />

                                </div>

                                {/* "Featured On" Badge - Floating Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="absolute -bottom-10 -right-10 md:-right-20 bg-zinc-900 border border-zinc-800 p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[280px]"
                                >
                                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                                        <Award className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold mb-1">Featured On</p>
                                        <p className="text-white text-xs font-medium leading-tight">
                                            The Colony<br />Student Success Program
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT: Bio Content */}
                    <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-block px-3 py-1 mb-6 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm font-medium">
                                About The Builder
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Built by <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Kyle Andrei Briones</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-6 text-lg text-zinc-400 leading-relaxed"
                        >
                            <p>
                                I am a freelance landing page builder specializing in <span className="text-white font-serif italic font-normal text-xl">GoHighLevel funnels</span> for agencies running paid ads.
                            </p>
                            <div className="pl-6 border-l-2 border-orange-500/30 italic text-zinc-300">
                                "I am not a generic web designer. I build landing pages that qualify leads before they ever message you."
                            </div>
                            <p>
                                I work inside GoHighLevel because that is what agencies actually use. I understand traffic costs. I understand lead quality.
                                <br />
                                <span className="text-primary font-serif italic font-normal">I build pages that fix the generic lead form problem.</span>
                            </p>
                        </motion.div>

                        {/* Signature / Decorative Element */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="pt-4 flex flex-col items-center lg:items-start gap-4"
                        >
                            <div className="h-px w-24 bg-gradient-to-r from-orange-500 to-transparent"></div>
                            <p className="text-sm text-zinc-600 font-mono tracking-widest">EST. 2025</p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
