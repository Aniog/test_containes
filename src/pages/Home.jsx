import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Dna, FlaskConical, Globe, Zap, Eye } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: Microscope,
    title: 'Microscopic Gallery',
    description: 'Browse stunning electron microscope imagery of bacteria, viruses, fungi, and more.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    icon: Dna,
    title: 'Genetic Insights',
    description: 'Understand how microorganisms evolve, adapt, and shape the genetic fabric of life.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
  },
  {
    icon: FlaskConical,
    title: 'Scientific Data',
    description: 'Explore real research data, size comparisons, and ecological impact statistics.',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
  },
  {
    icon: Globe,
    title: 'Ecosystem Roles',
    description: 'Discover how microbes drive nutrient cycles, decomposition, and climate regulation.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
  },
];

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth', sub: 'estimated total count' },
  { value: '3.8B', label: 'Years of Evolution', sub: 'oldest life forms' },
  { value: '60%', label: 'Ocean Biomass', sub: 'is microbial' },
  { value: '37T', label: 'Human Microbiome', sub: 'cells in your body' },
];

const spotlightOrganisms = [
  {
    id: 'tardigrade',
    name: 'Tardigrade',
    sciName: 'Ramazzottius varieornatus',
    tag: 'Extremophile',
    tagColor: 'text-cyan-400 border-cyan-400/20 bg-cyan-400/10',
    desc: 'The most resilient animal on Earth — survives vacuum, radiation, and extreme temperatures.',
    titleId: 'home-org-tardigrade-title',
    descId: 'home-org-tardigrade-desc',
    imgId: 'home-org-tardigrade-img-9a2b3c',
  },
  {
    id: 'diatom',
    name: 'Diatom',
    sciName: 'Coscinodiscus radiatus',
    tag: 'Algae',
    tagColor: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10',
    desc: 'Microscopic algae with intricate glass-like silica shells, producing 20% of Earth\'s oxygen.',
    titleId: 'home-org-diatom-title',
    descId: 'home-org-diatom-desc',
    imgId: 'home-org-diatom-img-4d5e6f',
  },
  {
    id: 'bdelloid',
    name: 'Bdelloid Rotifer',
    sciName: 'Adineta vaga',
    tag: 'Rotifer',
    tagColor: 'text-violet-400 border-violet-400/20 bg-violet-400/10',
    desc: 'Ancient microscopic animals that reproduce asexually and can survive complete desiccation.',
    titleId: 'home-org-bdelloid-title',
    descId: 'home-org-bdelloid-desc',
    imgId: 'home-org-bdelloid-img-7g8h9i',
  },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050d1a] min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-400/3 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-mono px-4 py-2 rounded-full mb-8">
            <Zap className="w-3 h-3" />
            <span>Discover the invisible world</span>
          </div>

          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            The World{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Too Small
            </span>
            <br />
            to See
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Dive into the microscopic universe — where bacteria engineer ecosystems,
            tardigrades survive the void of space, and a single drop of water teems
            with thousands of life forms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/explore"
              className="flex items-center gap-2 bg-cyan-400 text-[#050d1a] font-semibold px-8 py-3.5 rounded-full hover:bg-cyan-300 transition-colors text-sm"
            >
              Explore Organisms
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/science"
              className="flex items-center gap-2 border border-[#1a3a5c] text-slate-300 px-8 py-3.5 rounded-full hover:border-cyan-400/50 hover:text-cyan-400 transition-all text-sm"
            >
              <Eye className="w-4 h-4" />
              View Science
            </Link>
          </div>
        </div>

        {/* Hero image strip */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 pb-20">
          <div className="relative rounded-2xl overflow-hidden border border-[#1a3a5c] h-64 md:h-96">
            <img
              data-strk-img-id="hero-main-img-a1b2c3"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Microscopic world"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-xs font-mono text-slate-400 bg-[#050d1a]/80 px-3 py-1 rounded-full border border-[#1a3a5c]">
                Electron microscopy — 10,000× magnification
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-[#1a3a5c] bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-mono">
                  {stat.value}
                </div>
                <div className="text-white text-sm font-semibold mt-1">{stat.label}</div>
                <div className="text-slate-500 text-xs font-mono mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-14">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">What We Cover</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            A Complete Microbial Universe
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From the science of extremophiles to the role of gut bacteria in human health —
            MicroCosmos covers it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-[#0a1628] border border-[#1a3a5c] rounded-2xl p-6 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.07)] transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl ${f.bg} border ${f.border} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Spotlight Organisms */}
      <section className="bg-[#0a1628] border-y border-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="text-center mb-14">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Featured Organisms</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Meet the Microbes
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              These tiny organisms have shaped life on Earth for billions of years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spotlightOrganisms.map((org) => (
              <div
                key={org.id}
                className="bg-[#0f1f38] border border-[#1a3a5c] rounded-2xl overflow-hidden hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    data-strk-img-id={org.imgId}
                    data-strk-img={`[${org.descId}] [${org.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={org.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f38] via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${org.tagColor} mb-3 inline-block`}>
                    {org.tag}
                  </span>
                  <h3 id={org.titleId} className="text-white font-semibold text-lg mb-1">
                    {org.name}
                  </h3>
                  <p className="text-slate-500 text-xs font-mono italic mb-3">{org.sciName}</p>
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
              className="inline-flex items-center gap-2 border border-[#1a3a5c] text-slate-300 px-8 py-3 rounded-full hover:border-cyan-400/50 hover:text-cyan-400 transition-all text-sm"
            >
              View All Organisms
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
        <div className="bg-gradient-to-br from-[#0a1628] to-[#0f1f38] border border-[#1a3a5c] rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl" />
          </div>
          <div className="relative">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Ready to explore?</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
              The Invisible World{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Awaits
              </span>
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-8">
              Thousands of species, billions of years of evolution, and a universe of discovery —
              all at the tip of your finger.
            </p>
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 bg-cyan-400 text-[#050d1a] font-semibold px-8 py-3.5 rounded-full hover:bg-cyan-300 transition-colors text-sm"
            >
              Begin Your Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
