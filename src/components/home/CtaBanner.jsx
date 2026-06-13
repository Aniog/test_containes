import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-steel rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Ready to Transform Your
            <span className="text-gold"> Production Line</span>?
          </h2>
          <p className="mt-6 text-slate-300 text-lg leading-relaxed">
            Join thousands of manufacturers who trust ARTITECT MACHINERY for
            precision, reliability, and performance. Get a customized solution today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-300 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors duration-200"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+18005550199"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors duration-200"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
