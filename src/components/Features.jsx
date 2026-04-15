import { Brain, Zap, Shield, BarChart3, Globe, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Smart AI Engine',
    description: 'Powered by the latest large language models to understand context and deliver precise, human-like responses.',
    color: 'from-violet-500 to-purple-600',
    glow: 'group-hover:shadow-violet-500/20',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Get results in milliseconds. Our optimized infrastructure ensures zero-latency responses at any scale.',
    color: 'from-yellow-500 to-orange-500',
    glow: 'group-hover:shadow-yellow-500/20',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SOC 2 compliance, and full data privacy controls keep your information safe.',
    color: 'from-emerald-500 to-teal-500',
    glow: 'group-hover:shadow-emerald-500/20',
  },
  {
    icon: BarChart3,
    title: 'Deep Analytics',
    description: 'Gain actionable insights from your data with AI-driven analytics dashboards and real-time reporting.',
    color: 'from-blue-500 to-cyan-500',
    glow: 'group-hover:shadow-blue-500/20',
  },
  {
    icon: Globe,
    title: 'Multi-language',
    description: 'Communicate in 50+ languages. AI Site breaks language barriers for truly global reach.',
    color: 'from-pink-500 to-rose-500',
    glow: 'group-hover:shadow-pink-500/20',
  },
  {
    icon: Sparkles,
    title: 'Auto-generation',
    description: 'Generate content, code, images, and more with a single prompt. Creativity meets automation.',
    color: 'from-indigo-500 to-violet-500',
    glow: 'group-hover:shadow-indigo-500/20',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Everything you need to{' '}
            <span className="gradient-text">build with AI</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A complete suite of AI tools designed to supercharge your workflow and unlock new possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] rounded-2xl p-7 transition-all duration-300 card-glow cursor-default`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
