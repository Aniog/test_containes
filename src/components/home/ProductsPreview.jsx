import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Ruler, Shield, Zap, Clock } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    desc: 'High-capacity precision folding with dual-action mechanics for maximum throughput.',
    iconId: 'prod-preview-icon-1',
    titleId: 'prod-preview-title-1',
    descId: 'prod-preview-desc-1',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    desc: 'Compact yet powerful dual-folder unit ideal for medium-scale operations.',
    iconId: 'prod-preview-icon-2',
    titleId: 'prod-preview-title-2',
    descId: 'prod-preview-desc-2',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    desc: 'Versatile folder designed for precision bends in sheet metal fabrication.',
    iconId: 'prod-preview-icon-3',
    titleId: 'prod-preview-title-3',
    descId: 'prod-preview-desc-3',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    desc: 'Industrial-grade folding automation with programmable controls.',
    iconId: 'prod-preview-icon-4',
    titleId: 'prod-preview-title-4',
    descId: 'prod-preview-desc-4',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    desc: 'Robust manual and CNC options for all metal folding requirements.',
    iconId: 'prod-preview-icon-5',
    titleId: 'prod-preview-title-5',
    descId: 'prod-preview-desc-5',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    desc: 'Automated metal folder with servo-driven precision and safety features.',
    iconId: 'prod-preview-icon-6',
    titleId: 'prod-preview-title-6',
    descId: 'prod-preview-desc-6',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    desc: 'Flagship folding system delivering unmatched accuracy and speed.',
    iconId: 'prod-preview-icon-7',
    titleId: 'prod-preview-title-7',
    descId: 'prod-preview-desc-7',
  },
]

export default function ProductsPreview() {
  const containerRef = useRef(null)

  return (
    <section className="py-20 md:py-28 bg-slate-900" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-18">
          <span className="text-amber-500 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            Our Catalog
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Premium Machinery
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            A complete range of folding machines engineered for precision, reliability, and industrial performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="group relative bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-amber-600/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-600/5"
            >
              {/* Image area */}
              <div className="relative h-48 overflow-hidden">
                <img
                  data-strk-img-id={product.iconId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3
                  id={product.titleId}
                  className="text-lg font-semibold text-white mb-2 group-hover:text-amber-500 transition-colors"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-slate-400 text-sm leading-relaxed mb-4"
                >
                  {product.desc}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-amber-500 text-sm font-medium hover:text-amber-400 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10 md:mt-14">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3 border border-slate-600 text-slate-300 rounded-lg hover:border-amber-600 hover:text-white transition-all duration-300 text-sm font-medium"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
