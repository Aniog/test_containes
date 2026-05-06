import { MessageSquare, Wand2, Globe, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Describe Your Vision',
    description: 'Tell AetherAI what you want to build in plain language. Be as detailed or as brief as you like.',
  },
  {
    number: '02',
    icon: Wand2,
    title: 'AI Generates Your Site',
    description: 'Our model crafts a complete, responsive website with copy, layout, and design — in under 60 seconds.',
  },
  {
    number: '03',
    icon: Globe,
    title: 'Customize & Refine',
    description: 'Use our visual editor to tweak colors, fonts, and content. Every element is fully editable.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Publish Instantly',
    description: 'Go live with one click. Your site is hosted on our global CDN with SSL included.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-32 px-6 relative">
      {/* Dashed vertical line decoration */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-white/10 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Process</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            How it works
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">
            From idea to live website in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={i}
                className="bg-black p-8 group hover:bg-white/[0.03] transition-colors relative"
              >
                {/* Dashed top border accent */}
                <div className="absolute top-0 left-8 right-8 h-px border-t border-dashed border-white/10" />

                <span className="text-white/10 text-5xl font-bold tabular-nums block mb-6">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center mb-5 group-hover:border-white/20 transition-colors">
                  <Icon className="w-5 h-5 text-white/60" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
