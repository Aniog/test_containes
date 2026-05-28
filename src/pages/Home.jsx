import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Dna, FlaskConical, Eye, Zap, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth' },
  { value: '99%', label: 'Species Undiscovered' },
  { value: '3.8B', label: 'Years of Evolution' },
  { value: '70%', label: 'Ocean Oxygen from Microbes' },
];

const features = [
  {
    icon: Microscope,
    title: 'Microscopic Life',
    desc: 'Dive into the world of bacteria, archaea, and protists that form the foundation of all life on Earth.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/30',
  },
  {
    icon: Dna,
    title: 'Genetic Wonders',
    desc: 'Explore how microorganisms carry billions of years of evolutionary history in their DNA.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/30',
  },
  {
    icon: FlaskConical,
    title: 'Scientific Discovery',
    desc: 'Learn about groundbreaking research that is reshaping our understanding of life itself.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/30',
  },
];

const highlights = [
  {
    id: 'hl-1',
    category: 'Bacteria',
    title: 'The Ancient Architects',
    desc: 'Bacteria have shaped Earth\'s atmosphere, oceans, and soil for over 3.5 billion years.',
    imgId: 'hl-img-a1b2c3',
    imgQuery: '[hl-title-1] [hl-cat-1]',
  },
  {
    id: 'hl-2',
    category: 'Fungi',
    title: 'The Hidden Network',
    desc: 'Fungal mycelium forms vast underground networks connecting entire forests in a living web.',
    imgId: 'hl-img-d4e5f6',
    imgQuery: '[hl-title-2] [hl-cat-2]',
  },
  {
    id: 'hl-3',
    category: 'Protozoa',
    title: 'Single-Cell Predators',
    desc: 'Protozoa are sophisticated hunters that stalk, capture, and consume their prey with precision.',
    imgId: 'hl-img-g7h8i9',
    imgQuery: '[hl-title-3] [hl-cat-3]',
  },
];

const Home = () => {
  const heroRef = useRef(null);
  const highlightsRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) ImageHelper.loadImages(strkImgConfig, heroRef.current);
    if (highlightsRef.current) ImageHelper.loadImages(strkImgConfig, highlightsRef.current);
  }, []);

  return (
    <div className="bg-slate-950">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-mc001"
          data-strk-bg="[hero-sub] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-6">
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                The Invisible Universe
              </span>
            </div>
            <h1
              id="hero-title"
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none mb-6"
            >
              Life at the<br />
              <span className="text-cyan-400">Micro</span> Scale
            </h1>
            <p
              id="hero-sub"
              className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl"
            >
              Discover the astonishing world of microorganisms — the invisible architects of life on Earth, 
              from ancient bacteria to complex fungi and everything in between.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/explore"
                className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-3.5 rounded-lg transition-colors"
              >
                Start Exploring <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-cyan-500/50 text-slate-300 hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-1">{value}</div>
                <div className="text-sm text-slate-400 uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">What We Cover</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              A World Unseen by the Naked Eye
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              MicroCosmos brings the microscopic world to life through science, imagery, and storytelling.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-8 transition-colors group"
              >
                <div className={`w-12 h-12 rounded-xl border ${bg} flex items-center justify-center mb-6`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section ref={highlightsRef} className="py-20 md:py-28 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">Featured</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Organism Spotlights</h2>
            </div>
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              View all organisms <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map(({ id, category, title, desc, imgId, imgQuery }, i) => (
              <div
                key={id}
                className="bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl overflow-hidden transition-colors group cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden bg-slate-800">
                  <img
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={imgId}
                    data-strk-img={imgQuery}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <span
                    id={`hl-cat-${i + 1}`}
                    className="absolute top-3 left-3 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm"
                  >
                    {category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 id={`hl-title-${i + 1}`} className="text-lg font-semibold text-white mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  <Link
                    to="/explore"
                    className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-4 transition-colors"
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-10 md:p-16 overflow-hidden text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 blur-3xl" />
            <div className="relative z-10">
              <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The Microbial World Awaits
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto mb-8">
                Join us on a journey through the most diverse and ancient forms of life on our planet.
                Every drop of water, every handful of soil holds a universe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/explore"
                  className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-3.5 rounded-lg transition-colors"
                >
                  Explore Now <Zap className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-cyan-500/50 text-slate-300 hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
                >
                  Our Mission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
