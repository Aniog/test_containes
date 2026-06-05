import { Eye, Dna, Globe, Zap, Shield, FlaskConical } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Visual Discovery',
    description: 'Stunning microscopy imagery reveals the breathtaking beauty hidden at scales too small to see.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    icon: Dna,
    title: 'Genetic Wonders',
    description: 'Explore how microorganisms encode life itself — from simple bacteria to complex archaea.',
    color: 'text-teal-400',
    bg: 'bg-teal-400/10',
    border: 'border-teal-400/20',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Microbes shape our climate, oceans, soil, and health in ways we are only beginning to understand.',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
  },
  {
    icon: Zap,
    title: 'Extreme Survivors',
    description: 'Extremophiles thrive in boiling vents, frozen tundra, and acidic lakes — life finds a way.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
  },
  {
    icon: Shield,
    title: 'Immune Battles',
    description: 'Witness the microscopic warfare between pathogens and your body\'s remarkable defense systems.',
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
    border: 'border-rose-400/20',
  },
  {
    icon: FlaskConical,
    title: 'Cutting-Edge Research',
    description: 'Stay current with the latest breakthroughs in microbiology, virology, and synthetic biology.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
  },
];

export default function HomeFeatures() {
  return (
    <section className="py-20 md:py-28 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-xs font-medium font-mono-label tracking-widest uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            A Window Into the Invisible
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            MicroCosmos brings the microscopic world to life through science, imagery, and storytelling.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`bg-[#0a1628] border ${feature.border} rounded-2xl p-6 card-glow transition-all duration-300 hover:border-opacity-60 group`}
              >
                <div className={`w-12 h-12 ${feature.bg} border ${feature.border} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
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
}
