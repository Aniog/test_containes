import { CheckCircle2 } from 'lucide-react'
import { caseStudies } from '@/data/site-data'

export default function CaseStudiesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary/95 to-primary/80 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              See how we&apos;ve helped businesses around the world source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((cs, i) => (
              <div
                key={cs.id}
                className="bg-white rounded-xl border border-border overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  <div
                    className="lg:col-span-2 h-64 lg:h-auto bg-cover bg-center"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop)`,
                      backgroundColor: '#f1f5f9',
                    }}
                  />
                  <div className="lg:col-span-3 p-6 md:p-8 lg:p-10">
                    <p className="text-xs font-semibold text-primary-light uppercase tracking-wider mb-1">{cs.subtitle}</p>
                    <h2 className="text-2xl font-bold text-text-primary mb-4">{cs.title}</h2>
                    <p className="text-secondary-text leading-relaxed mb-6">{cs.description}</p>
                    <h4 className="font-semibold text-text-primary mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {cs.results.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                          <span className="text-text-primary">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}