import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, sensors, connectors, and electronic assemblies.',
    imgId: 'products-electronics-d4e5f6',
    titleId: 'products-electronics-title',
    descId: 'products-electronics-desc',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Fabrics, garments, home textiles, sportswear, and fashion accessories.',
    imgId: 'products-textiles-g7h8i9',
    titleId: 'products-textiles-title',
    descId: 'products-textiles-desc',
  },
  {
    id: 'hardware',
    title: 'Hardware & Tools',
    desc: 'Fasteners, hand tools, power tools, locks, and metal components.',
    imgId: 'products-hardware-j1k2l3',
    titleId: 'products-hardware-title',
    descId: 'products-hardware-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, and printing materials.',
    imgId: 'products-packaging-m4n5o6',
    titleId: 'products-packaging-title',
    descId: 'products-packaging-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home',
    desc: 'Office furniture, home decor, kitchenware, and outdoor furniture.',
    imgId: 'products-furniture-p7q8r9',
    titleId: 'products-furniture-title',
    descId: 'products-furniture-desc',
  },
  {
    id: 'automotive',
    title: 'Auto Parts & Machinery',
    desc: 'Auto components, industrial machinery parts, and mechanical assemblies.',
    imgId: 'products-automotive-s1t2u3',
    titleId: 'products-automotive-title',
    descId: 'products-automotive-desc',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="products-section-title" className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">Products We Source</h2>
          <p id="products-section-desc" className="text-neutral-500 max-w-2xl mx-auto">
            We source across a wide range of product categories. Whether you need consumer goods or industrial components, we can find the right supplier.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="group rounded-lg border border-neutral-200 overflow-hidden bg-white hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-section-desc] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-base font-semibold text-neutral-800 mb-1">{cat.title}</h3>
                <p id={cat.descId} className="text-sm text-neutral-500">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium no-underline transition-colors"
          >
            View All Product Categories
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Products
