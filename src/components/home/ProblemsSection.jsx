import React from 'react'
import { AlertTriangle, XCircle, HelpCircle, Clock, DollarSign, ShieldAlert } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'Difficulty finding manufacturers who deliver on time and meet quality standards.',
  },
  {
    icon: XCircle,
    title: 'Quality Issues',
    description: 'Products that do not match samples or specifications, leading to returns and lost revenue.',
  },
  {
    icon: HelpCircle,
    title: 'Communication Barriers',
    description: 'Language differences and time zones that slow down negotiations and problem resolution.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    description: 'Lack of visibility into manufacturing progress and no one on the ground to follow up.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Unexpected fees, shipping complications, and customs issues that inflate your budget.',
  },
  {
    icon: ShieldAlert,
    title: 'Fraud Risk',
    description: 'Trading companies posing as factories, fake certifications, and counterfeit products.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="section-padding bg-[#f5f7fa]">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#1a2744] mb-4">
            Problems We Solve
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto text-base md:text-lg">
            Sourcing from China comes with challenges. We handle them so you do not have to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#e53e3e]/10 rounded-lg flex items-center justify-center">
                <problem.icon size={20} className="text-[#e53e3e]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#1a2744] mb-2">{problem.title}</h3>
                <p className="text-[#4a5568] text-sm leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
