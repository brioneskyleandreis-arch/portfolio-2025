import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora', weight: '400', style: ['italic'] });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.kyleandreibriones.info"),
    title: {
        default: 'Kyle Andrei | Vibe Coder & Creative Developer',
        template: '%s | Kyle Andrei'
    },
    description: 'Portfolio of Kyle Andrei, a Vibe Coder crafting dynamic and high-converting web experiences.',
    keywords: ['Vibe Coder', 'Creative Developer', 'Frontend Developer', 'Next.js', 'React', 'Portfolio', 'Landing Page Developer'],
    authors: [{ name: 'Kyle Andrei' }],
    creator: 'Kyle Andrei',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://www.kyleandreibriones.info',
        siteName: 'Kyle Andrei Portfolio',
        title: 'Kyle Andrei | Vibe Coder',
        description: 'Portfolio of Kyle Andrei, crafting dynamic and high-converting web experiences.',
        images: [
            {
                url: '/hero-placeholder.svg', // Ensure to update this with your actual OG image later
                width: 1200,
                height: 630,
                alt: 'Kyle Andrei Portfolio Preview',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kyle Andrei | Vibe Coder',
        description: 'Portfolio of Kyle Andrei, crafting dynamic and high-converting web experiences.',
        images: ['/hero-placeholder.svg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://www.kyleandreibriones.info',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${lora.variable} font-sans`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
