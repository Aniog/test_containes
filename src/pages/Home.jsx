import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Microscope, BookOpen, Grid3X3, FlaskConical } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: <FlaskConical className="w-5 h-5" />,
    title: 'Specimen Hub',
    description: 'Detailed technical breakdowns of Plant Histology, Protists, and Human Cytology specimens.',
    path: '/specimens',
  },
  {
    icon: <Grid3X3 className="w-5 h-5" />,
    title: 'Slide Gallery',
    description: 'A curated collection of high-resolution digital slides with full metadata and collector\'s notes.',
    path: '/gallery',
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Lab Notes',
    description: 'Submit observations, questions, and feedback directly to the laboratory instructor.',
    path: '/contact',
  },
];

const stats = [
  { value: '240+', label: 'Catalogued Specimens' },
  { value: '18', label: 'Specimen Categories' },
  { value: '1000×', label: 'Maximum Magnification' },
  { value: '4', label: 'Staining Protocols' },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="bg-parchment">
      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full-bleed hero image */}
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-mc001"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%) contrast(1.15)' }}
        />
        {/* Vignette + darkening overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/60" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card rounded-3xl px-8 py-12 md:px-16 md:py-16"
          >
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xs font-mono tracking-[0.3em] uppercase text-white/70 mb-6 flex items-center justify-center gap-2"
            >
              <Microscope className="w-3.5 h-3.5" />
              <span id="hero-subtitle">An Educational Platform for Biology & Microscopy</span>
            </motion.p>

            {/* Title */}
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-4"
            >
              Micro
              <span className="italic font-normal">Cosmos</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="font-serif text-lg md:text-xl text-white/80 italic mb-10 leading-relaxed"
            >
              The Microscopic World
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="text-sm text-white/65 max-w-lg mx-auto leading-relaxed mb-10"
            >
              Explore the hidden architecture of life — from the intricate lattices of diatom frustules
              to the branching arborisations of Purkinje cells. Every specimen tells a story.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/specimens"
                className="group inline-flex items-center gap-2 bg-white/90 hover:bg-white text-ink font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Start Observation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium text-sm px-8 py-3.5 rounded-full transition-all duration-300"
              >
                View Slide Gallery
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-ash bg-bone/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="font-serif text-3xl md:text-4xl font-bold text-ink">{stat.value}</p>
                <p className="text-xs font-mono text-graphite tracking-widest uppercase mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-mono text-graphite tracking-[0.25em] uppercase mb-4">
              Platform Modules
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight">
              Navigate the Collection
            </h2>
            <div className="w-16 h-px bg-ink/30 mx-auto mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <Link
                  to={feature.path}
                  className="group block bg-bone border border-ash rounded-2xl p-8 hover:shadow-lg hover:border-charcoal/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-ink/5 border border-ink/10 flex items-center justify-center text-ink mb-6 group-hover:bg-ink group-hover:text-parchment transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-ink mb-3">{feature.title}</h3>
                  <p className="text-sm text-charcoal leading-relaxed mb-6">{feature.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-graphite tracking-wide uppercase group-hover:text-ink transition-colors">
                    Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Manifesto Section ── */}
      <section className="py-24 bg-ink text-parchment">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-mono text-silver tracking-[0.25em] uppercase mb-4">
                Our Philosophy
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-6">
                Science is an act of<br />
                <em className="font-normal">careful observation.</em>
              </h2>
              <div className="w-16 h-px bg-parchment/30 mb-8" />
              <p className="text-parchment/75 leading-relaxed mb-6">
                MicroCosmos was conceived as a rigorous yet accessible educational resource for students
                and practitioners of biological microscopy. Every specimen in our collection has been
                prepared, stained, and documented according to established histological protocols.
              </p>
              <p className="text-parchment/75 leading-relaxed">
                We believe that the beauty of the microscopic world — the geometric perfection of a
                diatom frustule, the branching elegance of a Purkinje cell — is inseparable from its
                scientific significance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal/20">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Microscopy laboratory"
                  data-strk-img-id="about-img-mc002"
                  data-strk-img="[about-title] [about-subtitle]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(100%) contrast(1.1)' }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-dark rounded-xl p-4 max-w-[200px]">
                <p id="about-subtitle" className="text-[9px] font-mono text-silver tracking-widest uppercase mb-1">Featured Specimen</p>
                <p id="about-title" className="text-sm font-serif text-white font-medium">Radiolarian Assemblage</p>
                <p className="text-[10px] text-white/60 font-mono mt-0.5">200× · Brightfield</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-mono text-graphite tracking-[0.25em] uppercase mb-4">
              Begin Your Study
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
              Ready to look closer?
            </h2>
            <p className="text-charcoal leading-relaxed mb-10 max-w-xl mx-auto">
              Explore our curated specimen collection, examine high-resolution digital slides,
              and deepen your understanding of the microscopic world.
            </p>
            <Link
              to="/specimens"
              className="group inline-flex items-center gap-2 bg-ink hover:bg-charcoal text-parchment font-semibold text-sm px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Enter the Specimen Hub
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
