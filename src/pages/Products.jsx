import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react'

const productCategories = [
  { id: 'all', name: 'All Machines' },
  { id: 'double-folding', name: 'Double Folding' },
  { id: 'single-folding', name: 'Single Folding' },
  { id: 'specialty', name: 'Specialty' },
]

const products = [
  {
    id: 'df-3200',
    category: 'double-folding',
    name: 'DF-3200 Double Folding Machine',
    subtitle: 'Our best-selling double folder for medium to heavy gauge work',
    description: 'The DF-3200 is the industry benchmark for double folding performance. With a 3200mm bending length and 6mm capacity, this machine handles a wide range of sheet metal applications with exceptional precision. The dual-blade system enables complex bends in a single setup, dramatically reducing production time.',
    features: [
      'Dual-blade precision folding system',
      'CNC control with touch screen interface',
      'Automatic back gauge with 1000mm travel',
      'Quick-change tooling system',
      'LED work area lighting',
      'Safety light curtain protection',
    ],
    specs: {
      'Max Sheet Thickness': '6mm (mild steel)',
      'Bending Length': '3200mm',
      'Back Gauge Travel': '1000mm',
      'Motor Power': '7.5kW',
      'Machine Weight': '4,200kg',
      'Control System': 'CNC Siemens',
    },
    imgId: 'product-df3200',
    titleId: 'product-df3200-title',
    descId: 'product-df3200-desc',
    featured: true,
  },
  {
    id: 'df-4000',
    category: 'double-folding',
    name: 'DF-4000 Heavy Duty Double Folder',
    subtitle: 'Maximum capacity double folding for thick materials',
    description: 'For the most demanding applications, the DF-4000 delivers unparalleled power and precision. Capable of handling 10mm mild steel across a full 4000mm bending length, this machine is built for heavy industrial fabrication shops that require maximum throughput.',
    features: [
      'Heavy-duty dual-blade system',
      'Advanced CNC with 3D visualization',
      'Hydraulic clamping with proportional control',
      'Automatic sheet thickness detection',
      'Integrated crowning system',
      'Remote diagnostics capability',
    ],
    specs: {
      'Max Sheet Thickness': '10mm (mild steel)',
      'Bending Length': '4000mm',
      'Back Gauge Travel': '1200mm',
      'Motor Power': '15kW',
      'Machine Weight': '8,500kg',
      'Control System': 'CNC Delem DA-69T',
    },
    imgId: 'product-df4000',
    titleId: 'product-df4000-title',
    descId: 'product-df4000-desc',
    featured: false,
  },
  {
    id: 'df-2500',
    category: 'double-folding',
    name: 'DF-2500 Compact Double Folder',
    subtitle: 'Space-saving double folding for smaller workshops',
    description: 'The DF-2500 brings professional double folding capability to workshops with limited floor space. Despite its compact footprint, this machine delivers the same precision and build quality as our larger models, making it ideal for smaller fabrication shops and maintenance departments.',
    features: [
      'Compact dual-blade design',
      'Manual or CNC control options',
      'Quick setup changeover',
      'Energy-efficient servo drives',
      'Integrated material support table',
      'Low noise operation',
    ],
    specs: {
      'Max Sheet Thickness': '4mm (mild steel)',
      'Bending Length': '2500mm',
      'Back Gauge Travel': '800mm',
      'Motor Power': '4kW',
      'Machine Weight': '2,800kg',
      'Control System': 'CNC or Manual',
    },
    imgId: 'product-df2500',
    titleId: 'product-df2500-title',
    descId: 'product-df2500-desc',
    featured: false,
  },
  {
    id: 'smf-3200',
    category: 'single-folding',
    name: 'SMF-3200 Sheet Metal Folder',
    subtitle: 'Professional single-blade sheet metal folding',
    description: 'The SMF-3200 is a versatile single-blade sheet metal folder designed for general-purpose bending operations. Its intuitive controls and fast setup make it the go-to choice for job shops that handle diverse work orders throughout the day.',
    features: [
      'Single precision blade system',
      'Fast cycle time for high throughput',
      'Programmable angle control',
      'Manual back gauge with digital readout',
      'Tool-free blade changeover',
      'Integrated bend allowance calculator',
    ],
    specs: {
      'Max Sheet Thickness': '4mm (mild steel)',
      'Bending Length': '3200mm',
      'Back Gauge Travel': '800mm',
      'Motor Power': '5.5kW',
      'Machine Weight': '3,200kg',
      'Control System': 'CNC ESA',
    },
    imgId: 'product-smf3200',
    titleId: 'product-smf3200-title',
    descId: 'product-smf3200-desc',
    featured: false,
  },
  {
    id: 'smf-2000',
    category: 'single-folding',
    name: 'SMF-2000 Metal Folder Machine',
    subtitle: 'Entry-level metal folder with professional results',
    description: 'Perfect for startups and small businesses, the SMF-2000 offers reliable metal folding at an accessible price point. Easy to learn and operate, this machine produces consistent, high-quality bends from day one.',
    features: [
      'Simple, reliable folding mechanism',
      'Manual operation with digital angle display',
      'Adjustable bending beam',
      'Compact and portable design',
      'Low power requirements',
      'Minimal maintenance needs',
    ],
    specs: {
      'Max Sheet Thickness': '2.5mm (mild steel)',
      'Bending Length': '2000mm',
      'Back Gauge Travel': '600mm',
      'Motor Power': '2.2kW',
      'Machine Weight': '1,500kg',
      'Control System': 'Manual',
    },
    imgId: 'product-smf2000',
    titleId: 'product-smf2000-title',
    descId: 'product-smf2000-desc',
    featured: false,
  },
  {
    id: 'mfm-4000',
    category: 'specialty',
    name: 'MFM-4000 Industrial Metal Folding Machine',
    subtitle: 'Heavy-duty metal folding for industrial applications',
    description: 'The MFM-4000 is our most powerful metal folding machine, designed for heavy industrial applications that demand maximum force and precision. From structural steelwork to large HVAC components, this machine handles it all with ease.',
    features: [
      'Extra-rigid frame construction',
      'High-force hydraulic drive system',
      'Multi-axis CNC control',
      'Automatic tool compensation',
      'Integrated safety systems',
      'Predictive maintenance alerts',
    ],
    specs: {
      'Max Sheet Thickness': '12mm (mild steel)',
      'Bending Length': '4000mm',
      'Back Gauge Travel': '1500mm',
      'Motor Power': '22kW',
      'Machine Weight': '12,000kg',
      'Control System': 'CNC Cybelec',
    },
    imgId: 'product-mfm4000',
    titleId: 'product-mfm4000-title',
    descId: 'product-mfm4000-desc',
    featured: false,
  },
  {
    id: 'mf-auto',
    category: 'specialty',
    name: 'MF-AUTO Automated Folding Cell',
    subtitle: 'Fully automated metal folding production line',
    description: 'The MF-AUTO represents the future of metal folding. This fully automated production cell integrates sheet loading, folding, unloading, and stacking in a single continuous operation. Ideal for high-volume manufacturing environments.',
    features: [
      'Fully automated operation',
      'Robotic sheet handling',
      'In-line quality inspection',
      'Real-time production monitoring',
      'MES/ERP integration',
      'Lights-out manufacturing capable',
    ],
    specs: {
      'Max Sheet Thickness': '4mm (mild steel)',
      'Bending Length': '3200mm',
      'Cycle Time': '12 seconds per part',
      'Motor Power': '11kW',
      'Machine Weight': '15,000kg',
      'Control System': 'CNC Custom',
    },
    imgId: 'product-mfauto',
    titleId: 'product-mfauto-title',
    descId: 'product-mfauto-desc',
    featured: false,
  },
]

