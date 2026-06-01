import { useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Grid3X3 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { galleries } from './Galleries';

const generateTiles = (galleryId, title, count) =>
  Array.from({ length: count }, (_, i) => ({
    id: `${galleryId}-tile-${i}`,
    imgId: `gallery-tile-${galleryId}-${i}`,
    titleId: `tile-${galleryId}-${i}-title`,
    descId: `tile-${galleryId}-${i}-desc`,
    title: `${title} ${String(i + 1).padStart(2, '0')}`,
    desc: `Deep-space observation of ${title.toLowerCase()} formation and structure, captured by orbital telescope.`,
    index: i,
  }));

const tileSpan = (i) => {
  const pattern = [
    'col-span-2 row-span-2',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-2',
    'col-span-2 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-2 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
  ];
  return pattern[i % pattern.length];
};

const tileRatio = (span) => {
  if (span.includes('col-span-2') && span.includes('row-span-2')) return { ratio: '1x1', width: '800' };
  if (span.includes('col-span-2')) return { ratio: '16x9', width: '800' };
  if (span.includes('row-span-2')) return { ratio: '9x16', width: '400' };
  return { ratio: '4x3', width: '400' };
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function GalleryDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const gallery = galleries.find((g) => g.id === id);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  if (!gallery) return <Navigate to="/gallery" replace />;

  const tiles = generateTiles(gallery.id, gallery.title, gallery.count);

  return (
    <div ref={containerRef} className="bg-true-black min-h-screen pt-16">
      {/* Header */}
      <div className="border-b border-white/5 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] text-slate-500 uppercase hover:text-slate-300 transition-colors mb-8"
          >
            <ArrowLeft size={12} /> All Galleries
          </Link>

          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <p className="text-[9px] tracking-[0.4em] text-violet-400 uppercase mb-2">
                {gallery.subtitle}
              </p>
              <h1 className="font-display text-5xl md:text-6xl font-light text-white mb-3">
                {gallery.title}
              </h1>
              <p className="text-slate-400 font-light max-w-lg">{gallery.desc}</p>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Grid3X3 size={14} />
              <span className="text-[10px] tracking-[0.2em] uppercase">{gallery.count} images</span>
            </div>
          </div>
        </div>
      </div>

      {/* Masonry-style CSS Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-1 auto-rows-[200px]"
        >
          {tiles.map((tile) => {
            const span = tileSpan(tile.index);
            const { ratio, width } = tileRatio(span);
            return (
              <motion.div
                key={tile.id}
                variants={itemVariants}
                className={`${span} group relative overflow-hidden bg-slate-950 cursor-pointer`}
              >
                {/* Hidden text anchors for ImageHelper — always in DOM */}
                <span id={tile.titleId} className="sr-only">{tile.title}</span>
                <span id={tile.descId} className="sr-only">{tile.desc}</span>

                <img
                  data-strk-img-id={tile.imgId}
                  data-strk-img={`[${tile.descId}] [${tile.titleId}]`}
                  data-strk-img-ratio={ratio}
                  data-strk-img-width={width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={tile.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs font-light text-white tracking-wide">{tile.title}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-2 hidden md:block">{tile.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
