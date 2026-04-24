const steps = [
  {
    number: '01',
    title: 'Describe your vision',
    description: 'Tell Arcis what your business does, your goals, and your audience. Our AI understands context, not just keywords.',
    detail: 'Natural language input',
  },
  {
    number: '02',
    title: 'AI generates your site',
    description: 'In under a minute, Arcis builds a fully structured, SEO-optimized website tailored to your brand and industry.',
    detail: 'Under 60 seconds',
  },
  {
    number: '03',
    title: 'Refine with intelligence',
    description: 'Use our visual editor or chat with the AI to adjust layouts, copy, and design — no code required.',
    detail: 'Zero-code editing',
  },
  {
    number: '04',
    title: 'Launch and optimize',
    description: 'Deploy instantly. Arcis continuously monitors performance and suggests improvements based on real visitor data.',
    detail: 'Continuous improvement',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Dashed border decoration */}
      <div className="absolute top-0 left-0 right-0 border-t border-dashed border-gray-300" />
      <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-300" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">How it works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            From idea to live site
            <br />in four steps
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative p-8 border border-dashed border-gray-300 ${
                i > 0 ? 'md:-ml-px' : ''
              } hover:bg-white transition-colors group`}
            >
              {/* Step number */}
              <div className="text-5xl font-black text-gray-100 group-hover:text-indigo-50 transition-colors mb-6 leading-none">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{step.description}</p>
              <span className="inline-block text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                {step.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
