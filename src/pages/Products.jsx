import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    tagline: 'Maximum throughput for industrial-scale production',
    description: 'The ARTITECT AFD-5000 Double Folding Machine is our premier solution for high-volume sheet metal fabrication. Featuring a dual-action folding beam, this machine performs two precise folds in a single cycle — dramatically reducing production time while maintaining micron-level accuracy.',
    specs: [
      'Max sheet width: 3200mm',
      'Material thickness: 0.5mm – 3.2mm',
      'Fold angle range: 0° – 135°',
      'Dual-beam synchronized folding',
      'CNC programmable with touchscreen interface',
      'Auto sheet clamping & positioning',
    ],
    imgId: 'prod-double-fold-j1k2l3',
    titleId: 'products-double-fold-title',
    descId: 'products-double-fold-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    tagline: 'Versatile precision for diverse fabrication needs',
    description: 'The ARTITECT SMF-3000 Sheet Metal Folder offers unmatched versatility for workshops handling varied projects. Its adaptive clamping system and programmable back gauge make it ideal for both prototype development and medium-batch production runs.',
    specs: [
      'Max sheet width: 2500mm',
      'Material thickness: 0.4mm – 2.5mm',
      'Fold angle range: 0° – 135°',
      'Segmented clamping tools included',
      'Servo-driven back gauge (0.01mm resolution)',
      'User-friendly control panel with memory presets',
    ],
    imgId: 'prod-sheet-folder-m4n5o6',
    titleId: 'products-sheet-folder-title',
    descId: 'products-sheet-folder-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    tagline: 'Compact, robust, and workshop-ready',
    description: 'The ARTITECT MFM-1500 Metal Folder Machine brings industrial folding capability to smaller workshops. Despite its compact footprint, it delivers the same build quality and folding precision as our larger machines, with an intuitive manual/semi-automatic operation mode.',
    specs: [
      'Max sheet width: 1500mm',
      'Material thickness: 0.4mm – 2.0mm',
      'Fold angle range: 0° – 135°',
      'Manual and semi-automatic modes',
      'Heavy-duty cast iron frame',
      'Quick-change folding blade system',
    ],
    imgId: 'prod-metal-folder-p7q8r9',
    titleId: 'products-metal-folder-title',
    descId: 'products-metal-folder-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page header */}
      <section className="bg-brand-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Our Products
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Discover our complete range of sheet metal folding machines — from compact 
            workshop folders to industrial double folding systems.
          </p>
        </div>
      </section>

      {/* Product list */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2">
                    {product.tagline}
                  </p>
                  <h2 id={product.titleId} className="text-2xl md:text-3xl font-bold text-brand-primary mb-4">
                    {product.title}
                  </h2>
                  <p id={product.descId} className="text-slate-500 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/about#contact"
                    className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-dark text-white font-medium px-6 py-3 rounded-md transition-colors"
                  >
                    Request Pricing
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <img
                    alt={product.title}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-primary tracking-tight">
            Need help choosing the right machine?
          </h2>
          <p className="mt-3 text-slate-500">
            Our experts can help you find the perfect folding solution for your specific needs.
          </p>
          <Link
            to="/about#contact"
            className="inline-flex items-center gap-2 mt-6 bg-brand-accent hover:bg-brand-accent-hover text-brand-dark font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Talk to an Expert
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
