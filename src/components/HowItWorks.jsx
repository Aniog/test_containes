const steps = [
  {
    number: '01',
    title: 'Describe Your Vision',
    description:
      'Tell AI Site about your business, goals, and style preferences. Our AI asks the right questions to understand exactly what you need.',
  },
  {
    number: '02',
    title: 'AI Builds Your Site',
    description:
      'Within seconds, AI Site generates a fully designed website complete with pages, content, images, and SEO — ready to publish.',
  },
  {
    number: '03',
    title: 'Customize & Refine',
    description:
      'Use our intuitive editor to tweak colors, fonts, and content. The AI suggests improvements as you go.',
  },
  {
    number: '04',
    title: 'Launch & Grow',
    description:
      'Publish with one click. AI Site continuously monitors performance and suggests optimizations to keep you ahead.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            From idea to live site in minutes
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No design skills, no coding, no hassle. Just describe what you want and watch AI Site do the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600/30 to-indigo-600/30 border border-violet-500/30 flex items-center justify-center">
                  <span className="text-violet-300 font-bold text-lg">{step.number}</span>
                </div>
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:block w-px h-full bg-gradient-to-b from-violet-500/30 to-transparent mx-auto mt-2" />
                )}
              </div>
              <div className="pt-2">
                <h3 className="text-white font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
