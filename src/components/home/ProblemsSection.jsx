import { AlertTriangle, Globe, Shield, Clock, DollarSign, Languages } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const problems = [
  {
    icon: Globe,
    problem: 'No access to reliable Chinese suppliers',
    solution: 'Our verified network of 2,000+ factories covers all major manufacturing regions in China.',
  },
  {
    icon: AlertTriangle,
    problem: 'Risk of receiving substandard products',
    solution: 'Multi-stage quality inspections using AQL standards at every production milestone.',
  },
  {
    icon: Languages,
    problem: 'Language and cultural barriers',
    solution: 'Bilingual team that speaks your language and understands Chinese business culture.',
  },
  {
    icon: Clock,
    problem: 'Production delays and missed deadlines',
    solution: 'Weekly progress tracking with proactive escalation when schedules slip.',
  },
  {
    icon: DollarSign,
    problem: 'Hidden costs and price inflation',
    solution: 'Transparent pricing with factory-direct quotes and detailed cost breakdowns.',
  },
  {
    icon: Shield,
    problem: 'IP and payment security concerns',
    solution: 'NDAs, secure payment channels, and verified factory credentials protect your business.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Us"
          title="Problems We Solve"
          description="Importing from China comes with real challenges. Here is how we address them."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {problems.map((item) => (
            <div key={item.problem} className="bg-white rounded-xl p-6 border border-neutral-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900 leading-snug pt-1.5">{item.problem}</h3>
              </div>
              <div className="ml-14">
                <p className="text-sm text-neutral-500 leading-relaxed">
                  <span className="font-medium text-primary">Our solution:</span> {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
