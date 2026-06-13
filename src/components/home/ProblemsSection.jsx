import { AlertTriangle, XCircle, ShieldCheck, CheckCircle } from 'lucide-react'

const problems = [
  'You can not tell if a factory is real or a trading company.',
  'Language barriers make communication frustrating and slow.',
  'Samples look great, but bulk orders come back defective.',
  'Production timelines stretch without warning or transparency.',
  'Hidden fees and surprise costs eat into your margins.',
]

const solutions = [
  'On-site factory audits with full legal and production verification.',
  'Bilingual sourcing team: English + Mandarin, daily reporting.',
  'Pre-shipment inspection with defect reports and AQL sampling.',
  'Weekly production milestone tracking with photo updates.',
  'Transparent, itemized cost breakdowns. No hidden fees.',
]

export default function ProblemsSection() {
  return (
    <section className="py-20 md:py-24 bg-[#1A365D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-[#C27A3E]/20 text-[#F5EDE3] text-xs font-medium tracking-wider uppercase rounded-full mb-4">
            Problems We Solve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The China Sourcing Challenge</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Sourcing from China on your own is risky. Here is what typically goes wrong and how we fix it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Problems */}
          <div className="bg-[#0F2240] rounded-xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-semibold text-white">Without a Sourcing Agent</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-[#0F2240] rounded-xl p-8 border border-[#C27A3E]/30">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-5 h-5 text-[#C27A3E]" />
              <h3 className="text-lg font-semibold text-white">With SSourcing China</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
