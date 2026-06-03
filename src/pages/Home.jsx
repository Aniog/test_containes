import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth' },
  { value: '99%', label: 'Species Undiscovered' },
  { value: '37T', label: 'Cells in Your Body' },
  { value: '1μm', label: 'Average Bacterium Size' },
];

const features = [
  {
    id: 'feat-bacteria',
    icon: '🦠',
    title: 'Bacteria',
    titleId: 'feat-bacteria-title',
    descId: 'feat-bacteria-desc',
    description: 'The oldest and most abundant life forms on Earth, shaping every ecosystem.',
  },
  {
    id: 'feat-viruses',
    icon: '🔬',
    title: 'Viruses',
    titleId: 'feat-viruses-title',
    descId: 'feat-viruses-desc',
    description: 'Nanoscale entities that blur the boundary between living and non-living matter.',
  },
  {
    id: 'feat-fungi',
    icon: '🍄',
    title: 'Fungi & Spores',
    titleId: 'feat-fungi-title',
    descId: 'feat-fungi-desc',
    description: 'Nature\'s recyclers, forming vast underground networks connecting entire forests.',
  },
  {
    id: 'feat-plankton',
    icon: '🌊',
    title: 'Plankton',
    titleId: 'feat-plankton-title',
    descId: 'feat-plankton-desc',
    description: 'Microscopic ocean drifters that produce half of Earth\'s oxygen.',
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-cosmos-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cosmos-black">
        {/* Background glow orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmos-teal/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cosmos-purple/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cosmos-cyan/3 rounded-full blur-3xl" />
        </div>

        {/* Hero background image */}
        <div
          className="absolute inset-0"
          style={{ opacity: 0.12 }}
          data-strk-bg-id="hero-bg-mc-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        {/* Strong dark overlay to ensure text readability */}
        <div className="absolute inset-0" style={{ background: 'rgba(5,10,14,0.75)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(5,10,14,0.3), transparent 40%, rgba(5,10,14,0.9))' }} />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-cosmos-teal/10 border border-cosmos-teal/30 rounded-full px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-cosmos-teal animate-pulse" />
            <span className="text-cosmos-teal text-sm font-medium">The Invisible Universe</span>
          </div>

          <h1
            id="hero-title"
            className="font-grotesk font-bold text-5xl md:text-7xl lg:text-8xl text-cosmos-white leading-tight tracking-tight mb-6"
          >
            Welcome to the{' '}
            <span className="text-cosmos-teal">MicroCosmos</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-cosmos-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Dive into the breathtaking world of microscopic life — organisms so small they're invisible to the naked eye, yet so vital they sustain all life on Earth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/explore"
              className="bg-cosmos-teal text-cosmos-black font-semibold px-8 py-3.5 rounded-full hover:bg-cosmos-cyan transition-colors text-base"
            >
              Start Exploring
            </Link>
            <Link
              to="/gallery"
              className="border border-cosmos-teal/50 text-cosmos-teal px-8 py-3.5 rounded-full hover:bg-cosmos-teal/10 transition-colors text-base"
            >
              View Gallery
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-cosmos-muted text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-cosmos-teal/50 to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-cosmos-teal/10 bg-cosmos-dark/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-grotesk font-bold text-3xl md:text-4xl text-cosmos-teal mb-2">
                  {stat.value}
                </div>
                <div className="text-cosmos-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-cosmos-white mb-4">
              Life at the Microscale
            </h2>
            <p className="text-cosmos-muted text-base max-w-xl mx-auto">
              Discover the diverse kingdoms of microscopic life that inhabit every corner of our planet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => (
              <div
                key={feat.id}
                className="bg-cosmos-navy border border-cosmos-teal/20 rounded-2xl p-6 hover:border-cosmos-teal/50 hover:shadow-[0_0_30px_rgba(0,201,177,0.12)] transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{feat.icon}</div>
                <h3
                  id={feat.titleId}
                  className="font-grotesk font-semibold text-cosmos-white text-lg mb-2 group-hover:text-cosmos-teal transition-colors"
                >
                  {feat.title}
                </h3>
                <p id={feat.descId} className="text-cosmos-muted text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-20 md:py-28 bg-cosmos-dark/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-cosmos-teal text-sm font-medium uppercase tracking-widest">
                Did You Know?
              </span>
              <h2
                id="did-you-know-title"
                className="font-grotesk font-bold text-3xl md:text-4xl text-cosmos-white mt-3 mb-5 leading-tight"
              >
                You Are Never Truly Alone
              </h2>
              <p id="did-you-know-desc" className="text-cosmos-light text-base leading-relaxed mb-6">
                Your body hosts approximately 38 trillion microbial cells — roughly equal to the number of human cells. These microorganisms form the human microbiome, a complex ecosystem that influences your immune system, digestion, mood, and even behavior.
              </p>
              <p className="text-cosmos-muted text-sm leading-relaxed mb-8">
                Far from being harmful, the vast majority of these microscopic companions are essential to your health and survival. Without them, life as we know it would be impossible.
              </p>
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 text-cosmos-teal font-medium hover:text-cosmos-cyan transition-colors"
              >
                Learn more about microbiomes
                <span className="text-lg">→</span>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-cosmos-teal/5 rounded-3xl blur-xl" />
              <img
                alt="Human microbiome microscopic view"
                className="relative rounded-2xl w-full object-cover aspect-[4/3] border border-cosmos-teal/20"
                data-strk-img-id="home-microbiome-d4e5f6"
                data-strk-img="[did-you-know-desc] [did-you-know-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <div className="bg-cosmos-navy border border-cosmos-teal/20 rounded-3xl p-10 md:p-14 shadow-[0_0_60px_rgba(0,201,177,0.08)]">
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-cosmos-white mb-4">
              Ready to Explore the Invisible?
            </h2>
            <p className="text-cosmos-muted text-base mb-8 leading-relaxed">
              Journey through the kingdoms of microscopic life — from ancient bacteria to complex protists — and discover the hidden forces that shape our world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/explore"
                className="bg-cosmos-teal text-cosmos-black font-semibold px-8 py-3.5 rounded-full hover:bg-cosmos-cyan transition-colors"
              >
                Explore Now
              </Link>
              <Link
                to="/about"
                className="border border-cosmos-teal/40 text-cosmos-light px-8 py-3.5 rounded-full hover:border-cosmos-teal hover:text-cosmos-teal transition-colors"
              >
                Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
