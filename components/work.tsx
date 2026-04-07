"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Layout, BarChart3, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "Agency Booking Funnel",
        category: "Lead Gen • High Ticket",
        metric: "42% Conversion Rate",
        description: "Replaced a generic 5-page site with a single high-intent funnel. Qualified leads increased by 3x in 30 days.",
        tags: [],
        gradient: "from-orange-500/20 to-amber-500/20",
        icon: <Users className="w-6 h-6 text-orange-400" />,
        videoSrc: "/videos/Portfolio Vid 1.mp4",
        link: "#",
    },
    {
        title: "Clinic Sales/Lead Generation Funnel",
        category: "Lead Gen • Sales",
        metric: "$120 Cost Per Demo",
        description: "A focused landing page for a CRM tool that filters out small businesses and books demos only with qualified enterprise leads.",
        tags: [],
        gradient: "from-blue-500/20 to-cyan-500/20",
        icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
        videoSrc: "/videos/Portfolio Vid 2.mp4",
        link: "#",
    },
    {
        title: "Clinic Sales/Lead Generation Funnel",
        category: "Lead Gen • Sales",
        metric: "8.5x ROAS",
        description: "Long-form sales letter style landing page optimized for cold traffic. Built trust and authority before asking for the call.",
        tags: [],
        gradient: "from-emerald-500/20 to-teal-500/20",
        icon: <Layout className="w-6 h-6 text-emerald-400" />,
        videoSrc: "/videos/Portfolio Vid 3.mp4",
        link: "#",
    },
    {
        title: "Clinic Sales/Lead Generation Funnel",
        category: "Lead Gen • Sales",
        metric: "156 Leads / Month",
        description: "Premium, visual-heavy landing page for a luxury real estate agency. Captures high-net-worth individual contacts.",
        tags: [],
        gradient: "from-purple-500/20 to-pink-500/20",
        icon: <CheckCircle2 className="w-6 h-6 text-purple-400" />,
        videoSrc: "/videos/Portfolio Vid 4.mp4",
        link: "#",
    }
];

export function Work() {
    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden" id="work">
            {/* Background Details */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-zinc-950 to-transparent z-10" />
            <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10" />

            <div className="container mx-auto px-4 relative z-20">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium"
                    >
                        Selected Projects
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white tracking-tight"
                    >
                        Selected Work. <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Built With Purpose.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-zinc-400"
                    >
                        A selection of landing pages and funnels designed to structure offers, guide paid traffic, and pre-qualify leads.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden hover:border-primary/30 transition-colors duration-300">

                                {/* Browser Toolbar Look */}
                                <div className="h-8 border-b border-zinc-800 bg-zinc-900/80 flex items-center px-4 gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                    <div className="ml-4 h-4 w-32 bg-zinc-800 rounded-full text-[10px] flex items-center justify-center text-zinc-600 font-mono">
                                        landing-page.com
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-6 md:p-8 space-y-6">
                                    {/* Visual Placeholder / Video */}
                                    <div className={`w-full aspect-video rounded-lg bg-zinc-950 border border-white/5 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 relative`}>
                                        {project.videoSrc ? (
                                            <video
                                                src={project.videoSrc}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                preload="metadata"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                                                <div className="bg-zinc-950/80 backdrop-blur-sm p-4 rounded-full border border-white/10 shadow-2xl">
                                                    {project.icon}
                                                </div>
                                            </div>
                                        )}

                                        {/* Overlay gradient for text readability if needed, or just style */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent pointer-events-none" />
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                                <p className="text-sm text-zinc-500 font-medium">{project.category}</p>
                                            </div>

                                        </div>




                                    </div>

                                    {/* Overlay Button */}
                                    <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        {/* This is just for visual confirmation, functionality is decorative for now */}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button asChild variant="outline" size="lg" className="rounded-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 group">
                        <Link href="#cta">
                            View All Projects
                            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
