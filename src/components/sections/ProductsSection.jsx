import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Settings, Ruler, Layers, Zap, Shield, Gauge } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    subtitle: 'High-Precision Dual-Action',
    description: 'Our flagship double folding machine delivers unmatched precision with dual-action folding capability. Perfect for complex bends and high-volume production runs.',
    features: ['Dual-axis control', '0.01mm precision', 'Auto-calibration'],
    icon: Settings,
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    subtitle: 'Versatile Bending Power',
    description: 'Compact yet powerful, the double folder handles a wide range of sheet metal thicknesses with consistent accuracy and minimal setup time.',
    features: ['Quick-change tooling', 'Digital readout', 'Compact footprint'],
    icon: Layers,
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    subtitle: 'Industrial-Grade Performance',
    description: 'Engineered for demanding industrial applications, this sheet metal folder provides reliable performance across steel, aluminum, and stainless steel.',
    features: ['Heavy-duty frame', 'Multi-material support', 'Safety interlocks'],
    icon: Ruler,
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    subtitle: 'Advanced CNC Control',
    description: 'State-of-the-art CNC-controlled folding machine with programmable angles, automatic back gauge, and intuitive touchscreen interface.',
    features: ['CNC programming', 'Touchscreen HMI', 'Memory storage'],
    icon: Zap,
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    subtitle: 'Reliable Everyday Workhorse',
    description: 'The go-to metal folder for workshops and fabrication shops. Simple operation, robust construction, and consistent results every time.',
    features: ['Manual & hydraulic options', 'Easy maintenance', 'Long service life'],
    icon: Shield,
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    subtitle: 'Precision Engineering',
    description: 'Built with precision-ground components and hardened tooling, this metal folder machine delivers repeatable accuracy for critical applications.',
    features: ['Hardened tooling', 'Precision ground bed', 'Adjustable clamping'],
    icon: Gauge,
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    subtitle: 'Complete Solution',
    description: 'Our comprehensive metal folding machine line covers everything from light-gauge work to heavy plate bending, with customizable configurations.',
    features: ['Customizable specs', 'Full range capacity', 'Integrated support'],
    icon: Settings,
  },
]

function ProductCard({ product, index }) {
  const Icon = product.icon

  return (
    <div
      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id={`product-bg-${product.id}-${index}`}
          data-strk-bg={`[${product.id}-title] [${product.id}-subtitle]`}
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Icon overlay */}
        <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-slate-700" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">
          {product.subtitle}
        </p>
        <h3
          id={`${product.id}-title`}
          className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-800 transition-colors"
        >
          {product.title}
        </h3>
        <p
          id={`${product.id}-subtitle`}
          className="text-sm text-slate-500 leading-relaxed mb-4"
        >
          {product.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-5">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors group/link"
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  )
}

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">
            Our Product Line
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Engineered for Excellence
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            From compact workshop folders to heavy-duty industrial machines,
            we offer a complete range of sheet metal folding solutions.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