function ProductCard({ product, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 ${
        product.featured ? 'border-accent-300 ring-1 ring-accent-200' : 'border-steel-200 hover:border-steel-300'
      }`}
    >
      {product.featured && (
        <div className="bg-accent-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 text-center">
          Best Seller
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-steel-100">
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <h3 id={product.titleId} className="text-xl lg:text-2xl font-bold text-steel-900 mb-2">
          {product.name}
        </h3>
        <p id={product.descId} className="text-accent-500 text-sm font-medium mb-4">
          {product.subtitle}
        </p>
        <p className="text-steel-500 text-sm leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Key specs */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
            <div key={key} className="bg-steel-50 rounded-lg px-3 py-2">
              <div className="text-[11px] text-steel-400 uppercase tracking-wider font-medium">{key}</div>
              <div className="text-sm font-semibold text-steel-800 mt-0.5">{value}</div>
            </div>
          ))}
        </div>

        {/* Expandable features */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors mb-4 cursor-pointer"
        >
          {expanded ? 'Hide' : 'Show'} Features
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {expanded && (
          <div className="mb-6 space-y-2">
            {product.features.map((feature) => (
              <div key={feature} className="flex items-start gap-2 text-sm text-steel-600">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                {feature}
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t border-steel-100">
          <Link to="/contact" className="flex-1">
            <Button variant="accent" className="w-full gap-2">
              Request Quote
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const containerRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeCategory])

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Page header */}
      <section className="bg-brand-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-400 text-sm font-semibold uppercase tracking-widest">Product Catalog</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-4 mb-6">
            Our <span className="text-accent-400">Machines</span>
          </h1>
          <p className="text-brand-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Browse our complete range of double folding machines, sheet metal folders,
            and specialty metal folding equipment. Every machine is backed by our
            comprehensive warranty and global support network.
          </p>
        </div>
      </section>

      {/* Filter + Products */}
      <section ref={containerRef} className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-brand-500 text-white shadow-md'
                    : 'bg-white text-steel-600 border border-steel-200 hover:border-brand-300 hover:text-brand-500'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-steel-400 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
