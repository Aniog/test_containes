import { AlertTriangle, DollarSign, Clock, Languages, ShieldX, Ban } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unknown Supplier Reliability',
    desc: 'Scammers and middlemen pose as manufacturers. We verify business licenses, factory ownership, and trade history.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs & Overpricing',
    desc: 'Without local knowledge, you pay inflated prices. We negotiate factory-direct rates in Mandarin with market benchmarks.',
  },
  {
    icon: Clock,
    title: 'Missed Deadlines',
    desc: 'Delayed production disrupts your business. We track milestones weekly and escalate issues before they become delays.',
  },
  {
    icon: ShieldX,
    title: 'Quality Defects',
    desc: 'Substandard goods damage your brand. Our inspectors enforce your specifications using AQL sampling standards.',
  },
  {
    icon: Languages,
    title: 'Communication Barriers',
    desc: 'Language gaps cause misunderstandings. Our bilingual team bridges the gap with clear technical communication.',
  },
  {
    icon: Ban,
    title: 'IP Protection Risks',
    desc: 'Intellectual property theft is a real concern. We implement NDAs, split production, and enforce IP safeguards.',
  },
]

export default function HomeProblems() {
  return (
    <section className="py-16 md:py-24 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-wide mb-3">Problems We Solve</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            The Risks of Sourcing from China — Solved
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            We've seen it all. Here's how we protect your interests at every step.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob) => (
            <div
              key={prob.title}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gold-500/15 flex items-center justify-center mb-4">
                <prob.icon className="w-5 h-5 text-gold-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{prob.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{prob.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
