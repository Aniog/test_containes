import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
          Ready to Upgrade Your Production Line?
        </h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
          Get in touch with our team to discuss your requirements and receive a customized quote for your metal folding needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-navy-900 font-semibold rounded-lg px-8 py-4 transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border-2 border-slate-500 text-white hover:border-amber-400 hover:text-amber-400 font-semibold rounded-lg px-8 py-4 transition-colors"
          >
            Browse Catalog
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection
