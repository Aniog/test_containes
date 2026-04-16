import { Scale, Leaf, Users, Lock } from 'lucide-react';

const principles = [
  {
    icon: Scale,
    title: 'Fairness & Bias',
    description: 'AI systems must be designed to treat all people equitably, avoiding discrimination based on race, gender, or socioeconomic status.',
    color: 'amber',
  },
  {
    icon: Lock,
    title: 'Privacy & Security',
    description: 'Protecting personal data and ensuring AI systems cannot be exploited for surveillance or malicious purposes.',
    color: 'rose',
  },
  {
    icon: Users,
    title: 'Human Oversight',
    description: 'Keeping humans in control of critical decisions, ensuring AI augments rather than replaces human judgment in high-stakes scenarios.',
    color: 'cyan',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Training large AI models consumes significant energy. The industry must pursue greener infrastructure and efficient architectures.',
    color: 'emerald',
  },
];

const colorMap = {
  amber: { bg: 'bg-amber-500/10', icon: 'text-amber-400', border: 'border-amber-500/20' },
  rose: { bg: 'bg-rose-500/10', icon: 'text-rose-400', border: 'border-rose-500/20' },
  cyan: { bg: 'bg-cyan-500/10', icon: 'text-cyan-400', border: 'border-cyan-500/20' },
  emerald: { bg: 'bg-emerald-500/10', icon: 'text-emerald-400', border: 'border-emerald-500/20' },
};

const AIEthics = () => {
  return (
    <section id="ethics" className="py-24 bg-[#050816] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            Responsible AI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            Ethics & Challenges
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            As AI grows more powerful, so does the responsibility to develop it thoughtfully.
            These are the critical ethical considerations shaping the future of AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map(({ icon: Icon, title, description, color }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className={`flex gap-5 p-6 rounded-2xl bg-white/[0.02] border ${c.border} hover:bg-white/[0.05] transition-all duration-300`}
              >
                <div className={`flex-shrink-0 p-3 rounded-xl ${c.bg} h-fit`}>
                  <Icon className={`w-6 h-6 ${c.icon}`} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-violet-950/60 border border-indigo-500/20 text-center">
          <p className="text-xl md:text-2xl text-white font-light italic leading-relaxed max-w-3xl mx-auto">
            "The development of full artificial intelligence could spell the end of the human race…
            or it could be the best thing that ever happened to us. It all depends on how we build it."
          </p>
          <p className="text-indigo-400 font-semibold mt-4">— Stephen Hawking</p>
        </div>
      </div>
    </section>
  );
};

export default AIEthics;
