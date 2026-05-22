import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Microscope, FlaskConical, BookOpen, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '400×', label: 'Max Magnification' },
  { value: '120+', label: 'Specimen Slides' },
  { value: '6', label: 'Biological Domains' },
  { value: '1891', label: 'Est. Collection Year' },
];

const features = [
  {
    icon: Microscope,
    title: 'Specimen Taxonomy',
    desc: 'Systematic classification of plant histology, protists, and human cytology specimens.',
  },
  {
    icon: FlaskConical,
    title: 'Digital Slide Archive',
    desc: 'High-resolution grayscale micrographs with full metadata and collector annotations.',
  },
  {
    icon: BookOpen,
    title: 'Laboratory Protocols',
    desc: 'Standardised staining procedures, preparation techniques, and observation methods.',
  },
];

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      ImageHelper.loadImages(strkImgConfig, heroRef.current);
    }
  }, []);

  return (
    <div className="min-h-screen bg-parchment font-inter">
      {/* ── Hero Section ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background micrograph */}
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-mc001"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Hidden text references for image search */}
        <span id="hero-title" className="sr-only">Radiolarian diatom microscopy specimen</span>
        <span id="hero-subtitle" className="sr-only">high contrast black and white micrograph scientific</span>

        {/* Overlay gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/80" />

        {/* Decorative grid lines */}
        <div className="absolute inset-0 z-10 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(242,240,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(242,240,233,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Hero content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-parchment/80 animate-pulse" />
            <span className="font-inter text-xs font-medium text-parchment/80 tracking-widest uppercase">
              Educational Microscopy Platform
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-parchment leading-[1.05] tracking-tight mb-6"
          >
            Micro
            <span className="italic font-normal">Cosmos</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-inter text-lg md:text-xl text-parchment/70 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            An academic observatory for the invisible world — where cellular architecture,
            microbial taxonomy, and histological precision converge.
          </motion.p>

          {/* Glass CTA card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-3xl bg-white/15 backdrop-blur-md border border-white/20 shadow-glass-xl"
          >
            <Link
              to="/specimens"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-parchment text-ink font-inter font-semibold text-sm hover:bg-white transition-colors shadow-sm group"
            >
              Start Observation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/gallery"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white/20 text-parchment font-inter font-medium text-sm hover:bg-white/30 transition-colors border border-white/20"
            >
              View Slide Archive
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="font-inter text-xs text-parchment/40 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-parchment/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-ink py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-playfair text-3xl md:text-4xl font-bold text-parchment mb-1">
                {stat.value}
              </div>
              <div className="font-inter text-xs text-silver tracking-widest uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-inter text-xs text-graphite tracking-widest uppercase mb-4">
              Platform Capabilities
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-ink leading-tight">
              Precision Tools for the<br />
              <em className="font-normal">Discerning Observer</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/50 shadow-glass hover:shadow-glass-lg hover:bg-white/55 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-ink/8 border border-ash flex items-center justify-center mb-6 group-hover:bg-ink/12 transition-colors">
                  <feat.icon className="w-5 h-5 text-charcoal" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-ink mb-3">
                  {feat.title}
                </h3>
                <p className="font-inter text-sm text-graphite leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider Quote ── */}
      <section className="py-20 px-6 bg-bone/60 border-y border-ash">
        <div className="max-w-3xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-playfair text-2xl md:text-3xl italic text-charcoal leading-relaxed mb-6">
              "The cell is the fundamental unit of life — and within its architecture
              lies the entire vocabulary of biology."
            </p>
            <footer className="font-inter text-xs text-graphite tracking-widest uppercase">
              — Rudolf Virchow, Cellular Pathology, 1858
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-ink mb-6">
              Ready to Explore the<br />
              <em className="font-normal">Invisible World?</em>
            </h2>
            <p className="font-inter text-base text-graphite mb-10 max-w-xl mx-auto leading-relaxed">
              Navigate through curated specimen collections, annotated slide archives,
              and submit your own laboratory observations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/specimens"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-ink text-parchment font-inter font-semibold text-sm hover:bg-charcoal transition-colors shadow-sm group"
              >
                Explore Specimens
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/gallery"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-ash text-ink font-inter font-medium text-sm hover:bg-white/70 transition-colors"
              >
                Browse Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-ash py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-ink flex items-center justify-center">
              <Microscope className="w-3.5 h-3.5 text-parchment" strokeWidth={1.5} />
            </div>
            <span className="font-playfair font-bold text-ink">MicroCosmos</span>
          </div>
          <p className="font-inter text-xs text-silver text-center">
            © 2026 MicroCosmos Educational Platform. All specimens catalogued under academic licence.
          </p>
          <div className="flex items-center gap-6">
            {['Observatory', 'Specimens', 'Gallery', 'Lab Notes'].map((item, i) => (
              <Link
                key={item}
                to={['/', '/specimens', '/gallery', '/contact'][i]}
                className="font-inter text-xs text-graphite hover:text-ink transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
