import { Link } from 'react-router-dom'
import { Phone, Mail, ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="cta-bg-artitect"
        data-strk-bg="[cta-title] [cta-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-slate-900/90 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-amber-500 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            Get Started
          </span>
          <h2
            id="cta-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
          >
            Ready to Transform Your Production?
          </h2>
          <p
            id="cta-subtitle"
            className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10"
          >
            Our team of experts is here to help you find the perfect folding solution. Contact us today for a personalized quote or demo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              to="/contact"
              className="group px-8 py-3.5 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-500 transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+15550000000"
              className="px-8 py-3.5 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-amber-600 hover:text-white transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-500" />
              <span>+1 (555) 000-0000</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-500" />
              <span>info@artitectmachinery.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
