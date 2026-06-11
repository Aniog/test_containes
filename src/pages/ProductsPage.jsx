import React, { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowRight, CheckCircle, Download } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'Our flagship double folding machine delivers exceptional precision for complex sheet metal operations. Designed for high-volume production environments with automated controls and quick-change tooling.',
    features: [
      'Dual-axis folding capability',
      'Automated angle control system',
      'Quick-change tooling setup',
      'Heavy-duty steel frame construction',
      'Digital display with preset memory',
      'Safety interlock system',
    ],
    specs: {
      'Max Sheet Width': '3200mm / 126"',
      'Max Thickness': '3.0mm (mild steel)',
      'Folding Angle': '0° - 135°',
      'Power': '7.5 kW',
      'Weight': '4500 kg',
    },
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Compact and efficient double folder designed for workshops and small to medium production runs. Offers the same precision as our larger machines in a space-saving footprint.',
    features: [
      'Space-efficient design',
      'Manual and powered options',
      'Precision ground folding beam',
      'Adjustable back gauge',
      'Easy operation controls',
      'Portable base available',
    ],
    specs: {
      'Max Sheet Width': '2050mm / 81"',
      'Max Thickness': '2.0mm (mild steel)',
      'Folding Angle': '0° - 135°',
      'Power': '4.0 kW',
      'Weight': '2800 kg',
    },
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile sheet metal folder suitable for a wide range of materials and thicknesses. Ideal for HVAC, roofing, and general metal fabrication applications.',
    features: [
      'Multi-material compatibility',
      'Hydraulic clamping system',
      'CNC control option',
      'Segmented upper beam',
      'Foot pedal operation',
      'Adjustable clamping pressure',
    ],
    specs: {
      'Max Sheet Width': '3200mm / 126"',
      'Max Thickness': '4.0mm (mild steel)',
      'Folding Angle': '0° - 140°',
      'Power': '5.5 kW',
      'Weight': '3800 kg',
    },
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Professional-grade sheet metal folding machine built for demanding industrial applications. Features advanced controls and robust construction for years of reliable service.',
    features: [
      'Industrial-grade construction',
      'Programmable control system',
      'Automatic crowning compensation',
      'Quick-setup tooling',
      'Integrated safety guards',
      'Remote diagnostics capable',
    ],
    specs: {
      'Max Sheet Width': '4100mm / 161"',
      'Max Thickness': '5.0mm (mild steel)',
      'Folding Angle': '0° - 140°',
      'Power': '11 kW',
      'Weight': '6200 kg',
    },
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Heavy-duty metal folder engineered for thick plate and structural steel applications. Built to handle the toughest materials with precision and power.',
    features: [
      'Extra-heavy frame design',
      'High-tonnage clamping',
      'Reinforced folding beam',
      'Industrial hydraulic system',
      'Wear-resistant surfaces',
      'Extended warranty available',
    ],
    specs: {
      'Max Sheet Width': '3200mm / 126"',
      'Max Thickness': '6.0mm (mild steel)',
      'Folding Angle': '0° - 135°',
      'Power': '15 kW',
      'Weight': '7500 kg',
    },
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'All-purpose metal folder machine combining versatility with precision. Suitable for job shops, fabrication centers, and custom metalwork operations.',
    features: [
      'Versatile folding profiles',
      'Easy-change tooling system',
      'Digital angle readout',
      'Manual override capability',
      'Compact footprint',
      'Low maintenance design',
    ],
    specs: {
      'Max Sheet Width': '2550mm / 100"',
      'Max Thickness': '3.5mm (mild steel)',
      'Folding Angle': '0° - 135°',
      'Power': '5.5 kW',
      'Weight': '3200 kg',
    },
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Advanced metal folding machine with state-of-the-art controls and precision engineering. The perfect choice for manufacturers requiring consistent, high-quality results.',
    features: [
      'Advanced CNC controls',
      'Automatic back gauge',
      'Touch screen interface',
      'Program storage (100+ programs)',
      'Self-diagnostic system',
      'Energy-efficient operation',
    ],
    specs: {
      'Max Sheet Width': '3200mm / 126"',
      'Max Thickness': '4.0mm (mild steel)',
      'Folding Angle': '0° - 140°',
      'Power': '7.5 kW',
      'Weight': '4800 kg',
    },
  },
]

function ProductCard({ product, index, containerRef }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      id={`product-card-${product.id}`}
      className={`bg-white border border-slate-200 hover:shadow-xl transition-all duration-300 ${
        isExpanded ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          alt={product.title}
          data-strk-img-id={`product-${product.id}-img-j1k2l3`}
          data-strk-img={`[${product.id}-desc] [${product.id}-title] [products-page-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 id={`${product.id}-title`} className="text-xl font-bold uppercase tracking-wide text-slate-900 mb-3">
          {product.title}
        </h3>
        <p id={`${product.id}-desc`} className="text-slate-600 text-sm leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Features Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-amber-600 hover:text-amber-700 text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2 transition-colors"
        >
          {isExpanded ? 'Hide Details' : 'View Details'}
          <ArrowRight size={16} className={`transition-transform ${isExpanded ? '-rotate-90' : 'rotate-0'}`} />
        </button>

        {isExpanded && (
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900 mb-2">Key Features</h4>
              <ul className="space-y-1">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle size={14} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900 mb-2">Specifications</h4>
              <dl className="space-y-1">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <dt className="text-slate-500">{key}</dt>
                    <dd className="text-slate-900 font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <a href="/contact" className="btn-primary w-full text-center text-xs">
              Request Quote <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProductsPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main ref={containerRef}>
        {/* Page Header */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 id="products-page-title" className="section-title mb-4">Our Products</h1>
            <p className="section-subtitle">
              Explore our complete range of metal folding machines, engineered for precision and built for performance.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="section-title mb-4">Need Help Choosing?</h2>
            <p className="section-subtitle mx-auto mb-8">
              Our technical team can help you select the right machine for your specific application and material requirements.
            </p>
            <a href="/contact" className="btn-primary">
              Contact Our Experts <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
