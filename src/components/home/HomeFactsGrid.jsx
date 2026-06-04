import { Zap, Globe, FlaskConical, Eye } from 'lucide-react';

const facts = [
  {
    icon: Globe,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
    title: 'Everywhere on Earth',
    desc: 'Microorganisms inhabit every environment on Earth — from boiling hydrothermal vents to frozen Antarctic ice sheets.',
  },
  {
    icon: Zap,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
    title: 'Powering Life',
    desc: 'Bacteria in soil fix nitrogen, making it available to plants. Without them, most life on Earth would cease to exist.',
  },
  {
    icon: FlaskConical,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/20',
    title: 'Medical Breakthroughs',
    desc: 'From penicillin to insulin, microorganisms have been the source of humanity\'s most important medical discoveries.',
  },
  {
    icon: Eye,
    color: 'text-teal-400',
    bg: 'bg-teal-500/10 border-teal-500/20',
    title: 'Mostly Unseen',
    desc: 'Scientists estimate we have only identified about 1% of all microbial species. The rest remain a complete mystery.',
  },
];

const HomeFactsGrid = () => {
  return (
    <section className="py-24 md:py-32 bg-[#050b18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium px-4 py-2 rounded-full mb-6">
              Why It Matters
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-100 mb-6 leading-tight">
              Microbes Run the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                World
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Long before humans walked the Earth, microorganisms shaped the atmosphere, 
              created the soil, and laid the foundation for all complex life. They are not 
              just tiny — they are the most powerful force in the biosphere.
            </p>
            <div className="flex items-center gap-6">
              <div>
                <div className="font-display font-bold text-3xl text-cyan-300">8M+</div>
                <div className="text-slate-500 text-sm">Estimated Species</div>
              </div>
              <div className="w-px h-12 bg-cyan-500/20" />
              <div>
                <div className="font-display font-bold text-3xl text-teal-300">70%</div>
                <div className="text-slate-500 text-sm">of Earth's Biomass</div>
              </div>
              <div className="w-px h-12 bg-cyan-500/20" />
              <div>
                <div className="font-display font-bold text-3xl text-violet-300">50%</div>
                <div className="text-slate-500 text-sm">of Earth's Oxygen</div>
              </div>
            </div>
          </div>

          {/* Right: Fact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {facts.map((fact) => (
              <div
                key={fact.title}
                className="bg-[#0d1526] border border-cyan-500/10 rounded-2xl p-5 card-hover"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${fact.bg}`}>
                  <fact.icon className={`w-5 h-5 ${fact.color}`} />
                </div>
                <h3 className="font-semibold text-slate-100 mb-2 text-sm">{fact.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{fact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFactsGrid;
