import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Zap, Eye, Globe } from 'lucide-react';

const featuredOrganisms = [
  { id: 'feat-1', title: 'Tardigrade', subtitle: 'Water Bear', desc: 'Nearly indestructible microscopic animals that survive extreme conditions.' },
  { id: 'feat-2', title: 'Diatom', subtitle: 'Glass Algae', desc: 'Single-celled algae with intricate silica shells of stunning geometric beauty.' },
  { id: 'feat-3', title: 'Radiolaria', subtitle: 'Ocean Jewels', desc: 'Protozoa with elaborate mineral skeletons found in marine sediments.' },
  { id: 'feat-4', title: 'Paramecium', subtitle: 'Ciliate Protozoa', desc: 'Slipper-shaped unicellular organisms covered in hair-like cilia.' },
  { id: 'feat-5', title: 'Pollen Grain', subtitle: 'Plant Spore', desc: 'Microscopic pollen grains reveal extraordinary surface textures.' },
  { id: 'feat-6', title: 'Nematode', subtitle: 'Roundworm', desc: 'The most abundant multicellular animals on Earth, found everywhere.' },
];

const stats = [
  { icon: Eye, value: '10,000+', label: 'Species Documented' },
  { icon: Zap, value: '1000x', label: 'Max Magnification' },
  { icon: Globe, value: '99%', label: 'Life Invisible to Naked Eye' },
];

export default function Home() {
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) ImageHelper.loadImages(strkImgConfig, heroRef.current);
    if (featuredRef.current) ImageHelper.loadImages(strkImgConfig, featuredRef.current);
    if (statsRef.current) ImageHelper.loadImages(strkImgConfig, statsRef.current);
  }, []);

  return (
    <div className="bg-cosmos-bg text-cosmos-text">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-mc01"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-bg/60 via-cosmos-bg/40 to-cosmos-bg" />

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <p id="hero-subtitle" className="font-body text-cosmos-cyan text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            The Invisible World Revealed
          </p>
          <h1
            id="hero-title"
            className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-cosmos-text leading-tight mb-6 animate-glow-pulse"
          >
            Micro<span className="text-cosmos-cyan">Cosmos</span>
          </h1>
          <p className="font-body text-cosmos-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Journey into the hidden universe beneath our feet — a world of breathtaking complexity, alien beauty, and extraordinary life forms invisible to the naked eye.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-cosmos-cyan text-cosmos-bg font-heading font-semibold px-8 py-3 rounded-full hover:bg-cosmos-text transition-colors duration-200"
            >
              Explore Gallery <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 border border-cosmos-border text-cosmos-muted font-heading font-medium px-8 py-3 rounded-full hover:border-cosmos-cyan hover:text-cosmos-cyan transition-colors duration-200"
            >
              Discover Organisms
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-float">
          <span className="text-cosmos-muted text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-cosmos-cyan to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-16 border-y border-cosmos-border bg-cosmos-card/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3">
              <Icon className="w-8 h-8 text-cosmos-cyan" />
              <span className="font-heading font-bold text-4xl text-cosmos-cyan">{value}</span>
              <span className="font-body text-cosmos-muted text-sm tracking-wide uppercase">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Organisms */}
      <section ref={featuredRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p id="featured-label" className="font-body text-cosmos-cyan text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Featured Specimens
            </p>
            <h2 id="featured-title" className="font-heading font-bold text-4xl md:text-5xl text-cosmos-text mb-4">
              Meet the Micro-World
            </h2>
            <div className="w-16 h-0.5 bg-cosmos-cyan mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredOrganisms.map((org) => (
              <div
                key={org.id}
                className="group bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-cosmos-cyan/10"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    alt={org.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={`feat-img-${org.id}`}
                    data-strk-img={`[feat-desc-${org.id}] [feat-sub-${org.id}] [feat-name-${org.id}] [featured-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmos-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <p id={`feat-sub-${org.id}`} className="font-body text-cosmos-cyan text-xs font-semibold tracking-widest uppercase mb-1">
                    {org.subtitle}
                  </p>
                  <h3 id={`feat-name-${org.id}`} className="font-heading font-bold text-xl text-cosmos-text mb-2">
                    {org.title}
                  </h3>
                  <p id={`feat-desc-${org.id}`} className="font-body text-cosmos-muted text-sm leading-relaxed">
                    {org.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 border border-cosmos-cyan text-cosmos-cyan font-heading font-medium px-8 py-3 rounded-full hover:bg-cosmos-cyan hover:text-cosmos-bg transition-colors duration-200"
            >
              View All Organisms <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Full-width banner image */}
      <section className="relative h-96 overflow-hidden">
        <p id="banner-label" className="sr-only">Microscopic world banner</p>
        <h2 id="banner-title" className="sr-only">Microscopic organisms under electron microscope</h2>
        <div
          className="absolute inset-0"
          data-strk-bg-id="banner-bg-mc02"
          data-strk-bg="[banner-title] [banner-label]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-cosmos-bg/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="font-body text-cosmos-cyan text-sm tracking-[0.3em] uppercase mb-3">The Scale of Life</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-cosmos-text max-w-2xl">
              A single drop of water contains thousands of living worlds
            </h2>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-4xl text-cosmos-text mb-4">
            Ready to Explore?
          </h2>
          <p className="font-body text-cosmos-muted text-lg mb-8">
            Browse hundreds of stunning microscopy images and discover the extraordinary complexity of life at the smallest scales.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-cosmos-cyan text-cosmos-bg font-heading font-semibold px-10 py-4 rounded-full text-lg hover:bg-cosmos-text transition-colors duration-200"
          >
            Enter the Gallery <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
