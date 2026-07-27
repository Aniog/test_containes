import React from 'react'
import { AlertTriangle, EyeOff, ThumbsDown, Truck, DollarSign, Clock } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unverified Suppliers',
    desc: 'Many online supplier listings are trading companies posing as factories, with no real production capability.',
    solution: 'We conduct on-site factory audits to verify legitimacy, capacity, and quality systems.',
  },
  {
    icon: ThumbsDown,
    title: 'Quality Failures',
    desc: 'Products that don\'t match samples or specifications, leading to returns, refunds, and damaged reputation.',
    solution: 'Our multi-stage inspection process catches quality issues before shipment.',
  },
  {
    icon: EyeOff,
    title: 'Communication Barriers',
    desc: 'Language gaps, cultural misunderstandings, and time zone differences cause costly miscommunication.',
    solution: 'Our bilingual team bridges the gap between you and the factory with clear, timely updates.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    desc: 'Late deliveries, missed deadlines, and lack of transparency on production progress.',
    solution: 'We follow production closely and provide regular status updates to keep your timeline on track.',
  },
  {
    icon: Truck,
    title: 'Shipping Complications',
    desc: 'Complex customs requirements, documentation errors, and logistics coordination challenges.',
    solution: 'We handle freight booking, customs paperwork, and end-to-end shipping coordination.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs & Overpricing',
    desc: 'Unexpected fees, inflated quotes, and lack of price transparency from middlemen.',
    solution: 'We negotiate directly with factories and provide transparent cost breakdowns.',
  },
]

export default function ProblemsWeSolve() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Problems We Solve
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Sourcing from China comes with real challenges. Here is how we help you overcome them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-white/10 border border-white/20 rounded-lg p-6 md:p-8"
            >
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
              <p className="text-white/70 text-sm mb-3 leading-relaxed">{problem.desc}</p>
              <p className="text-accent text-sm font-medium leading-relaxed">
                Solution: {problem.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
