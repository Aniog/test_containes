import { Dna, Globe, FlaskConical, Atom } from 'lucide-react';

const facts = [
  {
    icon: Globe,
    color: 'teal',
    title: 'Microbes Outnumber Stars',
    body: 'There are an estimated 10³⁰ microorganisms on Earth — more than all the stars in the observable universe combined.',
  },
  {
    icon: Dna,
    color: 'cyan',
    title: 'You Are 50% Microbial',
    body: 'By cell count, roughly half of the cells in your body are microbial. Your gut alone hosts over 1,000 species of bacteria.',
  },
  {
    icon: FlaskConical,
    color: 'emerald',
    title: 'Oxygen Came from Microbes',
    body: 'Cyanobacteria produced the oxygen in Earth\'s atmosphere 2.4 billion years ago — the Great Oxidation Event that made complex life possible.',
  },
  {
    icon: Atom,
    color: 'purple',
    title: 'Viruses Drive Evolution',
    body: 'About 8% of the human genome is made up of ancient viral DNA. Viruses have been rewriting the code of life for billions of years.',
  },
];

const colorMap = {
  teal: 'bg-teal-500/15 text-teal-400 border-teal-500/30',
  cyan: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
  emerald: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  purple: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
};

const HomeFacts = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-teal-400 text-sm font-medium uppercase tracking-widest">Did You Know?</span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-slate-100 mt-2">
            Mind-Bending Microbial Facts
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            The microscopic world is stranger and more powerful than most people ever imagine.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact) => {
            const Icon = fact.icon;
            const colors = colorMap[fact.color];
            return (
              <div
                key={fact.title}
                className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-600 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${colors}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-grotesk font-semibold text-slate-100 text-base mb-2">{fact.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{fact.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFacts;
