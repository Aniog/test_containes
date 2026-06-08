import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const parallaxPairs = [
  {
    id: 'pair-hand',
    humanLabel: 'Human Hand',
    humanDesc: 'The lines of a palm — a map of a life lived',
    humanImgId: 'home-human-hand-a1b2c3',
    humanTitleId: 'home-human-hand-title',
    humanDescId: 'home-human-hand-desc',
    natureLabel: 'Leaf Vein',
    natureDesc: 'Veins of a leaf carry water like rivers through a continent',
    natureImgId: 'home-nature-leaf-d4e5f6',
    natureTitleId: 'home-nature-leaf-title',
    natureDescId: 'home-nature-leaf-desc',
  },
  {
    id: 'pair-eye',
    humanLabel: 'Human Eye',
    humanDesc: 'The iris — a galaxy contained within a single gaze',
    humanImgId: 'home-human-eye-g7h8i9',
    humanTitleId: 'home-human-eye-title',
    humanDescId: 'home-human-eye-desc',
    natureLabel: 'Sunflower Spiral',
    natureDesc: 'Fibonacci spirals in a sunflower mirror the human iris',
    natureImgId: 'home-nature-sunflower-j1k2l3',
    natureTitleId: 'home-nature-sunflower-title',
    natureDescId: 'home-nature-sunflower-desc',
  },
  {
    id: 'pair-roots',
    humanLabel: 'Human Lungs',
    humanDesc: 'Bronchial branches — a forest growing inside every breath',
    humanImgId: 'home-human-lungs-m4n5o6',
    humanTitleId: 'home-human-lungs-title',
    humanDescId: 'home-human-lungs-desc',
    natureLabel: 'Tree Roots',
    natureDesc: 'Root systems branch like lungs beneath the forest floor',
    natureImgId: 'home-nature-roots-p7q8r9',
    natureTitleId: 'home-nature-roots-title',
    natureDescId: 'home-nature-roots-desc',
  },
];

const quotes = [
  'We are nature looking at itself.',
  'Every vein in a leaf is a river. Every river is a vein.',
  'The forest breathes. So do you.',
];

