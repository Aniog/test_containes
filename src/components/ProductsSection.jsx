import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description:
      'High-capacity double folding system delivering consistent, precise bends for large-scale industrial operations.',
    imgId: 'product-double-folding',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description:
      'Compact yet powerful double folder designed for workshops requiring versatility without sacrificing accuracy.',
    imgId: 'product-double-folder',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description:
      'Robust sheet metal folder built for everyday fabrication tasks with ergonomic controls and quick setup.',
    imgId: 'product-sheet-metal-folder',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description:
      'Fully automated sheet metal folding machine with programmable back gauges and hydraulic drive for maximum throughput.',
    imgId: 'product-sheet-metal-folding',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description:
      'Versatile metal folder handling a wide range of gauges and materials with minimal tooling changes.',
    imgId: 'product-metal-folder',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description:
      'Heavy-duty metal folder machine engineered for continuous production environments and tight tolerances.',
    imgId: 'product-metal-folder-machine',
  },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      id="products"
      className="py-24 md:py-32 bg-[#0B0F19]"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#C9A45C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Our Machines
          </span>
          <h2 className="text-[#F5F5F5] text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Sheet Metal Folding Solutions
          </h2>
          <p className="text-[#9BA3AF] text-lg max-w-2xl mx-auto">
            From compact folders to heavy-duty folding machines, ARTITECT
            MACHINERY provides equipment that meets the highest standards of
            precision and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const titleId = `product-${product.id}-title`
            const descId = `product-${product.id}-desc`

            return (
              <article
                key={product.id}
                className="group bg-[#141B2D] rounded-xl border border-[#1E293B] overflow-hidden hover:border-[#C9A45C]/40 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141B2D] to-transparent opacity-60" />
                </div>
                <div className="p-6 md:p-8">
                  <h3
                    id={titleId}
                    className="text-[#F5F5F5] text-xl font-bold mb-3 group-hover:text-[#C9A45C] transition-colors duration-200"
                  >
                    {product.title}
                  </h3>
                  <p id={descId} className="text-[#9BA3AF] text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
