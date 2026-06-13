import { Link } from 'react-router-dom'
import { ChevronRight, Phone } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-brand-900 to-brand-950 rounded-3xl overflow-hidden px-8 py-16 md:px-16 md:py-20">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/4" />

          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Ready to Upgrade Your Metal Folding Capability?
            </h2>
            <p className="text-brand-300 text-lg mb-10">
              Get in touch with our engineering team for a customized solution. We will help you select the perfect machine for your specific production requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg text-base transition-all duration-200 shadow-lg shadow-accent/25"
              >
                Request a Quote
                <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+497115550100"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-brand-600 hover:border-brand-400 text-brand-200 hover:text-white font-semibold rounded-lg text-base transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                +49 711 555 0100
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
