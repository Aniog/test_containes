import { AlertTriangle, DollarSign, Clock, ShieldOff, FileX } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    desc: 'Finding trustworthy suppliers online is risky. Many listings are trading companies, not real factories. We verify every supplier on-site.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs & Overpricing',
    desc: 'Without local knowledge, you may pay more than necessary. We negotiate on your behalf with transparent pricing and no hidden fees.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    desc: 'Delays happen without proper follow-up. We track production schedules, visit factories, and address issues before they become problems.',
  },
  {
    icon: ShieldOff,
    title: 'Quality Failures',
    desc: "Receiving goods that don't meet specs is costly. Our AQL-based inspections catch quality issues before shipment.",
  },
  {
    icon: FileX,
    title: 'Complex Shipping & Customs',
    desc: 'International logistics can be confusing. We handle freight booking, customs paperwork, and door-to-door coordination.',
  },
]

export default function ProblemsWeSolve() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Problems We Solve"
          title="Common Sourcing Challenges We Address"
          subtitle="Buying from China without local support creates real risks. Here's what we help you avoid."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((p) => (
            <div key={p.title} className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-base font-semibold text-navy-600 mb-2">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
