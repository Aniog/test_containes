import React from 'react'
import { ArrowRight } from 'lucide-react'

const CtaBanner = () => {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 bg-gradient-to-r from-gold-dark via-gold to-gold-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2">
            Ready to Upgrade Your Fabrication Line?
          </h2>
          <p className="text-navy/70 text-lg">
            Get a free consultation and custom machine recommendation from our engineering team.
          </p>
        </div>
        <button
          onClick={() => handleScroll('#contact')}
          className="bg-navy hover:bg-navy-light text-white font-bold px-8 py-4 rounded-lg text-base transition-all duration-200 flex items-center gap-2 group flex-shrink-0"
        >
          Talk to an Expert
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}

export default CtaBanner
