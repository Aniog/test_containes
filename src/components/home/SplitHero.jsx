import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const PAIRS = [
  {
    id: 'hand-leaf',
    humanLabel: 'The Hand',
    humanDesc: 'human palm lines close-up skin texture',
    naturalLabel: 'The Leaf',
    naturalDesc: 'leaf vein macro close-up green botanical',
    quote: 'Every line on your palm mirrors a river in the forest.',
  },
  {
    id: 'eye-water',
    humanLabel: 'The Eye',
    humanDesc: 'human eye iris close-up macro portrait',
    naturalLabel: 'The Ripple',
    naturalDesc: 'water ripple concentric circles surface macro',
    quote: 'We see the world, and the world sees itself through us.',
  },
  {
    id: 'skin-bark',
    humanLabel: 'The Skin',
    humanDesc: 'human skin texture close-up macro pores',
    naturalLabel: 'The Bark',
    naturalDesc: 'tree bark texture close-up macro forest',
    quote: 'Our skin remembers every season it has weathered.',
  },
];

export default function SplitHero() {
  const containerRef = useRef(null);
  const [activePair, setActivePair] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mouseX = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, [activePair]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
  };

  const cyclePair = (dir) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActivePair((p) => (p + dir + PAIRS.length) % PAIRS.length);
      setIsTransitioning(false);
    }, 400);
  };

  const pair = PAIRS[activePair];

  return (
    <div
      ref={containerRef}
      className="split-screen relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Left — Human */}
      <motion.div
        className="relative overflow-hidden"
        style={{ backgroundColor: '#E8D5C4' }}
        animate={{ opacity: isTransitioning ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <img
          id={`human-img-${pair.id}`}
          data-strk-img-id={`split-human-${pair.id}-a1b2`}
          data-strk-img={`[human-desc-${pair.id}]`}
          data-strk-img-ratio="9x16"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={pair.humanLabel}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(0.85) contrast(1.05)' }}
        />
        <span id={`human-desc-${pair.id}`} className="hidden">{pair.humanDesc}</span>

        {/* Gradient divider */}
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#F5EDE3]/60 z-10" />

        {/* Label */}
        <div className="absolute bottom-10 left-8 z-20">
          <p className="section-label text-white/70 mb-1">Human</p>
          <p
            className="text-white text-2xl"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            {pair.humanLabel}
          </p>
        </div>

        {/* Morph overlay */}
        <motion.div
          className="absolute inset-0 bg-[#8B6F5E]/10 morph-blob z-10 pointer-events-none"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Right — Nature */}
      <motion.div
        className="relative overflow-hidden"
        style={{ backgroundColor: '#C8DFC4' }}
        animate={{ opacity: isTransitioning ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <img
          id={`nature-img-${pair.id}`}
          data-strk-img-id={`split-nature-${pair.id}-c3d4`}
          data-strk-img={`[nature-desc-${pair.id}]`}
          data-strk-img-ratio="9x16"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={pair.naturalLabel}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(0.9) contrast(1.05)' }}
        />
        <span id={`nature-desc-${pair.id}`} className="hidden">{pair.naturalDesc}</span>

        {/* Gradient divider */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-l from-transparent to-[#F5EDE3]/60 z-10" />

        {/* Label */}
        <div className="absolute bottom-10 right-8 z-20 text-right">
          <p className="section-label text-white/70 mb-1">Nature</p>
          <p
            className="text-white text-2xl"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            {pair.naturalLabel}
          </p>
        </div>

        {/* Morph overlay */}
        <motion.div
          className="absolute inset-0 bg-[#4A6741]/10 morph-blob z-10 pointer-events-none"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </motion.div>

      {/* Center overlay — Quote + Controls */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
        {/* Divider line */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/30" />

        {/* Quote card */}
        <motion.div
          key={pair.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-[#F5EDE3]/90 backdrop-blur-sm px-8 py-6 max-w-xs md:max-w-sm text-center shadow-[0_8px_40px_rgba(44,44,44,0.15)] rounded-sm"
        >
          <p
            className="text-[#8B6F5E] text-xl md:text-2xl leading-snug"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            "{pair.quote}"
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            {PAIRS.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === activePair ? 'bg-[#4A6741] w-4' : 'bg-[#D4B896]'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Navigation arrows */}
        <div className="absolute bottom-8 flex gap-4 pointer-events-auto">
          <button
            onClick={() => cyclePair(-1)}
            className="w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-[#4A6741] transition-all hover:scale-110 shadow-md"
            aria-label="Previous pair"
          >
            ←
          </button>
          <button
            onClick={() => cyclePair(1)}
            className="w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-[#4A6741] transition-all hover:scale-110 shadow-md"
            aria-label="Next pair"
          >
            →
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-px h-12 bg-white/40" />
        <p className="section-label text-white/60 text-[0.6rem]">Scroll</p>
      </motion.div>
    </div>
  );
}
