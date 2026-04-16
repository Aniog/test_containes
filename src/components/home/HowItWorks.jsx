import { MessageSquare, Wand2, Globe, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Describe your vision',
    description: 'Tell ArcaneAI what you need in plain language — your industry, goals, and style preferences.',
  },
  {
    icon: Wand2,
    step: '02',
    title: 'AI designs & builds',
    description: 'Our model generates a complete site structure, copy, and layout tailored to your brand in seconds.',
  },
  {
    icon: Globe,
    step: '03',
    title: 'Customize & refine',
    description: 'Use our visual editor to tweak colors, fonts, and content until every detail is exactly right.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Publish instantly',
    description: 'Go live with one click. Your site is hosted on a global CDN with SSL and custom domain support.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Process</p>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">How it works</h2>
          <p className="text-slate-500 mt-4 max-w-md mx-auto">
            From idea to live website in four simple steps — powered entirely by AI.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.step} className="relative group">
              {/* Connector dashed line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full border-t border-dashed border-slate-300 z-0" style={{ width: 'calc(100% - 2rem)', left: 'calc(50% + 2rem)' }} />
              )}

              <div className="relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 z-10">
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-slate-100">{step.step}</span>
                </div>

                <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>

                {/* Bottom dashed accent */}
                <div className="mt-6 border-t border-dashed border-slate-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
