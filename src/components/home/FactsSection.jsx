import { Eye, Dna, FlaskConical, Globe2 } from 'lucide-react';

const facts = [
  {
    icon: Eye,
    title: 'Invisible to the Naked Eye',
    desc: 'Most microorganisms are between 0.1 and 10 micrometers — thousands of times smaller than a grain of sand.',
    color: 'text-teal-400',
    bg: 'bg-teal-400/10',
    border: 'border-teal-400/20',
  },
  {
    icon: Dna,
    title: 'Ancient Life Forms',
    desc: 'Bacteria have existed for 3.8 billion years, making them the oldest known life forms on Earth.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    icon: FlaskConical,
    title: 'Essential to Life',
    desc: 'Without microbes, there would be no oxygen, no soil fertility, and no decomposition of organic matter.',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
  },
  {
    icon: Globe2,
    title: 'Everywhere on Earth',
    desc: 'Microorganisms thrive in boiling hot springs, frozen tundra, deep ocean vents, and even inside rocks.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
  },
];

const FactsSection = () => {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#0f1629' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">Did You Know?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-3 mb-4">
            Microbial World Facts
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            The microscopic realm is full of surprises that challenge everything we think we know about life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.title}
                className={`p-6 rounded-2xl border ${fact.border} ${fact.bg} hover:scale-105 transition-transform duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl ${fact.bg} border ${fact.border} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${fact.color}`} />
                </div>
                <h3 className="text-slate-100 font-semibold text-base mb-2">{fact.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{fact.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
