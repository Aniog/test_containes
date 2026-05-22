import { Microscope, Zap, Globe, Eye } from 'lucide-react';

const features = [
  {
    icon: Microscope,
    title: 'Microscopic Life',
    description: 'Explore bacteria, protozoa, and microorganisms that form the foundation of all life on Earth.',
    color: 'text-teal-400',
    bg: 'bg-teal-900/30',
    border: 'border-teal-800',
  },
  {
    icon: Zap,
    title: 'Crystal Structures',
    description: 'Witness the breathtaking geometry of minerals and crystals at the atomic scale.',
    color: 'text-violet-400',
    bg: 'bg-violet-900/30',
    border: 'border-violet-800',
  },
  {
    icon: Globe,
    title: 'Hidden Ecosystems',
    description: 'Discover entire ecosystems thriving in a single drop of water or grain of soil.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-900/30',
    border: 'border-cyan-800',
  },
  {
    icon: Eye,
    title: 'Nano Photography',
    description: 'Stunning electron microscope imagery revealing textures and forms invisible to the naked eye.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-900/30',
    border: 'border-emerald-800',
  },
];

const HomeFeatures = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">What We Explore</span>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The Microscopic Universe
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From the tiniest bacteria to intricate crystal lattices, the microscopic world is full of wonder.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`${feature.bg} border ${feature.border} rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl ${feature.bg} border ${feature.border} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
