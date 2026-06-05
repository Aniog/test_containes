import { Eye, Dna, FlaskConical, Leaf } from 'lucide-react';

const facts = [
  {
    icon: Eye,
    title: 'Invisible Giants',
    description: 'The human body contains roughly 38 trillion bacteria — outnumbering human cells. You are more microbe than human.',
  },
  {
    icon: Dna,
    title: 'Ancient Architects',
    description: 'Cyanobacteria invented photosynthesis 2.7 billion years ago, flooding Earth with oxygen and making complex life possible.',
  },
  {
    icon: FlaskConical,
    title: 'Chemical Factories',
    description: 'Microbes produce half of Earth\'s oxygen, cycle nutrients, and synthesize compounds that form the basis of modern medicine.',
  },
  {
    icon: Leaf,
    title: 'Ecosystem Engineers',
    description: 'A single teaspoon of healthy soil contains more microorganisms than there are people on Earth — up to 1 billion bacteria.',
  },
];

const HomeFactsStrip = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            Did You Know?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            The Microbial World in Numbers
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Facts that will forever change how you see the world around you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-slate-900/60 border border-slate-700/50 rounded-2xl p-6 hover:border-teal-500/40 hover:bg-slate-800/60 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-teal-400" />
              </div>
              <h3 className="text-slate-100 font-semibold text-base mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFactsStrip;
