import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Dna, Waves, Leaf } from 'lucide-react';

const stats = [
  { value: '8.7M', label: 'Microbial Species' },
  { value: '37T', label: 'Cells in Human Body' },
  { value: '1B+', label: 'Bacteria per Gram of Soil' },
  { value: '70%', label: 'Ocean Oxygen from Microbes' },
];

const features = [
  {
    icon: Microscope,
    title: 'Bacteria',
    desc: 'The oldest life forms on Earth, shaping every ecosystem from deep-sea vents to your gut.',
    color: 'text-cosmos-teal',
    bg: 'bg-cosmos-teal/10',
    border: 'border-cosmos-teal/20',
  },
  {
    icon: Dna,
    title: 'Viruses',
    desc: 'Tiny genetic packages that blur the line between living and non-living matter.',
    color: 'text-cosmos-violet',
    bg: 'bg-cosmos-violet/10',
    border: 'border-cosmos-violet/20',
  },
  {
    icon: Waves,
    title: 'Plankton',
    desc: 'Microscopic ocean drifters that produce half the oxygen we breathe.',
    color: 'text-cosmos-cyan',
    bg: 'bg-cosmos-cyan/10',
    border: 'border-cosmos-cyan/20',
  },
  {
    icon: Leaf,
    title: 'Fungi',
    desc: 'Nature\'s recyclers — a hidden network connecting forests through underground threads.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
  },
];

const HeroOrb = ({ size, color, top, left, delay }) => (
  <div
    className={`absolute rounded-full blur-3xl opacity-20 animate-pulse-slow pointer-events-none`}
    style={{
      width: size,
      height: size,
      background: color,
      top,
      left,
      animationDelay: delay,
    }}
  />
);

const Home = () => {
  return (
    <div className="bg-cosmos-bg text-[#f0f9ff]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background orbs */}
        <HeroOrb size="600px" color="#00d4aa" top="-100px" left="-200px" delay="0s" />
        <HeroOrb size="500px" color="#7c3aed" top="200px" left="60%" delay="2s" />
        <HeroOrb size="400px" color="#06b6d4" top="60%" left="10%" delay="1s" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#1e3a5f 1px, transparent 1px), linear-gradient(90deg, #1e3a5f 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-cosmos-teal/10 border border-cosmos-teal/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-cosmos-teal animate-pulse" />
            <span className="text-cosmos-teal text-sm font-medium">Discover the Invisible World</span>
          </div>

          <h1 className="font-heading font-bold text-5xl md:text-7xl leading-tight tracking-tight mb-6">
            Life Exists at Every{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmos-teal to-cosmos-cyan">
              Scale
            </span>
          </h1>

          <p className="text-[#94a3b8] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Dive into the microscopic universe — a realm of bacteria, fungi, plankton, and viruses that silently sustain all life on Earth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/explore"
              className="flex items-center gap-2 bg-cosmos-teal text-cosmos-bg font-semibold px-8 py-4 rounded-full hover:bg-[#00bfa0] transition-all duration-200 shadow-[0_0_30px_rgba(0,212,170,0.3)]"
            >
              Start Exploring <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/science"
              className="flex items-center gap-2 border border-cosmos-border text-[#94a3b8] font-medium px-8 py-4 rounded-full hover:border-cosmos-teal/40 hover:text-[#f0f9ff] transition-all duration-200"
            >
              Read the Science
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs text-[#94a3b8] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-cosmos-teal to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-cosmos-border bg-cosmos-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-heading font-bold text-3xl md:text-4xl text-cosmos-teal mb-1">{value}</div>
                <div className="text-[#94a3b8] text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Lives in the Microcosmos */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cosmos-teal text-sm font-semibold uppercase tracking-widest">The Inhabitants</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mt-3 mb-4 text-[#f0f9ff]">
              What Lives in the Microcosmos
            </h2>
            <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
              Billions of organisms too small to see with the naked eye form the foundation of all life on our planet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc, color, bg, border }) => (
              <div
                key={title}
                className={`bg-cosmos-card border ${border} rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(0,212,170,0.1)] transition-all duration-300 group cursor-pointer`}
              >
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-[#f0f9ff] mb-2">{title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Fact */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-cosmos-card to-cosmos-elevated border border-cosmos-border rounded-3xl p-10 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cosmos-teal/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-cosmos-teal text-sm font-semibold uppercase tracking-widest">Did You Know?</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl mt-3 mb-5 text-[#f0f9ff] leading-tight">
                  You Are More Microbe Than Human
                </h2>
                <p className="text-[#94a3b8] leading-relaxed mb-6">
                  The human body contains roughly 38 trillion bacterial cells — nearly equal to the number of human cells. These microbes are not invaders; they are essential partners in digestion, immunity, and even mood regulation.
                </p>
                <Link
                  to="/science"
                  className="inline-flex items-center gap-2 text-cosmos-teal font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '38T', desc: 'Bacterial cells in your body' },
                  { num: '1,000+', desc: 'Species in your gut microbiome' },
                  { num: '2kg', desc: 'Weight of your gut bacteria' },
                  { num: '70%', desc: 'Of immune system in the gut' },
                ].map(({ num, desc }) => (
                  <div key={desc} className="bg-cosmos-bg/50 border border-cosmos-border rounded-xl p-4">
                    <div className="font-heading font-bold text-2xl text-cosmos-teal mb-1">{num}</div>
                    <div className="text-[#94a3b8] text-xs leading-snug">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-cosmos-teal text-sm font-semibold uppercase tracking-widest">Ready to Dive In?</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mt-3 mb-5 text-[#f0f9ff]">
            Explore the Invisible Universe
          </h2>
          <p className="text-[#94a3b8] text-lg mb-10">
            Browse our gallery of microscopic organisms, read the latest science, and discover the ecosystems hiding in plain sight.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/gallery"
              className="flex items-center gap-2 bg-cosmos-teal text-cosmos-bg font-semibold px-8 py-4 rounded-full hover:bg-[#00bfa0] transition shadow-[0_0_30px_rgba(0,212,170,0.25)]"
            >
              View Gallery <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="border border-cosmos-border text-[#94a3b8] font-medium px-8 py-4 rounded-full hover:border-cosmos-teal/40 hover:text-[#f0f9ff] transition"
            >
              About the Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
