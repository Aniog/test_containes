import React from 'react'
import { ArrowRight } from 'lucide-react'

const CtaBanner = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-navy-700 to-steel-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gold-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Fabrication Process?
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied fabricators worldwide who trust ARTITECT 
          for precision, reliability, and performance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-700 font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:+861234567890"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 rounded-full border border-white/20 transition-all duration-200"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
