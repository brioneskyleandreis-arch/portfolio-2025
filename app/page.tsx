"use client";

import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Solution } from "@/components/solution";
import { Audience } from "@/components/audience";
import { Work } from "@/components/work";
import { Offer } from "@/components/offer";
import { About } from "@/components/about";
import { Faq } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Navbar } from "@/components/navbar";

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <Hero />
            <Problem />
            <Solution />
            <Audience />
            <Offer />
            <Work />
            <About />
            <Faq />
            <CTA />

            <footer className="py-8 text-center text-sm text-muted-foreground border-t">
                <p>&copy; {new Date().getFullYear()} Kyle Andrei Briones. All rights reserved.</p>
            </footer>
        </main>
    );
}
