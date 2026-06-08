import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, Dna, Leaf, Waves, FlaskConical, Eye } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const specimens = [
  {
    id: 'spec-fibonacci',
    number: '001',
    category: 'Geometry',
    title: 'Fibonacci Spirals',
    subtitle: 'Romanesco broccoli cross-section',
    science: 'Phyllotaxis — the mathematical arrangement of leaves, seeds, and petals following the Fibonacci sequence (1, 1, 2, 3, 5, 8, 13...) to maximize light exposure and packing efficiency.',
    humanParallel: 'The same spiral appears in the cochlea of the human inner ear, the arrangement of hair follicles on the scalp, and the growth pattern of fingernails.',
    magnification: '4×',
    imgId: 'lab-fibonacci-a1b2c3',
    titleId: 'lab-fibonacci-title',
    descId: 'lab-fibonacci-desc',
    icon: Leaf,
    accent: 'moss',
  },
  {
    id: 'spec-dna',
    number: '002',
    category: 'Molecular',
    title: 'Helix Patterns',
    subtitle: 'Climbing vine tendril macro',
    science: 'The double helix is not unique to DNA. Climbing plants evolved the same helical structure independently — a solution to the problem of maximizing strength while minimizing material.',
    humanParallel: 'Human DNA contains approximately 3 billion base pairs. If uncoiled, the DNA in a single human cell would stretch to 2 meters. The vine tendril uses the same geometry at a scale visible to the naked eye.',
    magnification: '10×',
    imgId: 'lab-dna-d4e5f6',
    titleId: 'lab-dna-title',
    descId: 'lab-dna-desc',
    icon: Dna,
    accent: 'sky',
  },
  {
    id: 'spec-fractal',
    number: '003',
    category: 'Fractal',
    title: 'Self-Similar Branching',
    subtitle: 'Fern frond unfurling',
    science: 'Fractals are patterns that repeat at every scale. A fern frond is a perfect natural fractal — each leaflet is a miniature version of the whole frond, which is itself a miniature version of the whole plant.',
    humanParallel: 'The human vascular system is fractal. The branching pattern of arteries into arterioles into capillaries follows the same mathematical rules as the branching of a river into tributaries into streams.',
    magnification: '2×',
    imgId: 'lab-fractal-g7h8i9',
    titleId: 'lab-fractal-title',
    descId: 'lab-fractal-desc',
    icon: Waves,
    accent: 'fern',
  },
  {
    id: 'spec-crystal',
    number: '004',
    category: 'Crystallography',
    title: 'Hexagonal Lattice',
    subtitle: 'Diatom silica shell',
    science: 'Diatoms — single-celled algae — construct intricate silica shells with hexagonal symmetry. The hexagon is the most efficient shape for packing equal areas with minimum perimeter, a principle also used by bees.',
    humanParallel: 'The cornea of the human eye is composed of collagen fibers arranged in a hexagonal lattice — the same geometry that gives diatom shells their extraordinary strength-to-weight ratio.',
    magnification: '400×',
    imgId: 'lab-crystal-j1k2l3',
    titleId: 'lab-crystal-title',
    descId: 'lab-crystal-desc',
    icon: Eye,
    accent: 'sky',
  },
  {
    id: 'spec-mycelium',
    number: '005',
    category: 'Network',
    title: 'Mycelial Networks',
    subtitle: 'Fungal hyphae under UV light',
    science: 'Mycelium — the underground network of fungal threads — forms one of the most complex communication networks on Earth. A single teaspoon of forest soil contains miles of mycelial threads.',
    humanParallel: 'The structure of the mycelial network is statistically identical to the structure of the human neural network. Both systems evolved independently to solve the same problem: efficient information transfer across a distributed network.',
    magnification: '40×',
    imgId: 'lab-mycelium-m4n5o6',
    titleId: 'lab-mycelium-title',
    descId: 'lab-mycelium-desc',
    icon: FlaskConical,
    accent: 'moss',
  },
  {
    id: 'spec-pollen',
    number: '006',
    category: 'Morphology',
    title: 'Pollen Architecture',
    subtitle: 'Lily pollen grain SEM',
    science: 'Pollen grains are among the most architecturally complex structures in nature. Each species produces a unique pollen morphology — a molecular fingerprint that persists in sediment for millions of years.',
    humanParallel: 'The surface texture of pollen grains — spiky, smooth, reticulate — mirrors the surface texture of human red blood cells under electron microscopy. Both structures are optimized for fluid dynamics.',
    magnification: '1000×',
    imgId: 'lab-pollen-p7q8r9',
    titleId: 'lab-pollen-title',
    descId: 'lab-pollen-desc',
    icon: Microscope,
    accent: 'fern',
  },
];

