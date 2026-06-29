import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Ruler, Gauge, Zap } from 'lucide-react'

const products = [
  {
    title: 'Double Folding Machine',
    subtitle: 'DF-5000 Series',
    description: 'High-speed double folding machine designed for complex sheet metal bends with precision servo control.',
    specs: ['Max thickness: 4mm (mild steel)', 'Bend length: 3100mm', 'Servo-electric drive', 'GUI touch interface'],
    features: ['Dual-axis simultaneous folding', 'Auto tool change', 'Back gauge positioning'],
    image: {
      icon: Ruler,
      gradient: 'from-navy-800 to-navy-700',
    },
  },
  {
    title: 'Double Folder',
    subtitle: 'DF-3000 Compact',
    description: 'Compact double folder for workshops needing reliable, high-precision folding in a space-efficient package.',
    specs: ['Max thickness: 2.5mm', 'Bend length: 2100mm', 'Hydraulic clamping', 'Energy-saving mode'],
    features: ['Space-saving design', 'Quick tool setup', 'Low maintenance'],
    image: {
      icon: Gauge,
      gradient: 'from-navy-700 to-navy-800',
    },
  },
  {
    title: 'Sheet Metal Folder',
    subtitle: 'SMF-4000 Pro',
    description: 'Professional sheet metal folding machine with advanced CNC control for consistent, repeatable results.',
    specs: ['Max thickness: 3mm (stainless)', 'Bend length: 4100mm', 'CNC programmable', 'Touch screen HMI'],
    features: ['Programmable bend sequences', 'Material database', 'Remote diagnostics'],
    image: {
      icon: Zap,
      gradient: 'from-navy-800 to-navy-900',
    },
  },
  {
    title: 'Metal Folding Machine',
    subtitle: 'MF-2000 HD',
    description: 'Heavy-duty metal folding machine built for high-volume production with exceptional durability.',
    specs: ['Max thickness: 5mm', 'Bend length: 2550mm', 'Heavy-duty frame', 'Auto lubrication'],
    features: ['High cycle speed', 'Tool-less changeover', 'Safety light curtain'],
    image: {
      icon: Gauge,
      gradient: 'from-navy-900 to-navy-800',
    },
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">Our Product Line</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
            Precision Folding{' '}
            <span className="text-gold-500">Machinery</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg leading-relaxed">
            From compact workshop folders to industrial-grade double folding systems, 
            each machine is engineered for accuracy, reliability, and ease of use.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const Icon = product.image.icon
            return (
              <article
                key={index}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-gold-500 text-xs font-semibold uppercase tracking-wider">
                        {product.subtitle}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-bold text-text-primary mt-1">
                        {product.title}
                      </h3>
                    </div>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.image.gradient} flex items-center justify-center shrink-0`}>
                      <Icon className="w-7 h-7 text-gold-500" />
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="space-y-2 mb-6">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-gold-500 shrink-0" />
                        <span className="text-text-secondary">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-gold-100 text-gold-500 text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="outline" className="w-full group">
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}