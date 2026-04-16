import { Heart, Car, Briefcase, GraduationCap, ShoppingCart, Leaf, Film, Shield } from 'lucide-react';

const apps = [
  {
    icon: Heart,
    title: 'Healthcare',
    desc: 'AI diagnoses diseases from medical images, predicts patient outcomes, and accelerates drug discovery.',
    examples: ['Cancer detection', 'Drug discovery', 'Personalized medicine'],
    stat: '94%',
    statLabel: 'diagnostic accuracy',
    color: '#ef4444',
  },
  {
    icon: Car,
    title: 'Autonomous Vehicles',
    desc: 'Self-driving cars use AI to perceive surroundings, navigate roads, and make split-second decisions.',
    examples: ['Tesla Autopilot', 'Waymo robotaxis', 'Delivery drones'],
    stat: '40%',
    statLabel: 'fewer accidents',
    color: '#3b82f6',
  },
  {
    icon: Briefcase,
    title: 'Finance',
    desc: 'AI powers fraud detection, algorithmic trading, credit scoring, and personalized financial advice.',
    examples: ['Fraud detection', 'Algo trading', 'Risk modeling'],
    stat: '$1T+',
    statLabel: 'managed by AI',
    color: '#10b981',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'Adaptive learning platforms personalize education, identify struggling students, and automate grading.',
    examples: ['Adaptive tutoring', 'Auto-grading', 'Learning analytics'],
    stat: '30%',
    statLabel: 'better outcomes',
    color: '#f59e0b',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    desc: 'Recommendation engines, dynamic pricing, and demand forecasting drive billions in revenue.',
    examples: ['Product recommendations', 'Dynamic pricing', 'Inventory AI'],
    stat: '35%',
    statLabel: 'revenue from AI recs',
    color: '#a855f7',
  },
  {
    icon: Leaf,
    title: 'Climate & Environment',
    desc: 'AI optimizes energy grids, predicts extreme weather, and monitors deforestation from satellite data.',
    examples: ['Energy optimization', 'Weather prediction', 'Carbon tracking'],
    stat: '20%',
    statLabel: 'energy savings',
    color: '#22c55e',
  },
  {
    icon: Film,
    title: 'Entertainment',
    desc: 'AI generates music, scripts, and visual effects — and powers the recommendation algorithms we rely on.',
    examples: ['Content generation', 'VFX automation', 'Personalized feeds'],
    stat: '80%',
    statLabel: 'of Netflix views via AI',
    color: '#ec4899',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    desc: 'AI detects threats in real-time, identifies anomalies, and responds to attacks faster than humans.',
    examples: ['Threat detection', 'Zero-day defense', 'Behavioral analysis'],
    stat: '3x',
    statLabel: 'faster threat response',
    color: '#06b6d4',
  },
];

export default function Applications() {
  return (
    <section id="applications" className="py-24 px-6 bg-[#05050f]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">Real World</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            AI in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Artificial intelligence is no longer science fiction — it's transforming every industry on the planet.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {apps.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={app.title}
                className="glass-card card-hover rounded-2xl p-6 group"
              >
                {/* Icon + Stat */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${app.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: app.color }} />
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black" style={{ color: app.color }}>{app.stat}</div>
                    <div className="text-slate-600 text-xs">{app.statLabel}</div>
                  </div>
                </div>

                <h3 className="text-white font-bold text-base mb-2">{app.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{app.desc}</p>

                {/* Examples */}
                <div className="space-y-1.5">
                  {app.examples.map((ex) => (
                    <div key={ex} className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-1 h-1 rounded-full" style={{ background: app.color }} />
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
