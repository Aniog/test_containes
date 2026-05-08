import { MessageSquare, Cpu, Globe, Rocket } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Describe Your Vision',
    description: 'Tell our AI what you need — your industry, goals, and style preferences in plain language.',
  },
  {
    icon: Cpu,
    step: '02',
    title: 'AI Generates Your Site',
    description: 'Our model crafts a complete, responsive website with copy, layout, and imagery tailored to you.',
  },
  {
    icon: Globe,
    step: '03',
    title: 'Customize & Refine',
    description: 'Use our intuitive editor to tweak any element. The AI adapts in real-time to your changes.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch Instantly',
    description: 'Publish to a custom domain with one click. Your site is live, fast, and SEO-optimized.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Dashed top border */}
      <div className="absolute top-0 left-0 right-0 border-t border-dashed border-slate-200" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            From idea to live site<br />in four steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map(({ icon: Icon, step, title, description }, i) => (
            <div
              key={step}
              className={`relative p-8 bg-white ${
                i < steps.length - 1 ? 'border-r border-dashed border-slate-200' : ''
              } border-b border-dashed border-slate-200 md:border-b-0`}
            >
              {/* Step number */}
              <span className="absolute top-6 right-6 text-6xl font-black text-slate-50 select-none leading-none">
                {step}
              </span>

              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-indigo-600" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
