import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Microscope, BookOpen, Grid3X3, FlaskConical } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const FEATURES = [
  {
    icon: BookOpen,
    title: 'Specimen Library',
    desc: 'Curated histological sections spanning plant, animal, and protist kingdoms — annotated for academic precision.',
    link: '/specimens',
  },
  {
    icon: Grid3X3,
    title: 'Digital Slide Gallery',
    desc: 'High-resolution grayscale micrographs with full metadata: magnification, staining protocol, and collector notes.',
    link: '/gallery',
  },
  {
    icon: FlaskConical,
    title: 'Lab Notes',
    desc: 'Submit observations, request specimens, or correspond directly with the laboratory instructor.',
    link: '/contact',
  },
];

const STATS = [
  { value: '240+', label: 'Specimen Slides' },
  { value: '12', label: 'Taxonomic Orders' },
  { value: '400×', label: 'Max Magnification' },
  { value: '1892', label: 'Est. Collection Year' },
];

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      ImageHelper.loadImages(strkImgConfig, heroRef.current);
    }
  }, []);

  return (
    <div className="bg-parchment min-h-screen">
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full-bleed B&W micrograph background */}
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-mc001"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'contrast(1.05)',
          }}
        />

        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-parchment/30 via-parchment/50 to-parchment/90" />

        {/* Radiolarian SVG watermark */}
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-[600px] h-[600px]" fill="none" stroke="#1A1A1A" strokeWidth="0.5">
            <circle cx="200" cy="200" r="180" />
            <circle cx="200" cy="200" r="140" />
            <circle cx="200" cy="200" r="100" />
            <circle cx="200" cy="200" r="60" />
            <circle cx="200" cy="200" r="20" />
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 360) / 24;
              const rad = (angle * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={200 + 20 * Math.cos(rad)}
                  y1={200 + 20 * Math.sin(rad)}
                  x2={200 + 180 * Math.cos(rad)}
                  y2={200 + 180 * Math.sin(rad)}
                />
              );
            })}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 360) / 12;
              const rad = (angle * Math.PI) / 180;
              return (
                <circle
                  key={i}
                  cx={200 + 160 * Math.cos(rad)}
                  cy={200 + 160 * Math.sin(rad)}
                  r="8"
                />
              );
            })}
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="label-caps mb-6 text-graphite">
              <span id="hero-subtitle">Biological Sciences · Microscopy Laboratory</span>
            </p>

            <h1 id="hero-title" className="hero-title mb-6">
              Micro<span className="italic">Cosmos</span>
            </h1>

            <p className="font-serif text-xl md:text-2xl text-charcoal italic mb-4 leading-relaxed">
              The Microscopic World
            </p>

            <p className="body-text max-w-xl mx-auto mb-12 text-charcoal/80">
              An academic platform for the rigorous study of biological microstructures —
              from radiolarian silica lattices to the intricate vascular bundles of monocot stems.
            </p>

            {/* Glassmorphism CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/25 backdrop-blur-md border border-white/40 rounded-2xl px-8 py-6 shadow-xl"
            >
              <Link to="/specimens" className="glass-btn-dark text-sm flex items-center gap-2">
                Start Observation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/gallery" className="glass-btn text-sm flex items-center gap-2 border-ink/20">
                Browse Slides
                <Grid3X3 className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-graphite"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <span className="label-caps text-[10px]">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-silver/40 bg-white/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-serif text-3xl md:text-4xl font-bold text-ink">{stat.value}</p>
                <p className="label-caps mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <p className="label-caps mb-4">Platform Overview</p>
            <h2 className="section-title mb-4">
              A Complete Microscopy<br />
              <span className="italic">Reference System</span>
            </h2>
            <p className="body-text text-charcoal/80">
              Designed for instructors and students of biological sciences, MicroCosmos
              provides structured access to curated specimen data, high-resolution imagery,
              and collaborative laboratory tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <Link to={feat.link}>
                    <div className="glass-card p-8 h-full hover:bg-white/30 transition-all duration-300 cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-ink/8 border border-ink/10 flex items-center justify-center mb-6 group-hover:bg-ink/15 transition-colors">
                        <Icon className="w-5 h-5 text-ink" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-ink mb-3">{feat.title}</h3>
                      <p className="body-text text-sm text-charcoal/80 leading-relaxed">{feat.desc}</p>
                      <div className="mt-6 flex items-center gap-2 label-caps text-graphite group-hover:text-ink transition-colors">
                        Explore <ArrowRight className="w-3 h-3" />
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
      <section className="py-20 px-6 md:px-10 border-t border-silver/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Microscope className="w-8 h-8 text-silver mx-auto mb-8" strokeWidth={1} />
            <blockquote className="font-serif text-2xl md:text-3xl text-ink italic leading-relaxed mb-6">
              "The cell is the fundamental unit of life — and within its architecture
              lies the entire vocabulary of biology."
            </blockquote>
            <p className="label-caps text-graphite">
              — Laboratory Instructor's Preface, MicroCosmos Vol. I
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-6 md:px-10 bg-ink">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="label-caps text-silver/60 mb-4">Begin Your Study</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-parchment mb-6 leading-tight">
              Enter the Microscopic World
            </h2>
            <p className="font-sans text-base text-silver/80 mb-10 max-w-xl mx-auto leading-relaxed">
              Navigate through taxonomic kingdoms, examine stained tissue sections,
              and document your observations in the digital laboratory notebook.
            </p>
            <Link
              to="/specimens"
              className="inline-flex items-center gap-2 bg-parchment/15 backdrop-blur-md border border-parchment/30 rounded-full px-8 py-3 text-parchment font-sans font-medium tracking-wide hover:bg-parchment/25 transition-all duration-300"
            >
              Open Specimen Hub
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
