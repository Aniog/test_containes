import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import { ArrowRight, Microscope, Dna, FlaskConical, Eye } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth' },
  { value: '99%', label: 'Species Undiscovered' },
  { value: '1μm', label: 'Average Bacteria Size' },
  { value: '3.8B', label: 'Years of Evolution' },
];

const features = [
  {
    icon: Microscope,
    title: 'Microscopic Life',
    desc: 'Discover organisms invisible to the naked eye — from single-celled bacteria to complex fungi networks.',
  },
  {
    icon: Dna,
    title: 'Genetic Wonders',
    desc: 'Explore how microorganisms carry the blueprints of life, driving evolution and adaptation.',
  },
  {
    icon: FlaskConical,
    title: 'Scientific Discovery',
    desc: 'Learn how microbiology has transformed medicine, agriculture, and our understanding of life itself.',
  },
  {
    icon: Eye,
    title: 'Visual Exploration',
    desc: 'Stunning electron microscopy and fluorescence imaging reveals the hidden beauty of the micro world.',
  },
];

const featuredOrganisms = [
  { id: 'fo-1', name: 'Tardigrade', nickname: 'Water Bear', desc: 'The most resilient animal on Earth, surviving extreme conditions.' },
  { id: 'fo-2', name: 'Diatom', nickname: 'Glass Algae', desc: 'Single-celled algae with intricate silica shells of stunning geometry.' },
  { id: 'fo-3', name: 'Penicillium', nickname: 'Mold Fungus', desc: 'The source of penicillin — a mold that changed the course of medicine.' },
];

const Home = () => {
  const heroRef = useRef(null);
  const featuredRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) ImageHelper.loadImages(strkImgConfig, heroRef.current);
    if (featuredRef.current) ImageHelper.loadImages(strkImgConfig, featuredRef.current);
  }, []);

  return (
    <div className="bg-[#050d1a] text-[#f0f8ff]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="home-hero-bg-a1b2c3"
          data-strk-bg="[home-hero-title] [home-hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/70 via-[#050d1a]/50 to-[#050d1a]" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00d4ff]/5 blur-3xl animate-pulse-slow z-10" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-600/5 blur-3xl animate-pulse-slow z-10" />

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
            <span className="text-[#00d4ff] text-sm font-medium tracking-wide">Exploring the Invisible World</span>
          </div>

          <h1
            id="home-hero-title"
            className="font-grotesk font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 text-[#f0f8ff]"
          >
            The World of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff88]">
              MicroCosmos
            </span>
          </h1>

          <p
            id="home-hero-subtitle"
            className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Dive into the breathtaking universe of microorganisms — the ancient, invisible architects 
            of all life on Earth. Billions of years of evolution, captured in a single drop of water.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/organisms"
              className="inline-flex items-center gap-2 bg-[#00d4ff] text-[#050d1a] font-semibold px-8 py-4 rounded-full hover:bg-[#00b8d9] transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] text-base"
            >
              Explore Organisms <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 border border-[#00d4ff]/50 text-[#00d4ff] font-semibold px-8 py-4 rounded-full hover:bg-[#00d4ff]/10 transition-all text-base"
            >
              View Gallery
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 md:px-8 border-y border-[#00d4ff]/10 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-grotesk font-bold text-3xl md:text-4xl text-[#00d4ff] mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-grotesk font-bold text-3xl md:text-5xl text-[#f0f8ff] mb-4">
              Why Microbes Matter
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Microorganisms are the foundation of all life — they shape our climate, 
              our health, and the very air we breathe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[#0f1f3d] border border-[#00d4ff]/15 rounded-2xl p-6 hover:border-[#00d4ff]/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mb-5 group-hover:bg-[#00d4ff]/20 transition-all">
                  <f.icon className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <h3 className="font-grotesk font-semibold text-[#f0f8ff] text-lg mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Organisms */}
      <section ref={featuredRef} className="py-24 px-4 md:px-8 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="font-grotesk font-bold text-3xl md:text-5xl text-[#f0f8ff] mb-3">
                Featured Organisms
              </h2>
              <p className="text-slate-400 text-lg">Meet some of the most fascinating microorganisms on Earth.</p>
            </div>
            <Link
              to="/organisms"
              className="inline-flex items-center gap-2 text-[#00d4ff] font-medium hover:gap-3 transition-all text-sm"
            >
              View all organisms <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredOrganisms.map((org) => (
              <div
                key={org.id}
                className="group bg-[#0f1f3d] border border-[#00d4ff]/15 rounded-2xl overflow-hidden hover:border-[#00d4ff]/40 hover:shadow-[0_0_40px_rgba(0,212,255,0.12)] transition-all"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={org.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={`home-org-${org.id}`}
                    data-strk-img={`[home-org-desc-${org.id}] [home-org-name-${org.id}] microscopy microorganism`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-[#00d4ff] text-xs font-medium tracking-widest uppercase mb-1">{org.nickname}</div>
                  <h3 id={`home-org-name-${org.id}`} className="font-grotesk font-bold text-xl text-[#f0f8ff] mb-2">{org.name}</h3>
                  <p id={`home-org-desc-${org.id}`} className="text-slate-400 text-sm leading-relaxed">{org.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#0f1f3d] via-[#0a1628] to-[#0f1f3d] border border-[#00d4ff]/20 rounded-3xl p-12 shadow-[0_0_60px_rgba(0,212,255,0.08)]">
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-[#f0f8ff] mb-4">
              Ready to Explore the Invisible?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Browse our gallery of stunning microscopy images and discover the hidden universe 
              that surrounds us every day.
            </p>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-[#00d4ff] text-[#050d1a] font-bold px-10 py-4 rounded-full hover:bg-[#00b8d9] transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] text-base"
            >
              Open Gallery <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
