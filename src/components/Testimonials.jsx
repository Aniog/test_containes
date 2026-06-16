import React from 'react'
import { useScrollReveal } from '@/lib/useScrollReveal'

const testimonials = [
  {
    quote: 'The DF-3200 transformed our production line. We doubled our output while reducing material waste by 15%. The precision is remarkable.',
    author: 'Klaus Meier',
    role: 'Production Manager',
    company: 'MetalTech GmbH',
  },
  {
    quote: 'We evaluated five different manufacturers before choosing ARTITECT. Their sheet metal folder outperformed every competitor in accuracy and speed.',
    author: 'James Henderson',
    role: 'Operations Director',
    company: 'BritSteel Fabrications',
  },
  {
    quote: 'Outstanding after-sales support. The training team spent two full days on-site making sure our operators were fully confident with the machine.',
    author: 'Maria Santos',
    role: 'Plant Supervisor',
    company: 'Iberia Roofing Systems',
  },
]

const Testimonials = () => {
  const revealRef = useScrollReveal()

  return (
    <section className="section-padding bg-slate-50" ref={revealRef}>
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="text-brand-gold text-xs font-semibold tracking-widest-plus uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mt-3 mb-4">
            Trusted Worldwide
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Fabricators around the globe rely on ARTITECT machines for their most demanding projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.author}
              className={`reveal-on-scroll delay-${index * 100} bg-white p-6 md:p-8 border border-slate-100 hover:border-brand-gold/20 transition-colors`}
            >
              {/* Quote mark */}
              <div className="text-brand-gold text-4xl font-black leading-none mb-4">&ldquo;</div>
              <blockquote className="text-slate-600 text-sm leading-relaxed mb-6">
                {t.quote}
              </blockquote>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-bold text-brand-dark text-sm">{t.author}</p>
                <p className="text-slate-400 text-xs mt-0.5">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
