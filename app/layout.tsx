import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora', weight: '400', style: ['italic'] });

export const metadata: Metadata = {
    title: 'Kyle Andrei | Full Stack Developer',
    description: 'Portfolio of Kyle Andrei, a full-stack developer specializing in Next.js and React.',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://example.com',
        siteName: 'Kyle Andrei Portfolio',
        images: [
            {
                url: '/hero-placeholder.svg',
                width: 1200,
                height: 630,
                alt: 'Kyle Andrei Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kyle Andrei | Full Stack Developer',
        description: 'Portfolio of Kyle Andrei, a full-stack developer specializing in Next.js and React.',
        images: ['/hero-placeholder.svg'],
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
