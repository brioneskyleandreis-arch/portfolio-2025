"use client";

import { MousePointerClick, CloudFog, Ban, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Problem() {
    return (
        <section id="problem" className="py-32 bg-zinc-950 relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20 space-y-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold">Paid Ads Are Not The Problem. <br /><span className="text-white">The <span className="text-red-500 font-serif italic font-normal">Form</span> Is.</span></h2>
                </motion.div>

                {/* Linear Flow - 3 Steps to Disaster */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">

                    {/* Step 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="group relative"
                    >
                        <div className="space-y-6 p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 text-center relative z-10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-zinc-700">
                            <div className="w-16 h-16 mx-auto rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-4 shadow-lg group-hover:border-primary/20 transition-colors">
                                <MousePointerClick className="w-8 h-8 text-zinc-400 group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white">1. It's Too Easy</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Meta optimizes for clicks.
                                Users tap "Submit" on auto-pilot without even reading your offer.
                            </p>
                        </div>
                        {/* Connector 1 -> 2 (Line) */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="hidden md:block absolute top-1/2 -right-8 w-8 h-[2px] bg-zinc-800 z-0 origin-left"
                        />
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="group relative"
                    >
                        <div className="space-y-6 p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 text-center relative z-10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-zinc-700">
                            <div className="w-16 h-16 mx-auto rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-4 shadow-lg group-hover:border-primary/20 transition-colors">
                                <CloudFog className="w-8 h-8 text-zinc-400 group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white">2. Zero Context</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                They don't know your price.
                                They don't know your process.
                                They just click because it's there.
                            </p>
                        </div>
                        {/* Connector 2 -> 3 (Line) */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="hidden md:block absolute top-1/2 -right-8 w-8 h-[2px] bg-zinc-800 z-0 origin-left"
                        />
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="group relative"
                    >
                        <div className="space-y-6 p-8 rounded-2xl bg-gradient-to-b from-red-950/10 to-red-950/5 border border-red-900/30 text-center relative z-10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-red-500/50">
                            <div className="w-16 h-16 mx-auto rounded-full bg-red-900/20 border border-red-500/30 flex items-center justify-center mb-4 shadow-lg shadow-red-900/20 group-hover:bg-red-900/30 transition-colors">
                                <Ban className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-red-500">3. Junk Leads</h3>
                            <p className="text-red-200/60 leading-relaxed">
                                Your inbox fills with "Just looking" and "What's the price?"
                                You pay for the privilege of being ghosted.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
