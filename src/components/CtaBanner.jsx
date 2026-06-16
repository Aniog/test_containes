import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/lib/useScrollReveal'

const CtaBanner = () => {
  const revealRef = useScrollReveal()

  return (
    <section className="section-padding bg-brand-dark relative overflow-hidden" ref={revealRef}>
      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container-max relative text-center reveal-on-scroll">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Ready to Upgrade Your
          <br />
          <span className="text-brand-gold">Metal Folding Line?</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
          Get expert advice on choosing the right double folding machine or sheet metal folder
          for your production needs. Free consultation included.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold text-sm px-10 py-4 tracking-wide transition-colors group"
          >
            Get Your Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-brand-gold/50 text-white font-semibold text-sm px-10 py-4 tracking-wide transition-colors"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
