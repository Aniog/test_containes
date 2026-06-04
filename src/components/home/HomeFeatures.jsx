import { Eye, Dna, Globe, Zap, Shield, FlaskConical } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Invisible to the Naked Eye',
    description: 'Most microorganisms measure between 0.1 and 100 micrometers — far too small to see without a microscope.',
    color: 'text-[#00d4c8]',
    bg: 'bg-[#00d4c8]/10',
    border: 'border-[#00d4c8]/20',
  },
  {
    icon: Dna,
    title: 'Ancient Origins',
    description: 'Microbial life has existed for over 3.8 billion years, predating all complex life forms on Earth.',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
  },
  {
    icon: Globe,
    title: 'Everywhere on Earth',
    description: 'From the deepest ocean trenches to the highest mountain peaks, microbes colonize every environment.',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/20',
  },
  {
    icon: Zap,
    title: 'Incredible Diversity',
    description: 'Scientists estimate there are over one trillion microbial species — most still undiscovered.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
  },
  {
    icon: Shield,
    title: 'Essential for Life',
    description: 'Microbes drive nutrient cycles, produce oxygen, and form the foundation of all food webs.',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
  },
  {
    icon: FlaskConical,
    title: 'Medical Breakthroughs',
    description: 'From antibiotics to vaccines, understanding microbes has revolutionized modern medicine.',
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
    border: 'border-rose-400/20',
  },
];

const HomeFeatures = () => {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#00d4c8] mb-3 block">
            Why It Matters
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            The World Beneath the Surface
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Microorganisms are the most abundant life forms on Earth, yet they remain largely unseen and misunderstood.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`bg-[#0f1f38] border ${feature.border} rounded-2xl p-6 hover:border-opacity-60 transition-all duration-300 glow-teal-hover group`}
              >
                <div className={`w-12 h-12 rounded-xl ${feature.bg} border ${feature.border} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-slate-50 font-semibold text-lg mb-2">{feature.title}</h3>
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
