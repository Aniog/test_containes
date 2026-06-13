import { ArrowRight, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MessageSquare className="w-12 h-12 text-primary-light mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Source from China?
        </h2>
        <p className="text-lg text-primary-light/90 leading-relaxed max-w-2xl mx-auto mb-8">
          Tell us about your product requirements and we will provide a free sourcing plan with cost estimates and timeline.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-gray-50 transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="mailto:info@ssourcingchina.com"
            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-white/20 transition-colors"
          >
            Email Us Directly
          </a>
        </div>
      </div>
    </section>
  )
}