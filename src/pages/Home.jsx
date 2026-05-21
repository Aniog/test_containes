import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Microscope, BookOpen, Grid3X3 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const STATS = [
  { value: '400×', label: 'Max Magnification' },
  { value: '120+', label: 'Specimen Slides' },
  { value: '3', label: 'Specimen Classes' },
  { value: '1892', label: 'Est. Collection' },
];

const FEATURES = [
  {
    icon: Microscope,
    title: 'Specimen Hub',
    desc: 'Detailed histological breakdowns of plant, protist, and human cytology specimens.',
    path: '/specimens',
  },
  {
    icon: Grid3X3,
    title: 'Slide Gallery',
    desc: 'High-resolution digital slides with metadata, magnification data, and collector\'s notes.',
    path: '/gallery',
  },
  {
    icon: BookOpen,
    title: 'Lab Notes',
    desc: 'Submit observations, questions, and feedback directly to the laboratory instructor.',
    path: '/contact',
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment">

      {/* ── Hero Section ── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

        {/* Full-width B&W micrograph background */}
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="home-hero-bg-a1b2c3"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />

        {/* Grayscale + contrast overlay on the background */}
        <div className="absolute inset-0 z-0" style={{ filter: 'grayscale(100%) contrast(1.15)' }} />

        {/* Dark vignette overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/70" />

        {/* Centered Glass Title Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="relative z-20 text-center px-6 max-w-3xl mx-auto"
        >
          <div className="backdrop-blur-md bg-white/15 border border-white/20 rounded-3xl
                          px-10 py-12 shadow-2xl">

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-xs text-white/70 tracking-[0.25em] uppercase mb-6"
            >
              <span id="hero-subtitle">Dept. of Biological Sciences — Laboratory Series</span>
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="font-serif font-black text-white leading-none mb-3"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              <span id="hero-title">MicroCosmos</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="font-serif italic text-white/80 text-xl md:text-2xl mb-8"
            >
              The Microscopic World
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="font-sans text-white/70 text-sm md:text-base leading-relaxed mb-10 max-w-lg mx-auto"
            >
              An immersive educational platform for the study of histology, cytology,
              and microscopic biology. Observe. Analyse. Understand.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/specimens"
                className="flex items-center justify-center gap-2 px-8 py-3.5
                           backdrop-blur-md bg-white/90 border border-white/40 rounded-full
                           font-sans font-semibold text-ink text-sm
                           hover:bg-white transition-all duration-300 shadow-lg"
              >
                Start Observation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/gallery"
                className="flex items-center justify-center gap-2 px-8 py-3.5
                           backdrop-blur-md bg-white/15 border border-white/25 rounded-full
                           font-sans font-semibold text-white text-sm
                           hover:bg-white/25 transition-all duration-300"
              >
                View Slide Gallery
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-ink py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-serif font-bold text-white text-3xl md:text-4xl mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-silver text-xs tracking-widest uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="mono-label mb-4">Platform Overview</p>
          <h2 className="font-serif font-bold text-ink text-4xl md:text-5xl leading-tight">
            Explore the Invisible
          </h2>
          <p className="font-sans text-ash text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Three interconnected modules designed for rigorous scientific inquiry
            and visual discovery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <Link
                  to={feat.path}
                  className="group block glass-card p-8 hover:shadow-xl
                             hover:bg-white/40 transition-all duration-400 h-full"
                >
                  <div className="w-12 h-12 rounded-2xl bg-ink/8 border border-ink/10
                                  flex items-center justify-center mb-6
                                  group-hover:bg-ink/15 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-ink" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif font-bold text-ink text-xl mb-3">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-charcoal text-sm leading-relaxed mb-6">
                    {feat.desc}
                  </p>
                  <div className="flex items-center gap-2 font-sans text-ash text-sm
                                  group-hover:text-ink transition-colors duration-300">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Featured Specimen Preview ── */}
      <section className="section-padding bg-ink/5 border-y border-fog">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="mono-label mb-4">Featured Specimen</p>
              <h2 className="font-serif font-bold text-ink text-4xl md:text-5xl leading-tight mb-6">
                Radiolaria:<br />
                <span className="italic font-normal">Architects of Silica</span>
              </h2>
              <p className="font-sans text-charcoal leading-relaxed mb-4">
                Radiolarians are single-celled marine organisms whose intricate siliceous
                skeletons have fascinated naturalists since the 19th century. Their geometric
                precision rivals the finest human engineering.
              </p>
              <p className="font-sans text-charcoal leading-relaxed mb-8">
                First catalogued by Ernst Haeckel in his landmark 1862 monograph,
                these organisms remain a cornerstone of micropaleontology and
                evolutionary biology.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <div className="font-mono text-ash text-xs tracking-widest uppercase mb-1">Kingdom</div>
                  <div className="font-serif text-ink font-semibold">Rhizaria</div>
                </div>
                <div className="w-px h-10 bg-fog" />
                <div>
                  <div className="font-mono text-ash text-xs tracking-widest uppercase mb-1">Magnification</div>
                  <div className="font-serif text-ink font-semibold">400×</div>
                </div>
                <div className="w-px h-10 bg-fog" />
                <div>
                  <div className="font-mono text-ash text-xs tracking-widest uppercase mb-1">Stain</div>
                  <div className="font-serif text-ink font-semibold">Unstained</div>
                </div>
              </div>
              <Link
                to="/specimens"
                className="inline-flex items-center gap-2 glass-btn px-7 py-3 text-sm text-ink"
              >
                View Full Specimen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border border-fog shadow-2xl">
                <img
                  id="radiolarian-img"
                  alt="Radiolarian specimen under polarized light microscopy"
                  className="w-full h-full object-cover specimen-img"
                  data-strk-img-id="radiolarian-featured-d4e5f6"
                  data-strk-img="radiolarian silica skeleton microscopy polarized light"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              {/* Metadata overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass-card px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-mono text-ash text-xs tracking-widest uppercase">Specimen ID</div>
                      <div className="font-serif text-ink font-semibold text-sm">RAD-001-BW</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-ash text-xs tracking-widest uppercase">Collection</div>
                      <div className="font-serif text-ink font-semibold text-sm">Haeckel Archive</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="mono-label mb-4">Begin Your Study</p>
          <h2 className="font-serif font-bold text-ink text-4xl md:text-5xl leading-tight mb-6">
            The World Beneath<br />the Lens Awaits
          </h2>
          <p className="font-sans text-ash text-lg leading-relaxed mb-10">
            Navigate to the Specimen Hub to begin your structured exploration,
            or browse the Slide Gallery for visual immersion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/specimens"
              className="inline-flex items-center justify-center gap-2 px-8 py-4
                         bg-ink text-parchment rounded-full font-sans font-semibold text-sm
                         hover:bg-charcoal transition-colors duration-300"
            >
              Enter Specimen Hub
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center gap-2 px-8 py-4
                         glass-btn text-ink text-sm"
            >
              Browse Gallery
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-fog py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Microscope className="w-4 h-4 text-ash" strokeWidth={1.5} />
            <span className="font-serif text-ash text-sm">MicroCosmos</span>
          </div>
          <p className="font-mono text-silver text-xs tracking-wider text-center">
            © 2026 — Department of Biological Sciences. All specimens for educational use.
          </p>
          <div className="flex gap-6">
            {['Specimens', 'Gallery', 'Lab Notes'].map((l) => (
              <Link
                key={l}
                to={`/${l.toLowerCase().replace(' ', '')}`}
                className="font-sans text-ash text-xs hover:text-ink transition-colors duration-200"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
