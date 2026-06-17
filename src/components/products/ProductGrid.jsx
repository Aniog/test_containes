import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision double folding machine designed for complex sheet metal bending operations with dual-axis control.',
    imgId: 'prod-dfm-b3k9m2',
    titleId: 'prod-dfm-title',
    descId: 'prod-dfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double folder for efficient and accurate folding of large sheet metal panels in industrial applications.',
    imgId: 'prod-df-n7q4w8',
    titleId: 'prod-df-title',
    descId: 'prod-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Professional-grade sheet metal folder offering exceptional bending accuracy and repeatable results.',
    imgId: 'prod-smf-p2r6t5',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Advanced folding machine with CNC controls for automated, high-speed sheet metal processing.',
    imgId: 'prod-smfm-v8x1j3',
    titleId: 'prod-smfm-title',
    descId: 'prod-smfm-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Robust metal folder built for heavy-duty applications, delivering clean and precise folds every time.',
    imgId: 'prod-mf-k5h9d7',
    titleId: 'prod-mf-title',
    descId: 'prod-mf-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Complete metal folder machine solution with adjustable back gauge and programmable bending angles.',
    imgId: 'prod-mfm-w3y7f1',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Full-featured metal folding machine engineered for maximum productivity and minimal setup time.',
    imgId: 'prod-mdm-q9a2e6',
    titleId: 'prod-mdm-title',
    descId: 'prod-mdm-desc',
  },
]

export default function ProductGrid() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#C8973E] font-semibold text-sm tracking-widest uppercase">
            Our Products
          </span>
          <h2
            id="products-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F1B2D] mt-3 mb-5 tracking-tight"
          >
            Precision Folding Solutions
          </h2>
          <p
            id="products-subtitle"
            className="text-[#5A6577] text-lg max-w-2xl mx-auto"
          >
            From double folding machines to versatile metal folders, our product line covers every sheet metal bending need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-xl border border-[#E2E6ED] shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#E2E6ED]">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3
                  id={product.titleId}
                  className="text-lg font-bold text-[#0F1B2D] mb-2 group-hover:text-[#C8973E] transition-colors"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-[#5A6577] text-sm leading-relaxed mb-4"
                >
                  {product.description}
                </p>
                <button
                  onClick={() => {
                    const el = document.querySelector('#contact')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-1.5 text-[#C8973E] font-semibold text-sm hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
