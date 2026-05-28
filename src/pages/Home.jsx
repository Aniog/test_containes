import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Layers, Zap, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth' },
  { value: '99%', label: 'Species Undiscovered' },
  { value: '1.5 kg', label: 'Microbes in Your Body' },
  { value: '3.5B', label: 'Years of Evolution' },
];

const features = [
  {
    icon: Eye,
    title: 'Stunning Imagery',
    desc: 'Electron microscopy and fluorescence imaging reveal breathtaking structures invisible to the naked eye.',
  },
  {
    icon: Layers,
    title: 'Deep Science',
    desc: 'Explore the biology, ecology, and evolution of microorganisms across every domain of life.',
  },
  {
    icon: Zap,
    title: 'Living World',
    desc: 'Microbes drive every ecosystem on Earth — from ocean depths to the human gut.',
  },
];

const gridImages = [
  { id: 'grid-1', query: 'bacteria cell microscope colorful', ratio: '1x1', width: 400 },
  { id: 'grid-2', query: 'virus particle electron microscopy', ratio: '1x1', width: 400 },
  { id: 'grid-3', query: 'fungal spores microscope', ratio: '1x1', width: 400 },
  { id: 'grid-4', query: 'algae microorganism fluorescence', ratio: '1x1', width: 400 },
  { id: 'grid-5', query: 'protozoa microscope colorful', ratio: '1x1', width: 400 },
  { id: 'grid-6', query: 'diatom microscope silica shell', ratio: '1x1', width: 400 },
];

export default function Home() {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const featuredRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) ImageHelper.loadImages(strkImgConfig, heroRef.current);
    if (gridRef.current) ImageHelper.loadImages(strkImgConfig, gridRef.current);
    if (featuredRef.current) ImageHelper.loadImages(strkImgConfig, featuredRef.current);
  }, []);

  return (
    <div className="bg-[#050d1a] text-[#f0f9ff]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-mc001"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/60 via-[#050d1a]/40 to-[#050d1a]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 z-10 bg-grid-pattern opacity-30" />

        <div className="relative z-20 text-center max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-[#00d4aa]/10 border border-[#00d4aa]/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" />
            <span className="text-[#00d4aa] text-sm font-medium">The Invisible Universe Awaits</span>
          </div>

          <h1 id="hero-title" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            Welcome to the{' '}
            <span className="gradient-text">MicroCosmos</span>
          </h1>

          <p id="hero-subtitle" className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Dive into the breathtaking world of microorganisms — bacteria, viruses, fungi, and beyond. 
            A universe of life too small to see, too magnificent to ignore.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/explore"
              className="flex items-center gap-2 bg-[#00d4aa] text-[#050d1a] font-bold px-8 py-4 rounded-full hover:bg-[#00bfa0] transition-all hover:scale-105 text-base"
            >
              Start Exploring <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/gallery"
              className="flex items-center gap-2 border border-[#00d4aa]/50 text-[#00d4aa] font-semibold px-8 py-4 rounded-full hover:bg-[#00d4aa]/10 transition-all text-base"
            >
              View Gallery
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="w-6 h-6 text-[#00d4aa]/60" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0a1628] border-y border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black gradient-text mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why the Microbial World Matters
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Microorganisms make up 60% of all life on Earth. They shape our climate, 
              our health, and the very air we breathe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[#0f1f38] border border-[#1e3a5f] rounded-2xl p-8 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00d4aa]/10 border border-[#00d4aa]/20 flex items-center justify-center mb-6">
                  <f.icon className="w-6 h-6 text-[#00d4aa]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Grid */}
      <section ref={gridRef} className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                A World Unseen
              </h2>
              <p className="text-slate-400 text-lg max-w-xl">
                Every image is a window into a universe that exists all around us, 
                invisible to the naked eye.
              </p>
            </div>
            <Link
              to="/gallery"
              className="flex items-center gap-2 text-[#00d4aa] font-semibold hover:gap-3 transition-all whitespace-nowrap"
            >
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gridImages.map((img, i) => (
              <div
                key={img.id}
                className={`relative overflow-hidden rounded-2xl bg-[#0f1f38] group ${
                  i === 0 ? 'md:row-span-2' : ''
                }`}
              >
                <img
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio={img.ratio}
                  data-strk-img-width={img.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={img.query}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    i === 0 ? 'h-full min-h-[300px]' : 'h-48 md:h-56'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section ref={featuredRef} className="py-24 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kingdoms of the Invisible
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From ancient bacteria to complex fungi, explore the diverse kingdoms of microbial life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'cat-bacteria', name: 'Bacteria', desc: 'The oldest and most abundant life forms on Earth', query: 'bacteria microscope colorful science', color: '#00d4aa' },
              { id: 'cat-viruses', name: 'Viruses', desc: 'Nanoscale entities that blur the line between life and chemistry', query: 'virus particle electron microscopy science', color: '#7c3aed' },
              { id: 'cat-fungi', name: 'Fungi', desc: 'Masters of decomposition and symbiosis', query: 'fungal spores hyphae microscope', color: '#0ea5e9' },
              { id: 'cat-algae', name: 'Algae', desc: 'Photosynthetic powerhouses of aquatic ecosystems', query: 'algae microorganism green microscope', color: '#10b981' },
              { id: 'cat-protozoa', name: 'Protozoa', desc: 'Single-celled hunters of the microbial world', query: 'protozoa amoeba microscope', color: '#f59e0b' },
              { id: 'cat-diatoms', name: 'Diatoms', desc: 'Microscopic architects with glass-like silica shells', query: 'diatom silica shell microscope beautiful', color: '#ec4899' },
            ].map((cat) => (
              <Link
                key={cat.id}
                to="/explore"
                className="group relative overflow-hidden rounded-2xl bg-[#0f1f38] border border-[#1e3a5f] card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    data-strk-img-id={`home-${cat.id}`}
                    data-strk-img={cat.query}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f38] to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2" style={{ color: cat.color }}>
                    {cat.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{cat.desc}</p>
                  <div className="flex items-center gap-1 mt-4 text-sm font-medium" style={{ color: cat.color }}>
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a1628] border-t border-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Ready to Explore the{' '}
            <span className="gradient-text">Invisible World?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Thousands of microscopic wonders await. Dive into our gallery and discover 
            the extraordinary beauty hidden in every drop of water, every grain of soil.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/gallery"
              className="flex items-center gap-2 bg-[#00d4aa] text-[#050d1a] font-bold px-8 py-4 rounded-full hover:bg-[#00bfa0] transition-all hover:scale-105 text-base"
            >
              Browse Gallery <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 border border-[#1e3a5f] text-slate-300 font-semibold px-8 py-4 rounded-full hover:border-[#00d4aa]/50 hover:text-white transition-all text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
