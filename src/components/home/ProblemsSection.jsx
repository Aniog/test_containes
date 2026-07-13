import { XCircle, CheckCircle2 } from 'lucide-react'
import SectionLabel from '@/components/shared/SectionLabel'

const problems = [
  'Suppliers stop responding after receiving payment',
  'Product quality does not match the sample',
  'Production delays without clear communication',
  'Hidden costs for tooling, packaging, or shipping',
  'Difficulty verifying factory credentials remotely',
  'Language barriers and unclear contract terms',
]

const solutions = [
  'Face-to-face supplier screening and verification',
  'Pre-shipment and inline inspections with photos and reports',
  'Weekly production updates and milestone tracking',
  'Transparent quotations and cost breakdowns',
  'On-site factory audits with license and capacity checks',
  'Bilingual contract review and negotiation support',
]

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <SectionLabel className="text-blue-400">Why Buyers Choose Us</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Sourcing Risks We Help You Avoid
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Buying directly from China can be risky. Our local team reduces those risks before they become costly problems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 md:p-8">
            <h3 className="text-lg font-semibold text-slate-100 mb-6">Common sourcing problems</h3>
            <ul className="space-y-4">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 shrink-0 text-red-400 mt-0.5" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 md:p-8">
            <h3 className="text-lg font-semibold text-slate-100 mb-6">How SSourcing China helps</h3>
            <ul className="space-y-4">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-400 mt-0.5" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
