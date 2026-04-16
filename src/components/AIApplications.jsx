import { Stethoscope, Car, Landmark, Gamepad2, ShoppingCart, Shield } from 'lucide-react';

const applications = [
  {
    icon: Stethoscope,
    title: 'Healthcare',
    description: 'AI diagnoses diseases from medical images, accelerates drug discovery, and personalizes treatment plans with unprecedented accuracy.',
    tag: 'Life Sciences',
    color: 'rose',
  },
  {
    icon: Car,
    title: 'Autonomous Vehicles',
    description: 'Self-driving cars use computer vision and deep learning to navigate roads, detect obstacles, and make real-time decisions.',
    tag: 'Transportation',
    color: 'amber',
  },
  {
    icon: Landmark,
    title: 'Finance',
    description: 'Fraud detection, algorithmic trading, credit scoring, and personalized financial advice powered by intelligent systems.',
    tag: 'FinTech',
    color: 'emerald',
  },
  {
    icon: Gamepad2,
    title: 'Entertainment',
    description: 'Recommendation engines, AI-generated content, game characters with adaptive behavior, and immersive virtual experiences.',
    tag: 'Media & Gaming',
    color: 'violet',
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-Commerce',
    description: 'Personalized shopping experiences, demand forecasting, inventory optimization, and intelligent customer service chatbots.',
    tag: 'Commerce',
    color: 'cyan',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'AI detects threats in real time, identifies anomalies in network traffic, and responds to attacks faster than any human team.',
    tag: 'Security',
    color: 'indigo',
  },
];

const colorMap = {
  rose: { bg: 'bg-rose-500/10', icon: 'text-rose-400', tag: 'bg-rose-500/10 text-rose-300' },
  amber: { bg: 'bg-amber-500/10', icon: 'text-amber-400', tag: 'bg-amber-500/10 text-amber-300' },
  emerald: { bg: 'bg-emerald-500/10', icon: 'text-emerald-400', tag: 'bg-emerald-500/10 text-emerald-300' },
  violet: { bg: 'bg-violet-500/10', icon: 'text-violet-400', tag: 'bg-violet-500/10 text-violet-300' },
  cyan: { bg: 'bg-cyan-500/10', icon: 'text-cyan-400', tag: 'bg-cyan-500/10 text-cyan-300' },
  indigo: { bg: 'bg-indigo-500/10', icon: 'text-indigo-400', tag: 'bg-indigo-500/10 text-indigo-300' },
};

const AIApplications = () => {
  return (
    <section id="applications" className="py-24 bg-[#050816] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            Real-World Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            AI Applications
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Artificial Intelligence is transforming every industry, solving complex problems
            and creating new possibilities across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map(({ icon: Icon, title, description, tag, color }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-xl ${c.bg}`}>
                    <Icon className={`w-6 h-6 ${c.icon}`} />
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${c.tag}`}>
                    {tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIApplications;
