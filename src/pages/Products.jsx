import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, ChevronRight, Filter } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = ['All', 'Double Folding Machine', 'Sheet Metal Folder', 'Metal Folding Machine']

const products = [
  {
    id: 'am-df-3200',
    title: 'AM-DF 3200',
    category: 'Double Folding Machine',
    subtitle: 'Double Folder — 3200mm',
    desc: 'Our flagship double folding machine delivers 3200mm bending length with 0.01mm repeatability. The dual-beam design allows simultaneous upper and lower folding for maximum throughput.',
    specs: [
      { label: 'Bending Length', value: '3200 mm' },
      { label: 'Sheet Thickness', value: '0.5 – 8 mm' },
      { label: 'Repeatability', value: '±0.01 mm' },
      { label: 'Drive System', value: 'Servo-Electric' },
    ],
    features: ['Dual-beam simultaneous folding', 'Automatic angle correction', 'Touch-screen HMI control', 'Quick-change tooling system'],
    badge: 'Best Seller',
    titleId: 'prod-title-am-df-3200',
    descId: 'prod-desc-am-df-3200',
  },
  {
    id: 'am-df-2500',
    title: 'AM-DF 2500',
    category: 'Double Folding Machine',
    subtitle: 'Double Folder — 2500mm',
    desc: 'Compact double folding machine ideal for workshops with limited space. Same dual-beam precision as its larger sibling in a smaller footprint.',
    specs: [
      { label: 'Bending Length', value: '2500 mm' },
      { label: 'Sheet Thickness', value: '0.5 – 6 mm' },
      { label: 'Repeatability', value: '±0.01 mm' },
      { label: 'Drive System', value: 'Servo-Electric' },
    ],
    features: ['Space-efficient design', 'Dual-beam operation', 'Programmable bend sequences', 'LED-lit work area'],
    badge: 'Compact',
    titleId: 'prod-title-am-df-2500',
    descId: 'prod-desc-am-df-2500',
  },
  {
    id: 'am-sf-3200',
    title: 'AM-SF 3200',
    category: 'Sheet Metal Folder',
    subtitle: 'Sheet Metal Folder — 3200mm',
    desc: 'Versatile sheet metal folder engineered for medium-to-large scale fabrication. Handles a wide range of materials including stainless steel, aluminum, and copper.',
    specs: [
      { label: 'Bending Length', value: '3200 mm' },
      { label: 'Sheet Thickness', value: '0.4 – 6 mm' },
      { label: 'Max Bend Angle', value: '145°' },
      { label: 'Clamping Force', value: '200 kN' },
    ],
    features: ['Multi-radius bending capability', 'Crown compensation system', 'Material library (50+ presets)', 'Barcode job loading'],
    badge: 'Versatile',
    titleId: 'prod-title-am-sf-3200',
    descId: 'prod-desc-am-sf-3200',
  },
  {
    id: 'am-sf-2000',
    title: 'AM-SF 2000',
    category: 'Sheet Metal Folder',
    subtitle: 'Sheet Metal Folder — 2000mm',
    desc: 'Entry-level sheet metal folder that does not compromise on quality. Perfect for small shops, HVAC contractors, and architectural metalwork.',
    specs: [
      { label: 'Bending Length', value: '2000 mm' },
      { label: 'Sheet Thickness', value: '0.3 – 4 mm' },
      { label: 'Max Bend Angle', value: '135°' },
      { label: 'Clamping Force', value: '120 kN' },
    ],
    features: ['Foot-pedal operation', 'Manual back gauge', 'Compact benchtop design', 'Low maintenance'],
    badge: 'Value',
    titleId: 'prod-title-am-sf-2000',
    descId: 'prod-desc-am-sf-2000',
  },
  {
    id: 'am-mf-4000',
    title: 'AM-MF 4000',
    category: 'Metal Folding Machine',
    subtitle: 'Metal Folding Machine — 4000mm',
    desc: 'Heavy-duty metal folding machine built for the toughest industrial applications. 4000mm capacity with servo-electric drive and automated material handling.',
    specs: [
      { label: 'Bending Length', value: '4000 mm' },
      { label: 'Sheet Thickness', value: '0.8 – 12 mm' },
      { label: 'Repeatability', value: '±0.02 mm' },
      { label: 'Drive System', value: 'Hybrid Servo-Hydraulic' },
    ],
    features: ['Automated sheet loading', 'Laser angle measurement', 'Robotic part handling ready', 'Industry 4.0 connectivity'],
    badge: 'Premium',
    titleId: 'prod-title-am-mf-4000',
    descId: 'prod-desc-am-mf-4000',
  },
  {
    id: 'am-mf-3200p',
    title: 'AM-MF 3200P',
    category: 'Metal Folding Machine',
    subtitle: 'Metal Folder Machine — 3200mm Pro',
    desc: 'Professional-grade metal folder machine with advanced CNC controls. Designed for high-mix, low-volume production with rapid changeover.',
    specs: [
      { label: 'Bending Length', value: '3200 mm' },
      { label: 'Sheet Thickness', value: '0.5 – 10 mm' },
      { label: 'Repeatability', value: '±0.015 mm' },
      { label: 'Drive System', value: 'Full Servo-Electric' },
    ],
    features: ['Offline programming software', 'Automatic tool recognition', 'Bend simulation & collision detection', 'USB & network job import'],
    badge: 'Pro',
    titleId: 'prod-title-am-mf-3200p',
    descId: 'prod-desc-am-mf-3200p',
  },
]

function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-gold-200 hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          data-strk-img-id={`prod-img-${product.id}`}
          data-strk-img={`[${product.descId}] [${product.titleId}] sheet metal folding machine industrial`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gold-500 text-white text-xs font-semibold rounded-full shadow-md">
            {product.badge}
          </span>
        </div>
      </div>

      <div className="p-6 lg:p-8">
        <span className="text-gold-600 text-xs font-semibold uppercase tracking-wider">
          {product.subtitle}
        </span>
        <h3 id={product.titleId} className="mt-2 text-2xl font-display font-bold text-navy-900">
          {product.title}
        </h3>
        <p id={product.descId} className="mt-3 text-sm text-slate-500 leading-relaxed">
          {product.desc}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {product.specs.map((spec) => (
            <div key={spec.label} className="bg-slate-50 rounded-lg p-3">
              <div className="text-xs text-slate-400 uppercase tracking-wider">{spec.label}</div>
              <div className="mt-1 text-sm font-semibold text-navy-900">{spec.value}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-navy-800 hover:text-gold-600 transition-colors"
        >
          {expanded ? 'Hide' : 'Show'} Features
          <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`} />
        </button>

        {expanded && (
          <ul className="mt-3 space-y-2 animate-in slide-in-from-top-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        )}

        <Link
          to="/contact"
          className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-800 hover:bg-navy-900 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
        >
          Request a Quote
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default function Products() {
  const containerRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory)

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [activeCategory])

  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-wider">Our Catalog</span>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
            Metal Folding Machines
          </h1>
          <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">
            Double folders, sheet metal folders, and metal folding machines engineered for precision, speed, and durability.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-16 bg-white" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <Filter className="w-5 h-5 text-slate-400" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-400">
              No products found in this category.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900">
            Need a Custom Configuration?
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Our engineering team can design a machine tailored to your exact specifications.
            Contact us to discuss your requirements.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-gold-500/25"
          >
            Talk to an Engineer
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
