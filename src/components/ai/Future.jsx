import { Rocket, Globe, Users, Lightbulb, AlertTriangle, TrendingUp } from 'lucide-react';

const predictions = [
  {
    icon: Rocket,
    title: 'AGI on the Horizon',
    desc: 'Leading researchers predict Artificial General Intelligence could emerge within the next decade, capable of matching human reasoning across all domains.',
    timeframe: '2030–2040',
    color: '#6366f1',
  },
  {
    icon: Globe,
    title: 'AI-Powered Economy',
    desc: 'AI is projected to add $15.7 trillion to the global economy by 2030, transforming productivity, innovation, and wealth creation.',
    timeframe: 'By 2030',
    color: '#10b981',
  },
  {
    icon: Users,
    title: 'Human-AI Collaboration',
    desc: 'The future isn\'t AI replacing humans — it\'s AI augmenting human capabilities, creating new roles and amplifying creativity.',
    timeframe: 'Ongoing',
    color: '#a855f7',
  },
  {
    icon: Lightbulb,
    title: 'Scientific Breakthroughs',
    desc: 'AI will accelerate discoveries in medicine, materials science, and physics — solving problems that have stumped humanity for centuries.',
    timeframe: 'Next 10 years',
    color: '#f59e0b',
  },
];

const challenges = [
  { label: 'AI Alignment', desc: 'Ensuring AI goals align with human values', color: '#ef4444' },
  { label: 'Job Displacement', desc: 'Managing workforce transitions at scale', color: '#f97316' },
  { label: 'Privacy & Surveillance', desc: 'Balancing capability with civil liberties', color: '#eab308' },
  { label: 'Bias & Fairness', desc: 'Building equitable AI systems for all', color: '#a855f7' },
  { label: 'Energy Consumption', desc: 'Reducing the carbon footprint of AI training', color: '#06b6d4' },
  { label: 'Regulation', desc: 'Creating governance frameworks that keep pace', color: '#6366f1' },
];

export default function Future() {
  return (
    <section id="future" className="py-24 px-6 section-bg-alt">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">What's Next</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            The <span className="gradient-text">Future of AI</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We are at an inflection point. The decisions made today will shape the trajectory of AI for generations.
          </p>
        </div>

        {/* Predictions Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {predictions.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="glass-card card-hover rounded-2xl p-7 flex gap-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ background: `${p.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: p.color }} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-bold text-lg">{p.title}</h3>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: `${p.color}20`, color: p.color }}
                    >
                      {p.timeframe}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Challenges */}
        <div className="glass-card rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl">Challenges to Address</h3>
              <p className="text-slate-500 text-sm">Critical issues the AI community must solve</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {challenges.map((c) => (
              <div key={c.label} className="flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/5">
                <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: c.color }} />
                <div>
                  <div className="text-white text-sm font-semibold">{c.label}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 via-purple-600/20 to-cyan-600/20" />
          <div className="absolute inset-0 border border-indigo-500/20 rounded-3xl" />
          <div className="relative p-10 text-center">
            <TrendingUp className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-white font-black text-2xl md:text-3xl mb-3">
              The AI revolution is just beginning.
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto mb-6">
              Whether you're a developer, researcher, business leader, or curious mind —
              understanding AI is the most important skill of the 21st century.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-xl shadow-indigo-500/30 border-none cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
