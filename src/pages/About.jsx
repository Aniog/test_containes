import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import { Heart, Globe, Award, Users } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';

const timeline = [
  { year: '2014', title: 'Founded in Tokyo', body: 'Three engineers left their jobs at a major optics firm with one goal: build a camera that felt as natural as seeing.' },
  { year: '2016', title: 'First Prototype', body: 'After two years of R&D, the Lumora Alpha prototype was unveiled at Photokina — and the photography world took notice.' },
  { year: '2018', title: 'Lumora M1 Launch', body: 'Our first commercial camera sold out in 48 hours. The M1 won Camera of the Year from three independent publications.' },
  { year: '2020', title: 'Full-Frame Era', body: 'The X1 introduced our full-frame sensor platform, setting a new benchmark for dynamic range and color accuracy.' },
  { year: '2023', title: 'X1 Pro & Global Expansion', body: 'The X1 Pro brought 8K RAW video and 100MP imaging to professionals worldwide. Lumora opened offices in Berlin, New York, and Sydney.' },
  { year: '2026', title: 'Today', body: 'Over 500,000 Lumora cameras are in the hands of photographers in 80 countries. We\'re just getting started.' },
];

const values = [
  { icon: Heart,  title: 'Craft First',      body: 'Every camera is assembled by hand. We believe the tools you use should inspire you, not just function.' },
  { icon: Globe,  title: 'Built to Last',    body: 'We design for decades, not product cycles. Repairability and longevity are core to every design decision.' },
  { icon: Award,  title: 'Uncompromising',   body: 'We ship when it\'s ready. We\'ve delayed launches to get things right, and we\'ll do it again.' },
  { icon: Users,  title: 'Community Driven', body: 'Our roadmap is shaped by the photographers who use our cameras every day. Your feedback builds the next model.' },
];

const team = [
  { imgId: 'team-img-aa11', labelId: 'team-lbl-1', name: 'Kenji Mori',      role: 'Co-Founder & CEO',          bio: 'Former optical engineer. Obsessed with light, lenses, and long hikes.' },
  { imgId: 'team-img-bb22', labelId: 'team-lbl-2', name: 'Sara Lindqvist',  role: 'Co-Founder & CTO',          bio: 'Sensor architect. Holds 14 patents in imaging technology.' },
  { imgId: 'team-img-cc33', labelId: 'team-lbl-3', name: 'David Osei',      role: 'Head of Industrial Design', bio: 'Designed cameras used on three Oscar-winning films.' },
  { imgId: 'team-img-dd44', labelId: 'team-lbl-4', name: 'Yuki Tanaka',     role: 'Head of Color Science',     bio: 'Spent a decade calibrating displays for cinema post-production.' },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* ── Hero ── */}
      <section className="relative bg-zinc-950 pt-16 pb-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          data-strk-bg-id="about-hero-bg-f1e2d3"
          data-strk-bg="[about-hero-sub] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 to-zinc-950" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Our Story</p>
          <h1 id="about-hero-title" className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            We Build Cameras<br />for People Who See
          </h1>
          <p id="about-hero-sub" className="text-zinc-400 text-lg max-w-xl mx-auto">
            Lumora was born from a simple frustration: the best cameras felt like machines. We set out to make one that felt like an extension of your eye.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-zinc-900 py-16 px-6 border-y border-zinc-800">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '500K+', label: 'Cameras Sold' },
            { value: '80',    label: 'Countries' },
            { value: '12',    label: 'Years of R&D' },
            { value: '14',    label: 'Industry Awards' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl md:text-4xl font-bold text-amber-400">{value}</p>
              <p className="text-zinc-400 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">History</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">A Decade of Craft</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2" />
            <div className="flex flex-col gap-12">
              {timeline.map(({ year, title, body }, i) => (
                <div key={year} className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 flex md:justify-end pl-14 md:pl-0">
                    {i % 2 === 0 ? (
                      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-sm w-full hover:border-amber-400/30 transition-colors">
                        <p className="text-amber-400 font-bold text-sm mb-1">{year}</p>
                        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
                      </div>
                    ) : <div className="hidden md:block" />}
                  </div>
                  <div className="absolute left-6 md:left-1/2 top-6 w-3 h-3 rounded-full bg-amber-400 -translate-x-1/2 ring-4 ring-zinc-950" />
                  <div className="md:w-1/2 pl-14 md:pl-0">
                    {i % 2 === 1 ? (
                      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-sm w-full hover:border-amber-400/30 transition-colors">
                        <p className="text-amber-400 font-bold text-sm mb-1">{year}</p>
                        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
                      </div>
                    ) : <div className="hidden md:block" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 hover:border-amber-400/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">The People</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Meet the Team</h2>
            <p className="text-zinc-400 mt-4 max-w-xl mx-auto">A small group of obsessives who believe the best camera is the one that gets out of your way.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-400/30 transition-colors">
                <span id={member.labelId} className="hidden">{member.name} {member.role} portrait professional</span>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={member.name}
                  className="w-full h-52 object-cover object-top"
                  data-strk-img-id={member.imgId}
                  data-strk-img={`[${member.labelId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                />
                <div className="p-5">
                  <p className="text-white font-semibold">{member.name}</p>
                  <p className="text-amber-400 text-xs mt-0.5 mb-3">{member.role}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-zinc-900 py-20 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-amber-400 mb-4">Join Us</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to See the World Differently?</h2>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">Explore our cameras or dive into our learning resources to sharpen your craft.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/cameras" className="bg-amber-400 text-zinc-950 font-semibold rounded-full px-8 py-3 hover:bg-amber-300 transition-colors">
            Explore Cameras
          </Link>
          <Link to="/learn" className="border border-zinc-600 text-white rounded-full px-8 py-3 hover:border-amber-400 transition-colors">
            Start Learning
          </Link>
        </div>
      </section>
    </div>
  );
}
