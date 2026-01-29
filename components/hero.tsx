"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [1, 0]);

    return (
        <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-20">
            {/* Background Glow & Auroras */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Main Center Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen opacity-50" />

                {/* Aurora 1 - Flowing Orange */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        rotate: [0, 10, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-20 -left-20 w-[800px] h-[600px] bg-orange-600/20 blur-[100px] rounded-full mix-blend-screen"
                />

                {/* Aurora 2 - Deep Red/Orange Accent */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, 50, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute top-0 right-0 w-[600px] h-[500px] bg-red-600/10 blur-[100px] rounded-full mix-blend-screen"
                />
            </div>

            <div className="container mx-auto px-4 text-center">
                <div className="max-w-5xl mx-auto space-y-8">
                    <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                        <BlurText text="Stop Wasting" delay={0} /> <br />
                        <BlurText text="Paid Traffic on" delay={0.2} /> <br />
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 font-serif italic font-normal inline-block"
                        >
                            Low-Quality Leads
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Done-for-you landing pages for agencies & small businesses <br className="hidden md:block" />
                        that want <span className="text-zinc-300 font-serif italic font-normal">better conversations</span> and <span className="text-zinc-300 font-serif italic font-normal">higher close rates</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row justify-center gap-4 pt-8"
                    >
                        <Button asChild className="rounded-full bg-orange-600 hover:bg-orange-500 text-white font-medium px-8 h-12 shadow-[0_0_20px_-5px_rgba(249,115,22,0.5)] hover:shadow-[0_0_25px_-5px_rgba(249,115,22,0.6)] hover:scale-105 transition-all duration-300">
                            <Link href="#cta">Qualify My Leads</Link>
                        </Button>
                        <Button asChild variant="outline" className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300 px-8 h-12 backdrop-blur-sm transition-all duration-300">
                            <Link href="#problem">See The Difference</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-zinc-500/50 flex justify-center p-2">
                    <motion.div
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="w-1.5 h-1.5 rounded-full bg-zinc-500"
                    />
                </div>
            </motion.div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
}

// Helper Component for Blur Split Text
function BlurText({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) {
    const words = text.split(" ");
    return (
        <span className={className}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.8, delay: delay + i * 0.15, ease: [0.2, 0.65, 0.3, 0.9] }}
                    className="inline-block mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
}


