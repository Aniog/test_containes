import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="py-20 md:py-24 bg-[#C8973E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
          Ready to Upgrade Your Production?
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
          Get a free consultation and custom quote for your metal folding needs. Our engineers are standing by.
        </p>
        <button
          onClick={() => {
            const el = document.querySelector('#contact')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
          className="bg-[#0F1B2D] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1A2D47] transition-colors duration-300 inline-flex items-center gap-2"
        >
          Get Your Free Quote
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}
