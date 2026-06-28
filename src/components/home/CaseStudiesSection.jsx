import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { caseStudies } from '@/data/site-data'

export default function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">Results</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-4">
            Case Studies
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Real results from real partnerships. See how we help global buyers source successfully.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop)`,
                  backgroundColor: '#f1f5f9',
                }}
              />
              <div className="p-6">
                <p className="text-xs font-semibold text-primary-light uppercase tracking-wider mb-1">{cs.subtitle}</p>
                <h3 className="text-lg font-semibold text-text-primary mb-3">{cs.title}</h3>
                <p className="text-sm text-secondary-text leading-relaxed mb-4">{cs.description}</p>
                <ul className="space-y-2">
                  {cs.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                      <span className="text-text-primary">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary-light font-semibold hover:text-primary transition-colors"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}