import { Brain, Zap, Shield, BarChart3, MessageSquare, Code2 } from 'lucide-react';

const features = [
  {
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    glow: 'group-hover:shadow-violet-500/20',
    title: 'Intelligent Automation',
    description: 'Let AI handle repetitive tasks so your team can focus on what truly matters. Smart workflows that learn and improve over time.',
  },
  {
    icon: MessageSquare,
    color: 'from-blue-500 to-cyan-600',
    glow: 'group-hover:shadow-blue-500/20',
    title: 'Natural Language Processing',
    description: 'Communicate with your data in plain English. Ask questions, get summaries, and generate reports without writing a single line of code.',
  },
  {
    icon: Code2,
    color: 'from-emerald-500 to-teal-600',
    glow: 'group-hover:shadow-emerald-500/20',
    title: 'AI Code Assistant',
    description: 'Write, debug, and optimize code faster than ever. Our AI understands context and suggests the best solutions for your codebase.',
  },
  {
    icon: BarChart3,
    color: 'from-orange-500 to-amber-600',
    glow: 'group-hover:shadow-orange-500/20',
    title: 'Predictive Analytics',
    description: 'Turn raw data into actionable insights. Forecast trends, identify patterns, and make data-driven decisions with confidence.',
  },
  {
    icon: Zap,
    color: 'from-pink-500 to-rose-600',
    glow: 'group-hover:shadow-pink-500/20',
    title: 'Real-Time Processing',
    description: 'Process millions of data points in milliseconds. Our infrastructure scales automatically to meet your demands.',
  },
  {
    icon: Shield,
    color: 'from-indigo-500 to-blue-700',
    glow: 'group-hover:shadow-indigo-500/20',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance built in. Your data stays private, secure, and fully under your control at all times.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-[#050816] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Everything you need to{' '}
            <span className="gradient-text">build with AI</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A complete suite of AI-powered tools designed to supercharge your productivity and transform your workflow.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, color, glow, title, description }) => (
            <div
              key={title}
              className={`group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-white/15 transition-all duration-300 card-glow cursor-default hover:shadow-xl ${glow}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
