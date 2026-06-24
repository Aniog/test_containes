import { Zap, Droplets, Wind, Flame, Snowflake, Atom } from 'lucide-react';

const facts = [
  {
    icon: Droplets,
    color: 'cyan',
    title: 'A Drop of Seawater',
    body: 'A single milliliter of seawater contains up to one million bacteria and ten million viruses — more than the entire human population of Earth.',
  },
  {
    icon: Zap,
    color: 'emerald',
    title: 'Faster Than a Blink',
    body: 'Vorticella contracts its stalk in just 8 milliseconds — making it one of the fastest movements in the biological world, faster than a human blink.',
  },
  {
    icon: Snowflake,
    color: 'teal',
    title: 'Surviving Absolute Zero',
    body: 'Tardigrades can survive temperatures as low as -272°C, just one degree above absolute zero, by entering a state of suspended animation called cryptobiosis.',
  },
  {
    icon: Wind,
    color: 'violet',
    title: 'Breathing Diatoms',
    body: 'Diatoms are responsible for producing approximately 20% of all oxygen on Earth — more than all the world\'s rainforests combined.',
  },
  {
    icon: Flame,
    color: 'cyan',
    title: 'Ancient Survivors',
    body: 'Bdelloid rotifers have survived for over 80 million years without sexual reproduction, making them one of the most evolutionarily ancient asexual animals.',
  },
  {
    icon: Atom,
    color: 'emerald',
    title: 'You Are Mostly Microbes',
    body: 'The human body contains roughly 38 trillion bacteria — about the same number as human cells. We are, in a very real sense, walking ecosystems.',
  },
];

const colorMap = {
  cyan: {
    icon: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    hover: 'hover:border-cyan-500/40',
  },
  teal: {
    icon: 'text-teal-400',
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/20',
    hover: 'hover:border-teal-500/40',
  },
  emerald: {
    icon: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    hover: 'hover:border-emerald-500/40',
  },
  violet: {
    icon: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    hover: 'hover:border-violet-500/40',
  },
};

const FactsSection = () => {
  return (
    <section
      id="facts"
      className="py-28 px-6"
      style={{ background: 'linear-gradient(180deg, #030b18 0%, #060f20 50%, #030b18 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-cyan-500/40" />
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Mind-Bending</span>
            <div className="h-px w-12 bg-cyan-500/40" />
          </div>
          <h2
            className="font-space text-4xl md:text-5xl font-bold text-sky-50 mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Did You <span className="gradient-text">Know?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Six facts about the microscopic world that will change how you see everything around you.
          </p>
        </div>

        {/* Facts grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map(({ icon: Icon, color, title, body }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className={`p-7 rounded-2xl bg-[#0a1628] border ${c.border} ${c.hover} transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${c.icon}`} />
                </div>
                <h3
                  className="text-sky-50 font-semibold text-lg mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
