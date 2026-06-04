import { Eye, Dna, Globe, FlaskConical } from 'lucide-react';

const facts = [
  {
    icon: Eye,
    title: 'Invisible to the Naked Eye',
    desc: 'Most microorganisms measure between 0.1 and 10 micrometers — a human hair is 70,000 nm wide.',
    color: 'text-[#00e5ff]',
    bg: 'bg-[#00e5ff]/10',
  },
  {
    icon: Dna,
    title: 'Ancient Architects of Life',
    desc: 'Bacteria have existed for 3.8 billion years, predating all complex life and shaping Earth\'s atmosphere.',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
  },
  {
    icon: Globe,
    title: 'Everywhere on Earth',
    desc: 'Microbes thrive in boiling hot springs, frozen tundra, deep ocean trenches, and even in clouds.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
  {
    icon: FlaskConical,
    title: 'Essential to Human Health',
    desc: 'Your body hosts 38 trillion microbial cells — outnumbering your own cells — forming a vital microbiome.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
];

const HomeFactsStrip = () => {
  return (
    <section className="py-20 bg-[#0a1628] border-y border-[#00e5ff]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-widest">
            Did You Know?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Fascinating Microbial Facts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.title}
                className="card-hover bg-[#050d1a] border border-[#00e5ff]/10 rounded-2xl p-6"
              >
                <div className={`w-12 h-12 rounded-xl ${fact.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${fact.color}`} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{fact.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{fact.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFactsStrip;
