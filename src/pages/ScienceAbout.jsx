import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FlaskConical, Dna, Microscope, Globe, Zap, Leaf } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const disciplines = [
  {
    id: 'microbiology',
    icon: Microscope,
    titleId: 'sca-micro-title',
    descId: 'sca-micro-desc',
    imgId: 'sca-img-micro-a1b2',
    title: 'Microbiology',
    desc: 'The study of microorganisms — bacteria, archaea, fungi, protozoa, and viruses — that are invisible to the naked eye yet drive every major process on Earth.',
    color: 'text-cosmos-teal',
    border: 'border-cosmos-teal/20 hover:border-cosmos-teal/50',
    glow: 'hover:shadow-[0_0_25px_rgba(0,212,200,0.1)]',
  },
  {
    id: 'virology',
    icon: Zap,
    titleId: 'sca-viro-title',
    descId: 'sca-viro-desc',
    imgId: 'sca-img-viro-c3d4',
    title: 'Virology',
    desc: 'Viruses are not alive in the conventional sense, yet they have shaped the evolution of every organism on Earth. Virology explores how they replicate, mutate, and interact with their hosts.',
    color: 'text-cosmos-cyan',
    border: 'border-cosmos-cyan/20 hover:border-cosmos-cyan/50',
    glow: 'hover:shadow-[0_0_25px_rgba(0,229,255,0.1)]',
  },
  {
    id: 'mycology',
    icon: Leaf,
    titleId: 'sca-myco-title',
    descId: 'sca-myco-desc',
    imgId: 'sca-img-myco-e5f6',
    title: 'Mycology',
    desc: 'Fungi are neither plant nor animal — they are their own kingdom, and arguably the most underappreciated. From forest networks to fermentation, mycology reveals a hidden world of extraordinary complexity.',
    color: 'text-cosmos-emerald',
    border: 'border-cosmos-emerald/20 hover:border-cosmos-emerald/50',
    glow: 'hover:shadow-[0_0_25px_rgba(52,211,153,0.1)]',
  },
  {
    id: 'astrobiology',
    icon: Globe,
    titleId: 'sca-astro-title',
    descId: 'sca-astro-desc',
    imgId: 'sca-img-astro-g7h8',
    title: 'Astrobiology',
    desc: 'If life exists elsewhere in the universe, it is almost certainly microbial. Astrobiology uses what we know about extremophiles on Earth to guide the search for life on Mars, Europa, and beyond.',
    color: 'text-cosmos-violet',
    border: 'border-cosmos-violet/20 hover:border-cosmos-violet/50',
    glow: 'hover:shadow-[0_0_25px_rgba(139,92,246,0.1)]',
  },
  {
    id: 'biotechnology',
    icon: Dna,
    titleId: 'sca-bio-title',
    descId: 'sca-bio-desc',
    imgId: 'sca-img-bio-i9j0',
    title: 'Biotechnology',
    desc: 'Microbes are the workhorses of modern biotechnology. From CRISPR gene editing to insulin production, the tools and organisms of the microbial world are transforming medicine, agriculture, and industry.',
    color: 'text-cosmos-amber',
    border: 'border-cosmos-amber/20 hover:border-cosmos-amber/50',
    glow: 'hover:shadow-[0_0_25px_rgba(251,191,36,0.1)]',
  },
  {
    id: 'ecology',
    icon: FlaskConical,
    titleId: 'sca-eco-title',
    descId: 'sca-eco-desc',
    imgId: 'sca-img-eco-k1l2',
    title: 'Microbial Ecology',
    desc: 'Microbes are the foundation of every ecosystem on Earth. Microbial ecology studies how communities of microorganisms interact with each other and their environments — from ocean floors to human skin.',
    color: 'text-red-400',
    border: 'border-red-400/20 hover:border-red-400/50',
    glow: 'hover:shadow-[0_0_25px_rgba(248,113,113,0.1)]',
  },
];

const milestones = [
  { year: '1676', event: 'Antonie van Leeuwenhoek first observes bacteria through a handcrafted microscope.' },
  { year: '1859', event: 'Louis Pasteur disproves spontaneous generation, establishing germ theory.' },
  { year: '1928', event: 'Alexander Fleming discovers penicillin, launching the antibiotic era.' },
  { year: '1953', event: 'Watson and Crick describe the double helix structure of DNA.' },
  { year: '1977', event: 'Hydrothermal vent ecosystems discovered, redefining the limits of life.' },
  { year: '2012', event: 'CRISPR-Cas9 is reprogrammed as a precise gene-editing tool.' },
];

