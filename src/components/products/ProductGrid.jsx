import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision double folding machine designed for complex sheet metal bending operations with dual-axis control.',
    imgId: 'prod-dfm-a1b2',
    titleId: 'prod-dfm-title',
    descId: 'prod-dfm-desc',
    features: ['Dual-axis precision', 'CNC controlled', 'High-speed operation'],
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double folder for efficient metal forming, delivering consistent folds across a wide range of material thicknesses.',
    imgId: 'prod-df-c3d4',
    titleId: 'prod-df-title',
    descId: 'prod-df-desc',
    features: ['Wide material range', 'Consistent results', 'Easy setup'],
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Professional-grade sheet metal folder offering exceptional accuracy for workshop and production environments.',
    imgId: 'prod-smf-e5f6',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
    features: ['Professional grade', 'Workshop ready', 'Exceptional accuracy'],
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Advanced folding machine with automated controls for high-volume sheet metal production requirements.',
    imgId: 'prod-smfm-g7h8',
    titleId: 'prod-smfm-title',
    descId: 'prod-smfm-desc',
    features: ['Automated controls', 'High-volume capable', 'Production grade'],
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Reliable metal folder built for daily industrial use, combining robust construction with intuitive operation.',
    imgId: 'prod-mf-i9j0',
    titleId: 'prod-mf-title',
    descId: 'prod-mf-desc',
    features: ['Robust construction', 'Intuitive operation', 'Industrial duty'],
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Complete metal folder machine solution with integrated safety systems and precision beam guidance.',
    imgId: 'prod-mfm-k1l2',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
    features: ['Safety integrated', 'Beam guidance', 'Complete solution'],
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Flagship metal folding machine delivering maximum versatility and precision for the most demanding applications.',
    imgId: 'prod-mfm2-m3n4',
    titleId: 'prod-mfm2-title',
    descId: 'prod-mfm2-desc',
    features: ['Maximum versatility', 'Flagship precision', 'Demanding applications'],
  },
]

export default function ProductGrid() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-gold" />
            <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">Our Products</span>
            <div className="w-8 h-[2px] bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Precision Folding Solutions
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            From double folding machines to versatile metal folders, our product line covers every sheet metal forming need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-border transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-steel/90 text-white text-[10px] tracking-wider uppercase px-3 py-1 rounded font-medium">
                    {product.features[0]}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 id={product.titleId} className="text-lg font-bold text-charcoal mb-2 group-hover:text-steel transition-colors">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-muted text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-[11px] tracking-wide uppercase font-medium text-steel bg-steel/5 border border-steel/15 px-2.5 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
