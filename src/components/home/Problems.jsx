import React from 'react'
import { AlertTriangle, Eye, Clock, XCircle, Ban, FileQuestion } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    desc: 'Finding trustworthy suppliers online is risky. Many listings are trading companies, not real factories, leading to quality and communication issues.',
  },
  {
    icon: Eye,
    title: 'No On-Site Visibility',
    desc: 'Without someone on the ground, you cannot verify factory conditions, production progress, or product quality until it is too late.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    desc: 'Delays are common when you cannot follow up in person. Miscommunication and lack of oversight lead to missed deadlines.',
  },
  {
    icon: XCircle,
    title: 'Quality Failures',
    desc: 'Products that do not meet specifications arrive at your warehouse, resulting in returns, refunds, and damaged customer relationships.',
  },
  {
    icon: Ban,
    title: 'Language & Cultural Barriers',
    desc: 'Misunderstandings due to language differences and business culture gaps cause costly mistakes and frustration.',
  },
  {
    icon: FileQuestion,
    title: 'Complex Logistics',
    desc: 'Navigating shipping, customs, documentation, and compliance requirements can be overwhelming without local expertise.',
  },
]

export default function Problems() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
            Problems We Solve
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Sourcing from China comes with real challenges. Here are the common problems our clients face before working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem) => {
            const Icon = problem.icon
            return (
              <div key={problem.title} className="bg-white rounded-xl p-6 md:p-8 border border-slate-200">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">{problem.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{problem.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
