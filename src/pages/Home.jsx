import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '2 trillion', label: 'Galaxies in the observable universe' },
  { value: '13.8 Gyr', label: 'Age of the universe' },
  { value: '93 Bly', label: 'Diameter of observable universe' },
  { value: '~10²⁴', label: 'Estimated stars' },
];

const features = [
  {
    id: 'feat-nebulae',
    titleId: 'feat-nebulae-title',
    descId: 'feat-nebulae-desc',
    imgId: 'home-feat-nebulae-8f2a9c',
    title: 'Nebulae',
    desc: 'Vast clouds of gas and dust — stellar nurseries where new suns are born.',
    href: '/gallery/nebulae',
  },
  {
    id: 'feat-galaxies',
    titleId: 'feat-galaxies-title',
    descId: 'feat-galaxies-desc',
    imgId: 'home-feat-galaxies-3b7d1e',
    title: 'Galaxies',
    desc: 'Island universes containing hundreds of billions of stars, dark matter, and mystery.',
    href: '/gallery/galaxies',
  },
  {
    id: 'feat-supernovae',
    titleId: 'feat-supernovae-title',
    descId: 'feat-supernovae-desc',
    imgId: 'home-feat-supernovae-c4f8a2',
    title: 'Supernovae',
    desc: 'Cataclysmic stellar explosions that forge the heavy elements of life itself.',
    href: '/gallery/supernovae',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-true-black text-slate-100 min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        {/* Ken Burns background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="ken-burns absolute inset-[-5%] w-[110%] h-[110%]"
            data-strk-bg-id="hero-bg-nebula-7e3f1a"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Star size={10} className="text-star-gold fill-star-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-star-gold font-light">
              A Journey Through the Cosmos
            </span>
            <Star size={10} className="text-star-gold fill-star-gold" />
          </motion.div>

          <motion.h1
            id="hero-title"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-white leading-none tracking-tight mb-4"
          >
            Celestial
            <br />
            <em className="italic text-violet-300">Odyssey</em>
          </motion.h1>

          <motion.p
            id="hero-subtitle"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-slate-300 text-base md:text-lg font-light tracking-wide max-w-xl mx-auto mb-10"
          >
            Exploring the infinite architecture of the universe — from stellar nurseries
            to the edge of the observable cosmos.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/gallery"
              className="group flex items-center gap-2 px-8 py-3 border border-violet-500/60 text-violet-300 text-xs tracking-[0.25em] uppercase font-light hover:bg-violet-500/10 hover:border-violet-400 transition-all duration-300"
            >
              Explore Galleries
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/data"
              className="flex items-center gap-2 px-8 py-3 text-slate-400 text-xs tracking-[0.25em] uppercase font-light hover:text-slate-100 transition-colors duration-300"
            >
              View Data Sheets
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.3em] text-slate-500 uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-y border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="text-center"
            >
              <div className="font-display text-2xl md:text-3xl text-star-gold font-light mb-1">
                {s.value}
              </div>
              <div className="text-[10px] tracking-[0.2em] text-slate-500 uppercase">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Featured sections ── */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[10px] tracking-[0.4em] text-violet-400 uppercase mb-3">Featured Collections</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white">
            Windows to the Universe
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {features.map((feat, i) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
            >
              <Link
                to={feat.href}
                className="group block bg-true-black overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    data-strk-img-id={feat.imgId}
                    data-strk-img={`[${feat.descId}] [${feat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={feat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="p-6 border-t border-white/5">
                  <h3
                    id={feat.titleId}
                    className="font-display text-2xl font-light text-white mb-2 group-hover:text-violet-300 transition-colors"
                  >
                    {feat.title}
                  </h3>
                  <p id={feat.descId} className="text-sm text-slate-400 font-light leading-relaxed mb-4">
                    {feat.desc}
                  </p>
                  <span className="text-[10px] tracking-[0.25em] text-violet-400 uppercase flex items-center gap-1.5 group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={10} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Quote section ── */}
      <section className="py-24 px-6 text-center border-t border-white/5">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="font-display text-3xl md:text-4xl font-light italic text-slate-200 leading-relaxed mb-6">
            "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself."
          </p>
          <cite className="text-[10px] tracking-[0.3em] text-slate-500 uppercase not-italic">
            — Carl Sagan
          </cite>
        </motion.blockquote>
      </section>
    </div>
  );
}
