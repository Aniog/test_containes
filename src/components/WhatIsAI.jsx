import { Cpu, Network, Eye, MessageSquare } from 'lucide-react';

const cards = [
  {
    icon: Cpu,
    title: 'Machine Learning',
    description:
      'Algorithms that learn from data to make predictions and decisions without being explicitly programmed for each task.',
    color: 'indigo',
  },
  {
    icon: Network,
    title: 'Neural Networks',
    description:
      'Computational models inspired by the human brain, consisting of layers of interconnected nodes that process information.',
    color: 'violet',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description:
      'Enabling machines to interpret and understand visual information from the world — images, video, and real-time feeds.',
    color: 'cyan',
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description:
      'Teaching computers to understand, interpret, and generate human language in a meaningful and useful way.',
    color: 'emerald',
  },
];

const colorMap = {
  indigo: {
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    icon: 'text-indigo-400',
    hover: 'hover:border-indigo-500/50',
  },
  violet: {
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    icon: 'text-violet-400',
    hover: 'hover:border-violet-500/50',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    icon: 'text-cyan-400',
    hover: 'hover:border-cyan-500/50',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    icon: 'text-emerald-400',
    hover: 'hover:border-emerald-500/50',
  },
};

const WhatIsAI = () => {
  return (
    <section id="what-is-ai" className="py-24 bg-[#080c1a] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            Understanding AI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            What Is Artificial Intelligence?
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Artificial Intelligence is the simulation of human intelligence processes by computer
            systems. It encompasses a broad range of techniques that allow machines to perceive,
            reason, learn, and act.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map(({ icon: Icon, title, description, color }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className={`p-6 rounded-2xl border ${c.border} ${c.hover} bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] group`}
              >
                <div className={`inline-flex p-3 rounded-xl ${c.bg} mb-4`}>
                  <Icon className={`w-6 h-6 ${c.icon}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-slate-400 leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIsAI;
