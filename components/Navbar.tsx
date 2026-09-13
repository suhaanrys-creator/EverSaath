'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const logoSrc = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/eversaath-logo.png`;

const links = [['Services','/services'],['Find a Companion','/companions'],['Community','/community'],['Family','/family'],['Safety','/safety'],['About','/about'],['Contact','/contact']];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-40 border-b border-[#e6eee8]/80 bg-[#fffdf7]/95 backdrop-blur">
    <div className="container flex h-[76px] items-center justify-between">
      <Link href="/" aria-label="EverSaath home"><Image src={logoSrc} width={132} height={58} alt="EverSaath logo" className="h-[58px] w-[132px] object-contain object-left" /></Link>
      <nav className="hidden items-center gap-6 lg:flex">{links.map(([label, href]) => <Link key={href} href={href} className="text-sm font-bold text-[#496379] transition hover:text-teal">{label}</Link>)}<Link href="/contact" className="flex items-center gap-1 rounded-full bg-navy px-5 py-3 text-sm font-extrabold text-white transition hover:bg-teal">Get started <ArrowUpRight size={16} /></Link></nav>
      <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="rounded-lg p-2 text-navy lg:hidden">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t border-sage bg-cream px-5 pb-5 pt-3 lg:hidden">{links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className="block border-b border-[#e6eee8] py-3 font-bold text-navy">{label}</Link>)}<Link onClick={() => setOpen(false)} href="/contact" className="mt-4 block rounded-full bg-navy px-5 py-3 text-center font-extrabold text-white">Get started</Link></nav>}
  </header>;
}
