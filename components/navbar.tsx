"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            setIsOpen(false); // Close menu on click
            const offset = 100; // Account for navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const navLinks = [
        { name: "Problem", id: "problem" },
        { name: "Solution", id: "solution" },
        { name: "Offer", id: "offer" },
        { name: "Projects", id: "work" },
        { name: "About", id: "about" },
        { name: "FAQs", id: "faq" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-6 inset-x-0 z-50 flex justify-end md:justify-center pointer-events-none px-4"
        >
            <div className={cn(
                "flex items-center justify-between p-2 rounded-full border backdrop-blur-xl transition-all duration-500 ease-[0.16,1,0.3,1] pointer-events-auto",
                scrolled
                    ? "bg-zinc-900/90 border-zinc-800 shadow-2xl py-2 px-3 md:pl-6" // Added pl-6 for logo/text balance
                    : "bg-zinc-900/60 border-white/5 py-3 px-6"
            )}
            >
                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-1 relative">
                    {navLinks.map((item, index) => (
                        <li key={item.name} className="relative">
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => scrollToSection(e, item.id)}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={cn(
                                    "relative z-10 block px-4 py-2 text-sm font-medium transition-colors duration-300",
                                    hoveredIndex === index ? "text-white" : "text-zinc-400"
                                )}
                            >
                                {item.name}
                                {hoveredIndex === index && (
                                    <motion.div
                                        layoutId="navbar-hover"
                                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Call To Action */}
                <div className="pl-4 hidden md:block">
                    <Button
                        asChild
                        size="sm"
                        className="rounded-full bg-orange-600 hover:bg-orange-500 text-white font-medium shadow-[0_0_20px_-5px_rgba(249,115,22,0.5)] transition-all duration-300 hover:scale-105"
                    >
                        <Link href="#cta">Message Me</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button - Show only on mobile - Moved to end */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-zinc-400 hover:text-white transition-colors p-2"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-24 left-4 right-4 p-4 rounded-3xl bg-zinc-900/95 border border-zinc-800 shadow-2xl backdrop-blur-xl pointer-events-auto md:hidden"
                    >
                        <ul className="space-y-2">
                            {navLinks.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={`#${item.id}`}
                                        onClick={(e) => scrollToSection(e, item.id)}
                                        className="block px-4 py-3 text-lg font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-2 border-t border-white/5 mt-2">
                                <Link
                                    href="#cta"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center px-4 py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-500 transition-colors"
                                >
                                    Message Me
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
