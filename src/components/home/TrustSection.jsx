import { Users, MapPin, Award, Clock } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'

const stats = [
  { icon: Users, value: '500+', label: 'Global Clients Served' },
  { icon: MapPin, value: '1,200+', label: 'Factories Verified' },
  { icon: Award, value: '98%', label: 'Order Success Rate' },
  { icon: Clock, value: '10+', label: 'Years of Experience' },
]

const trustPoints = [
  'On-the-ground team in major manufacturing hubs',
  'Transparent pricing with no hidden commissions',
  'Detailed photo and video reports at every stage',
  'Direct communication — no middlemen',
  'Flexible service packages for any order size',
  'NDA and contract protection available',
]

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Trust & Track Record"
          title="Why Buyers Choose SSourcing China"
          subtitle="We earn trust through transparency, results, and consistent communication."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-slate-50 rounded-xl border border-slate-100">
              <stat.icon className="w-8 h-8 text-accent-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-navy-900">{stat.value}</p>
              <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-navy-900 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-6">What Sets Us Apart</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
