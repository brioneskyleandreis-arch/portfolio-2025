"use client";

import { useState, useEffect } from "react";
import { LayoutTemplate, MonitorSmartphone, DollarSign, ListFilter, Gauge, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const features = [
    {
        icon: LayoutTemplate,
        title: "Custom GHL Landing Page",
        desc: "Built directly in your sub-account. No messy imports. I build it where you need it."
    },
    {
        icon: ListFilter,
        title: "Strategy to Replace Lead Forms",
        desc: "I design the flow to filter out the spam before it ever hits your CRM."
    },
    {
        icon: DollarSign,
        title: "Clear Pricing Positioning",
        desc: "I write copy that frames your price from the start. No more 'sticker shock' on calls."
    },
    {
        icon: Gauge,
        title: "Conversion-Focused Structure",
        desc: "Every scroll, every headline, every button has a single purpose: Qualification."
    },
    {
        icon: MonitorSmartphone,
        title: "Mobile & Ad-Ready",
        desc: "Tested on actual phones, where 90% of traffic is. Fast, responsive, and thumb-friendly."
    },
];

export function Offer() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    };

    // Auto-play
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="offer" className="py-24 container mx-auto px-4 bg-zinc-950 border-y border-zinc-900 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">A Landing Page <span className="text-orange-500 font-serif italic font-normal">Built to Qualify</span></h2>
                    <p className="text-xl text-zinc-400">Done-for-you landing pages designed to guide visitors, filter intent, and support ad campaigns.</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* LEFT COLUMN: Sticky Portrait Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 group"
                    >
                        {/* Abstract Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black z-0" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(249,115,22,0.15),transparent_70%)] z-0" />

                        {/* Image Container */}
                        <div className="absolute inset-0 z-10 p-2">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                                <Image
                                    src="/Pic.png"
                                    alt="High-Fidelity Preview"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </motion.div>


                    {/* RIGHT COLUMN: Carousel */}
                    <div className="h-auto lg:h-[600px] flex flex-col justify-center relative mt-8 lg:mt-0">
                        {/* Carousel Container */}
                        <div className="relative w-full h-[400px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 flex flex-col justify-center p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8">
                                        {(() => {
                                            const Icon = features[currentIndex].icon;
                                            return <Icon className="w-8 h-8 text-primary" />;
                                        })()}
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">{features[currentIndex].title}</h3>
                                    <p className="text-zinc-400 leading-relaxed text-xl">
                                        {features[currentIndex].desc}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-between mt-8 px-2">
                            {/* Indicators */}
                            <div className="flex gap-2">
                                {features.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-zinc-800 hover:bg-zinc-700'}`}
                                    />
                                ))}
                            </div>

                            {/* Arrows */}
                            <div className="flex gap-4">
                                <button
                                    onClick={prevSlide}
                                    className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-primary/50 hover:bg-zinc-800 transition-all"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-primary/50 hover:bg-zinc-800 transition-all"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Bottom Banner */}
                        {/* Bottom Banner */}
                        <div className="mt-8 relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-xl opacity-75 blur-sm group-hover:opacity-100 transition duration-500" />
                            <div className="relative px-5 py-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center gap-3">
                                <Sparkles className="w-5 h-5 text-orange-500 shrink-0" />
                                <p className="text-sm font-medium text-zinc-300">
                                    <span className="text-white font-bold">No templates.</span> Bespoke for you.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
