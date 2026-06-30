import React from 'react'
import { AlertTriangle, CheckCircle } from 'lucide-react'

const problems = [
  {
    problem: 'Finding genuinely reliable suppliers among thousands of options.',
    solution: 'We pre-screen and verify suppliers through on-site factory audits and background checks.',
  },
  {
    problem: 'Worrying about product quality not matching samples.',
    solution: 'Multiple inspection checkpoints during production and pre-shipment quality control.',
  },
  {
    problem: 'Communication barriers and time zone differences with Chinese suppliers.',
    solution: 'Our bilingual team manages all communication, reporting to you in clear English.',
  },
  {
    problem: 'Risk of intellectual property theft or design copying.',
    solution: 'We work with trusted suppliers who sign NDAs and respect IP protection agreements.',
  },
  {
    problem: 'Hidden costs, unexpected fees, and pricing surprises.',
    solution: 'Transparent pricing with detailed cost breakdowns before any commitment.',
  },
  {
    problem: 'Shipping delays, customs issues, and logistics headaches.',
    solution: 'End-to-end logistics management with real-time tracking and customs documentation support.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-16 lg:py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 text-center mb-4">
          Common Sourcing Challenges
        </h2>
        <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          We understand the risks involved in international sourcing. Here&apos;s 
          how we help you avoid them.
        </p>

        <div className="max-w-4xl mx-auto space-y-4">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 lg:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">Challenge</span>
                    <p className="text-sm text-slate-700 mt-1">{item.problem}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">Our Solution</span>
                    <p className="text-sm text-slate-700 mt-1">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}