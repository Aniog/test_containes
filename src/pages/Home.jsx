import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featuredOrganisms = [
  {
    id: 'tardigrade',
    titleId: 'home-feat-tardigrade-title',
    descId: 'home-feat-tardigrade-desc',
    imgId: 'home-feat-tardigrade-img-9a2b3c',
    title: 'Tardigrades',
    desc: 'Nearly indestructible micro-animals that survive in the vacuum of space.',
    tag: 'Micro-animals',
    tagColor: 'text-emerald-400 bg-emerald-900/30 border-emerald-900/50',
  },
  {
    id: 'diatom',
    titleId: 'home-feat-diatom-title',
    descId: 'home-feat-diatom-desc',
    imgId: 'home-feat-diatom-img-4d5e6f',
    title: 'Diatoms',
    desc: 'Microscopic algae with intricate glass-like shells of breathtaking symmetry.',
    tag: 'Algae',
    tagColor: 'text-cyan-400 bg-cyan-900/30 border-cyan-900/50',
  },
  {
    id: 'mycelium',
    titleId: 'home-feat-mycelium-title',
    descId: 'home-feat-mycelium-desc',
    imgId: 'home-feat-mycelium-img-7g8h9i',
    title: 'Mycelium Networks',
    desc: "The underground internet of fungi — nature's most complex communication system.",
    tag: 'Fungi',
    tagColor: 'text-violet-400 bg-violet-900/30 border-violet-900/50',
  },
];

const stats = [
  { value: '10³⁰', label: 'Bacteria on Earth' },
  { value: '99%', label: 'Species Undiscovered' },
  { value: '3.8B', label: 'Years of Evolution' },
  { value: '1μm', label: 'Average Bacteria Size' },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-space-black text-slate-200">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-teal/30 via-space-black to-space-black" />

        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

        {/* Hero background image */}
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="home-hero-bg-1a2b3c"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center pt-24 pb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-900/30 border border-cyan-800/50 text-cyan-300 text-xs px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Exploring the Invisible World
          </div>

          <h1
            id="home-hero-title"
            className="font-display font-bold text-5xl md:text-7xl text-slate-50 leading-tight mb-6"
          >
            The World{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Too Small
            </span>{' '}
            to See
          </h1>

          <p
            id="home-hero-subtitle"
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Dive into the microscopic universe teeming with life — bacteria, fungi, protozoa, and organisms that have shaped our planet for billions of years.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/explore"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-base"
            >
              Start Exploring
            </Link>
            <Link
              to="/gallery"
              className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-base"
            >
              View Gallery
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-cyan-900/20 bg-midnight/50">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-3xl md:text-4xl text-cyan-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
                What is MicroCosmos?
              </span>
              <h2 id="home-intro-title" className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-6 leading-tight">
                A Universe Hidden in Plain Sight
              </h2>
              <p id="home-intro-desc" className="text-slate-400 text-base leading-relaxed mb-4">
                Beneath the threshold of human vision lies an entire cosmos — a world of extraordinary complexity, beauty, and diversity. Microorganisms were the first life on Earth and remain the foundation of all ecosystems.
              </p>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                MicroCosmos is your guide to this hidden realm. We explore the science, the stories, and the stunning visual beauty of organisms too small to see with the naked eye.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Learn more about our mission
                <span>→</span>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-cyan-900/40 shadow-glow-cyan">
                <img
                  data-strk-img-id="home-intro-img-2c3d4e"
                  data-strk-img="[home-intro-desc] [home-intro-title]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Microscopic life"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-cyan-500/10 border border-cyan-500/20 blur-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Organisms */}
      <section className="py-20 px-4 md:px-8 bg-midnight/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
              Featured Organisms
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50">
              Meet the Inhabitants
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredOrganisms.map((org) => (
              <div
                key={org.id}
                className="group bg-midnight border border-cyan-900/40 rounded-xl overflow-hidden hover:border-cyan-700/50 hover:shadow-glow-cyan transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    data-strk-img-id={org.imgId}
                    data-strk-img={`[${org.descId}] [${org.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={org.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${org.tagColor}`}>
                    {org.tag}
                  </span>
                  <h3 id={org.titleId} className="font-display font-semibold text-lg text-slate-50 mt-3 mb-2">
                    {org.title}
                  </h3>
                  <p id={org.descId} className="text-slate-400 text-sm leading-relaxed">
                    {org.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/explore"
              className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-8 py-3 rounded-full transition-all duration-200 inline-block"
            >
              Explore All Organisms
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-dark-teal to-midnight border border-cyan-900/40 rounded-2xl p-10 md:p-14 shadow-glow-cyan">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
              Ready to Explore the Invisible?
            </h2>
            <p className="text-slate-400 text-base mb-8 leading-relaxed">
              Journey through six kingdoms of microscopic life. Discover organisms that defy imagination and science that reshapes our understanding of life itself.
            </p>
            <Link
              to="/gallery"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3.5 rounded-full transition-all duration-200 inline-block text-base"
            >
              View the Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
