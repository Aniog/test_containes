import React, { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-performance dual-axis folding system for complex metal forming operations. Delivers consistent, repeatable bends with minimal setup time.',
    features: ['Dual-axis operation', 'CNC controlled', 'Auto tool change'],
    imgId: 'prod-dfm-b2k9m',
    titleId: 'prod-dfm-title',
    descId: 'prod-dfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double folder designed for high-volume production environments. Handles a wide range of material thicknesses with precision.',
    features: ['High-volume output', 'Multi-thickness capable', 'Quick adjust'],
    imgId: 'prod-df-x4n7p',
    titleId: 'prod-df-title',
    descId: 'prod-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Precision sheet metal folder for clean, accurate bends. Ideal for HVAC, enclosure, and general sheet metal fabrication.',
    features: ['Precision bending', 'Clean fold lines', 'Versatile tooling'],
    imgId: 'prod-smf-q8r3w',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Automated folding machine with advanced CNC controls for complex sheet metal profiles. Reduces cycle times by up to 40%.',
    features: ['CNC automation', '40% faster cycles', 'Complex profiles'],
    imgId: 'prod-smfm-t5v1y',
    titleId: 'prod-smfm-title',
    descId: 'prod-smfm-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Robust metal folder built for demanding industrial applications. Heavy-duty construction ensures years of reliable service.',
    features: ['Heavy-duty build', 'Industrial grade', 'Low maintenance'],
    imgId: 'prod-mf-u6z2a',
    titleId: 'prod-mf-title',
    descId: 'prod-mf-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Complete metal folder solution with integrated back gauge and safety systems. Perfect for job shops and production facilities.',
    features: ['Integrated back gauge', 'Safety systems', 'Job shop ready'],
    imgId: 'prod-mfm-w7c4e',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Our flagship folding machine with intelligent bend sequencing and real-time monitoring. The ultimate in folding technology.',
    features: ['Smart sequencing', 'Real-time monitoring', 'Flagship model'],
    imgId: 'prod-mfm2-d9f6g',
    titleId: 'prod-mfm2-title',
    descId: 'prod-mfm2-desc',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-500 text-xs font-semibold tracking-wider uppercase">
            Our Product Line
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
            Precision Folding Solutions
          </h2>
          <p className="mt-4 text-slate-500 text-lg leading-relaxed">
            From double folding machines to metal folder machines, our comprehensive range delivers unmatched precision and reliability for every application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 md:p-8">
                <h3
                  id={product.titleId}
                  className="text-lg font-bold text-navy-900 group-hover:text-steel-500 transition-colors"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="mt-2 text-sm text-slate-500 leading-relaxed"
                >
                  {product.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-block bg-slate-50 text-slate-600 text-xs font-medium px-3 py-1 rounded-sm border border-slate-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="mt-5 inline-flex items-center gap-1.5 text-steel-500 text-sm font-semibold hover:text-steel-400 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
