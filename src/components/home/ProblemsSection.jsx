import React from 'react'
import { AlertTriangle, DollarSign, Clock, ShieldAlert, Globe } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'Many overseas buyers struggle to find trustworthy suppliers. Online listings can be misleading, and communication gaps lead to wrong orders.',
    solution: 'We verify every supplier through on-site factory visits, license checks, and production audits.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs & Overpricing',
    description: 'Without local knowledge, buyers often pay more than they should or face unexpected fees for shipping, customs, or rework.',
    solution: 'Our local team negotiates fair prices and identifies cost risks before you commit.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    description: 'Delays are common when there is no one on the ground tracking progress. Late shipments disrupt your sales plans.',
    solution: 'We follow production schedules closely and alert you early if timelines shift.',
  },
  {
    icon: ShieldAlert,
    title: 'Quality Issues',
    description: 'Receiving goods that do not meet your specifications is costly. Returns, rework, and customer complaints hurt your business.',
    solution: 'We conduct AQL-based inspections at key stages and provide detailed photo reports.',
  },
  {
    icon: Globe,
    title: 'Language & Cultural Barriers',
    description: 'Misunderstandings between buyers and Chinese suppliers cause errors in specifications, materials, and delivery terms.',
    solution: 'Our bilingual team bridges the communication gap, ensuring clear specifications and expectations.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Problems We Solve
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Sourcing from China without local support creates real risks. Here are the common challenges we help you avoid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div key={problem.title} className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{problem.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">{problem.description}</p>
              <div className="border-t border-slate-100 pt-3">
                <p className="text-primary-600 text-sm font-medium leading-relaxed">
                  <span className="font-semibold">Our solution: </span>{problem.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
