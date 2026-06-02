import { Eye, Zap, Globe, FlaskConical, Layers, Atom } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Ultra-High Resolution',
    description: 'Explore microscopic imagery captured at up to 500,000× magnification using electron microscopy.',
    color: 'text-cosmos-cyan',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    icon: Zap,
    title: 'Live Organism Data',
    description: 'Real-time data on microbial behavior, growth patterns, and environmental responses.',
    color: 'text-cosmos-violet',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
  },
  {
    icon: Globe,
    title: 'Global Ecosystems',
    description: 'Discover how microorganisms shape every ecosystem on Earth — from deep oceans to mountain peaks.',
    color: 'text-cosmos-teal',
    bg: 'bg-teal-400/10',
    border: 'border-teal-400/20',
  },
  {
    icon: FlaskConical,
    title: 'Scientific Research',
    description: 'Backed by peer-reviewed research from leading microbiologists and research institutions worldwide.',
    color: 'text-cosmos-green',
    bg: 'bg-lime-400/10',
    border: 'border-lime-400/20',
  },
  {
    icon: Layers,
    title: 'Layered Complexity',
    description: 'From simple prokaryotes to complex eukaryotic cells — explore life at every level of complexity.',
    color: 'text-cosmos-cyan',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    icon: Atom,
    title: 'Molecular Structures',
    description: 'Visualize proteins, DNA, and molecular machines that power all living organisms.',
    color: 'text-cosmos-violet',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-cosmos-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,212,255,0.06)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cosmos-cyan text-xs font-medium px-4 py-2 rounded-full mb-6">
            Why MicroCosmos
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-50 mb-4">
            Science Meets Wonder
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We combine cutting-edge microscopy with accessible storytelling to bring the invisible world to life.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description, color, bg, border }) => (
            <div
              key={title}
              className="bg-cosmos-navy border border-cyan-900/30 rounded-2xl p-6 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.08)] transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl ${bg} border ${border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="font-heading font-semibold text-slate-50 text-lg mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
