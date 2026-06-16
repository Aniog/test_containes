import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-brand-950 rounded-sm overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 px-8 py-14 md:px-16 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
                Ready to Upgrade Your Production Line?
              </h2>
              <p className="text-brand-300 leading-relaxed">
                Speak with our specialists to find the perfect folding machine for your exact requirements. We offer customized solutions and competitive pricing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm rounded-sm transition-colors duration-200"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+15552345678"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white hover:bg-white/10 font-medium text-sm rounded-sm transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                +1 (555) 234-5678
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
