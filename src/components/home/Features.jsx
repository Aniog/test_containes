import { Brain, Zap, Shield, Globe, BarChart2, Layers } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Neural Networks',
    description: 'Inspired by the human brain, neural networks learn patterns from vast amounts of data to make intelligent decisions.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    description: 'AI systems process and analyze data at lightning speed, enabling instant responses and live decision-making.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
  },
  {
    icon: Shield,
    title: 'Responsible AI',
    description: 'Modern AI is built with ethics, fairness, and transparency at its core to ensure safe and trustworthy outcomes.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'From healthcare to climate science, AI is solving humanity\'s most complex challenges at a global scale.',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
  },
  {
    icon: BarChart2,
    title: 'Predictive Analytics',
    description: 'Leverage historical data to forecast trends, behaviors, and outcomes with remarkable accuracy.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
  {
    icon: Layers,
    title: 'Deep Learning',
    description: 'Multi-layered architectures enable AI to understand images, speech, and language at a human level.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
  },
];

const Features = () => (
  <section id="features" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3">Core Capabilities</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          What Makes AI <span className="gradient-text">Powerful</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-lg">
          Discover the key technologies and principles that drive modern artificial intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title, description, color, bg }) => (
          <div
            key={title}
            className="glass rounded-2xl p-6 hover:bg-white/10 transition-all hover:-translate-y-1 group"
          >
            <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4`}>
              <Icon className={`w-6 h-6 ${color}`} />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
