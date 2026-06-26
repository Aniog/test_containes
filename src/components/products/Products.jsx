import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-performance dual-action folding machine capable of simultaneous bends. Ideal for high-volume production with consistent accuracy.',
    imgId: 'prod-dfm-a1b2c3',
    titleId: 'prod-dfm-title',
    descId: 'prod-dfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double folder designed for complex bending operations. Delivers precise folds on a wide range of metal thicknesses.',
    imgId: 'prod-df-d4e5f6',
    titleId: 'prod-df-title',
    descId: 'prod-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Reliable sheet metal folder for clean, accurate bends. Engineered for ease of use with intuitive controls and quick setup.',
    imgId: 'prod-smf-g7h8i9',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Advanced folding machine with CNC precision. Handles complex profiles and long parts with exceptional repeatability.',
    imgId: 'prod-smfm-j1k2l3',
    titleId: 'prod-smfm-title',
    descId: 'prod-smfm-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Robust metal folder built for daily industrial use. Combines strength with precision for a wide variety of folding tasks.',
    imgId: 'prod-mf-m4n5o6',
    titleId: 'prod-mf-title',
    descId: 'prod-mf-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Fully automated metal folder machine with programmable bend sequences. Maximizes throughput while maintaining tight tolerances.',
    imgId: 'prod-mfm-p7q8r9',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Our flagship folding machine with intelligent control systems. Delivers superior fold quality across all metal types and gauges.',
    imgId: 'prod-mfmach-s1t2u3',
    titleId: 'prod-mfmach-title',
    descId: 'prod-mfmach-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C8963E] mb-3">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F1B2D] tracking-tight mb-4">
            Precision Folding Solutions
          </h2>
          <p className="max-w-2xl mx-auto text-[#5A6275] leading-relaxed">
            From manual folders to fully automated CNC folding systems, we offer a comprehensive range of metal folding equipment to meet every production requirement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-xl border border-[#E2E5EB] overflow-hidden hover:shadow-lg hover:border-[#2E7DBF]/30 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#E2E5EB]">
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
              <div className="p-5">
                <h3
                  id={product.titleId}
                  className="text-base font-bold text-[#0F1B2D] mb-2 group-hover:text-[#2E7DBF] transition-colors"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-sm text-[#5A6275] leading-relaxed"
                >
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
