import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description:
      'High-performance double folding machine with dual bending beams for complex sheet metal profiles. Delivers consistent, repeatable folds with minimal setup time.',
    features: ['Dual bending beams', 'CNC control', 'Auto back gauge'],
    imgId: 'prod-dfm-b3k9m',
    titleId: 'prod-dfm-title',
    descId: 'prod-dfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description:
      'Versatile double folder designed for high-volume production. Features synchronized upper and lower clamping for precise, symmetrical folds every time.',
    features: ['Synchronized clamping', 'Heavy-duty frame', 'Quick change tooling'],
    imgId: 'prod-df-x7r2n',
    titleId: 'prod-df-title',
    descId: 'prod-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description:
      'Precision sheet metal folder ideal for HVAC, roofing, and general fabrication. Easy-to-use manual or powered options for workshops of any size.',
    features: ['Manual & powered options', 'Adjustable stop angles', 'Compact design'],
    imgId: 'prod-smf-q4w8t',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description:
      'Automated sheet metal folding machine with programmable bend sequences. Reduces cycle times and operator fatigue while maintaining tight tolerances.',
    features: ['Programmable sequences', 'Touch screen HMI', 'Safety light curtains'],
    imgId: 'prod-smfm-j5v1p',
    titleId: 'prod-smfm-title',
    descId: 'prod-smfm-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description:
      'Robust metal folder built for daily production use. Handles a wide range of material thicknesses with consistent bending quality across the full length.',
    features: ['Wide thickness range', 'Full-length bending', 'Low maintenance'],
    imgId: 'prod-mf-h9d6y',
    titleId: 'prod-mf-title',
    descId: 'prod-mf-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description:
      'Industrial-grade metal folder machine with hydraulic clamping and folding. Engineered for heavy-gauge materials and continuous production environments.',
    features: ['Hydraulic clamping', 'Heavy gauge capacity', 'Continuous operation'],
    imgId: 'prod-mfm-u2e5a',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description:
      'Advanced metal folding machine combining speed and precision. Features intelligent bend angle compensation and real-time monitoring for zero-defect production.',
    features: ['Angle compensation', 'Real-time monitoring', 'IoT ready'],
    imgId: 'prod-mfm2-w8c3f',
    titleId: 'prod-mfm2-title',
    descId: 'prod-mfm2-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" className="py-20 md:py-28 bg-offwhite" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
            Our Products
          </span>
          <h2
            id="products-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-4"
          >
            Precision Folding Solutions
          </h2>
          <p className="text-steel-600 max-w-2xl mx-auto text-lg">
            From manual folders to fully automated folding systems, we offer the
            complete range for every metalworking need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-steel-200/50 hover:border-gold-500/30"
            >
              <div className="relative h-52 overflow-hidden bg-navy-900">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              </div>

              <div className="p-6">
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-dark mb-2 group-hover:text-gold-500 transition-colors"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-steel-600 text-sm leading-relaxed mb-4"
                >
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.features.map((feat) => (
                    <span
                      key={feat}
                      className="bg-gold-500/10 text-gold-500 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-1 text-gold-500 hover:text-gold-400 font-semibold text-sm transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
