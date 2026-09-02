import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
export const metadata: Metadata = { title: 'EverSaath | Always There, Always Caring.', description: 'More life. More friends. More care for every generation.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={manrope.variable}><Navbar />{children}<Footer /></body></html>; }
