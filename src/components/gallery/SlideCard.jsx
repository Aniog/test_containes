import { motion } from 'framer-motion';
import { Microscope, ZoomIn } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function SlideCard({ slide, onClick }) {
  const heightClass =
    slide.aspectRatio === 'tall'
      ? 'row-span-2'
      : slide.aspectRatio === 'wide'
      ? 'col-span-1'
      : '';

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      onClick={() => onClick(slide)}
      className={`relative rounded-2xl overflow-hidden cursor-pointer group ${heightClass}`}
      style={{ minHeight: slide.aspectRatio === 'tall' ? '420px' : '200px' }}
    >
      <img
        src={slide.thumbUrl}
        alt={slide.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ minHeight: 'inherit' }}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Always-visible bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="glass-card px-3 py-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="font-mono-data text-ash text-xs mb-0.5">{slide.specimenId}</p>
          <p className="font-playfair text-ink text-sm font-semibold leading-tight">{slide.title}</p>
        </div>
      </div>

      {/* Magnification badge */}
      <div className="absolute top-3 left-3">
        <span className="font-mono-data text-white/90 text-xs bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1">
          <Microscope className="w-2.5 h-2.5" strokeWidth={1.5} />
          {slide.magnification}
        </span>
      </div>

      {/* Zoom icon */}
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ZoomIn className="w-3.5 h-3.5 text-white" />
      </div>
    </motion.div>
  );
}
