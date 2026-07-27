import { AlertTriangle, CheckCircle } from 'lucide-react'

const problems = [
  {
    problem: 'Finding trustworthy suppliers online is time-consuming and risky.',
    solution: 'We maintain a vetted supplier database and conduct on-site verification for every new partner.',
  },
  {
    problem: 'Language barriers and cultural differences slow down negotiations.',
    solution: 'Our bilingual team handles all communication, ensuring clarity and faster turnaround.',
  },
  {
    problem: 'Quality issues are discovered too late — after goods have shipped.',
    solution: 'We conduct in-process and pre-shipment inspections to catch issues before dispatch.',
  },
  {
    problem: 'Production delays disrupt your inventory and sales plans.',
    solution: 'Weekly milestone tracking and proactive issue resolution keep deliveries on schedule.',
  },
  {
    problem: 'Navigating shipping, customs, and documentation is overwhelming.',
    solution: 'We coordinate freight, prepare export docs, and track shipments to your door.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Sourcing Problems We Solve
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Buying from China should not be a guessing game. Here is how we remove the common pain points.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl border border-slate-200 p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <p className="text-slate-800 font-medium mb-3">{item.problem}</p>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                    <p className="text-sm text-slate-600 leading-relaxed">{item.solution}</p>
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
