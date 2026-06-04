import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Dna, Atom, Eye, Zap, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: Dna,
    title: 'Cellular Life',
    description: 'Dive into the building blocks of all living organisms — from prokaryotes to complex eukaryotic cells.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
  },
  {
    icon: Atom,
    title: 'Viral Structures',
    description: 'Explore the elegant geometry of viruses — nature\'s most controversial microscopic entities.',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
  },
  {
    icon: Eye,
    title: 'Microscopy Art',
    description: 'Witness the breathtaking beauty captured through electron and fluorescence microscopes.',
    color: 'text-teal-400',
    bg: 'bg-teal-400/10',
  },
  {
    icon: Zap,
    title: 'Bioluminescence',
    description: 'Discover organisms that produce their own light through chemical reactions at the cellular level.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
  },
  {
    icon: Globe,
    title: 'Ecosystems',
    description: 'Understand how microscopic life forms entire ecosystems invisible to the naked eye.',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
  },
  {
    icon: Microscope,
    title: 'Research Frontiers',
    description: 'Stay at the cutting edge of microbiology, nanotechnology, and synthetic biology.',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
  },
];

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth' },
  { value: '99%', label: 'Species Undiscovered' },
  { value: '3.8B', label: 'Years of Evolution' },
  { value: '1000x', label: 'Microscope Magnification' },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-cosmos-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 dots-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-cosmos-black via-cosmos-navy/50 to-cosmos-black" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-teal-500/5 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '3s' }} />

        {/* Hero Image */}
        <div className="absolute inset-0 opacity-15">
          <img
            data-strk-img-id="hero-bg-main-a1b2c3"
            data-strk-img="[hero-subtitle] [hero-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Microscopic world"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center pt-20">
          <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            Exploring the Invisible World
          </div>

          <h1
            id="hero-title"
            className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-slate-50 leading-tight mb-6"
          >
            The Hidden{' '}
            <span className="gradient-text">Universe</span>
            <br />
            Within
          </h1>

          <p
            id="hero-subtitle"
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Journey into the microscopic realm where bacteria, viruses, and cells
            form entire civilizations invisible to the naked eye. Discover the
            breathtaking complexity of life at its smallest scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/explore"
              className="flex items-center gap-2 bg-cyan-400 text-cosmos-black font-semibold px-8 py-4 rounded-full hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/30 text-base"
            >
              Begin Exploring
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/gallery"
              className="flex items-center gap-2 border border-cyan-400/50 text-cyan-400 font-medium px-8 py-4 rounded-full hover:bg-cyan-400/10 transition-all duration-200 text-base"
            >
              View Gallery
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-cyan-900/20 bg-cosmos-navy/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-3xl md:text-4xl text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm uppercase tracking-widest font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4 block">
              What We Explore
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-50 mb-4">
              Worlds Within Worlds
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              From the simplest bacterium to the most complex cell, every microscopic entity tells a story billions of years in the making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-cosmos-navy border border-cyan-900/40 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-slate-50 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-24 px-4 md:px-8 bg-cosmos-navy/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4 block">
                Featured Discovery
              </span>
              <h2
                id="featured-title"
                className="font-heading font-bold text-3xl md:text-4xl text-slate-50 mb-6 leading-tight"
              >
                The Tardigrade: Nature's Most Resilient Creature
              </h2>
              <p
                id="featured-desc"
                className="text-slate-400 leading-relaxed mb-6"
              >
                Tardigrades, also known as water bears, are microscopic animals capable of surviving in the most extreme conditions on Earth — and even in the vacuum of space. These eight-legged micro-animals can withstand temperatures from near absolute zero to over 150°C.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Extremophile', 'Cryptobiosis', 'Space Survival', 'Microscopic Animal'].map((tag) => (
                  <span
                    key={tag}
                    className="bg-cyan-400/10 text-cyan-400 text-xs px-3 py-1 rounded-full border border-cyan-400/30 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-cyan-900/40 aspect-[4/3]">
                <img
                  data-strk-img-id="featured-tardigrade-d4e5f6"
                  data-strk-img="[featured-desc] [featured-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Tardigrade under microscope"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cosmos-black/80 to-transparent p-4">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    Scanning Electron Microscope · 500x
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-cosmos-navy border border-cyan-900/40 rounded-2xl p-12 overflow-hidden">
            <div className="absolute inset-0 dots-bg opacity-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <div className="relative z-10">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-50 mb-4">
                Ready to Explore the{' '}
                <span className="gradient-text">Invisible?</span>
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Dive into our curated collection of microscopic wonders, from ancient bacteria to cutting-edge synthetic biology.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/explore"
                  className="flex items-center gap-2 bg-cyan-400 text-cosmos-black font-semibold px-8 py-4 rounded-full hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/30"
                >
                  Explore Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-slate-200 font-medium transition-colors"
                >
                  Learn About Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