function SplitPair({ pair, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const leftX = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const rightX = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="relative min-h-screen flex flex-col md:flex-row"
    >
      {/* Left — Human */}
      <motion.div
        style={{ x: leftX }}
        className="relative flex-1 min-h-[50vh] md:min-h-screen overflow-hidden group"
      >
        <img
          data-strk-img-id={pair.humanImgId}
          data-strk-img={`[${pair.humanDescId}] [${pair.humanTitleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={pair.humanLabel}
          className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-12">
          <span className="font-inter text-xs tracking-widest uppercase text-mist/70 block mb-2">
            Human
          </span>
          <h3
            id={pair.humanTitleId}
            className="font-playfair text-2xl md:text-3xl text-parchment mb-2"
          >
            {pair.humanLabel}
          </h3>
          <p
            id={pair.humanDescId}
            className="font-caveat text-lg text-sky/90 italic"
          >
            {pair.humanDesc}
          </p>
        </div>
      </motion.div>

      {/* Divider line */}
      <div className="hidden md:flex items-center justify-center w-px bg-linen relative z-10">
        <div className="w-8 h-8 rounded-full bg-parchment border border-linen flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-moss" />
        </div>
      </div>

      {/* Right — Nature */}
      <motion.div
        style={{ x: rightX }}
        className="relative flex-1 min-h-[50vh] md:min-h-screen overflow-hidden group"
      >
        <img
          data-strk-img-id={pair.natureImgId}
          data-strk-img={`[${pair.natureDescId}] [${pair.natureTitleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={pair.natureLabel}
          className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dusk/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-12">
          <span className="font-inter text-xs tracking-widest uppercase text-mist/70 block mb-2">
            Nature
          </span>
          <h3
            id={pair.natureTitleId}
            className="font-playfair text-2xl md:text-3xl text-parchment mb-2"
          >
            {pair.natureLabel}
          </h3>
          <p
            id={pair.natureDescId}
            className="font-caveat text-lg text-sky/90 italic"
          >
            {pair.natureDesc}
          </p>
        </div>
      </motion.div>

      {/* Quote overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
          className="font-caveat text-2xl md:text-4xl text-parchment text-center px-8 drop-shadow-lg max-w-xl"
        >
          "{quotes[index % quotes.length]}"
        </motion.p>
      </div>
    </motion.section>
  );
}

function MorphingHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const heroImages = [
    {
      id: 'hero-img-1-x9y8z7',
      titleId: 'hero-title-1',
      descId: 'hero-desc-1',
      title: 'Human and Nature',
      desc: 'Close-up of human hand touching ancient tree bark in forest',
    },
    {
      id: 'hero-img-2-a1b2c3',
      titleId: 'hero-title-2',
      descId: 'hero-desc-2',
      title: 'Roots and Veins',
      desc: 'Aerial view of river delta resembling human circulatory system',
    },
    {
      id: 'hero-img-3-d4e5f6',
      titleId: 'hero-title-3',
      descId: 'hero-desc-3',
      title: 'Breath and Wind',
      desc: 'Misty forest canopy at dawn with light filtering through leaves',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Hidden text anchors for image queries */}
      {heroImages.map((img) => (
        <div key={img.id} className="hidden">
          <span id={img.titleId}>{img.title}</span>
          <span id={img.descId}>{img.desc}</span>
        </div>
      ))}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.08, filter: 'blur(12px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <img
            data-strk-img-id={heroImages[activeIndex].id}
            data-strk-img={`[${heroImages[activeIndex].descId}] [${heroImages[activeIndex].titleId}]`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={heroImages[activeIndex].title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dusk/30 via-transparent to-dusk/70" />

      {/* Hero text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-inter text-xs tracking-[0.3em] uppercase text-mist/80 mb-6"
        >
          An Environmental Photography Project
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-playfair text-6xl md:text-8xl lg:text-9xl text-parchment leading-none mb-6"
        >
          Inter<span className="italic text-sky">twined</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-caveat text-xl md:text-2xl text-mist/90 italic max-w-lg mb-10"
        >
          Documenting the invisible threads between humanity and the living world
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/stories"
            className="font-inter text-sm tracking-widest uppercase px-8 py-3 bg-parchment text-soil rounded-full hover:bg-linen transition-colors duration-300"
          >
            Explore Stories
          </Link>
          <Link
            to="/lab"
            className="font-inter text-sm tracking-widest uppercase px-8 py-3 border border-parchment/60 text-parchment rounded-full hover:bg-parchment/10 transition-colors duration-300"
          >
            The Lab
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-inter text-xs tracking-widest uppercase text-mist/60">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-mist/40"
        />
      </motion.div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'bg-parchment w-6' : 'bg-parchment/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <span className="font-inter text-xs tracking-[0.3em] uppercase text-moss mb-6 block">
          The Connection
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl text-soil leading-tight mb-8">
          We share the same patterns.<br />
          <span className="italic text-moss">We always have.</span>
        </h2>
        <p className="font-inter text-base md:text-lg text-bark leading-relaxed max-w-2xl mx-auto mb-6">
          The branching of a river delta mirrors the bronchial tree inside your lungs.
          The spiral of a nautilus shell echoes the cochlea in your ear. The veins of a
          leaf carry water the same way your veins carry blood.
        </p>
        <p className="font-caveat text-xl text-sky italic">
          Nature did not create us separately — it created us together.
        </p>
      </motion.div>
    </section>
  );
}

export default function Home() {
  const splitRef = useRef(null);

  useEffect(() => {
    if (splitRef.current) {
      return ImageHelper.loadImages(strkImgConfig, splitRef.current);
    }
  }, []);

  return (
    <div className="bg-parchment">
      <MorphingHero />
      <IntroSection />

      {/* Split-screen pairs */}
      <div ref={splitRef}>
        {parallaxPairs.map((pair, index) => (
          <SplitPair key={pair.id} pair={pair} index={index} />
        ))}
      </div>

      {/* CTA section */}
      <section className="py-24 md:py-32 px-8 bg-dusk text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-parchment mb-6">
            Explore the full project
          </h2>
          <p className="font-inter text-base text-mist/70 max-w-xl mx-auto mb-10">
            From indigenous communities in the Amazon to coral reef divers in Polynesia —
            every story is a thread in the same tapestry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/stories"
              className="font-inter text-sm tracking-widest uppercase px-10 py-4 bg-moss text-parchment rounded-full hover:bg-fern transition-colors duration-300"
            >
              Global Stories
            </Link>
            <Link
              to="/lab"
              className="font-inter text-sm tracking-widest uppercase px-10 py-4 border border-mist/30 text-mist rounded-full hover:border-mist/60 transition-colors duration-300"
            >
              The Lab
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
