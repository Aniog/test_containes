import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#0F1B2D] to-[#1A2D47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-4">
          Ready to Upgrade Your Production Line?
        </h2>
        <p className="max-w-xl mx-auto text-white/60 leading-relaxed mb-8">
          Join thousands of manufacturers who trust Artitect Machinery for their metal folding needs. Get a customized solution today.
        </p>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-lg bg-[#C8963E] text-white hover:bg-[#B07E2F] transition-colors duration-200 shadow-lg shadow-[#C8963E]/25"
        >
          Get Your Free Quote
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
