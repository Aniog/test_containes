import React from 'react'
import { FlaskConical, Dna, Zap, Thermometer, Globe, Shield } from 'lucide-react'

const features = [
  {
    icon: FlaskConical,
    title: 'Hidden Biodiversity',
    description:
      'An estimated 1 trillion species of microbes live on Earth. Most remain undiscovered, hidden in soil, water, and even inside us.',
  },
  {
    icon: Dna,
    title: 'Ancient Lineages',
    description:
      'Microorganisms have existed for over 3.5 billion years. They shaped the atmosphere, created soil, and made multicellular life possible.',
  },
  {
    icon: Zap,
    title: 'Extreme Survivors',
    description:
      'From boiling hot springs to Antarctic ice, microbes thrive in the most hostile environments imaginable — redefining the limits of life.',
  },
  {
    icon: Thermometer,
    title: 'Climate Engineers',
    description:
      'Marine phytoplankton produce half of Earth\'s oxygen and absorb vast amounts of CO₂, making them crucial allies in climate regulation.',
  },
  {
    icon: Globe,
    title: 'Everywhere at Once',
    description:
      'A single gram of soil contains billions of microorganisms. The microbial world is the true fabric connecting all ecosystems.',
  },
  {
    icon: Shield,
    title: 'Our Inner Ecosystem',
    description:
      'The human microbiome — trillions of microbes living in and on us — plays a vital role in digestion, immunity, and even mental health.',
  },
]

export default function HomeFeatures() {
  return (
    <section id="features" className="py-24 px-6 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Dna className="w-6 h-6 text-teal-400" />
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-teal-400">
              Why It Matters
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            The World Beneath Our Feet
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Microscopic life is not just fascinating — it is essential to every system that makes our planet habitable.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover group bg-[#111827]/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/50"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
