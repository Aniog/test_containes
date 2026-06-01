import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Microscope, Zap, Waves, Beaker, Magnet, Telescope } from 'lucide-react';
import { Link } from 'react-router-dom';

const bentoCards = [
  {
    id: 'electron-microscope',
    titleId: 'card-title-electron-microscope',
    descId: 'card-desc-electron-microscope',
    imgId: 'atlas-img-electron-microscope-a1b2c3',
    title: 'Electron Microscopy',
    desc: 'Sub-atomic resolution imaging of quantum lattice structures',
    tag: 'Imaging',
    icon: Microscope,
    span: 'md:col-span-2',
    ratio: '56.25%',
    accent: 'blue',
  },
  {
    id: 'particle-accelerator',
    titleId: 'card-title-particle-accelerator',
    descId: 'card-desc-particle-accelerator',
    imgId: 'atlas-img-particle-accelerator-d4e5f6',
    title: 'Particle Accelerator',
    desc: 'High-energy collision chambers for boson detection',
    tag: 'Collider',
    icon: Zap,
    span: 'md:col-span-1',
    ratio: '100%',
    accent: 'cyan',
  },
  {
    id: 'wave-interferometer',
    titleId: 'card-title-wave-interferometer',
    descId: 'card-desc-wave-interferometer',
    imgId: 'atlas-img-wave-interferometer-g7h8i9',
    title: 'Wave Interferometry',
    desc: 'Precision measurement of quantum wave superposition states',
    tag: 'Optics',
    icon: Waves,
    span: 'md:col-span-1',
    ratio: '100%',
    accent: 'blue',
  },
  {
    id: 'cryogenic-lab',
    titleId: 'card-title-cryogenic-lab',
    descId: 'card-desc-cryogenic-lab',
    imgId: 'atlas-img-cryogenic-lab-j1k2l3',
    title: 'Cryogenic Laboratory',
    desc: 'Near absolute-zero environments for superconductor research',
    tag: 'Thermal',
    icon: Beaker,
    span: 'md:col-span-1',
    ratio: '100%',
    accent: 'cyan',
  },
  {
    id: 'magnetic-resonance',
    titleId: 'card-title-magnetic-resonance',
    descId: 'card-desc-magnetic-resonance',
    imgId: 'atlas-img-magnetic-resonance-m4n5o6',
    title: 'Magnetic Resonance',
    desc: 'Nuclear spin alignment in ultra-high field magnets',
    tag: 'Magnetism',
    icon: Magnet,
    span: 'md:col-span-2',
    ratio: '56.25%',
    accent: 'blue',
  },
  {
    id: 'radio-telescope',
    titleId: 'card-title-radio-telescope',
    descId: 'card-desc-radio-telescope',
    imgId: 'atlas-img-radio-telescope-p7q8r9',
    title: 'Radio Telescope Array',
    desc: 'Cosmic background radiation mapping at quantum scales',
    tag: 'Astronomy',
    icon: Telescope,
    span: 'md:col-span-1',
    ratio: '100%',
    accent: 'cyan',
  },
];

const accentMap = {
  blue: {
    tag: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: 'text-blue-600',
    dot: 'bg-blue-500',
  },
  cyan: {
    tag: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    icon: 'text-cyan-600',
    dot: 'bg-cyan-500',
  },
};

function BentoCard({ card }) {
  const { titleId, descId, imgId, title, desc, tag, icon: Icon, span, ratio, accent } = card;
  const colors = accentMap[accent];

  return (
    <article
      className={`group relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${span}`}
    >
      {/* Aspect-ratio image box — zero layout shift */}
      <div className="img-box w-full" style={{ paddingBottom: ratio }}>
        <img
          data-strk-img-id={imgId}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio={ratio === '56.25%' ? '16x9' : '1x1'}
          data-strk-img-width={ratio === '56.25%' ? '900' : '600'}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={title}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

        {/* Tag badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${colors.tag}`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
            {tag}
          </span>
        </div>

        {/* Bottom text overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3
                id={titleId}
                className="text-white font-semibold text-lg leading-tight mb-1"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {title}
              </h3>
              <p
                id={descId}
                className="text-slate-300 text-sm leading-snug"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {desc}
              </p>
            </div>
            <div className={`flex-shrink-0 w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center ${colors.icon}`}>
              <Icon className="w-4.5 h-4.5 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Atlas() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-20">
      {/* Page header */}
      <header className="mb-12 md:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-12 bg-blue-300" />
          <span
            className="text-xs text-blue-600 tracking-widest uppercase font-medium"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Index / Atlas
          </span>
        </div>
        <h1
          className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Scientific
          <br />
          <em className="not-italic text-blue-600">Apparatus</em>
        </h1>
        <p
          className="text-slate-500 text-lg max-w-xl leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          A curated index of instruments and methodologies driving quantum research at the frontier of modern physics.
        </p>

        {/* CTA row */}
        <div className="flex items-center gap-6 mt-8">
          <Link
            to="/theory"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Read Theory
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/simulations"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Open Simulations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* Bento grid */}
      <section ref={containerRef}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {bentoCards.map((card) => (
            <BentoCard key={card.id} card={card} />
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Active Instruments', value: '247', unit: 'units' },
            { label: 'Research Papers', value: '1,840', unit: 'published' },
            { label: 'Data Points', value: '4.2 TB', unit: 'collected' },
            { label: 'Collaborators', value: '38', unit: 'institutions' },
          ].map(({ label, value, unit }) => (
            <div
              key={label}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm"
            >
              <p
                className="text-2xl font-bold text-slate-800 mb-0.5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {value}
              </p>
              <p
                className="text-xs text-slate-400 uppercase tracking-wider"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {unit}
              </p>
              <p
                className="text-sm text-slate-500 mt-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
