import { AlertTriangle, X, CheckCircle2 } from 'lucide-react'

const problems = [
  {
    problem: 'Unverified suppliers delivering substandard products',
    solution: 'We physically visit and audit every factory before recommending them.',
  },
  {
    problem: 'Language barriers and cultural misunderstandings',
    solution: 'Our bilingual team bridges communication gaps between you and the factory.',
  },
  {
    problem: 'Hidden costs and unexpected price increases',
    solution: 'Transparent pricing with detailed cost breakdowns from day one.',
  },
  {
    problem: 'Quality issues discovered only after shipment arrives',
    solution: 'Multiple inspections throughout production — before anything leaves the factory.',
  },
  {
    problem: 'Production delays with no visibility',
    solution: 'Weekly progress updates with photos from our on-the-ground team.',
  },
  {
    problem: 'Complex logistics and customs clearance',
    solution: 'End-to-end shipping management including all documentation and clearance.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-20 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Problems We Solve</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Sourcing from China Shouldn't<br />
              Be a Gamble
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Every buyer faces similar challenges when sourcing from China. We exist to eliminate
              these risks and make the process predictable and reliable.
            </p>

            <div className="space-y-4">
              {problems.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 line-through">{item.problem}</p>
                      <div className="flex items-start gap-2 mt-1.5">
                        <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        <p className="text-sm font-medium text-navy">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-navy rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <AlertTriangle className="w-10 h-10 text-accent mb-5" />
              <h3 className="text-xl font-bold mb-3">The Cost of Getting It Wrong</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Working with unverified suppliers can lead to product defects, missed deadlines,
                financial losses, and damaged reputation. Our clients avoid these risks entirely.
              </p>
              <div className="space-y-3">
                {['Zero factory scams in our history', '98% on-time delivery rate', 'Average 15% cost savings vs. going direct'].map((stat) => (
                  <div key={stat} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                    <span className="text-sm text-gray-200">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
