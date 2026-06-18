import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Microscope, BookOpen, Grid3X3, FlaskConical } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '847', label: 'Specimens Catalogued' },
  { value: '12', label: 'Specimen Categories' },
  { value: '400×', label: 'Max Magnification' },
  { value: '1923', label: 'Est. Collection Year' },
];

const features = [
  {
    icon: Microscope,
    title: 'Specimen Hub',
    desc: 'Detailed histological breakdowns of plant, protist, and human cell specimens.',
    path: '/specimens',
  },
  {
    icon: Grid3X3,
    title: 'Slide Gallery',
    desc: 'High-density masonry archive of digital microscopy slides with metadata.',
    path: '/gallery',
  },
  {
    icon: FlaskConical,
    title: 'Lab Notes',
    desc: 'Submit observations, questions, and feedback directly to the instructor.',
    path: '/contact',
  },
  {
    icon: BookOpen,
    title: 'Field Taxonomy',
    desc: 'Systematic classification of organisms from Kingdom to Species level.',
    path: '/specimens',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-parchment">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background micrograph */}
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-mc001"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.55)' }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink/30 via-ink/10 to-parchment/80" />

        {/* Hero content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            className="section-label text-fog/80 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span id="hero-subtitle">Educational Microscopy Platform · Est. MMXXVI</span>
          </motion.p>

          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <span id="hero-title">Micro</span>
            <span className="italic font-light">Cosmos</span>
          </motion.h1>

          <motion.p
            className="font-sans text-lg md:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Venture beyond the threshold of human perception. Explore the intricate
            architecture of cells, the silent geometry of diatoms, and the living
            machinery of life at its most fundamental scale.
          </motion.p>

          {/* Glassmorphism title card */}
          <motion.div
            className="glass-card inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5 mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <Link
              to="/specimens"
              className="glass-btn px-7 py-3 text-sm flex items-center gap-2"
            >
              Start Observation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/gallery"
              className="glass-btn-ghost px-7 py-3 text-sm text-white border-white/30 hover:bg-white/10"
            >
              View Slide Gallery
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="font-mono text-xs text-white/50 tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-fog/50 bg-white/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-fog/40">
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                className="text-center md:px-8"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <p className="font-serif text-3xl md:text-4xl font-bold text-ink">{value}</p>
                <p className="font-mono text-xs text-ash tracking-wide mt-1">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="section-label mb-4">About the Platform</p>
            <h2 className="display-heading text-4xl md:text-5xl font-bold mb-6">
              Where Science Meets<br />
              <span className="italic font-light">Aesthetic Precision</span>
            </h2>
            <p className="font-sans text-charcoal leading-relaxed mb-5">
              MicroCosmos is a curated educational resource designed for biology students,
              microscopy enthusiasts, and scientific researchers. Each specimen in our
              collection has been meticulously prepared, stained, and documented according
              to classical histological protocols.
            </p>
            <p className="font-sans text-charcoal leading-relaxed mb-8">
              Our digital slide archive preserves the visual language of 20th-century
              scientific illustration — precise, unadorned, and profoundly beautiful.
            </p>
            <Link
              to="/specimens"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-ink border-b border-ink/30 pb-0.5 hover:border-ink transition-colors"
            >
              Explore the Specimen Hub
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-fog/40 shadow-xl">
              <img
                data-strk-img-id="home-intro-img-mc002"
                data-strk-img="[home-intro-desc] [home-intro-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Microscopy specimen"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%) contrast(1.1)' }}
              />
            </div>
            <span id="home-intro-title" className="sr-only">Diatom microscopy specimen under polarized light</span>
            <span id="home-intro-desc" className="sr-only">High contrast black and white micrograph of a radiolarian diatom</span>
            {/* Floating metadata card */}
            <div className="glass-card absolute -bottom-5 -left-5 px-5 py-4 max-w-xs">
              <p className="font-mono text-xs text-ash mb-1">SPECIMEN · MC-0047</p>
              <p className="font-serif text-sm font-semibold text-ink">Coscinodiscus radiatus</p>
              <p className="font-mono text-xs text-silver mt-1">Magnification: 400× · Brightfield</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="py-20 px-6 md:px-12 bg-white/15 backdrop-blur-xs border-y border-fog/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="section-label mb-3">Platform Modules</p>
            <h2 className="display-heading text-3xl md:text-4xl font-bold">
              Your Laboratory, <span className="italic font-light">Digitised</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc, path }, i) => (
              <motion.div
                key={title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link to={path} className="block h-full">
                  <div className="glass-card h-full p-6 hover:bg-white/35 transition-colors duration-300 group">
                    <div className="w-10 h-10 rounded-xl border border-ink/15 flex items-center justify-center mb-4 group-hover:border-ink/30 transition-colors">
                      <Icon className="w-5 h-5 text-ink" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-ink mb-2">{title}</h3>
                    <p className="font-sans text-sm text-ash leading-relaxed">{desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-mono text-silver group-hover:text-ash transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Micrograph ── */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="section-label mb-3">Specimen of the Week</p>
          <h2 className="display-heading text-3xl md:text-4xl font-bold">
            <span id="featured-title">Radiolaria: Architects of Silica</span>
          </h2>
          <p id="featured-desc" className="font-sans text-charcoal mt-3 max-w-xl mx-auto">
            Single-celled marine organisms whose intricate mineral skeletons have fascinated
            naturalists since the age of Darwin.
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-3xl overflow-hidden border border-fog/40 shadow-2xl"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-[21/9]">
            <img
              data-strk-img-id="home-featured-mc003"
              data-strk-img="[featured-desc] [featured-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Radiolaria specimen"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(100%) contrast(1.2) brightness(0.85)' }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="glass-card inline-block px-6 py-4">
              <p className="font-mono text-xs text-ash mb-1">PHYLUM RADIOLARIA · POLYCYSTINEA</p>
              <p className="font-serif text-xl font-bold text-ink">Aulacantha scolymantha</p>
              <p className="font-mono text-xs text-silver mt-1">Depth: 200–500m · Pacific Ocean · 1872 Challenger Expedition</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 md:px-12 border-t border-fog/40">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="section-label mb-4">Begin Your Study</p>
          <h2 className="display-heading text-4xl md:text-5xl font-bold mb-6">
            The Invisible World<br />
            <span className="italic font-light">Awaits Your Gaze</span>
          </h2>
          <p className="font-sans text-charcoal leading-relaxed mb-10 max-w-xl mx-auto">
            Every slide in our collection is a window into a universe that predates
            human civilisation by billions of years. Begin your observation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/specimens" className="glass-btn px-8 py-3.5 text-sm flex items-center gap-2">
              Explore Specimens
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/gallery" className="glass-btn-ghost px-8 py-3.5 text-sm">
              Browse Gallery
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
