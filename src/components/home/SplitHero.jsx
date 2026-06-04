import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const pairs = [
  {
    id: "hand-leaf",
    humanLabel: "Human",
    humanDesc: "The lines of a palm, etched by time and touch",
    humanImgId: "split-human-hand-a1b2c3",
    humanQuery: "[split-human-hand-desc-a1b2c3]",
    natureLabel: "Nature",
    natureDesc: "Veins of a leaf, carrying life through green corridors",
    natureImgId: "split-nature-leaf-d4e5f6",
    natureQuery: "[split-nature-leaf-desc-d4e5f6]",
  },
  {
    id: "eye-water",
    humanLabel: "Human",
    humanDesc: "The iris — a universe contained in a single gaze",
    humanImgId: "split-human-eye-g7h8i9",
    humanQuery: "[split-human-eye-desc-g7h8i9]",
    natureLabel: "Nature",
    natureDesc: "A ripple on still water, expanding into infinity",
    natureImgId: "split-nature-water-j1k2l3",
    natureQuery: "[split-nature-water-desc-j1k2l3]",
  },
  {
    id: "skin-bark",
    humanLabel: "Human",
    humanDesc: "Skin — our first boundary, our oldest story",
    humanImgId: "split-human-skin-m4n5o6",
    humanQuery: "[split-human-skin-desc-m4n5o6]",
    natureLabel: "Nature",
    natureDesc: "Bark — the skin of ancient trees, scarred and resilient",
    natureImgId: "split-nature-bark-p7q8r9",
    natureQuery: "[split-nature-bark-desc-p7q8r9]",
  },
];

const morphVariants = {
  enter: { opacity: 0, scale: 1.04 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.97 },
};

export default function SplitHero() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % pairs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const pair = pairs[current];

  return (
    <div ref={containerRef} className="relative h-screen min-h-[600px] flex overflow-hidden">
      {/* Left — Human */}
      <div className="relative w-1/2 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`human-${current}`}
            variants={morphVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              data-strk-img-id={pair.humanImgId}
              data-strk-img={pair.humanQuery}
              data-strk-img-ratio="9x16"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={pair.humanDesc}
              className="w-full h-full object-cover"
            />
            <span id={`split-human-hand-desc-a1b2c3`} className="hidden">
              close up human hand palm lines skin texture macro photography
            </span>
            <span id={`split-human-eye-desc-g7h8i9`} className="hidden">
              close up human eye iris macro photography detail
            </span>
            <span id={`split-human-skin-desc-m4n5o6`} className="hidden">
              close up human skin texture macro photography detail
            </span>
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-skin-warm/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Human label */}
        <div className="absolute bottom-10 left-8 z-10">
          <motion.span
            key={`hlabel-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-inter text-xs uppercase tracking-[0.25em] block mb-2"
            style={{ color: "rgba(245,239,230,0.8)" }}
          >
            {pair.humanLabel}
          </motion.span>
          <motion.p
            key={`hdesc-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="font-dancing text-xl leading-snug max-w-[200px]"
            style={{ color: "#F5EFE6" }}
          >
            {pair.humanDesc}
          </motion.p>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="flex flex-col items-center gap-3">
          <div className="w-px h-24" style={{ background: "rgba(245,239,230,0.5)" }} />
          <div className="backdrop-blur-sm rounded-full px-5 py-2" style={{ background: "rgba(245,239,230,0.1)", border: "1px solid rgba(245,239,230,0.2)" }}>
            <span className="font-dancing text-2xl tracking-wide" style={{ color: "#F5EFE6" }}>
              &amp;
            </span>
          </div>
          <div className="w-px h-24" style={{ background: "rgba(245,239,230,0.5)" }} />
        </div>
      </div>

      {/* Right — Nature */}
      <div className="relative w-1/2 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`nature-${current}`}
            variants={morphVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="absolute inset-0"
          >
            <img
              data-strk-img-id={pair.natureImgId}
              data-strk-img={pair.natureQuery}
              data-strk-img-ratio="9x16"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={pair.natureDesc}
              className="w-full h-full object-cover"
            />
            <span id={`split-nature-leaf-desc-d4e5f6`} className="hidden">
              macro photography leaf veins green texture close up nature
            </span>
            <span id={`split-nature-water-desc-j1k2l3`} className="hidden">
              water ripple concentric circles macro photography nature
            </span>
            <span id={`split-nature-bark-desc-p7q8r9`} className="hidden">
              tree bark texture close up macro photography forest
            </span>
            {/* Green overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-forest-deep/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Nature label */}
        <div className="absolute bottom-10 right-8 z-10 text-right">
          <motion.span
            key={`nlabel-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-inter text-xs uppercase tracking-[0.25em] block mb-2"
            style={{ color: "rgba(245,239,230,0.8)" }}
          >
            {pair.natureLabel}
          </motion.span>
          <motion.p
            key={`ndesc-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="font-dancing text-xl leading-snug max-w-[200px] ml-auto"
            style={{ color: "#F5EFE6" }}
          >
            {pair.natureDesc}
          </motion.p>
        </div>
      </div>

      {/* Hero title overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="font-playfair text-5xl lg:text-8xl font-bold drop-shadow-2xl leading-none"
          style={{ color: "#F5EFE6" }}
        >
          Inter
          <br />
          <span className="italic" style={{ color: "#E8C9A0" }}>twined</span>
        </motion.h1>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {pairs.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-1.5 bg-parchment"
                : "w-1.5 h-1.5 bg-parchment/40 hover:bg-parchment/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-inter text-xs uppercase tracking-widest text-parchment/60 rotate-90 origin-center">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-parchment/40"
        />
      </motion.div>
    </div>
  );
}
