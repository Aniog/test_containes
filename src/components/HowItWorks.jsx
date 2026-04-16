const steps = [
  {
    number: '01',
    color: 'text-violet-400',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/10',
    title: 'Connect Your Data',
    description: 'Integrate your existing tools, databases, and workflows in minutes. AI Site supports 100+ integrations out of the box.',
  },
  {
    number: '02',
    color: 'text-blue-400',
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    title: 'Train Your AI',
    description: 'Our AI learns from your data and adapts to your specific use case. No machine learning expertise required.',
  },
  {
    number: '03',
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    title: 'Deploy & Scale',
    description: 'Launch your AI-powered workflows with one click. Scale from prototype to production seamlessly as your needs grow.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#07091a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 block">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Up and running in{' '}
            <span className="gradient-text">three simple steps</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No complex setup. No steep learning curve. Just powerful AI that works for you from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px bg-gradient-to-r from-violet-500/30 via-blue-500/30 to-emerald-500/30" />

          {steps.map(({ number, color, border, bg, title, description }) => (
            <div key={number} className="flex flex-col items-center text-center relative">
              <div className={`w-24 h-24 rounded-2xl ${bg} border ${border} flex items-center justify-center mb-6 relative z-10`}>
                <span className={`text-3xl font-black ${color}`}>{number}</span>
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
