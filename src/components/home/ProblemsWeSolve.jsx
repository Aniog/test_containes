import { AlertTriangle, CheckCircle } from 'lucide-react'

const problems = [
  {
    problem: 'Cannot verify if a supplier is legitimate',
    solution: 'We conduct on-site factory audits with photo/video documentation',
  },
  {
    problem: 'Quality issues discovered only after delivery',
    solution: 'Pre-shipment inspections catch defects before goods leave China',
  },
  {
    problem: 'Communication barriers with Chinese factories',
    solution: 'Our bilingual team manages all supplier communication for you',
  },
  {
    problem: 'No visibility into production progress',
    solution: 'Weekly production reports with photos keep you informed',
  },
  {
    problem: 'Overpaying due to lack of market knowledge',
    solution: 'We negotiate based on real market pricing and supplier costs',
  },
  {
    problem: 'Shipping delays and customs complications',
    solution: 'We coordinate logistics and handle export documentation',
  },
]

const ProblemsWeSolve = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold text-brand-blue uppercase tracking-wide mb-3">Why Work With Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Problems We Solve
          </h2>
          <p className="text-brand-muted text-lg">
            Sourcing from China comes with real challenges. Here is how we address them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {problems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-brand-border p-6 flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                </div>
              </div>
              <div>
                <p className="text-brand-dark font-medium mb-2">{item.problem}</p>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-brand-muted">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemsWeSolve
