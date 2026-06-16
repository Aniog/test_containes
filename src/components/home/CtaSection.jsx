import { ArrowRight, Phone } from 'lucide-react'

const CtaSection = () => {
  return (
    <section className="relative py-20 bg-accent-500 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-20 w-64 h-64 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Transform Your<br />Metal Fabrication Process?
        </h2>
        <p className="text-accent-100 text-lg max-w-2xl mx-auto mb-10">
          Join over 12,000 manufacturers worldwide who trust ARTITECT MACHINERY 
          for precision metal folding solutions. Get started with a free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent-700 font-bold rounded-sm hover:bg-brand-50 transition-all hover:shadow-xl"
          >
            Get Your Free Quote
            <ArrowRight size={18} />
          </a>
          <a
            href="tel:+18005550199"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-sm hover:bg-white/10 transition-all"
          >
            <Phone size={16} />
            Call +1 (800) 555-0199
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
