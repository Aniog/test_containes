import { Zap, Globe, FlaskConical, Atom, Leaf, Heart } from 'lucide-react';

const facts = [
  {
    icon: Atom,
    title: 'Older Than Time',
    desc: 'Bacteria have existed for over 3.5 billion years — they were the only life on Earth for most of its history.',
    accent: 'text-cosmos-teal',
    bg: 'bg-cosmos-teal/10',
  },
  {
    icon: Globe,
    title: 'Everywhere on Earth',
    desc: 'Microbes have been found in the deepest ocean trenches, inside volcanic rocks, and even in the stratosphere.',
    accent: 'text-cosmos-cyan',
    bg: 'bg-cosmos-cyan/10',
  },
  {
    icon: Zap,
    title: 'Electric Bacteria',
    desc: 'Some bacteria can generate electricity by transferring electrons through their cell membranes — a potential future energy source.',
    accent: 'text-cosmos-purple',
    bg: 'bg-cosmos-purple/10',
  },
  {
    icon: FlaskConical,
    title: 'Antibiotic Factories',
    desc: 'Most antibiotics we use today were originally discovered in soil bacteria and fungi, which produce them to fight competitors.',
    accent: 'text-cosmos-teal',
    bg: 'bg-cosmos-teal/10',
  },
  {
    icon: Leaf,
    title: 'Oxygen Producers',
    desc: 'Cyanobacteria were responsible for the Great Oxidation Event 2.4 billion years ago, filling Earth\'s atmosphere with oxygen.',
    accent: 'text-cosmos-cyan',
    bg: 'bg-cosmos-cyan/10',
  },
  {
    icon: Heart,
    title: 'Gut Intelligence',
    desc: 'Your gut microbiome contains over 1,000 species of bacteria that influence your mood, immunity, and even your decision-making.',
    accent: 'text-cosmos-purple',
    bg: 'bg-cosmos-purple/10',
  },
];

export default function Facts() {
  return (
    <section id="facts" className="bg-cosmos-navy py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-cosmos-teal mb-4">
            Did You Know?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-cosmos-light mb-4">
            Astonishing Micro Facts
          </h2>
          <p className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            The microscopic world is full of surprises that challenge everything we think we know about life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.title}
                className="p-6 rounded-2xl bg-cosmos-card border border-cosmos-border hover:border-cosmos-teal/30 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl ${fact.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${fact.accent}`} />
                </div>
                <h3 className="text-cosmos-light font-bold text-lg mb-2">{fact.title}</h3>
                <p className="text-cosmos-muted text-sm leading-relaxed">{fact.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
