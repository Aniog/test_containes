import React from 'react'
import { XCircle, CheckCircle } from 'lucide-react'

const problems = [
  {
    problem: 'Unreliable suppliers who don\'t deliver on promises',
    solution: 'We verify every supplier with on-site factory audits and background checks.',
  },
  {
    problem: 'Quality issues discovered only after goods arrive',
    solution: 'We conduct inspections at every production stage to catch defects early.',
  },
  {
    problem: 'Language barriers and communication difficulties',
    solution: 'Our bilingual team handles all supplier communication in Chinese.',
  },
  {
    problem: 'Hidden costs and unexpected price increases',
    solution: 'We provide transparent pricing with detailed cost breakdowns upfront.',
  },
  {
    problem: 'Shipping delays and customs complications',
    solution: 'We manage all logistics, documentation, and customs clearance.',
  },
  {
    problem: 'No visibility into production progress',
    solution: 'We provide regular updates and progress reports throughout production.',
  },
]

const ProblemsSection = () => {
  return (
    <section className="section-padding bg-navy">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Common Sourcing Problems We Solve
          </h2>
          <p className="text-navy-300 max-w-3xl mx-auto">
            Sourcing from China can be challenging. Here's how we make it easier for you.
          </p>
        </div>

        {/* Problems & Solutions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <div key={index} className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-6 border border-navy-700 
                                      hover:border-accent/30 transition-all">
              {/* Problem */}
              <div className="flex items-start gap-3 mb-4">
                <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-white/90 text-sm">{item.problem}</p>
              </div>
              
              {/* Divider */}
              <div className="border-t border-navy-700 my-4" />
              
              {/* Solution */}
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-navy-300 text-sm">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection
