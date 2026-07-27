import React from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, Clock, DollarSign, ShieldAlert, Languages, FileX } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'Finding trustworthy suppliers in China can be challenging without local knowledge.',
    solution: 'We verify every supplier with on-site audits and background checks.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    description: 'Without monitoring, production timelines can slip and cause missed deadlines.',
    solution: 'We follow production closely and address issues before they become delays.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Unexpected fees and price increases can erode your profit margins.',
    solution: 'We negotiate transparent pricing and lock in costs before production.',
  },
  {
    icon: ShieldAlert,
    title: 'Quality Issues',
    description: 'Products that don\'t meet specifications lead to returns and customer complaints.',
    solution: 'We inspect at multiple stages to catch defects early.',
  },
  {
    icon: Languages,
    title: 'Language Barriers',
    description: 'Communication gaps can lead to misunderstandings and costly mistakes.',
    solution: 'Our bilingual team ensures clear communication with suppliers.',
  },
  {
    icon: FileX,
    title: 'Compliance Risks',
    description: 'Navigating import regulations and certifications can be complex.',
    solution: 'We handle documentation and ensure compliance with your market requirements.',
  },
]

export default function ProblemsWeSolve() {
  return (
    <section className="section bg-gray-900 text-white" id="problems">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Common Sourcing Challenges We Solve
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We understand the difficulties of sourcing from China and have solutions for each
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {problem.description}
                  </p>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-green-300 text-sm">
                      <strong>Our Solution:</strong> {problem.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
          >
            Discuss Your Sourcing Needs
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
