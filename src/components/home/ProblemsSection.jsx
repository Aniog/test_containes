import { AlertTriangle, CheckCircle } from 'lucide-react'

const problems = [
  {
    problem: 'Cannot find reliable suppliers in China',
    solution: 'We maintain a vetted database of 2,000+ verified factories across 30+ product categories.',
  },
  {
    problem: 'Communication barriers and time zone differences',
    solution: 'Our bilingual team in Shanghai handles all supplier communication in Chinese and English.',
  },
  {
    problem: 'Quality issues discovered after shipment arrives',
    solution: 'Multi-stage QC inspections catch defects before goods leave the factory, every time.',
  },
  {
    problem: 'Unclear pricing, hidden fees, and cost overruns',
    solution: 'Transparent, itemized quotes with no hidden markups. You see exactly what you pay for.',
  },
  {
    problem: 'Shipping delays and customs complications',
    solution: 'We manage all documentation, coordinate freight, and handle customs clearance end-to-end.',
  },
  {
    problem: 'Intellectual property and design copy concerns',
    solution: 'We help you implement NDA agreements and register trademarks with Chinese authorities.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            Problems We Solve
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            International sourcing from China comes with real challenges.
            Here is how we address the most common concerns buyers face.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <div key={i} className="bg-white rounded-lg border border-border p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <p className="text-text-primary font-medium text-sm">{item.problem}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pl-12">
                <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-success" />
                </div>
                <div>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
