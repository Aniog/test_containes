import { Check, ChevronRight } from 'lucide-react'

const PRODUCTS = [
  {
    title: 'Double Folding Machine',
    tagline: 'High-speed dual-axis precision',
    description: 'Our flagship double folding machine delivers simultaneous edge folding for maximum throughput. Ideal for high-volume production of panels, enclosures, and architectural components.',
    features: ['Dual-axis CNC control', 'Up to 12 ft sheet capacity', 'Auto thickness adjustment', 'Touchscreen interface'],
  },
  {
    title: 'Double Folder',
    tagline: 'Compact, versatile, efficient',
    description: 'The Artitect Double Folder brings production-grade folding to smaller workshops. Handles both light and heavy gauge materials with repeatable accuracy.',
    features: ['Space-saving footprint', 'Quick-change tooling', 'Digital angle readout', 'Safety interlock system'],
  },
  {
    title: 'Sheet Metal Folder',
    tagline: 'Professional-grade bending',
    description: 'A robust sheet metal folder engineered for consistent, high-quality bends across a wide range of materials including steel, aluminum, and stainless steel.',
    features: ['Heavy-duty steel frame', 'Precision ground beams', 'Manual & powered modes', 'Adjustable bending speed'],
  },
  {
    title: 'Sheet Metal Folding Machine',
    tagline: 'Industrial power, precision control',
    description: 'Purpose-built for continuous sheet metal folding operations. This folding machine combines hydraulic power with digital precision for flawless results.',
    features: ['Hydraulic clamping', 'Programmable bend sequences', 'Digital back gauge', 'Energy-efficient drive'],
  },
  {
    title: 'Metal Folder',
    tagline: 'Built for the workshop floor',
    description: 'The Artitect Metal Folder is a workhorse designed for daily use in busy fabrication shops. Rugged construction meets intuitive operation.',
    features: ['All-welded steel body', 'Easy-read angle scale', 'Rapid clamp release', 'Floor-mount stable base'],
  },
  {
    title: 'Metal Folder Machine',
    tagline: 'Automated precision folding',
    description: 'Take your metal folding to the next level with automated cycle control. This metal folder machine reduces operator fatigue while increasing consistency.',
    features: ['Servo-electric drive', 'Recipe memory storage', 'One-hand operation', 'Low maintenance design'],
  },
  {
    title: 'Metal Folding Machine',
    tagline: 'The complete bending solution',
    description: 'Our most advanced metal folding machine, combining all the best features into one integrated system. From prototype work to full production runs.',
    features: ['Multi-axis CNC', 'Touchscreen HMI', 'Auto tool detection', 'Remote diagnostics'],
  },
]

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-20 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-18">
          <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs tracking-[0.15em] uppercase font-semibold rounded-full mb-4">
            Our Product Range
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Precision Folding Machinery
          </h2>
          <p className="max-w-2xl mx-auto text-text-muted text-base md:text-lg">
            From compact folders for small workshops to industrial systems for high-volume production,
            find the perfect metal folding solution for your operation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PRODUCTS.map((product) => (
            <article
              key={product.title}
              className="bg-surface-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 md:p-8 group"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-navy/5 flex items-center justify-center mb-5 group-hover:bg-brand-gold/10 transition-colors">
                <div className="w-5 h-0.5 bg-brand-gold rounded-full" />
              </div>

              <h3 className="font-heading text-xl font-bold text-brand-navy mb-1">
                {product.title}
              </h3>
              <p className="text-brand-gold text-sm font-medium mb-3">
                {product.tagline}
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-5">
                {product.description}
              </p>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-text-muted">
                    <Check className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors group/link"
              >
                Inquire About This Machine
                <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}