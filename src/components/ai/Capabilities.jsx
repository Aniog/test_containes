import { useState } from 'react';
import { Brain, MessageSquare, Eye, Mic, Code2, BarChart3, Shield, Gamepad2 } from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: 'Machine Learning',
    tag: 'Core',
    desc: 'Algorithms that learn patterns from data to make predictions and decisions without being explicitly programmed.',
    features: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning'],
    color: '#6366f1',
    bg: 'from-indigo-500/10 to-indigo-600/5',
    border: 'border-indigo-500/20 hover:border-indigo-500/50',
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    tag: 'Language',
    desc: 'Understanding, interpreting, and generating human language — powering chatbots, translators, and text analysis.',
    features: ['Text Generation', 'Sentiment Analysis', 'Translation'],
    color: '#a855f7',
    bg: 'from-purple-500/10 to-purple-600/5',
    border: 'border-purple-500/20 hover:border-purple-500/50',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    tag: 'Vision',
    desc: 'Enabling machines to interpret and understand visual information from images and video.',
    features: ['Object Detection', 'Facial Recognition', 'Medical Imaging'],
    color: '#06b6d4',
    bg: 'from-cyan-500/10 to-cyan-600/5',
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
  },
  {
    icon: Mic,
    title: 'Speech Recognition',
    tag: 'Audio',
    desc: 'Converting spoken language into text and understanding voice commands with high accuracy.',
    features: ['Voice Assistants', 'Transcription', 'Speaker ID'],
    color: '#f59e0b',
    bg: 'from-amber-500/10 to-amber-600/5',
    border: 'border-amber-500/20 hover:border-amber-500/50',
  },
  {
    icon: Code2,
    title: 'Generative AI',
    tag: 'Creative',
    desc: 'Creating new content — text, images, music, and code — that is indistinguishable from human-made work.',
    features: ['Image Generation', 'Code Synthesis', 'Content Creation'],
    color: '#ec4899',
    bg: 'from-pink-500/10 to-pink-600/5',
    border: 'border-pink-500/20 hover:border-pink-500/50',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    tag: 'Data',
    desc: 'Forecasting future outcomes by analyzing historical data patterns and trends.',
    features: ['Demand Forecasting', 'Risk Assessment', 'Anomaly Detection'],
    color: '#10b981',
    bg: 'from-emerald-500/10 to-emerald-600/5',
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
  },
  {
    icon: Shield,
    title: 'AI Safety & Ethics',
    tag: 'Ethics',
    desc: 'Ensuring AI systems are fair, transparent, and aligned with human values and societal norms.',
    features: ['Bias Detection', 'Explainability', 'Alignment Research'],
    color: '#f97316',
    bg: 'from-orange-500/10 to-orange-600/5',
    border: 'border-orange-500/20 hover:border-orange-500/50',
  },
  {
    icon: Gamepad2,
    title: 'Robotics & Automation',
    tag: 'Physical',
    desc: 'Combining AI with physical systems to automate tasks in manufacturing, logistics, and beyond.',
    features: ['Autonomous Vehicles', 'Industrial Robots', 'Drones'],
    color: '#8b5cf6',
    bg: 'from-violet-500/10 to-violet-600/5',
    border: 'border-violet-500/20 hover:border-violet-500/50',
  },
];

export default function Capabilities() {
  const [active, setActive] = useState(null);

  return (
    <section id="capabilities" className="py-24 px-6 bg-[#05050f]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Technology</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            Core <span className="gradient-text">AI Capabilities</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The building blocks of modern AI — each domain pushing the boundaries of what machines can do.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            const isActive = active === cap.title;
            return (
              <div
                key={cap.title}
                className={`relative rounded-2xl p-6 border bg-gradient-to-br ${cap.bg} ${cap.border} card-hover cursor-pointer transition-all duration-300`}
                onClick={() => setActive(isActive ? null : cap.title)}
              >
                {/* Tag */}
                <span
                  className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: `${cap.color}20`, color: cap.color }}
                >
                  {cap.tag}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${cap.color}20`, boxShadow: `0 0 20px ${cap.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: cap.color }} />
                </div>

                <h3 className="text-white font-bold text-base mb-2">{cap.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{cap.desc}</p>

                {/* Features */}
                <div className={`space-y-1 overflow-hidden transition-all duration-300 ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {cap.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: cap.color }} />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="mt-3 text-xs font-medium" style={{ color: cap.color }}>
                  {isActive ? 'Show less ↑' : 'See examples ↓'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
