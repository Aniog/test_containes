import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'PCBs, consumer electronics, LED lighting, sensors, and electronic assemblies.',
    imgId: 'cat-electronics-a1',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Fabrics, garments, home textiles, sportswear, and fashion accessories.',
    imgId: 'cat-textiles-b2',
    titleId: 'cat-textiles-title',
    descId: 'cat-textiles-desc',
  },
  {
    id: 'machinery',
    title: 'Machinery & Equipment',
    desc: 'Industrial machinery, CNC equipment, packaging machines, and automation systems.',
    imgId: 'cat-machinery-c3',
    titleId: 'cat-machinery-title',
    descId: 'cat-machinery-desc',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, garden tools, home decor, and building materials.',
    imgId: 'cat-home-d4',
    titleId: 'cat-home-title',
    descId: 'cat-home-desc',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'OEM parts, aftermarket components, EV parts, and automotive electronics.',
    imgId: 'cat-auto-e5',
    titleId: 'cat-auto-title',
    descId: 'cat-auto-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, printing materials, and eco-friendly packaging solutions.',
    imgId: 'cat-packaging-f6',
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
            Products We Source
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            From consumer goods to industrial equipment, we source across a wide range of product categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-lg font-semibold text-primary mb-2">{cat.title}</h3>
                <p id={cat.descId} className="text-slate-600 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
          >
            View All Product Categories
            <span className="text-accent">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
