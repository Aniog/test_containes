import { Link } from 'react-router-dom'
import { caseStudies, Icons } from '@/lib/data'

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">Case Studies</span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Real Results for Our Clients
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            See how businesses around the world have improved their sourcing with SSourcing China.
          </p>
        </div>
      </section>

      {/* Case studies list */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-surface-alt rounded-xl p-6 sm:p-8 border border-border hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
                    {cs.category}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">{cs.title}</h2>

                <div className="grid sm:grid-cols-3 gap-5 mt-5">
                  <div>
                    <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Client</h4>
                    <p className="text-text-primary text-sm font-medium">{cs.client}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Challenge</h4>
                    <p className="text-text-secondary text-sm">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Our Solution</h4>
                    <p className="text-text-secondary text-sm">{cs.solution}</p>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
                  <Icons.TrendingUp className="w-5 h-5 text-success" />
                  <p className="text-success font-semibold text-sm">{cs.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-md transition-colors shadow-sm"
            >
              Get Your Free Sourcing Quote
              <Icons.ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}