import { AlertTriangle, XCircle, Clock, DollarSign, ShieldAlert, HelpCircle } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const problems = [
  {
    icon: XCircle,
    title: 'Unreliable Suppliers',
    description: 'Suppliers who disappear after receiving deposits, deliver inconsistent quality, or misrepresent their capabilities.',
  },
  {
    icon: ShieldAlert,
    title: 'Quality Issues',
    description: 'Products that don\'t match samples, fail safety standards, or have high defect rates that erode your margins.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    description: 'Missed deadlines, poor communication, and lack of visibility into production progress.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Unexpected fees, price changes after ordering, and costly rework or returns due to quality problems.',
  },
  {
    icon: AlertTriangle,
    title: 'Communication Barriers',
    description: 'Language gaps, time zone differences, and cultural misunderstandings that lead to wrong specifications.',
  },
  {
    icon: HelpCircle,
    title: 'Compliance Risks',
    description: 'Products that fail import regulations, lack required certifications, or face customs holds.',
  },
]

export default function ProblemsWeSolve() {
  return (
    <section className="py-16 md:py-24 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Problems We Solve"
          title="Common Sourcing Challenges, Solved"
          description="Importing from China doesn't have to be risky. We address the issues that keep buyers up at night."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-white rounded-xl p-6 md:p-8 border border-border-gray hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{problem.title}</h3>
              <p className="text-muted-text text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
