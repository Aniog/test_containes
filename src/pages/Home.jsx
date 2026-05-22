import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Microscope, BookOpen, Grid3X3, FlaskConical } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};

const features = [
  {
    icon: BookOpen,
    title: 'Specimen Hub',
    desc: 'Detailed histological breakdowns of plant tissue, protists, and human cytology with annotated diagrams.',
    path: '/specimens',
    label: 'Explore Specimens',
  },
  {
    icon: Grid3X3,
    title: 'Slide Gallery',
    desc: 'A curated archive of high-resolution digital slides with magnification metadata and collector\'s notes.',
    path: '/gallery',
    label: 'View Gallery',
  },
  {
    icon: FlaskConical,
    title: 'Lab Notes',
    desc: 'Submit observations, questions, and feedback directly to the laboratory instructor.',
    path: '/contact',
    label: 'Open Lab Notes',
  },
];

const stats = [
  { value: '340+', label: 'Specimen Records' },
  { value: '12', label: 'Taxonomic Orders' },
  { value: '1,200×', label: 'Max Magnification' },
  { value: '48', label: 'Annotated Slides' },
];

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      ImageHelper.loadImages(strkImgConfig, heroRef.current);
    }
  }, []);

  return (
    <div className="min-h-screen bg-parchment">
      {/* ── Hero Section ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full-bleed B&W micrograph background */}
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-radiolarian-bg-9f3a2c"
          data-strk-bg="[hero-specimen-name] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) contrast(1.15) brightness(0.55)',
          }}
        />

        {/* Hidden text references for image search */}
        <span id="hero-specimen-name" className="sr-only">Radiolarian diatom microscopy electron micrograph</span>
        <span id="hero-subtitle" className="sr-only">microscopic organism scientific specimen black and white</span>

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/10 to-black/50" />

        {/* Centered Glassmorphism Title Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          className="relative z-20 mx-4 max-w-2xl w-full text-center"
        >
          <div className="bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl p-10 md:p-14 shadow-glass-xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-white/50" />
              <span className="font-inter text-xs text-white/70 tracking-[0.25em] uppercase">
                Educational Platform · Biology & Microscopy
              </span>
              <div className="h-px w-8 bg-white/50" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="font-playfair text-5xl md:text-7xl font-bold text-white leading-tight mb-3"
            >
              Micro
              <span className="italic font-light">Cosmos</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="font-inter text-sm text-white/60 tracking-[0.3em] uppercase mb-6"
            >
              The Microscopic World
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="font-inter text-base text-white/80 leading-relaxed mb-10 max-w-md mx-auto"
            >
              An immersive educational journey through the invisible architecture of life —
              from radiolarian lattices to the cytological landscapes of human tissue.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/specimens"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-ink font-inter font-semibold text-sm tracking-wide hover:bg-white/90 transition-all duration-300 shadow-glass"
              >
                Start Observation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white font-inter font-medium text-sm tracking-wide hover:bg-white/25 transition-all duration-300"
              >
                <Microscope className="w-4 h-4" />
                View Slide Gallery
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="font-inter text-[10px] text-white/50 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-ink py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
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

      {/* ── Introduction ── */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="section-label mb-4">About the Platform</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-ink mb-6 leading-tight">
              Where Science Meets
              <br />
              <em className="font-light">Aesthetic Precision</em>
            </h2>
            <p className="font-inter text-base text-charcoal leading-relaxed mb-6">
              MicroCosmos is a curated educational resource designed for biology students,
              microscopy enthusiasts, and scientific researchers. Each specimen is documented
              with rigorous academic precision, presented through the lens of classical
              scientific illustration.
            </p>
            <p className="font-inter text-base text-charcoal leading-relaxed mb-8">
              Our digital slide archive spans three primary domains: plant histology,
              protist taxonomy, and human cytology — each rendered in high-contrast
              monochrome to reveal structural detail invisible to the naked eye.
            </p>
            <Link
              to="/specimens"
              className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-ink border-b border-ink pb-0.5 hover:gap-4 transition-all duration-300"
            >
              Explore the Specimen Hub
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-bone border border-ash">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Diatom specimen under electron microscopy"
                className="w-full h-full object-cover grayscale-img"
                data-strk-img-id="intro-diatom-img-7b2e1f"
                data-strk-img="[intro-img-desc] [intro-img-context]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
              />
              <span id="intro-img-desc" className="sr-only">diatom silica shell electron microscopy scientific specimen</span>
              <span id="intro-img-context" className="sr-only">microscopic biology educational platform</span>
            </div>
            {/* Metadata overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-xs text-white/90 tracking-wider">SPEC-0042</p>
                    <p className="font-playfair text-sm font-semibold text-white">Coscinodiscus radiatus</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-xs text-white/70">400×</p>
                    <p className="font-inter text-xs text-white/60">SEM · 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section className="py-20 px-6 md:px-12 bg-bone/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="section-label mb-3">Platform Modules</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-ink">
              Three Domains of Study
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  custom={i * 0.15}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Link to={feat.path} className="block h-full">
                    <div className="h-full bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-glass hover:shadow-glass-lg hover:bg-white/55 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-xl bg-ink/8 border border-ink/10 flex items-center justify-center mb-6 group-hover:bg-ink/12 transition-colors">
                        <Icon className="w-5 h-5 text-ink" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-playfair text-xl font-semibold text-ink mb-3">
                        {feat.title}
                      </h3>
                      <p className="font-inter text-sm text-charcoal leading-relaxed mb-6">
                        {feat.desc}
                      </p>
                      <div className="flex items-center gap-2 font-inter text-xs font-semibold text-ink tracking-wide group-hover:gap-3 transition-all duration-300">
                        {feat.label}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Quote / Manifesto ── */}
      <section className="py-28 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="font-playfair text-6xl text-ash mb-6 leading-none">"</div>
            <blockquote className="font-playfair text-2xl md:text-3xl font-medium text-ink leading-relaxed italic mb-8">
              The cell is the fundamental unit of life. To understand it is to understand
              the very grammar of existence.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-ash" />
              <cite className="font-inter text-sm text-graphite not-italic tracking-wide">
                Rudolf Virchow · Cellular Pathology, 1858
              </cite>
              <div className="h-px w-12 bg-ash" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-ash py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Microscope className="w-4 h-4 text-graphite" strokeWidth={1.5} />
            <span className="font-playfair text-sm text-graphite">MicroCosmos</span>
          </div>
          <p className="font-inter text-xs text-silver text-center">
            An educational platform for Biology & Microscopy instruction · {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-6">
            {[
              { path: '/specimens', label: 'Specimens' },
              { path: '/gallery', label: 'Gallery' },
              { path: '/contact', label: 'Contact' },
            ].map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="font-inter text-xs text-graphite hover:text-ink transition-colors tracking-wide"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
