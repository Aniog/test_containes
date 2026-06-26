import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection({
  title = 'Ready to source from China with confidence?',
  description = 'Tell us what you want to source. We will reply within 1 business day with verified suppliers, indicative pricing and a clear next step.',
}) {
  return (
    <section className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 id="cta-title" className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {title}
            </h2>
            <p id="cta-desc" className="mt-4 text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-100 transition"
            >
              Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
