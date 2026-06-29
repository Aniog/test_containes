import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-performance dual-axis folding system for complex metal forming operations with superior accuracy.',
    imgId: 'prod-dfm-b3k9m2',
    titleId: 'prod-dfm-title',
    descId: 'prod-dfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double-folder design enabling simultaneous bends for increased productivity and consistency.',
    imgId: 'prod-df-x7n4p1',
    titleId: 'prod-df-title',
    descId: 'prod-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Precision sheet metal folder ideal for HVAC, roofing, and general fabrication applications.',
    imgId: 'prod-smf-q2w8r5',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Automated folding machine with CNC controls for repeatable, high-tolerance sheet metal bending.',
    imgId: 'prod-smfm-j6t3v8',
    titleId: 'prod-smfm-title',
    descId: 'prod-smfm-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Robust metal folder built for heavy-duty industrial use with easy operation and minimal maintenance.',
    imgId: 'prod-mf-h9y1k4',
    titleId: 'prod-mf-title',
    descId: 'prod-mf-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Complete metal folder machine solution with adjustable back gauge and precision beam guidance.',
    imgId: 'prod-mfm-l5u7w2',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Full-range metal folding machine capable of handling various thicknesses and material types with ease.',
    imgId: 'prod-mfmch-a3d6f9',
    titleId: 'prod-mfmch-title',
    descId: 'prod-mfmch-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 lg:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">Our Products</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mt-3 mb-4">
            Precision Folding Solutions
          </h2>
          <div className="h-1 w-16 bg-gold mx-auto mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From double folding machines to versatile metal folders, we deliver equipment built for performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-lg border border-border-light overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 id={product.titleId} className="text-xl font-bold text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-gray-500 text-sm leading-relaxed">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-gold font-semibold text-sm mt-4 hover:text-gold-light transition-colors duration-300"
                >
                  Learn More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
