import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Upgrade Your Production Line?
          </h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Speak with our engineering team to find the perfect metal folding solution for your workshop. We offer custom configurations, on-site demos, and competitive financing options.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/about#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white font-semibold rounded-lg hover:brightness-110 transition-all duration-200 shadow-lg shadow-brand-accent/25 text-lg"
            >
              Get Your Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+13125550198"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}