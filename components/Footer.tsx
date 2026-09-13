import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';

const logoSrc = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/eversaath-logo.png`;

export default function Footer() {
  return <footer className="bg-navy pb-8 pt-16 text-white"><div className="container grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
    <div><Image src={logoSrc} width={180} height={180} alt="EverSaath logo" className="h-auto w-[180px] object-contain object-left"/><p className="mt-2 max-w-xs text-white/70">Always There, Always Caring.<br />More life. More friends. More care.</p><div className="mt-6 flex gap-3"><Instagram size={19} /><Facebook size={19} /><Linkedin size={19} /></div></div>
    <div><h3 className="mb-4 font-extrabold">Explore</h3>{[['Services','/services'],['Find a Companion','/companions'],['Community','/community'],['Family Dashboard','/family']].map(x=><Link key={x[1]} href={x[1]} className="mb-2 block text-sm text-white/70 hover:text-white">{x[0]}</Link>)}</div>
    <div><h3 className="mb-4 font-extrabold">EverSaath</h3>{[['About us','/about'],['Safety & trust','/safety'],['Contact us','/contact'],['Privacy policy','#']].map(x=><Link key={x[1]} href={x[1]} className="mb-2 block text-sm text-white/70 hover:text-white">{x[0]}</Link>)}</div>
    <div><h3 className="mb-4 font-extrabold">Talk to us</h3><p className="mb-3 flex items-center gap-2 text-sm text-white/70"><Phone size={16} /> 1800 123 4567</p><p className="flex items-center gap-2 text-sm text-white/70"><Mail size={16} /> hello@eversaath.in</p></div>
  </div><div className="container mt-14 border-t border-white/15 pt-6 text-xs text-white/50"><span>© 2026 EverSaath. All rights reserved.</span><span className="ml-5">For support services only. Not a replacement for emergency medical care.</span></div></footer>;
}
