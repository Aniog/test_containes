import { MessageSquare, Palette, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Describe Your Vision',
    description: 'Tell our AI what kind of site you want — your industry, goals, and style preferences. No technical knowledge needed.',
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    number: '02',
    icon: Palette,
    title: 'AI Builds & Designs',
    description: 'Our AI generates a fully designed, content-rich website tailored to your brand in under 60 seconds.',
    gradient: 'from-fuchsia-500 to-cyan-500',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Grow',
    description: 'Publish with one click, then let AI continuously optimize your site for SEO, speed, and conversions.',
    gradient: 'from-cyan-500 to-emerald-500',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-[#07091a] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            From idea to live site{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              in minutes
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three simple steps are all it takes to go from a blank page to a fully optimized, AI-powered website.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-violet-500/50 via-cyan-500/50 to-emerald-500/50" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center text-center">
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-xl`}>
                    <Icon className="w-7 h-7 text-white" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#07091a] border border-white/20 text-white text-xs font-bold flex items-center justify-center">
                      {step.number.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
