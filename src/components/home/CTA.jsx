import React from 'react'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Elevate Your{' '}
          <span className="text-gold">Metalworking?</span>
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Join thousands of satisfied customers worldwide who trust ARTITECT MACHINERY for their precision metal folding needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-full font-medium transition-colors text-base"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-gold text-white hover:text-gold px-8 py-4 rounded-full font-medium transition-colors text-base"
          >
            View Products
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
