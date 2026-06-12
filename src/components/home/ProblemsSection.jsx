import { AlertTriangle, ShieldOff, Clock, Languages, FileWarning, Truck } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'

const problems = [
  {
    icon: ShieldOff,
    problem: 'Unreliable suppliers',
    solution: 'We verify every factory on-site before recommending them to you.',
  },
  {
    icon: AlertTriangle,
    problem: 'Quality issues discovered too late',
    solution: 'Our inspectors check quality during production and before shipment.',
  },
  {
    icon: Languages,
    problem: 'Language & cultural barriers',
    solution: 'Our bilingual team handles all communication with Chinese suppliers.',
  },
  {
    icon: Clock,
    problem: 'Production delays',
    solution: 'We monitor timelines and flag risks before they become problems.',
  },
  {
    icon: FileWarning,
    problem: 'Complex export documentation',
    solution: 'We prepare and verify all shipping documents for smooth customs clearance.',
  },
  {
    icon: Truck,
    problem: 'Shipping confusion',
    solution: 'We coordinate logistics end-to-end and provide tracking updates.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Work With Us"
          title="Problems We Solve"
          subtitle="Sourcing from China comes with real challenges. Here's how we eliminate them for you."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-red-500" />
              </div>
              <p className="text-sm font-medium text-red-600 mb-1">Problem: {item.problem}</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                <span className="font-medium text-emerald-700">Solution:</span> {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
