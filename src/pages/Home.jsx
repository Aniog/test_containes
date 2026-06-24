import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Microscope, BookOpen, Grid3x3, FlaskConical } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const FEATURES = [
  {
    icon: BookOpen,
    title: 'Specimen Hub',
    desc: 'Detailed histological breakdowns of plant tissue, protists, and human cytology.',
    path: '/specimens',
  },
  {
    icon: Grid3x3,
    title: 'Slide Gallery',
    desc: 'A curated archive of high-resolution digital slides with full metadata.',
    path: '/gallery',
  },
  {
    icon: FlaskConical,
    title: 'Lab Notes',
    desc: 'Submit observations, questions, and feedback directly to the instructor.',
    path: '/contact',
  },
];

const STATS = [
  { value: '240+', label: 'Digital Slides' },
  { value: '18', label: 'Specimen Classes' },
  { value: '400×', label: 'Max Magnification' },
  { value: '3', label: 'Cytology Domains' },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Hero background micrograph */}
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-radiolarian-7f3a2c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />

        {/* Grayscale + contrast filter overlay */}
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(242,240,233,0.18)', mixBlendMode: 'multiply' }} />
        <div className="absolute inset-0 z-0" style={{ filter: 'grayscale(1) contrast(1.15)', position: 'absolute', inset: 0 }} />

        {/* Dark vignette */}
        <div className="absolute inset-0 z-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(26,26,26,0.55) 100%)' }} />

        {/* Glass title card */}
        <motion.div
          className="relative z-10 text-center px-8 py-12 mx-4 max-w-2xl"
          style={{
            background: 'rgba(242,240,233,0.22)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: '1.5rem',
            boxShadow: '0 16px 64px rgba(0,0,0,0.18)',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        >
          <p className="specimen-label mb-4 text-white/80" id="hero-subtitle">
            Dept. of Biological Sciences — Microscopy Division
          </p>
          <h1
            id="hero-title"
            className="font-playfair text-5xl md:text-6xl font-bold leading-tight mb-4"
            style={{ color: '#F2F0E9' }}
          >
            Micro<span style={{ fontStyle: 'italic' }}>Cosmos</span>
          </h1>
          <p className="font-inter text-base md:text-lg mb-8 leading-relaxed" style={{ color: 'rgba(242,240,233,0.85)' }}>
            An immersive educational platform for the study of microscopic life —
            from radiolarian silica lattices to the ultrastructure of human erythrocytes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/specimens">
              <motion.button
                className="glass-btn font-inter font-medium text-sm tracking-wide px-8 py-3 rounded-full flex items-center gap-2"
                style={{ color: '#F2F0E9', border: '1px solid rgba(255,255,255,0.35)' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Start Observation
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link to="/gallery">
              <motion.button
                className="font-inter font-medium text-sm tracking-wide px-8 py-3 rounded-full border transition-colors"
                style={{ color: 'rgba(242,240,233,0.7)', borderColor: 'rgba(255,255,255,0.15)', background: 'transparent' }}
                whileHover={{ borderColor: 'rgba(255,255,255,0.4)', color: '#F2F0E9' }}
                whileTap={{ scale: 0.97 }}
              >
                Browse Slides
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <span className="specimen-label text-white/50 text-[0.6rem]">Scroll to explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <ChevronDown className="w-4 h-4 text-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────── */}
      <section className="border-y border-silver/40 bg-fog/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="font-playfair text-3xl font-bold text-ink">{value}</div>
              <div className="specimen-label mt-1">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Feature cards ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="specimen-label mb-3">Platform Modules</p>
          <h2 className="font-playfair text-4xl font-bold text-ink">
            Navigate the Collection
          </h2>
          <hr className="ink-divider w-16 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map(({ icon: Icon, title, desc, path }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link to={path} className="block h-full">
                <motion.div
                  className="glass-card h-full p-8 flex flex-col gap-5 group cursor-pointer"
                  whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-xl border border-silver/50 flex items-center justify-center bg-white/40">
                    <Icon className="w-5 h-5 text-ink" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-ink mb-2">{title}</h3>
                    <p className="font-inter text-sm text-charcoal leading-relaxed">{desc}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-2 font-inter text-xs font-medium text-graphite group-hover:text-ink transition-colors">
                    Enter module <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Featured specimen preview ─────────────────────────── */}
      <section className="bg-ink py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="specimen-label text-ash mb-4">Featured Specimen</p>
            <h2 className="font-playfair text-4xl font-bold text-parchment mb-6 leading-tight">
              Radiolaria:<br />
              <span className="italic font-normal">Architects of Silica</span>
            </h2>
            <p className="font-inter text-sm text-ash leading-relaxed mb-8">
              Among the most geometrically perfect organisms in the natural world, radiolarians
              construct intricate mineral skeletons of amorphous silica. Their latticed tests —
              preserved in oceanic sediment for millions of years — serve as invaluable
              biostratigraphic markers and a testament to the elegance of evolutionary design.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Rhizaria', 'Polycystinea', 'Siliceous', 'Marine Plankton'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-ash/30 font-inter text-xs text-ash">
                  {tag}
                </span>
              ))}
            </div>
            <Link to="/specimens">
              <motion.button
                className="glass-btn font-inter text-sm font-medium px-7 py-3 rounded-full flex items-center gap-2"
                style={{ color: '#F2F0E9', border: '1px solid rgba(255,255,255,0.20)' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Specimen Hub <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img
                data-strk-img-id="home-radiolarian-feature-9b4d1e"
                data-strk-img="[home-radiolarian-desc] [home-radiolarian-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Radiolarian micrograph"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(1) contrast(1.2)' }}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card px-5 py-3">
              <p className="specimen-label text-[0.6rem]" id="home-radiolarian-title">Acantharia sp.</p>
              <p className="font-inter text-xs text-charcoal" id="home-radiolarian-desc">Radiolarian silica skeleton micrograph</p>
              <p className="specimen-label text-[0.55rem] mt-1">Magnification: 200×</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Microscope className="w-10 h-10 text-graphite mx-auto mb-6" strokeWidth={1} />
          <h2 className="font-playfair text-4xl font-bold text-ink mb-4">
            Begin Your Observation
          </h2>
          <p className="font-inter text-sm text-charcoal max-w-lg mx-auto mb-10 leading-relaxed">
            Every slide tells a story written in the language of cells, organelles, and molecular
            architecture. The collection awaits your inquiry.
          </p>
          <Link to="/gallery">
            <motion.button
              className="glass-btn font-inter font-semibold text-sm tracking-wide px-10 py-4 rounded-full inline-flex items-center gap-2 text-ink"
              style={{ border: '1px solid rgba(26,26,26,0.20)' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Open Slide Gallery <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t border-silver/40 py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Microscope className="w-4 h-4 text-graphite" strokeWidth={1.5} />
            <span className="font-playfair text-sm font-semibold text-ink">MicroCosmos</span>
          </div>
          <p className="font-inter text-xs text-graphite text-center">
            © 2026 Department of Biological Sciences. All micrographs are for educational use.
          </p>
          <div className="flex gap-6">
            {[['/', 'Observatory'], ['/specimens', 'Specimens'], ['/gallery', 'Gallery'], ['/contact', 'Lab Notes']].map(([path, label]) => (
              <Link key={path} to={path} className="font-inter text-xs text-graphite hover:text-ink transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
