import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Check, ArrowRight, Gauge, Settings, Zap } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    category: 'Double Folding Machines',
    items: [
      {
        title: 'Double Folding Machine',
        subtitle: 'DF-5000 Series',
        desc: 'High-speed dual-action folding system designed for large-scale production environments. Capable of folding both edges simultaneously, reducing cycle times by up to 50%.',
        specs: ['Dual folding capacity up to 5000mm', 'Max thickness: 3mm steel', 'CNC programmable controls', 'Automatic material positioning'],
        features: [Gauge, Settings, Zap],
      },
      {
        title: 'Double Folder',
        subtitle: 'DF-3000 Compact',
        desc: 'Space-efficient double folding solution for medium-scale operations. Ideal for HVAC, electrical enclosures, and architectural metalwork with precision repeatability.',
        specs: ['Folding length: 3000mm', 'Max thickness: 2.5mm steel', 'Touch screen interface', 'Quick-tool change system'],
        features: [Gauge, Settings, Zap],
      },
    ],
  },
  {
    category: 'Sheet Metal Folders',
    items: [
      {
        title: 'Sheet Metal Folder',
        subtitle: 'SMF-4000 Pro',
        desc: 'Versatile sheet metal folding machine engineered for precision bending of various sheet thicknesses. Suitable for custom fabrication shops and production lines alike.',
        specs: ['Folding capacity: 4000mm', 'Variable angle control: 0-135°', 'Back gauge automation', 'Safety light curtain'],
        features: [Gauge, Settings, Zap],
      },
      {
        title: 'Sheet Metal Folding Machine',
        subtitle: 'SMF-2500',
        desc: 'Compact yet powerful sheet metal folding solution for smaller workshops. Features intuitive controls and rapid setup for diverse job requirements.',
        specs: ['Folding length: 2500mm', 'Digital angle display', 'Manual & CNC modes', 'Mobile work stand option'],
        features: [Gauge, Settings, Zap],
      },
    ],
  },
  {
    category: 'Metal Folders',
    items: [
      {
        title: 'Metal Folder',
        subtitle: 'MF-6000 Heavy Duty',
        desc: 'Industrial-grade metal folder built for heavy-gauge materials. Hydraulic clamping and folding ensure consistent, burr-free results on the toughest jobs.',
        specs: ['Folding capacity: 6000mm', 'Max thickness: 6mm steel', 'Hydraulic clamping system', 'Programmable bend sequences'],
        features: [Gauge, Settings, Zap],
      },
      {
        title: 'Metal Folder Machine',
        subtitle: 'MF-3500 Standard',
        desc: 'Reliable all-purpose metal folding machine for general fabrication work. Combines rugged construction with user-friendly operation for everyday shop use.',
        specs: ['Folding length: 3500mm', 'Manual or powered options', 'Adjustable folding beam', 'Built-in angle gauge'],
        features: [Gauge, Settings, Zap],
      },
      {
        title: 'Metal Folding Machine',
        subtitle: 'MF-2000 Compact',
        desc: 'Entry-level metal folding machine designed for light industrial and commercial use. Compact footprint without compromising on folding quality or durability.',
        specs: ['Folding capacity: 2000mm', 'Light gauge specialist', 'Tool-free blade change', 'Portable design option'],
        features: [Gauge, Settings, Zap],
      },
    ],
  },
]

export default function Products() {
  const heroRef = useRef(null)

  useEffect(() => {
    if (heroRef.current) {
      return ImageHelper.loadImages(strkImgConfig, heroRef.current)
    }
  }, [])

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative py-20 md:py-28 bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="products-hero-4c7d2b"
          data-strk-bg="[products-title] [products-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 to-brand-navy/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-gold text-xs uppercase tracking-[0.3em] font-medium mb-3">
            Our Product Range
          </span>
          <h1
            id="products-title"
            className="font-serif text-3xl md:text-5xl font-bold text-white"
          >
            Precision Folding Machines
          </h1>
          <p
            id="products-subtitle"
            className="mt-4 text-white/70 max-w-2xl mx-auto"
          >
            From compact sheet metal folders to heavy-duty double folding machines — explore the complete ARTITECT MACHINERY product line.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      {products.map((category, catIndex) => (
        <section
          key={category.category}
          className={`py-16 md:py-24 ${catIndex % 2 === 0 ? 'bg-white' : 'bg-brand-cream'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy">
                {category.category}
              </h2>
              <div className="w-16 h-0.5 bg-brand-gold mt-4" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.items.map((product) => {
                const SpecIcon = product.features[0]
                return (
                  <div
                    key={product.title}
                    className="bg-white border border-brand-cream-dark p-8 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-brand-navy">
                          {product.title}
                        </h3>
                        <p className="text-brand-gold text-sm font-medium mt-1 uppercase tracking-wider">
                          {product.subtitle}
                        </p>
                      </div>
                      <SpecIcon className="w-8 h-8 text-brand-gold opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <p className="text-brand-slate text-sm leading-relaxed mb-6">
                      {product.desc}
                    </p>

                    <div className="space-y-2 mb-6">
                      {product.specs.map((spec) => (
                        <div key={spec} className="flex items-start gap-2">
                          <Check size={14} className="text-brand-gold mt-1 flex-shrink-0" />
                          <span className="text-brand-slate text-sm">{spec}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-brand-gold text-sm font-medium uppercase tracking-wider hover:text-brand-gold-dark transition-colors"
                    >
                      Request Info
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4">
            Need Help Choosing the Right Machine?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Our product specialists can help match the perfect folding solution to your specific production requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-gold text-white font-medium uppercase tracking-wider text-sm hover:bg-brand-gold-dark transition-colors duration-200"
          >
            Contact Our Team
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}