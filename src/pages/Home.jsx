import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Microscope, BookOpen, Grid3X3, FlaskConical } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const FEATURE_CARDS = [
  {
    icon: BookOpen,
    label: 'Specimen Hub',
    title: 'Plant & Animal Histology',
    desc: 'Explore curated cross-sections of plant vasculature, protist colonies, and human cytology with annotated scientific commentary.',
    path: '/specimens',
  },
  {
    icon: Grid3X3,
    label: 'Slide Gallery',
    title: 'Digital Slide Archive',
    desc: 'Browse a high-density masonry archive of prepared microscopy slides, each catalogued with magnification data and collector\'s notes.',
    path: '/gallery',
  },
  {
    icon: FlaskConical,
    label: 'Lab Notes',
    title: 'Submit Observations',
    desc: 'Record your field observations, submit questions to the instructor, and contribute to the collective scientific record.',
    path: '/contact',
  },
];

const STATS = [
  { value: '340+', label: 'Prepared Slides' },
  { value: '12',   label: 'Specimen Classes' },
  { value: '400×', label: 'Max Magnification' },
  { value: '1892', label: 'Est. Collection Year' },
];

export default function Home() {
  const heroRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = el.getBoundingClientRect();
      const x = ((clientX - left) / width  - 0.5) * 12;
      const y = ((clientY - top)  / height - 0.5) * 12;
      el.style.transform = `scale(1.04) translate(${x}px, ${y}px)`;
    };
    const onLeave = () => { el.style.transform = 'scale(1.04) translate(0,0)'; };
    const parent = el.parentElement;
    parent.addEventListener('mousemove', onMove);
    parent.addEventListener('mouseleave', onLeave);
    return () => {
      parent.removeEventListener('mousemove', onMove);
      parent.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-parchment" ref={pageRef}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">

        {/* Background micrograph */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Hidden text anchors for image query interpolation */}
          <span id="hero-img-subject" className="sr-only">radiolarian diatom microscopy</span>
          <span id="hero-img-context" className="sr-only">colorful microscope biology science</span>
          <img
            ref={heroRef}
            data-strk-img-id="home-hero-bg-4a7f2c"
            data-strk-img="[hero-img-subject] [hero-img-context]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Radiolarian diatom micrograph"
            className="w-full h-full object-cover scale-105 transition-transform duration-700 ease-out"
          />
          {/* Gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-parchment/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/20 via-transparent to-ink/20" />
        </div>

        {/* Hero content card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25"
          >
            <Microscope className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
            <span className="text-xs font-sans font-medium tracking-widest uppercase text-white/90">
              Educational Microscopy Platform
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-4"
          >
            Micro
            <span className="italic font-light">Cosmos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-serif text-lg md:text-xl text-white/80 italic mb-2 tracking-wide"
          >
            The Microscopic World
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="font-sans text-sm md:text-base text-white/65 mb-10 max-w-lg mx-auto leading-relaxed"
          >
            A curated scientific archive of prepared microscopy slides, specimen analyses,
            and histological observations for the discerning biology student.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/specimens"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/35 rounded-full px-7 py-3.5 font-sans font-medium text-white hover:bg-white/35 transition-all duration-300 text-sm"
            >
              Start Observation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-sans font-medium text-white/75 hover:text-white border border-white/20 hover:border-white/40 transition-all duration-300 text-sm"
            >
              Browse Slide Archive
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50"
        >
          <span className="text-xs font-sans tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section className="relative z-10 bg-ink text-white py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="font-serif text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
                <div className="text-xs font-sans tracking-widest uppercase text-white/50">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ────────────────────────────────────── */}
      <section className="relative z-10 py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="section-label mb-3">Explore the Collection</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight">
              Three Portals of<br />
              <span className="italic font-normal">Scientific Inquiry</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURE_CARDS.map(({ icon: Icon, label, title, desc, path }, i) => (
              <motion.div
                key={path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <Link to={path} className="group block h-full">
                  <div className="h-full bg-white/40 backdrop-blur-sm border border-mist/60 rounded-2xl p-8 hover:bg-white/60 hover:border-ash/60 hover:shadow-xl transition-all duration-400 flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-ink/8 border border-ink/10 flex items-center justify-center mb-6 group-hover:bg-ink/15 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-ink" strokeWidth={1.5} />
                    </div>
                    <p className="section-label mb-2">{label}</p>
                    <h3 className="font-serif text-xl font-semibold text-ink mb-3 leading-snug">{title}</h3>
                    <p className="font-sans text-sm text-charcoal leading-relaxed flex-1">{desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-sans font-medium text-graphite group-hover:text-ink transition-colors duration-300">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED SPECIMEN ────────────────────────────────── */}
      <section className="relative z-10 py-24 px-6 md:px-10 bg-ink/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-label mb-3">Featured Specimen</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
                Radiolaria<br />
                <span className="italic font-normal text-graphite">Polycystinea</span>
              </h2>
              <p className="font-sans text-charcoal leading-relaxed mb-4">
                Radiolarians are single-celled marine organisms belonging to the supergroup Rhizaria.
                Their intricate siliceous skeletons — known as tests — exhibit extraordinary geometric
                symmetry, making them among the most visually compelling subjects in protistology.
              </p>
              <p className="font-sans text-charcoal leading-relaxed mb-8">
                First described systematically by Ernst Haeckel in his landmark 1862 monograph,
                these organisms have since become a cornerstone of micropaleontological research
                and biostratigraphic dating.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Protista', 'Marine', 'Siliceous', 'Planktonic'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-ink/8 border border-ink/12 text-xs font-sans font-medium text-charcoal tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to="/specimens"
                className="inline-flex items-center gap-2 glass-btn-dark text-sm"
              >
                View Full Specimen Record
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-mist/60 shadow-2xl aspect-[4/3]">
                <span id="home-specimen-title" className="sr-only">Radiolaria Polycystinea marine organism</span>
                <span id="home-specimen-ctx" className="sr-only">colorful microscopy protist biology</span>
                <img
                  data-strk-img-id="home-specimen-img-9b3e1d"
                  data-strk-img="[home-specimen-title] [home-specimen-ctx]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Radiolarian specimen under microscope"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {[
                        { v: '400×', l: 'Magnification' },
                        { v: 'SEM',  l: 'Technique' },
                        { v: 'B&W',  l: 'Filter' },
                      ].map(({ v, l }) => (
                        <div key={l}>
                          <div className="font-mono text-sm font-medium text-white">{v}</div>
                          <div className="text-xs font-sans text-white/60 tracking-wide">{l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative label */}
              <div className="absolute -top-3 -right-3 bg-ink text-white text-xs font-mono px-3 py-1.5 rounded-full">
                Specimen #R-0042
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ───────────────────────────────────────── */}
      <section className="relative z-10 py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-4">Begin Your Study</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6 leading-tight">
              The invisible world<br />
              <span className="italic font-normal">awaits your lens.</span>
            </h2>
            <p className="font-sans text-charcoal mb-10 leading-relaxed">
              Every slide tells a story written in cellular architecture. Join the observation.
            </p>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 glass-btn-dark text-sm px-8 py-4"
            >
              Open the Slide Archive
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