function SpecimenCard({ specimen, isSelected, onClick }) {
  const Icon = specimen.icon;
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      className={`text-left w-full overflow-hidden transition-all duration-300 ${
        isSelected ? 'ring-1 ring-moss' : 'hover:ring-1 hover:ring-linen'
      }`}
    >
      <div className="relative aspect-square overflow-hidden bg-dusk">
        <img
          data-strk-img-id={specimen.imgId}
          data-strk-img={`[${specimen.descId}] [${specimen.titleId}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={specimen.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dusk/80 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="font-inter text-xs tracking-widest uppercase text-mist/60 bg-dusk/60 px-2 py-1">
            {specimen.magnification}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <span className="font-inter text-xs tracking-widest uppercase text-mist/60 block mb-1">
            {specimen.category}
          </span>
          <h3 className="font-playfair text-lg text-parchment leading-tight">
            {specimen.title}
          </h3>
        </div>
        {isSelected && (
          <div className="absolute inset-0 bg-moss/20 flex items-center justify-center">
            <Icon size={32} className="text-parchment" />
          </div>
        )}
      </div>
      <div className="p-4 bg-linen">
        <p className="font-inter text-xs text-bark/70 leading-snug">{specimen.subtitle}</p>
      </div>
    </motion.button>
  );
}

function SpecimenDetail({ specimen }) {
  const Icon = specimen.icon;
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [specimen.id]);

  return (
    <motion.div
      key={specimen.id}
      ref={containerRef}
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="bg-dusk text-parchment p-8 md:p-12"
    >
      {/* Hidden text anchors */}
      <div className="hidden">
        <span id={specimen.titleId}>{specimen.title}</span>
        <span id={specimen.descId}>{specimen.subtitle} macro photography science nature {specimen.category}</span>
      </div>

      <div className="flex items-start gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-moss/20 flex items-center justify-center flex-shrink-0">
          <Icon size={20} className="text-fern" />
        </div>
        <div>
          <span className="font-inter text-xs tracking-widest uppercase text-mist/50 block mb-1">
            Specimen {specimen.number} — {specimen.category}
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl text-parchment mb-1">
            {specimen.title}
          </h2>
          <p className="font-inter text-sm text-mist/60 italic">{specimen.subtitle}</p>
        </div>
      </div>

      {/* Large image */}
      <div className="relative aspect-video overflow-hidden mb-8">
        <img
          data-strk-img-id={`${specimen.imgId}-detail`}
          data-strk-img={`[${specimen.descId}] [${specimen.titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={specimen.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-dusk/80 px-3 py-1.5">
          <span className="font-inter text-xs tracking-widest uppercase text-mist/70">
            {specimen.magnification} magnification
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-inter text-xs tracking-widest uppercase text-fern mb-4">
            The Science
          </h4>
          <p className="font-inter text-sm text-mist/80 leading-relaxed">
            {specimen.science}
          </p>
        </div>
        <div>
          <h4 className="font-inter text-xs tracking-widest uppercase text-sky mb-4">
            The Human Parallel
          </h4>
          <p className="font-inter text-sm text-mist/80 leading-relaxed">
            {specimen.humanParallel}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function LabHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative h-[55vh] overflow-hidden">
      <span id="lab-hero-title" className="hidden">The Lab science of nature macro photography</span>
      <span id="lab-hero-desc" className="hidden">Macro photography of plant cells DNA patterns microscopic nature science laboratory</span>
      <img
        data-strk-img-id="lab-hero-bg-q1w2e3"
        data-strk-img="[lab-hero-desc] [lab-hero-title]"
        data-strk-img-ratio="16x9"
        data-strk-img-width="1600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt="The Lab"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dusk/60 via-dusk/30 to-parchment" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-inter text-xs tracking-[0.3em] uppercase text-mist/80 mb-4"
        >
          Science of Nature
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-playfair text-5xl md:text-7xl text-parchment mb-4"
        >
          The <span className="italic text-fern">Lab</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-caveat text-xl text-mist/90 italic max-w-lg"
        >
          Where the microscope reveals what the eye already knows
        </motion.p>
      </div>
    </div>
  );
}

export default function TheLab() {
  const [selected, setSelected] = useState(0);
  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      return ImageHelper.loadImages(strkImgConfig, gridRef.current);
    }
  }, []);

  return (
    <div className="bg-parchment">
      <LabHero />

      {/* Intro */}
      <section className="py-16 px-8 md:px-16 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <p className="font-inter text-base md:text-lg text-bark leading-relaxed mb-4">
            Under the microscope, the boundary between human and nature dissolves entirely.
            The same mathematical principles that govern the growth of a fern govern the
            development of a human embryo. The same fractal geometry that shapes a river
            delta shapes the branching of your neurons.
          </p>
          <p className="font-caveat text-xl text-fern italic">
            We are not made from nature. We are made of it.
          </p>
        </motion.div>
      </section>

      {/* Specimen grid */}
      <section className="px-6 md:px-12 pb-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-playfair text-2xl text-soil">Specimen Collection</h2>
          <span className="font-inter text-xs tracking-widest uppercase text-bark/50">
            {specimens.length} specimens
          </span>
        </div>
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {specimens.map((specimen, i) => (
            <SpecimenCard
              key={specimen.id}
              specimen={specimen}
              isSelected={i === selected}
              onClick={() => setSelected(i)}
            />
          ))}
        </div>
      </section>

      {/* Detail panel */}
      <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <SpecimenDetail key={specimens[selected].id} specimen={specimens[selected]} />
        </AnimatePresence>
      </section>

      {/* Science quote */}
      <section className="py-24 px-8 bg-dusk">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-inter text-xs tracking-widest uppercase text-fern mb-4 block">
              The Hypothesis
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl text-parchment mb-6">
              Nature doesn't repeat itself.<br />
              <span className="italic text-fern">It rhymes.</span>
            </h2>
            <p className="font-inter text-sm text-mist/70 leading-relaxed mb-4">
              The patterns documented in The Lab are not coincidences. They are evidence
              of a shared mathematical language — one that evolution has discovered
              independently, again and again, across billions of years and millions of species.
            </p>
            <p className="font-inter text-sm text-mist/70 leading-relaxed">
              To photograph these patterns is to photograph the grammar of life itself.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { stat: '37 trillion', label: 'cells in the human body' },
              { stat: '3 billion', label: 'base pairs in human DNA' },
              { stat: '1 teaspoon', label: 'of soil contains miles of mycelium' },
              { stat: '∞', label: 'fractal iterations in a fern frond' },
            ].map(({ stat, label }) => (
              <div key={label} className="flex items-baseline gap-4 border-b border-mist/10 pb-4">
                <span className="font-playfair text-2xl text-fern flex-shrink-0">{stat}</span>
                <span className="font-inter text-sm text-mist/60">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
