import { Eye, Zap, Globe, FlaskConical } from 'lucide-react';

const facts = [
  {
    icon: Eye,
    title: 'Beyond Visibility',
    description: 'The human eye can only see objects larger than 0.1mm. Microscopes reveal a world 1,000x smaller.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
  },
  {
    icon: Globe,
    title: 'Everywhere on Earth',
    description: 'Microorganisms inhabit every environment — from boiling hydrothermal vents to frozen Antarctic ice.',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
  },
  {
    icon: Zap,
    title: 'Powering Life',
    description: 'Mitochondria, once free-living bacteria, now power every cell in your body — a 2-billion-year partnership.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
  {
    icon: FlaskConical,
    title: 'Medical Breakthroughs',
    description: 'Understanding microscopic life has led to antibiotics, vaccines, and gene therapies that save millions of lives.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
];

export default function HomeFactsGrid() {
  return (
    <section className="py-24 px-4 md:px-8 bg-cosmos-navy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Did You Know?</span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-50 mt-3 mb-4">
            Fascinating Micro Facts
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            The microscopic world is stranger and more wonderful than most science fiction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.title}
                className="bg-cosmos-dark rounded-2xl border border-cyan-900/30 p-6 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${fact.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${fact.color}`} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-slate-50 mb-2">{fact.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{fact.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
