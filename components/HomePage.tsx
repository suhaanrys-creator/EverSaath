'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, ChevronRight, Heart, ShieldCheck, Star, UsersRound } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import FeatureCard from './FeatureCard';

const features = [
  { icon: 'HeartHandshake' as const, title: 'Trusted Companions', body: 'Find someone for conversations, walks, shopping, technology help or hospital visits.', color: 'bg-[#fff2ce] text-[#b87900]' },
  { icon: 'ShieldCheck' as const, title: 'Verified Caregivers', body: 'Book trained and verified caregivers for everyday support and wellbeing.', color: 'bg-[#dff4e8] text-emerald' },
  { icon: 'Stethoscope' as const, title: 'Healthcare Support', body: 'Get help with doctor visits, nurses, physiotherapy, medicine reminders and hospital assistance.', color: 'bg-[#dceff5] text-teal' },
  { icon: 'UsersRound' as const, title: 'Community & Connection', body: 'Discover yoga, music, hobbies, workshops, outings and new friendships.', color: 'bg-[#e8e8f8] text-navy' },
];
const testimonials = [
  ['“EverSaath gave me a reason to look forward to my Tuesdays. The music group is now my little family.”', 'Shobha Iyer', 'EverSaath member, Bengaluru'],
  ['“I get a gentle update after Mum’s visit, and she gets to feel independent. That balance means everything.”', 'Rohan Kapoor', 'Son of an EverSaath member'],
  ['“The best thing is the dignity. Everyone asks what I would like to do, not what I cannot do.”', 'Vijay Menon', 'EverSaath member, Chennai'],
];

export default function HomePage() {
  return <main>
    <section className="relative overflow-hidden bg-[#f2f8f1] pb-20 pt-12 md:pb-28 md:pt-16">
      <div className="pointer-events-none absolute -right-32 top-0 h-[460px] w-[460px] rounded-full bg-[#dceddf]" />
      <div className="pointer-events-none absolute -bottom-48 left-1/3 h-[430px] w-[430px] rounded-full border-[70px] border-white/60" />
      <div className="container relative grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
          <Image src="/eversaath-logo.png" width={92} height={92} alt="EverSaath logo" className="mb-4 h-[92px] w-[92px] object-contain object-left" />
          <p className="eyebrow flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-gold" /> Always there, always caring.</p>
          <h1 className="mt-5 max-w-xl text-5xl font-extrabold leading-[1.07] tracking-tight text-navy md:text-7xl">More life.<br /><span className="text-teal">More friends.</span><br />More care.</h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#536b7b]">EverSaath connects seniors with trusted companions, verified caregivers, healthcare support and community activities, while keeping families connected.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/services" className="flex items-center gap-2 rounded-full bg-navy px-6 py-4 font-extrabold text-white shadow-lg transition hover:bg-teal">Explore services <ArrowRight size={18} /></Link><Link href="/family" className="rounded-full border-2 border-navy px-6 py-4 font-extrabold text-navy transition hover:bg-white">For families</Link></div>
          <div className="mt-9 flex items-center gap-3 text-sm font-bold text-[#536b7b]"><div className="flex -space-x-2">{['photo-1494790108377-be9c29b29330', 'photo-1507003211169-0a1dd7228f2d', 'photo-1544005313-94ddf0286df2'].map(id => <Image key={id} src={`https://images.unsplash.com/${id}?w=80&q=80`} width={32} height={32} alt="EverSaath community member" className="rounded-full border-2 border-white object-cover" />)}</div><span>Joined by 2,000+ happy families</span></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .1 }} className="relative mx-auto w-full max-w-[520px]">
          <div className="relative aspect-[.92] overflow-hidden rounded-[38px] rounded-bl-[110px] shadow-2xl"><Image src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=1000&q=90" alt="A senior woman smiling with her companion" fill priority className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" /><div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 shadow-lg"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dff4e8] text-emerald"><Heart size={19} fill="currentColor" /></div><div><p className="text-sm font-extrabold text-navy">A little more joy, every day</p><p className="text-xs text-[#617687]">Your community is waiting.</p></div><div className="ml-auto text-gold"><Star fill="currentColor" size={20} /></div></div></div></div>
          <div className="absolute -left-5 top-10 rounded-2xl bg-white px-4 py-3 shadow-xl md:-left-9"><div className="flex items-center gap-2 text-sm font-extrabold text-navy"><ShieldCheck size={20} className="text-emerald" /> Verified & trusted</div></div>
        </motion.div>
      </div>
    </section>
    <section className="section-pad"><div className="container"><SectionHeading eyebrow="How we help" title="The good days are better together." body="Support that fits around the life you already love." /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{features.map(feature => <FeatureCard key={feature.title} {...feature} />)}</div></div></section>
    <section className="section-pad pattern bg-[#f3f9f3]"><div className="container grid items-center gap-12 lg:grid-cols-2"><div><SectionHeading eyebrow="Simple by design" title="How EverSaath works" body="A little support, exactly when you need it. You stay in control at every step." /><div className="mt-9 space-y-6">{[['01', 'Tell us what you need.', 'A conversation is all it takes to get started.'], ['02', 'Choose a trusted helper or service.', 'Browse people and services that feel right for you.'], ['03', 'Stay connected with family updates.', 'Share only what you want, with the people you choose.']].map(step => <div key={step[0]} className="flex gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold font-extrabold text-navy">{step[0]}</span><div><h3 className="font-extrabold text-navy">{step[1]}</h3><p className="text-[#617687]">{step[2]}</p></div></div>)}</div></div><div className="rounded-[30px] bg-navy p-8 text-white md:p-12"><p className="eyebrow !text-[#8fe1cf]">For families</p><h3 className="mt-4 text-3xl font-extrabold leading-tight">Stay close, even when you live far away.</h3><p className="mt-4 text-white/70">Feel reassured with consent-based updates, trusted support and a clear view of the moments that matter.</p><ul className="mt-7 space-y-4 text-sm font-bold">{['Updates only with permission', 'One place for care and connection', 'Support when you need a little more help'].map(item => <li key={item} className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2ca36f]"><Check size={15} /></span>{item}</li>)}</ul><Link href="/family" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-extrabold text-navy">Open family dashboard <ChevronRight size={17} /></Link></div></div></section>
    <section className="section-pad"><div className="container"><SectionHeading eyebrow="Kind words" title="Life feels fuller with EverSaath." center /><div className="mt-12 grid gap-5 md:grid-cols-3">{testimonials.map(testimonial => <div key={testimonial[1]} className="rounded-[22px] border border-[#e3eee8] bg-white p-7 shadow-soft"><div className="flex gap-1 text-gold">{[1, 2, 3, 4, 5].map(i => <Star key={i} size={15} fill="currentColor" />)}</div><p className="mt-5 min-h-[100px] text-lg font-bold leading-7 text-navy">{testimonial[0]}</p><p className="mt-6 font-extrabold text-navy">{testimonial[1]}</p><p className="text-sm text-[#718290]">{testimonial[2]}</p></div>)}</div></div></section>
    <section className="pb-24"><div className="container"><div className="rounded-[30px] bg-teal p-8 text-center text-white md:p-14"><p className="eyebrow !text-[#baf0df]">Your next chapter</p><h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Make every year more connected.</h2><p className="mx-auto mt-4 max-w-xl text-white/80">A little support can make all the difference. Let&apos;s find yours.</p><Link href="/contact" className="mt-7 inline-flex rounded-full bg-white px-6 py-4 font-extrabold text-navy">Get started with EverSaath <ArrowRight className="ml-2" /></Link></div></div></section>
  </main>;
}
