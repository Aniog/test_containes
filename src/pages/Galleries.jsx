import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export const galleries = [
  {
    id: 'nebulae',
    title: 'Nebulae',
    subtitle: '星雲',
    desc: 'Interstellar clouds of gas and dust — the birthplaces and graveyards of stars.',
    count: 12,
    color: 'from-violet-900/40',
    imgId: 'gallery-thumb-nebulae-a1b2c3',
    titleId: 'gallery-nebulae-title',
    descId: 'gallery-nebulae-desc',
  },
  {
    id: 'galaxies',
    title: 'Galaxies',
    subtitle: '銀河',
    desc: 'Gravitationally bound systems of stars, stellar remnants, and dark matter.',
    count: 18,
    color: 'from-blue-900/40',
    imgId: 'gallery-thumb-galaxies-d4e5f6',
    titleId: 'gallery-galaxies-title',
    descId: 'gallery-galaxies-desc',
  },
  {
    id: 'supernovae',
    title: 'Supernovae',
    subtitle: '超新星',
    desc: 'Stellar explosions of extraordinary luminosity — forging heavy elements.',
    count: 8,
    color: 'from-rose-900/40',
    imgId: 'gallery-thumb-supernovae-g7h8i9',
    titleId: 'gallery-supernovae-title',
    descId: 'gallery-supernovae-desc',
  },
  {
    id: 'black-holes',
    title: 'Black Holes',
    subtitle: 'ブラックホール',
    desc: 'Regions of spacetime where gravity is so strong that nothing can escape.',
    count: 6,
    color: 'from-slate-900/60',
    imgId: 'gallery-thumb-blackholes-j1k2l3',
    titleId: 'gallery-black-holes-title',
    descId: 'gallery-black-holes-desc',
  },
  {
    id: 'deep-field',
    title: 'Deep Field',
    subtitle: '深宇宙',
    desc: 'Long-exposure images revealing thousands of galaxies in a tiny patch of sky.',
    count: 10,
    color: 'from-indigo-900/40',
    imgId: 'gallery-thumb-deepfield-m4n5o6',
    titleId: 'gallery-deep-field-title',
    descId: 'gallery-deep-field-desc',
  },
  {
    id: 'planetary',
    title: 'Planetary',
    subtitle: '惑星',
    desc: 'Worlds within our solar system and beyond — diverse, alien, and beautiful.',
    count: 15,
    color: 'from-amber-900/30',
    imgId: 'gallery-thumb-planetary-p7q8r9',
    titleId: 'gallery-planetary-title',
    descId: 'gallery-planetary-desc',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Galleries() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-true-black min-h-screen pt-16">
      {/* Header */}
      <div className="border-b border-white/5 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.4em] text-violet-400 uppercase mb-3"
          >
            銀河 — Collections
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-light text-white"
          >
            Galactic Galleries
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 font-light mt-4 max-w-xl"
          >
            Curated collections of deep-space imagery from the world's most powerful observatories.
          </motion.p>
        </div>
      </div>

      {/* Gallery grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5"
        >
          {galleries.map((gallery, i) => (
            <motion.div
              key={gallery.id}
              variants={itemVariants}
              className={`${i === 0 ? 'md:col-span-2' : ''} ${i === 3 ? 'lg:col-span-2' : ''}`}
            >
              <Link
                to={`/gallery/${gallery.id}`}
                className="group relative block overflow-hidden bg-true-black"
              >
                <div className={`relative overflow-hidden ${i === 0 || i === 3 ? 'aspect-[16/7]' : 'aspect-[4/3]'}`}>
                  <img
                    data-strk-img-id={gallery.imgId}
                    data-strk-img={`[${gallery.descId}] [${gallery.titleId}]`}
                    data-strk-img-ratio={i === 0 || i === 3 ? '16x9' : '4x3'}
                    data-strk-img-width={i === 0 || i === 3 ? '1200' : '600'}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={gallery.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${gallery.color} via-transparent to-transparent opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[9px] tracking-[0.3em] text-slate-400 uppercase mb-1">
                          {gallery.subtitle}
                        </p>
                        <h2
                          id={gallery.titleId}
                          className="font-display text-2xl md:text-3xl font-light text-white group-hover:text-violet-200 transition-colors"
                        >
                          {gallery.title}
                        </h2>
                        <p id={gallery.descId} className="text-xs text-slate-400 mt-1 max-w-sm font-light leading-relaxed hidden md:block">
                          {gallery.desc}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2 ml-4">
                        <span className="text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                          {gallery.count} images
                        </span>
                        <span className="flex items-center gap-1 text-[10px] tracking-[0.2em] text-violet-400 uppercase group-hover:gap-2 transition-all">
                          View <ArrowRight size={10} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
