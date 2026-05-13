import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Telescope, Star, Zap, BookOpen, Image, MessageCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 2 + 1,
  duration: `${Math.random() * 4 + 2}s`,
  delay: `${Math.random() * 4}s`,
  opacity: Math.random() * 0.6 + 0.2,
}));

const navCards = [
  {
    icon: BookOpen,
    label: 'Knowledge Hub',
    title: 'Constellations & Coordinates',
    desc: 'Map the night sky using celestial coordinate systems and discover the stories written in starlight.',
    path: '/knowledge/constellations',
    accent: 'text-amber-400',
    border: 'hover:border-amber-400/30',
  },
  {
    icon: Star,
    label: 'Knowledge Hub',
    title: 'Stellar Evolution',
    desc: 'Follow the life cycle of stars — from swirling nebulae to the dramatic finale of supernovae and black holes.',
    path: '/knowledge/stellar-evolution',
    accent: 'text-nebula-purple',
    border: 'hover:border-indigo-400/30',
  },
  {
    icon: Telescope,
    label: 'Knowledge Hub',
    title: 'Observational Physics',
    desc: 'Understand how telescopes and light wavelengths reveal the invisible architecture of the universe.',
    path: '/knowledge/observational-physics',
    accent: 'text-nebula-teal',
    border: 'hover:border-teal-400/30',
  },
  {
    icon: Image,
    label: 'Gallery',
    title: 'Sky Map & Gallery',
    desc: 'Explore stunning imagery of auroras, eclipses, and deep-sky objects with physical explanations.',
    path: '/gallery',
    accent: 'text-amber-400',
    border: 'hover:border-amber-400/30',
  },
];

const stats = [
  { value: '88', label: 'Constellations', sub: 'in the night sky' },
  { value: '10¹¹', label: 'Stars', sub: 'in the Milky Way' },
  { value: '13.8B', label: 'Years', sub: 'age of the universe' },
  { value: '299,792', label: 'km/s', sub: 'speed of light' },
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="bg-space-950">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-space-950/70 via-space-950/50 to-space-950" />

        {/* Animated stars */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {STARS.map((s) => (
            <span
              key={s.id}
              className="star"
              style={{
                top: s.top,
                left: s.left,
                width: `${s.size}px`,
                height: `${s.size}px`,
                opacity: s.opacity,
                '--duration': s.duration,
                '--delay': s.delay,
              }}
            />
          ))}
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-900/20 blur-3xl pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-amber-900/10 blur-3xl pointer-events-none z-0" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="section-label mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            Physics · Astronomy · Wonder
          </p>

          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight text-star-silver mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            The Universe
            <br />
            <span className="gradient-text italic">Awaits You</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            An immersive educational journey through the cosmos — from the ancient art of
            reading constellations to the physics of dying stars and the instruments that
            reveal the invisible universe.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            <Link
              to="/knowledge"
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-space-950 font-medium text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-400/20"
            >
              Begin Exploring
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/gallery"
              className="flex items-center gap-2 border border-white/15 hover:border-amber-400/40 text-slate-200 hover:text-amber-400 text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-200"
            >
              View Gallery
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float">
          <span className="text-xs text-slate-500 font-mono tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-white/5 bg-space-900/50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-light text-amber-400 mb-1">{s.value}</p>
              <p className="text-sm font-medium text-slate-200">{s.label}</p>
              <p className="text-xs text-slate-500 font-mono mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quick Navigation Cards ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-24">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Knowledge Sections</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-star-silver mb-4">
            Where Would You Like to Begin?
          </h2>
          <div className="amber-divider mx-auto" />
          <p className="text-slate-400 text-base max-w-xl mx-auto mt-4">
            Each section is crafted to build your understanding of the cosmos,
            from the basics of sky navigation to the physics of stellar death.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {navCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.path}
                to={card.path}
                className={`glass-card rounded-2xl p-8 group cursor-pointer ${card.border} block`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className={`p-3 rounded-xl bg-white/5 ${card.accent} group-hover:bg-white/10 transition-colors`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="section-label mb-2">{card.label}</p>
                    <h3 className="font-serif text-xl font-light text-star-silver mb-3 group-hover:text-amber-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${card.accent} opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-0 group-hover:translate-x-1 mt-1 flex-shrink-0`} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Featured Quote ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-amber-glow opacity-30 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center relative z-10">
          <Zap className="w-6 h-6 text-amber-400 mx-auto mb-8 opacity-60" />
          <blockquote className="font-serif text-2xl md:text-3xl font-light italic text-slate-200 leading-relaxed mb-6">
            "The cosmos is within us. We are made of star-stuff. We are a way for
            the universe to know itself."
          </blockquote>
          <cite className="text-sm text-slate-500 font-mono tracking-widest uppercase not-italic">
            — Carl Sagan, Cosmos
          </cite>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
        <div className="glass-card rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 nebula-glow">
          <div>
            <p className="section-label mb-3">Have a Question?</p>
            <h3 className="font-serif text-3xl font-light text-star-silver mb-2">
              Ask Your Physics Teacher
            </h3>
            <p className="text-slate-400 text-sm max-w-md">
              Curious about a concept? Submit your question and get a thoughtful
              response from your teacher.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-space-950 font-medium text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap shadow-lg shadow-amber-400/20"
          >
            <MessageCircle className="w-4 h-4" />
            Send a Message
          </Link>
        </div>
      </section>
    </div>
  );
}
