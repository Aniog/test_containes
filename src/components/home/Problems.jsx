import { Link } from 'react-router-dom'
import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react'

const problems = [
  {
    title: 'Language & Communication Barriers',
    description: 'Difficulty communicating requirements clearly with Chinese suppliers, leading to misunderstandings and production errors.',
    solution: 'Our bilingual team acts as your direct communication bridge, ensuring every detail is understood and documented properly.',
  },
  {
    title: 'Unreliable Suppliers & Fraud Risk',
    description: 'Risk of working with middlemen, shell companies, or suppliers who take deposits and disappear.',
    solution: 'We verify every supplier on-site, check business licenses, and only work with verified manufacturers.',
  },
  {
    title: 'Quality Control Issues',
    description: 'Products arrive damaged, defective, or not matching specifications, resulting in losses and customer complaints.',
    solution: 'Professional QC inspections at every production stage using internationally recognized AQL standards.',
  },
  {
    title: 'Complex Logistics & Customs',
    description: 'Navigating shipping routes, customs regulations, and documentation requirements is overwhelming.',
    solution: 'End-to-end logistics management with experienced freight partners and customs clearance support.',
  },
]

export function Problems() {
  return (
    <section className="py-20 bg-neutral-900 text-white" id="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-primary-900/50 text-primary-300 rounded-full text-sm font-medium mb-4">
            Why Work With Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Solve Your Sourcing Challenges
          </h2>
          <p className="text-lg text-neutral-300">
            China sourcing comes with unique challenges. We help you navigate 
            them safely and efficiently.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700"
            >
              {/* Problem */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    {problem.description}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-neutral-700 my-6"></div>

              {/* Solution */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-accent-400 mb-1">
                    Our Solution
                  </h4>
                  <p className="text-neutral-300 text-sm">
                    {problem.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors">
            Get Help With Your Sourcing
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}