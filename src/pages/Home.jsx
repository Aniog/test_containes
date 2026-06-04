import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Microscope, BookOpen, Grid3X3, FlaskConical } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: BookOpen,
    title: 'Specimen Hub',
    desc: 'Detailed histological breakdowns of plant tissue, protists, and human cytology.',
    path: '/specimens',
    id: 'feat-specimens',
  },
  {
    icon: Grid3X3,
    title: 'Slide Gallery',
    desc: 'High-resolution digital slides with magnification metadata and collector\'s notes.',
    path: '/gallery',
    id: 'feat-gallery',
  },
  {
    icon: FlaskConical,
    title: 'Lab Notes',
    desc: 'Submit observations, questions, and feedback directly to the instructor.',
    path: '/contact',
    id: 'feat-contact',
  },
];

const stats = [
  { value: '240+', label: 'Digital Slides' },
  { value: '18', label: 'Specimen Classes' },
  { value: '400×', label: 'Max Magnification' },
  { value: '3', label: 'Histology Domains' },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment">

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

        {/* Hero background micrograph */}
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-radiolarian-9f3c1a"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%) contrast(1.1)' }}
        />

        {/* Dark vignette overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/70" />

        {/* Centered glass title card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="relative z-20 text-center px-8 py-12 mx-4
            backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl
            max-w-2xl w-full"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-inter text-xs tracking-[0.3em] uppercase text-white/70 mb-4"
          >
            Biology & Microscopy — Educational Platform
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            id="hero-title"
            className="font-playfair text-5xl md:text-7xl font-bold text-white leading-tight mb-3"
          >
            Micro
            <span className="italic font-light">Cosmos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            id="hero-subtitle"
            className="font-inter text-white/80 text-base md:text-lg mb-8 leading-relaxed"
          >
            Radiolarian skeletons, diatom frustules, and the hidden architecture of life —<br className="hidden md:block" />
            observed through the lens of scientific inquiry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              to="/specimens"
              className="inline-flex items-center gap-2 px-8 py-3.5
                backdrop-blur-md bg-white/25 border border-white/30 rounded-full
                font-inter font-semibold text-sm tracking-widest uppercase text-white
                hover:bg-white/40 transition-all duration-300 group"
            >
              Start Observation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5
                backdrop-blur-md bg-ink/30 border border-white/15 rounded-full
                font-inter font-semibold text-sm tracking-widest uppercase text-white/90
                hover:bg-ink/50 transition-all duration-300"
            >
              View Slide Gallery
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="font-inter text-xs tracking-widest uppercase text-white/50">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="bg-ink py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-playfair text-3xl md:text-4xl font-bold text-parchment">{s.value}</div>
              <div className="font-inter text-xs tracking-widest uppercase text-silver mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-4">About the Platform</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
              Where Science Meets<br />
              <em className="font-light">Aesthetic Precision</em>
            </h2>
            <p className="font-inter text-charcoal leading-relaxed mb-4">
              MicroCosmos is a curated educational resource for students and researchers
              exploring the sub-visible world. Each specimen is documented with the rigour
              of a 19th-century naturalist and the clarity of modern digital imaging.
            </p>
            <p className="font-inter text-charcoal leading-relaxed mb-8">
              From the siliceous lattices of diatoms to the stratified layers of plant
              epidermis, every slide tells a story of biological architecture that predates
              human civilisation by hundreds of millions of years.
            </p>
            <Link
              to="/specimens"
              className="inline-flex items-center gap-2 font-inter text-sm font-semibold
                tracking-widest uppercase text-ink border-b border-ink pb-0.5
                hover:gap-4 transition-all duration-300 group"
            >
              Explore Specimens
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-ash shadow-xl">
              <img
                data-strk-img-id="intro-diatom-img-7b2e4f"
                data-strk-img="[intro-img-caption] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Diatom frustule under electron microscopy"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%) contrast(1.05)' }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 backdrop-blur-md bg-white/40 border border-white/30
              rounded-xl px-4 py-3 shadow-lg">
              <p id="intro-img-caption" className="font-mono text-xs text-graphite">
                Coscinodiscus sp. — SEM × 2,400
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-ink/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="section-label mb-3">Platform Modules</p>
            <h2 className="font-playfair text-4xl font-bold text-ink">
              Three Domains of Inquiry
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <Link
                    to={feat.path}
                    className="group block h-full backdrop-blur-md bg-white/40 border border-white/30
                      rounded-2xl p-8 shadow-md hover:shadow-xl hover:bg-white/60
                      transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-ink/8 border border-ink/10 flex items-center
                      justify-center mb-6 group-hover:bg-ink group-hover:border-ink transition-all duration-300">
                      <Icon className="w-5 h-5 text-ink group-hover:text-parchment transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-ink mb-3">{feat.title}</h3>
                    <p className="font-inter text-sm text-charcoal leading-relaxed mb-6">{feat.desc}</p>
                    <span className="inline-flex items-center gap-1.5 font-inter text-xs font-semibold
                      tracking-widest uppercase text-graphite group-hover:text-ink transition-colors">
                      Enter Module
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── QUOTE SECTION ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Microscope className="w-10 h-10 text-graphite mx-auto mb-8" strokeWidth={1} />
            <blockquote className="font-playfair text-2xl md:text-3xl italic text-ink leading-relaxed mb-6">
              "The microscope is the instrument of the curious mind —
              it does not merely magnify matter, it magnifies wonder."
            </blockquote>
            <cite className="font-inter text-xs tracking-widest uppercase text-graphite not-italic">
              — Laboratory Maxim, Dept. of Cell Biology
            </cite>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-ink py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Microscope className="w-5 h-5 text-silver" strokeWidth={1.5} />
            <span className="font-playfair text-parchment font-semibold">MicroCosmos</span>
          </div>
          <p className="font-inter text-xs text-silver tracking-wide text-center">
            © 2026 MicroCosmos Educational Platform — Department of Biology & Microscopy
          </p>
          <div className="flex gap-6">
            {['Specimens', 'Gallery', 'Lab Notes'].map((l) => (
              <Link
                key={l}
                to={l === 'Specimens' ? '/specimens' : l === 'Gallery' ? '/gallery' : '/contact'}
                className="font-inter text-xs tracking-widest uppercase text-silver hover:text-parchment transition-colors"
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
