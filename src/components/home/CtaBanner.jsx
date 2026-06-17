import React from 'react'
import { ArrowRight } from 'lucide-react'

const CtaBanner = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-navy-dark via-navy-medium to-navy-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Ready to Upgrade Your <span className="text-gold">Production Line</span>?
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Get a free consultation with our engineering team. We will help you find the perfect folding solution for your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-4 rounded transition-colors duration-200"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:+862158888888"
            className="inline-flex items-center gap-2 text-white hover:text-gold font-medium transition-colors duration-200"
          >
            Or call us: +86 21 5888 8888
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
