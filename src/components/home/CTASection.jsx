import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <MessageSquare className="w-4 h-4" />
          Free consultation available
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          Ready to Source Products from China?
        </h2>

        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Tell us what you need and receive a detailed quotation with supplier options,
          pricing, and lead times within 48 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-lg text-base transition-all shadow-lg hover:shadow-xl"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="mailto:info@ssourcingchina.com"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:border-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg text-base transition-all"
          >
            Email Us Directly
          </a>
        </div>

        <p className="text-sm text-blue-200 mt-6">
          No obligation. No upfront fees. Response within 24 hours.
        </p>
      </div>
    </section>
  )
}
