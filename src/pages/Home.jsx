import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featuredItems = [
  {
    id: 'tardigrade',
    title: 'Tardigrades',
    subtitle: 'The Indestructible Water Bears',
    desc: 'Microscopic animals that can survive in outer space, extreme radiation, and complete dehydration.',
    titleId: 'home-feat-tardigrade-title',
    descId: 'home-feat-tardigrade-desc',
    imgId: 'home-feat-tardigrade-img-8f2a9c',
  },
  {
    id: 'diatom',
    title: 'Diatoms',
    subtitle: 'Glass Sculptures of the Sea',
    desc: 'Single-celled algae encased in intricate silica shells, forming the most beautiful geometric patterns in nature.',
    titleId: 'home-feat-diatom-title',
    descId: 'home-feat-diatom-desc',
    imgId: 'home-feat-diatom-img-3b7d1e',
  },
  {
    id: 'neuron',
    title: 'Neurons',
    subtitle: 'The Brain\'s Messengers',
    desc: 'Nerve cells that transmit electrical signals across the brain, forming the complex network of consciousness.',
    titleId: 'home-feat-neuron-title',
    descId: 'home-feat-neuron-desc',
    imgId: 'home-feat-neuron-img-c4e9f2',
  },
];

const statsData = [
  { value: '10³⁰', label: 'Microbes on Earth' },
  { value: '37T', label: 'Cells in Human Body' },
  { value: '1μm', label: 'Average Bacteria Size' },
  { value: '99%', label: 'Invisible to Naked Eye' },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050d1a] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="home-hero-bg-a1b2c3"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/60 via-[#050d1a]/40 to-[#050d1a]" />

        {/* Hero content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,212,255,0.3)] bg-[#00d4ff]/10 text-[#00d4ff] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
            Discover the Invisible Universe
          </div>
          <h1
            id="home-hero-title"
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The World of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">
              MicroCosmos
            </span>
          </h1>
          <p
            id="home-hero-subtitle"
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Journey into the microscopic realm — a hidden universe teeming with life, beauty, and complexity beyond imagination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/explore"
              className="inline-block bg-[#00d4ff] text-[#050d1a] font-bold px-8 py-4 rounded-full hover:bg-[#00ffcc] transition-all duration-300 shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,255,204,0.5)]"
            >
              Start Exploring
            </Link>
            <Link
              to="/gallery"
              className="inline-block border border-[#00d4ff] text-[#00d4ff] font-semibold px-8 py-4 rounded-full hover:bg-[#00d4ff]/10 transition-all duration-300"
            >
              View Gallery
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500 text-xs">
          <span>Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#00d4ff]/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8 border-y border-[rgba(0,212,255,0.08)]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00d4ff] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-3">Featured Discoveries</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Wonders of the Micro World
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl overflow-hidden border border-[rgba(0,212,255,0.12)] bg-[#0a1628] hover:border-[rgba(0,212,255,0.35)] hover:shadow-[0_0_40px_rgba(0,212,255,0.12)] transition-all duration-400"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    alt={item.title}
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}] [home-hero-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-[#00d4ff] text-xs font-semibold uppercase tracking-widest mb-1">{item.subtitle}</p>
                  <h3 id={item.titleId} className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p id={item.descId} className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/organisms"
              className="inline-block border border-[#00d4ff] text-[#00d4ff] font-semibold px-8 py-3 rounded-full hover:bg-[#00d4ff]/10 transition-all duration-300"
            >
              View All Organisms
            </Link>
          </div>
        </div>
      </section>

      {/* Full-width Banner Image */}
      <section className="relative h-80 md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="home-banner-bg-d5e6f7"
          data-strk-bg="[home-banner-title] microscopic cells biology"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a] via-[#050d1a]/50 to-transparent" />
        <div className="relative z-10 h-full flex items-center px-8 md:px-16 max-w-7xl mx-auto">
          <div className="max-w-lg">
            <p className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-3">Did You Know?</p>
            <h2 id="home-banner-title" className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              You Are Never Alone
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Your body hosts over 38 trillion microbial cells — outnumbering your own human cells. The microbiome is an entire ecosystem living within you.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Explore by Category
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Bacteria', desc: 'Single-celled prokaryotes', id: 'cat-bacteria', imgId: 'home-cat-bacteria-img-1a2b3c' },
              { label: 'Viruses', desc: 'Nanoscale pathogens', id: 'cat-viruses', imgId: 'home-cat-viruses-img-4d5e6f' },
              { label: 'Fungi', desc: 'Spores and mycelium', id: 'cat-fungi', imgId: 'home-cat-fungi-img-7g8h9i' },
              { label: 'Cells', desc: 'Building blocks of life', id: 'cat-cells', imgId: 'home-cat-cells-img-j1k2l3' },
            ].map((cat) => (
              <Link
                key={cat.id}
                to="/explore"
                className="group relative rounded-2xl overflow-hidden h-48 md:h-64 border border-[rgba(0,212,255,0.1)] hover:border-[rgba(0,212,255,0.3)] transition-all duration-300"
              >
                <img
                  alt={cat.label}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.id}-desc] [${cat.id}-label]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-[#050d1a]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 id={`${cat.id}-label`} className="text-white font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {cat.label}
                  </h3>
                  <p id={`${cat.id}-desc`} className="text-slate-400 text-xs">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
