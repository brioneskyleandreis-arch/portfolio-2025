"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Is this only for Meta ads?",
        answer: (
            <>
                <p className="font-bold text-white mb-2">No.</p>
                <p>This works for any paid traffic source, including Meta, Google, TikTok, LinkedIn, or mixed campaigns.</p>
                <p className="mt-2">If you are sending paid traffic directly to lead forms or low-context pages, this will improve lead quality.</p>
            </>
        )
    },
    {
        question: "Will this reduce the number of leads I get?",
        answer: (
            <>
                <p className="font-bold text-white mb-2">Yes.</p>
                <p>And that is the point.</p>
                <p className="mt-2">You will get fewer leads, but they will be more informed, more serious, and more likely to convert.</p>
                <p className="mt-2">Most agencies close more deals with less volume once filtering is in place.</p>
            </>
        )
    },
    {
        question: "Why not just use Meta lead forms?",
        answer: (
            <>
                <p className="mb-2">Meta lead forms optimize for speed, not intent.</p>
                <p>People submit without reading, understanding the price, or knowing the process.</p>
                <p className="mt-2">A landing page adds context, clarity, and qualification before they opt in.</p>
                <p className="mt-2 text-white font-medium">That difference shows up immediately in call quality.</p>
            </>
        )
    },
    {
        question: "Do you include copywriting or just the design?",
        answer: (
            <>
                <p className="font-bold text-white mb-2">Both.</p>
                <p>I handle the structure, messaging, and copywriting, all built inside GoHighLevel.</p>
                <p className="mt-2">The page is designed to qualify leads, not just look good.</p>
            </>
        )
    },
    {
        question: "Will this work for my specific offer?",
        answer: (
            <>
                <p className="mb-2">If you sell a premium service and run paid ads, <span className="text-white font-bold">yes.</span></p>
                <p>This is especially effective for agencies, consultants, and service providers who want serious buyers and fewer time-wasters.</p>
                <p className="mt-2 text-zinc-500 italic">If your offer depends on mass volume or impulse leads, this may not be a fit.</p>
            </>
        )
    },
    {
        question: "How long does it take to build?",
        answer: (
            <>
                <p>Timelines depend on scope, but most builds are completed quickly once the offer and positioning are clear.</p>
                <p className="mt-2">I align expectations upfront so there are no surprises.</p>
            </>
        )
    },
    {
        question: "Do you offer revisions?",
        answer: (
            <>
                <p className="font-bold text-white mb-2">Yes.</p>
                <p>Revisions are included to make sure the messaging, positioning, and flow fit your offer and audience.</p>
                <p className="mt-2">The goal is clarity and qualification, not endless tweaking.</p>
            </>
        )
    },
    {
        question: "How do we get started?",
        answer: (
            <>
                <p className="font-bold text-white mb-2">Simple.</p>
                <p><a href="#cta" className="text-primary underline underline-offset-4 hover:text-orange-400 transition-colors">Message me on WhatsApp.</a></p>
                <p className="mt-2">I will confirm fit, discuss your offer, and decide if this makes sense for your agency.</p>
            </>
        )
    }
];

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-zinc-900/50 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-4 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked <span className="text-primary font-serif italic font-normal">Questions</span></h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950/50"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-900/50 transition-colors"
                            >
                                <span className={`text-lg transition-colors ${openIndex === i ? 'text-primary font-medium' : 'text-zinc-200'}`}>
                                    {faq.question}
                                </span>
                                <span className={`p-2 rounded-full border border-zinc-800 transition-all ${openIndex === i ? 'bg-primary border-primary text-white rotate-180' : 'text-zinc-400'}`}>
                                    {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
