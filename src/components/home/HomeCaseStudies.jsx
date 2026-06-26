import { Link } from 'react-router-dom'
import { caseStudies, Icons } from '@/lib/data'

export default function HomeCaseStudies() {
  const featured = caseStudies.slice(0, 3)

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Case Studies</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary">
            Real Results for Real Clients
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            See how we've helped businesses across industries solve their sourcing challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((cs) => (
            <Link
              to="/case-studies"
              key={cs.id}
              className="group bg-surface-alt rounded-xl overflow-hidden border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="aspect-[16/10] bg-primary/5 flex items-center justify-center">
                <Icons.Building2 className="w-16 h-16 text-primary/20 group-hover:text-accent/30 transition-colors" />
              </div>
              <div className="p-6">
                <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                  {cs.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-text-primary group-hover:text-primary transition-colors leading-snug">
                  {cs.title}
                </h3>
                <p className="mt-2 text-text-secondary text-sm line-clamp-2">
                  {cs.challenge}
                </p>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-text-muted text-xs">{cs.client}</span>
                  <span className="text-primary group-hover:text-accent text-sm font-medium transition-colors flex items-center gap-1">
                    Read more <Icons.ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold text-sm transition-colors"
          >
            View all case studies
            <Icons.ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}