import { Eye, Dna, Globe, Zap, FlaskConical, Layers } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Electron Microscopy',
    description: 'Visualize structures at nanometer resolution, revealing the intricate machinery of life invisible to the naked eye.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    icon: Dna,
    title: 'Genomic Sequencing',
    description: 'Decode the genetic blueprints of microorganisms, unlocking evolutionary secrets billions of years in the making.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
  },
  {
    icon: Globe,
    title: 'Global Ecosystems',
    description: 'Microbes inhabit every corner of Earth — from deep-sea hydrothermal vents to the stratosphere.',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
  },
  {
    icon: Zap,
    title: 'Rapid Evolution',
    description: 'With generation times of minutes, bacteria evolve at speeds that make human evolution look glacial.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
  },
  {
    icon: FlaskConical,
    title: 'Biotechnology',
    description: 'Harnessing microbial power for medicine, agriculture, and environmental remediation.',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
    border: 'border-pink-400/20',
  },
  {
    icon: Layers,
    title: 'Symbiotic Networks',
    description: 'Trillions of microbes form complex communities that sustain ecosystems and human health.',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/20',
  },
];

const HomeFeatures = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#050a0e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4 block">
            Why Microbes Matter
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-50 mb-4">
            The Science of the{' '}
            <span className="gradient-text">Small</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Microorganisms are not just tiny — they are the foundation of all complex life, the engineers of Earth's atmosphere, and the future of medicine.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group p-6 rounded-2xl bg-[#0a1628] border ${feature.border} hover:border-opacity-60 hover:shadow-[0_0_30px_rgba(0,212,255,0.08)] transition-all duration-300 cursor-default`}
              >
                <div className={`w-12 h-12 rounded-xl ${feature.bg} border ${feature.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="font-display font-semibold text-lg text-slate-50 mb-2">
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
  );
};

export default HomeFeatures;
