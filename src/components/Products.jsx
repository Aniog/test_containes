import { useEffect, useRef, useState } from 'react'
import { ArrowRight, CheckCircle2, Zap, Shield, Gauge } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folder-pro',
    name: 'Double Folder Pro',
    series: 'DF-4000 Series',
    description: 'Our flagship double folding machine delivers unmatched precision for high-volume sheet metal fabrication. Dual folding beams work simultaneously for maximum throughput.',
    features: ['Dual-beam simultaneous folding', '0.5mm repeat accuracy', 'Auto-angle correction'],
    imageRatio: '16x9',
    icon: Zap,
    titleId: 'product-df-pro-title',
    descId: 'product-df-pro-desc',
    imgId: 'product-df-pro-img',
  },
  {
    id: 'sheet-metal-master',
    name: 'Sheet Metal Master',
    series: 'SM-6000 Series',
    description: 'Engineered for heavy-duty sheet metal folding applications. Handles materials up to 6mm thick with consistent precision across every fold.',
    features: ['6mm capacity', 'Heavy-duty frame', 'Programmable sequences'],
    imageRatio: '16x9',
    icon: Shield,
    titleId: 'product-sm-master-title',
    descId: 'product-sm-master-desc',
    imgId: 'product-sm-master-img',
  },
  {
    id: 'compact-folder',
    name: 'Compact Metal Folder',
    series: 'CF-2000 Series',
    description: 'Space-saving metal folding machine designed for workshops requiring industrial performance in a compact footprint. Perfect for small to medium production runs.',
    features: ['Compact design', 'Quick tool change', 'Digital readout standard'],
    imageRatio: '16x9',
    icon: Gauge,
    titleId: 'product-compact-title',
    descId: 'product-compact-desc',
    imgId: 'product-compact-img',
  },
]

export default function Products() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active])

  const activeProduct = products[active]
  const ActiveIcon = activeProduct.icon

  return (
    <section id="products" className="relative py-24 lg:py-32" ref={containerRef}>
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
              Our Products
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3">
              Metal Folding Machines
            </h2>
            <p className="text-steel-400 mt-4 max-w-xl text-lg">
              Every ARTITECT machine is built to deliver consistent, precise folds
              across thousands of production cycles.
            </p>
          </div>
        </div>
      </div>

      {/* Product tabs */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2" role="tablist">
          {products.map((product, idx) => (
            <button
              key={product.id}
              role="tab"
              aria-selected={active === idx}
              onClick={() => setActive(idx)}
              className={`px-6 py-3 text-sm font-medium rounded-sm whitespace-nowrap transition-all ${
                active === idx
                  ? 'bg-accent-500 text-brand-900'
                  : 'bg-surface-card text-steel-400 hover:text-steel-200 hover:bg-surface-elevated'
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Active product detail */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative rounded-sm overflow-hidden aspect-[16/9] bg-surface-card">
            <img
              alt={activeProduct.name}
              data-strk-img-id={activeProduct.imgId}
              data-strk-img={`[${activeProduct.descId}] [${activeProduct.titleId}] sheet metal folding machine industrial`}
              data-strk-img-ratio={activeProduct.imageRatio}
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent" />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-accent-500/10 rounded-sm flex items-center justify-center">
                  <ActiveIcon className="w-5 h-5 text-accent-400" />
                </div>
                <span className="text-steel-500 text-sm font-medium tracking-wider uppercase">
                  {activeProduct.series}
                </span>
              </div>
              <h3 id={activeProduct.titleId} className="font-display text-3xl lg:text-4xl font-bold text-white">
                {activeProduct.name}
              </h3>
              <p id={activeProduct.descId} className="text-steel-300 mt-4 text-lg leading-relaxed">
                {activeProduct.description}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {activeProduct.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span className="text-steel-200">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-brand-900 font-semibold rounded-sm hover:bg-accent-400 transition-all group"
              >
                Request Specs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-steel-600 text-steel-200 font-medium rounded-sm hover:border-steel-400 hover:text-white transition-all"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>

        {/* Product cards grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {products.map((product, idx) => {
            const Icon = product.icon
            return (
              <div
                key={product.id}
                onClick={() => setActive(idx)}
                className={`group p-6 rounded-sm cursor-pointer transition-all border ${
                  active === idx
                    ? 'bg-surface-elevated border-accent-500/30'
                    : 'bg-surface-card border-transparent hover:bg-surface-elevated hover:border-steel-600/30'
                }`}
              >
                <div className="w-12 h-12 bg-accent-500/10 rounded-sm flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent-400" />
                </div>
                <h4 className="font-display text-xl font-bold text-white mb-2">{product.name}</h4>
                <p className="text-steel-400 text-sm leading-relaxed">{product.description.slice(0, 100)}...</p>
                <div className="mt-4 text-accent-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
