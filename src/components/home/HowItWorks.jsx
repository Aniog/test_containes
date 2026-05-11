import { MessageSquare, Wand2, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Describe your vision',
    description:
      'Tell NeuralBuild what you want to build. Describe your brand, goals, and style in plain language — no technical jargon needed.',
    accent: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  },
  {
    number: '02',
    icon: Wand2,
    title: 'AI crafts your site',
    description:
      'Our AI engine generates a fully structured, beautifully designed website tailored to your description — complete with copy, layout, and imagery.',
    accent: 'bg-violet-50 text-violet-600 border-violet-100',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch in one click',
    description:
      'Review, refine with natural language edits, and publish your site to a custom domain. Go live in minutes, not months.',
    accent: 'bg-sky-50 text-sky-600 border-sky-100',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Dashed top border */}
      <div className="absolute top-0 left-0 right-0 border-t-2 border-dashed border-slate-200" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-500 text-xs font-semibold mb-4">
            Simple process
          </div>
          <h2 id="how-it-works-title" className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
            From idea to live site in three steps
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            NeuralBuild removes every barrier between your vision and a professional online presence.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting dashed line (desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 border-t-2 border-dashed border-slate-200 pointer-events-none" style={{ left: '18%', right: '18%' }} />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={i}
                className="relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                {/* Step number */}
                <div className="absolute -top-3 left-8 px-2 py-0.5 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-400">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 ${step.accent}`}>
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>

                {/* Dashed corner accent */}
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-dashed border-slate-100 rounded-br-lg pointer-events-none" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
