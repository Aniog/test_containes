const steps = [
  {
    number: '01',
    title: 'Connect your data',
    description: 'Integrate your existing tools, databases, and workflows in minutes with our one-click connectors.',
  },
  {
    number: '02',
    title: 'Train your AI',
    description: 'Customize the AI with your brand voice, domain knowledge, and specific business rules.',
  },
  {
    number: '03',
    title: 'Deploy instantly',
    description: 'Launch your AI-powered experience to users worldwide with a single click. No DevOps required.',
  },
  {
    number: '04',
    title: 'Iterate & improve',
    description: 'Use real-time analytics and feedback loops to continuously improve your AI performance.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Up and running in{' '}
            <span className="gradient-text">4 simple steps</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From setup to launch, AI Site makes it effortless to bring AI into your product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600/30 to-blue-600/30 border border-violet-500/30 flex items-center justify-center mb-6">
                <span className="text-2xl font-extrabold gradient-text">{step.number}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
