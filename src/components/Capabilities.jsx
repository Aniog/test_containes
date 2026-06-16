import React from 'react'
import { Shield, Zap, Gauge, Settings, Cpu, Wrench } from 'lucide-react'
import { useScrollReveal } from '@/lib/useScrollReveal'

const capabilities = [
  {
    icon: Gauge,
    title: 'Precision Folding',
    description: 'CNC-controlled folding accuracy within ±0.1° for repeatable, production-quality bends every time.',
  },
  {
    icon: Shield,
    title: 'Industrial Durability',
    description: 'Heavy-gauge steel frame construction with hardened tooling designed for 24/7 continuous operation.',
  },
  {
    icon: Zap,
    title: 'Rapid Setup',
    description: 'Quick-change tooling system reduces setup time between jobs from hours to minutes.',
  },
  {
    icon: Cpu,
    title: 'Smart Controls',
    description: 'Touchscreen HMI with programmable bend sequences, material libraries, and automatic angle correction.',
  },
  {
    icon: Settings,
    title: 'Versatile Folding',
    description: 'Handle materials from thin aluminum to heavy steel plate with adjustable clamping pressure and folding force.',
  },
  {
    icon: Wrench,
    title: 'Service & Support',
    description: 'Global service network with 24/7 remote diagnostics, spare parts supply, and on-site technical support.',
  },
]

const Capabilities = () => {
  const revealRef = useScrollReveal()

  return (
    <section id="capabilities" className="section-padding bg-brand-dark relative overflow-hidden" ref={revealRef}>
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container-max relative">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="text-brand-gold text-xs font-semibold tracking-widest-plus uppercase">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Engineering Excellence
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every ARTITECT machine combines decades of metal folding expertise with
            modern automation technology.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className={`reveal-on-scroll delay-${Math.min(index * 100, 300)} group p-6 md:p-8 bg-brand-mid/50 border border-white/5 hover:border-brand-gold/30 transition-all duration-300`}
            >
              <div className="w-12 h-12 border-2 border-brand-gold/40 flex items-center justify-center mb-5 group-hover:bg-brand-gold/10 transition-colors">
                <cap.icon className="w-5 h-5 text-brand-gold" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{cap.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 reveal-on-scroll">
          <p className="text-slate-400 mb-6">Need a custom configuration for your production line?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold text-sm px-8 py-4 tracking-wide transition-colors"
          >
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  )
}

export default Capabilities
