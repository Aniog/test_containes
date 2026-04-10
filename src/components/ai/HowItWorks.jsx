import { Database, Cpu, Network, BarChart2 } from 'lucide-react';

const steps = [
  {
    icon: Database,
    title: 'Data Collection',
    description:
      'AI systems learn from massive datasets — text, images, audio, and more — gathered from the real world.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
  {
    icon: Cpu,
    title: 'Model Training',
    description:
      'Neural networks process data through layers of computation, adjusting billions of parameters to find patterns.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  {
    icon: Network,
    title: 'Deep Learning',
    description:
      'Multi-layered architectures like transformers enable AI to understand context, nuance, and complex relationships.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: BarChart2,
    title: 'Inference & Output',
    description:
      'Trained models generate predictions, text, images, or decisions in milliseconds when given new inputs.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="bg-[#07071a] py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          How AI <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Works</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Behind every intelligent system is a pipeline of data, computation, and learning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map(({ icon: Icon, title, description, color, bg, border }, i) => (
          <div
            key={title}
            className={`relative rounded-2xl border ${border} ${bg} p-6 flex flex-col gap-4`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Step {i + 1}</span>
            </div>
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
