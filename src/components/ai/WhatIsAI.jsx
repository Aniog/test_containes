import { Brain, Cpu, Network, Eye } from 'lucide-react';

const pillars = [
  {
    icon: Brain,
    title: 'Learning',
    desc: 'AI systems learn from data, improving performance over time without explicit programming.',
    color: 'from-indigo-500 to-indigo-700',
    glow: 'shadow-indigo-500/20',
  },
  {
    icon: Network,
    title: 'Reasoning',
    desc: 'Drawing logical conclusions, solving complex problems, and making informed decisions.',
    color: 'from-purple-500 to-purple-700',
    glow: 'shadow-purple-500/20',
  },
  {
    icon: Eye,
    title: 'Perception',
    desc: 'Understanding images, speech, and text — interpreting the world like humans do.',
    color: 'from-cyan-500 to-cyan-700',
    glow: 'shadow-cyan-500/20',
  },
  {
    icon: Cpu,
    title: 'Adaptation',
    desc: 'Continuously evolving to handle new scenarios, environments, and challenges.',
    color: 'from-pink-500 to-pink-700',
    glow: 'shadow-pink-500/20',
  },
];

export default function WhatIsAI() {
  return (
    <section id="what-is-ai" className="py-24 px-6 section-bg-alt">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Foundation</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            What is <span className="gradient-text">Artificial Intelligence?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Artificial Intelligence is the simulation of human intelligence processes by computer systems.
            It encompasses the ability to learn, reason, perceive, and adapt — enabling machines to perform
            tasks that traditionally required human cognition.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-72 h-72">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-purple-500/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
              <div className="absolute inset-8 rounded-full border border-cyan-500/20 animate-spin-slow" style={{ animationDuration: '10s' }} />

              {/* Center brain */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center shadow-2xl shadow-indigo-500/40 animate-pulse-glow">
                  <Brain className="w-14 h-14 text-white" />
                </div>
              </div>

              {/* Orbiting dots */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: i % 2 === 0 ? '#6366f1' : '#a855f7',
                    top: `${50 - 45 * Math.cos((deg * Math.PI) / 180)}%`,
                    left: `${50 + 45 * Math.sin((deg * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                    boxShadow: `0 0 8px ${i % 2 === 0 ? '#6366f1' : '#a855f7'}`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-3">Narrow AI (ANI)</h3>
              <p className="text-slate-400 leading-relaxed">
                Today's AI — specialized systems that excel at specific tasks like image recognition,
                language translation, or playing chess. This is what powers your daily apps.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-3">General AI (AGI)</h3>
              <p className="text-slate-400 leading-relaxed">
                The next frontier — AI with human-level reasoning across any domain.
                Researchers are actively working toward this milestone.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-3">Super AI (ASI)</h3>
              <p className="text-slate-400 leading-relaxed">
                A theoretical future where AI surpasses human intelligence in every dimension —
                the subject of both excitement and careful ethical debate.
              </p>
            </div>
          </div>
        </div>

        {/* Four Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pillars.map(({ icon: Icon, title, desc, color, glow }) => (
            <div key={title} className={`glass-card card-hover rounded-2xl p-6 text-center shadow-xl ${glow}`}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-bold text-base mb-2">{title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