const ScienceAbout = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-cosmos-bg">

      {/* ── Hero (same style as Home) ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="sca-hero-bg-mc002"
          data-strk-bg="[sca-hero-subtitle] [sca-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-bg/80 via-cosmos-bg/60 to-cosmos-bg" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cosmos-teal/5 blur-3xl animate-pulse-slow z-10" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cosmos-violet/5 blur-3xl animate-pulse-slow z-10" style={{ animationDelay: '2s' }} />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 text-center pt-20">
          <div className="inline-flex items-center gap-2 bg-cosmos-teal/10 border border-cosmos-teal/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-cosmos-teal animate-pulse" />
            <span className="text-cosmos-teal text-xs font-medium uppercase tracking-widest">
              The Science of the Invisible
            </span>
          </div>

          <h1
            id="sca-hero-title"
            className="text-5xl md:text-7xl lg:text-8xl font-black text-cosmos-text leading-tight tracking-tight mb-6"
          >
            Where{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmos-teal to-cosmos-cyan">
              Microbiology
            </span>
            {' '}Meets Wonder
          </h1>

          <p
            id="sca-hero-subtitle"
            className="text-cosmos-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            From the first glimpse through Leeuwenhoek's lens to CRISPR gene editing, the science of the microbial world has transformed our understanding of life, disease, and the cosmos itself.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/science"
              className="flex items-center gap-2 bg-cosmos-teal text-cosmos-bg font-semibold px-8 py-4 rounded-full hover:bg-cosmos-cyan transition-all duration-200 text-base"
            >
              Read the Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/explore"
              className="flex items-center gap-2 border border-cosmos-border text-cosmos-text font-medium px-8 py-4 rounded-full hover:border-cosmos-teal/50 hover:text-cosmos-teal transition-all duration-200 text-base"
            >
              Explore Organisms
            </Link>
          </div>
        </div>
      </section>

      {/* ── Disciplines ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="text-center mb-14">
          <span className="text-cosmos-teal text-xs font-medium uppercase tracking-widest">Fields of Study</span>
          <h2 className="text-3xl md:text-4xl font-bold text-cosmos-text mt-3 mb-4">
            Six Disciplines, One Invisible World
          </h2>
          <p className="text-cosmos-muted max-w-xl mx-auto leading-relaxed">
            Microbiology is not a single science — it is a constellation of disciplines, each illuminating a different facet of the microscopic universe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplines.map(({ id, icon: Icon, titleId, descId, imgId, title, desc, color, border, glow }) => (
            <div
              key={id}
              className={`bg-cosmos-surface border ${border} ${glow} rounded-2xl overflow-hidden transition-all duration-300 group flex flex-col`}
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  alt={title}
                  data-strk-img-id={imgId}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-surface/70 to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className={`w-9 h-9 rounded-full bg-current/10 flex items-center justify-center mb-4 ${color} bg-opacity-10`}
                  style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 id={titleId} className="text-cosmos-text font-semibold text-lg mb-2">
                  {title}
                </h3>
                <p id={descId} className="text-cosmos-muted text-sm leading-relaxed flex-1">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-cosmos-surface border-y border-cosmos-border py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="text-cosmos-teal text-xs font-medium uppercase tracking-widest">History</span>
            <h2 className="text-3xl md:text-4xl font-bold text-cosmos-text mt-3 mb-4">
              Milestones in Microbiology
            </h2>
            <p className="text-cosmos-muted max-w-xl mx-auto leading-relaxed">
              From the first microscope to CRISPR, a journey through the discoveries that changed everything.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-cosmos-border md:-translate-x-px" />

            <div className="space-y-10">
              {milestones.map(({ year, event }, i) => (
                <div
                  key={year}
                  className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 w-9 h-9 rounded-full bg-cosmos-bg border-2 border-cosmos-teal flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
                    <span className="w-2 h-2 rounded-full bg-cosmos-teal" />
                  </div>

                  {/* Card */}
                  <div className={`flex-1 md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:ml-auto'}`}>
                    <div className="bg-cosmos-bg border border-cosmos-border rounded-xl p-5 hover:border-cosmos-teal/30 transition-colors duration-200">
                      <span className="text-cosmos-teal text-sm font-bold block mb-1">{year}</span>
                      <p className="text-cosmos-muted text-sm leading-relaxed">{event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-24 text-center">
        <div className="bg-cosmos-surface border border-cosmos-border rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full bg-cosmos-teal/5 blur-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-cosmos-text mb-4">
              Dive Deeper
            </h2>
            <p className="text-cosmos-muted leading-relaxed mb-8 max-w-lg mx-auto">
              Explore our full library of science articles, or browse the organism gallery to see the subjects of this science up close.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/science"
                className="flex items-center gap-2 bg-cosmos-teal text-cosmos-bg font-semibold px-8 py-4 rounded-full hover:bg-cosmos-cyan transition-all duration-200"
              >
                Read the Science <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/explore"
                className="border border-cosmos-border text-cosmos-text font-medium px-8 py-4 rounded-full hover:border-cosmos-teal/50 transition-all duration-200"
              >
                Explore the Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ScienceAbout;
