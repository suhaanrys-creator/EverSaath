import PageHeader from '@/components/PageHeader'; import { Heart, ShieldCheck, Sparkles, UsersRound } from 'lucide-react';
export default function About() {
	return <main>
		<PageHeader eyebrow="Our story" title="Growing older should never mean growing lonely." body="EverSaath was created to help seniors find friendship, trusted support and joyful experiences while helping families stay connected." />
		<section className="section-pad">
			<div className="container grid gap-10 md:grid-cols-2">
				<div>
					<p className="eyebrow">The EverSaath way</p>
					<h2 className="mt-3 text-3xl font-extrabold text-navy">Independent by choice. Connected by heart.</h2>
					<p className="mt-5 text-lg text-[#5d7181]">Loneliness and a lack of trusted support can make the world feel smaller. We are here to make it feel open again, with people and services designed around dignity.</p>
				</div>
				<div className="rounded-[28px] bg-navy p-8 text-white">
					<p className="eyebrow !text-[#8fe1cf]">A new reality</p>
					<h2 className="mt-3 text-3xl font-extrabold">Safer, happier, more connected.</h2>
					<p className="mt-4 text-white/70">That is what we are working toward, one relationship and one good day at a time.</p>
				</div>
			</div>
			<div className="container mt-12 border-t border-[#e3eee8] pt-8">
				<p className="eyebrow">Created by</p>
				<p className="mt-3 text-lg font-extrabold text-navy"><strong>&quot;I am Suhaan R, Class: 8th Grade, Student of The Knowledge Habittat, Bengaluru&quot;</strong></p>
			</div>
		</section>
		<section className="section-pad bg-sage">
			<div className="container">
				<h2 className="text-3xl font-extrabold text-navy">What guides us</h2>
				<div className="mt-8 grid gap-5 md:grid-cols-4">
					{[[Heart, 'Dignity', 'Every senior deserves choice and respect.'], [ShieldCheck, 'Trust', 'We make support transparent and accountable.'], [UsersRound, 'Belonging', 'Connection is a need, not a luxury.'], [Sparkles, 'Joy', 'A good life should have a little sparkle.']].map(([Icon, title, body]) => {
						const I = Icon as typeof Heart;
						return <div key={title as string} className="rounded-[20px] bg-white p-6"><I className="text-teal" /><h3 className="mt-5 font-extrabold text-navy">{title as string}</h3><p className="mt-2 text-sm text-[#657888]">{body as string}</p></div>;
					})}
				</div>
			</div>
		</section>
	</main>;
}
