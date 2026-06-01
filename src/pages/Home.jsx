import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Microscope, BookOpen, Grid3X3 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: Microscope,
    title: 'Specimen Analysis',
    desc: 'Detailed histological breakdowns of plant, protist, and human cytological specimens.',
    path: '/specimens',
  },
  {
    icon: Grid3X3,
    title: 'Digital Slide Gallery',
    desc: 'High-resolution micrographs with magnification metadata and collector\'s annotations.',
    path: '/gallery',
  },
  {
    icon: BookOpen,
    title: 'Laboratory Notes',
    desc: 'Submit observations, inquiries, and feedback through our structured report interface.',
    path: '/contact',
  },
];

const stats = [
  { value: '400×', label: 'Max Magnification' },
  { value: '120+', label: 'Specimen Slides' },
  { value: '3', label: 'Biological Domains' },
  { value: '1891', label: 'Est. Tradition' },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment">

      {/* ── Hero Section ── */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

        {/* Hero Background Image */}
        <div
          className="absolute inset-0"
          data-strk-bg-id="home-hero-bg-a1b2c3"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          style={{ filter: 'brightness(0.55)' }}
        />

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/60" />

        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(242,240,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(242,240,233,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Hero Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full
                       bg-white/15 backdrop-blur-md border border-white/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-parchment/80" />
            <span className="font-mono text-xs tracking-widest uppercase text-parchment/80">
              Biological Sciences · Microscopy Laboratory
            </span>
          </motion.div>

          {/* Glass Title Card */}
          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl shadow-black/30">
            <p id="home-hero-subtitle" className="font-mono text-xs tracking-widest uppercase text-parchment/60 mb-3">
              An Educational Platform
            </p>
            <h1
              id="home-hero-title"
              className="font-serif text-5xl md:text-7xl font-bold text-parchment leading-tight mb-4"
            >
              Micro<span className="italic">Cosmos</span>
            </h1>
            <p className="font-serif text-xl italic text-parchment/70 mb-8">
              The Microscopic World
            </p>
            <p className="font-sans text-sm text-parchment/65 max-w-md mx-auto mb-10 leading-relaxed">
              Explore the invisible architecture of life — from radiolarian lattices to
              the intricate cytology of human tissue. Precision observation begins here.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/specimens">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-glass text-parchment border-white/30 bg-white/20 hover:bg-white/35 flex items-center gap-2"
                >
                  Start Observation
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link to="/gallery">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="font-sans text-sm font-medium text-parchment/70 hover:text-parchment
                             flex items-center gap-2 transition-colors duration-300 px-6 py-3"
                >
                  View Slide Gallery
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-parchment/40">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-parchment/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-ink py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="font-serif text-3xl font-bold text-parchment mb-1">{stat.value}</div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-parchment/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-label mb-4">About the Platform</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
                Where Science Meets<br />
                <span className="italic">Aesthetic Precision</span>
              </h2>
              <p className="font-sans text-charcoal leading-relaxed mb-6">
                MicroCosmos is a curated educational resource for students and researchers
                engaged in biological microscopy. Each specimen is documented with the
                rigour of a 19th-century naturalist and the clarity of modern pedagogy.
              </p>
              <p className="font-sans text-mid-grey text-sm leading-relaxed mb-8">
                Our digital slides span three domains of biological inquiry: plant histology,
                protist morphology, and human cytology — each annotated with magnification
                data, staining protocols, and observational notes.
              </p>
              <Link to="/specimens">
                <button className="btn-dark flex items-center gap-2">
                  Explore Specimens
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-pale-grey">
                <img
                  id="home-intro-img"
                  data-strk-img-id="home-intro-microscope-d4e5f6"
                  data-strk-img="[home-intro-img-desc] [home-intro-img-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Scientific microscopy specimen"
                  className="w-full h-full object-cover"
                />
              </div>
              <span id="home-intro-img-title" className="sr-only">Scientific microscopy laboratory specimen slide</span>
              <span id="home-intro-img-desc" className="sr-only">Biological specimen under microscope high magnification</span>

              {/* Floating annotation card */}
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-5 max-w-[200px]">
                <p className="font-mono text-[10px] tracking-widest uppercase text-mid-grey mb-1">Specimen Note</p>
                <p className="font-serif text-sm text-ink italic leading-snug">
                  "The radiolarian lattice — nature's most perfect geometry."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section className="py-20 px-6 bg-ink/[0.03]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="section-label mb-4">Platform Modules</p>
            <h2 className="font-serif text-4xl font-bold text-ink">
              Three Domains of Inquiry
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
              >
                <Link to={feat.path}>
                  <div className="group glass-card rounded-2xl p-8 h-full cursor-pointer
                                  hover:bg-white/40 hover:shadow-xl hover:shadow-black/10
                                  transition-all duration-400 border border-white/20">
                    <div className="w-12 h-12 rounded-xl bg-ink/8 border border-ink/10 flex items-center justify-center mb-6
                                    group-hover:bg-ink group-hover:border-ink transition-all duration-300">
                      <feat.icon className="w-5 h-5 text-ink group-hover:text-parchment transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-ink mb-3">{feat.title}</h3>
                    <p className="font-sans text-sm text-charcoal leading-relaxed mb-6">{feat.desc}</p>
                    <div className="flex items-center gap-2 text-mid-grey group-hover:text-ink transition-colors duration-300">
                      <span className="font-mono text-xs tracking-widest uppercase">Enter</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Micrograph ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="section-label mb-4">Featured Specimen</p>
            <h2 className="font-serif text-4xl font-bold text-ink mb-4">
              Specimen of the Week
            </h2>
            <p className="font-sans text-charcoal max-w-xl mx-auto">
              A radiolarian — single-celled marine organisms whose silica skeletons
              form intricate geometric lattices visible only under high magnification.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden bg-ink aspect-video"
          >
            <img
              id="home-featured-specimen"
              data-strk-img-id="home-featured-radiolarian-g7h8i9"
              data-strk-img="[home-featured-desc] [home-featured-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Radiolarian specimen under microscope"
              className="w-full h-full object-cover opacity-80"
            />
            <span id="home-featured-title" className="sr-only">Radiolarian marine organism microscopy specimen</span>
            <span id="home-featured-desc" className="sr-only">Single-celled marine organism silica skeleton geometric lattice high magnification</span>

            {/* Metadata overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8
                            bg-gradient-to-t from-ink/80 via-ink/30 to-transparent">
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-parchment/50 mb-1">
                    Specimen ID · RC-0047
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-parchment">
                    Acantharia sp.
                  </h3>
                  <p className="font-sans text-sm text-parchment/60 mt-1">
                    Radiolaria · Marine Protist · Siliceous Skeleton
                  </p>
                </div>
                <div className="text-right">
                  <div className="glass-card rounded-xl px-4 py-3 border-white/20">
                    <p className="font-mono text-xs text-parchment/60">Magnification</p>
                    <p className="font-serif text-2xl font-bold text-parchment">400×</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-ink">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-xs tracking-widest uppercase text-parchment/40 mb-4">
              Begin Your Study
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-parchment mb-6 leading-tight">
              The Invisible World<br />
              <span className="italic">Awaits Observation</span>
            </h2>
            <p className="font-sans text-parchment/60 mb-10 leading-relaxed">
              Every slide tells a story written in the language of cells, organelles,
              and molecular architecture. Your lens is the key.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/gallery">
                <button className="btn-glass text-parchment border-white/20 bg-white/15 hover:bg-white/25 flex items-center gap-2">
                  Open Slide Gallery
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="font-sans text-sm font-medium text-parchment/50 hover:text-parchment/80
                                   flex items-center gap-2 transition-colors duration-300 px-6 py-3">
                  Submit Lab Notes
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-ink border-t border-white/5 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Microscope className="w-4 h-4 text-parchment/30" strokeWidth={1.5} />
            <span className="font-mono text-xs text-parchment/30 tracking-widest uppercase">
              MicroCosmos · Biological Sciences
            </span>
          </div>
          <p className="font-mono text-[10px] text-parchment/20 tracking-widest uppercase">
            © 2026 · Educational Platform · All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
