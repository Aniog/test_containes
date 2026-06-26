import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Upgrade Your Workshop?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Get in touch with our team for a personalized quote, product
              demonstration, or to discuss your specific sheet metal folding
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-3.5 rounded-md font-semibold hover:bg-gold-hover transition-colors"
              >
                Get a Free Quote
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded-md font-semibold hover:bg-white/10 transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
