import { useScrollAnimation } from '../lib/useScrollAnimation'
import { ArrowRight, CheckCircle2, Zap, Ruler, Layers, Settings } from 'lucide-react'

const products = [
  {
    id: 'double-folder',
    name: 'Double Folder',
    subtitle: 'AF-4000 Series',
    description: 'High-performance double folding machine with dual beam design for maximum efficiency. Perfect for high-volume production environments requiring consistent, precise bends.',
    specs: ['Max thickness: 6mm', 'Working length: 4000mm', 'CNC controlled', 'Auto crowning'],
    icon: Layers,
    accent: 'from-brand-accent/20 to-brand-accent/5',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    subtitle: 'SM-2000 Series',
    description: 'Versatile sheet metal folding machine designed for precision bending of various sheet metals. Ideal for HVAC, roofing, and architectural metalwork applications.',
    specs: ['Max thickness: 3.2mm', 'Working length: 2500mm', 'Digital display', 'Quick tool change'],
    icon: Ruler,
    accent: 'from-blue-500/20 to-blue-500/5',
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    subtitle: 'MF-6000 Series',
    description: 'Heavy-duty metal folding machine built for industrial-scale fabrication. Handles thick materials with ease while maintaining superior accuracy across long bends.',
    specs: ['Max thickness: 8mm', 'Working length: 6000mm', 'PLC controlled', 'Hydraulic clamping'],
    icon: Zap,
    accent: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    subtitle: 'FF-3000 Series',
    description: 'Compact yet powerful metal folding machine combining advanced technology with user-friendly operation. The perfect balance of precision and productivity.',
    specs: ['Max thickness: 4mm', 'Working length: 3000mm', 'Touch screen HMI', 'Programmable angles'],
    icon: Settings,
    accent: 'from-purple-500/20 to-purple-500/5',
  },
]

function ProductCard({ product, index }) {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const Icon = product.icon

  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-xl overflow-hidden border border-brand-border/50 hover:border-brand-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-brand-accent/5 ${
        isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Top accent bar */}
      <div className="h-1 bg-brand-accent w-0 group-hover:w-full transition-all duration-500" />

      <div className="p-6 lg:p-8">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${product.accent} flex items-center justify-center mb-5`}>
          <Icon size={28} className="text-brand-accent" />
        </div>

        {/* Subtitle */}
        <p className="text-brand-accent text-xs font-medium tracking-[0.2em] uppercase mb-2">
          {product.subtitle}
        </p>

        {/* Name */}
        <h3 className="font-heading text-xl lg:text-2xl font-bold text-brand-dark mb-3">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-brand-muted text-sm leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Specs */}
        <ul className="space-y-2 mb-6">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-2 text-sm text-brand-dark/80">
              <CheckCircle2 size={14} className="text-brand-accent flex-shrink-0" />
              {spec}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors group/link"
        >
          Request Details
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  )
}

export default function Products() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  return (
    <section id="products" className="py-20 lg:py-28 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 ${
            headerVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <p className="text-brand-accent text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Our Product Range
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-brand-dark mb-6">
            Machines Built for{' '}
            <span className="text-brand-accent">Precision</span>
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            From compact folders for small workshops to heavy-duty industrial machines,
            every ARTITECT machine delivers the accuracy and reliability your work demands.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-brand-muted text-sm mb-4">
            Need a custom configuration? We build to specification.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-dark text-brand-surface font-semibold rounded tracking-wide uppercase text-sm hover:bg-brand-navy transition-colors duration-300"
          >
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  )
}
