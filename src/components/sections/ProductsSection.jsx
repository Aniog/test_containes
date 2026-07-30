import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  { name: 'Electronics & Components', desc: 'PCBs, cables, chargers, consumer electronics, and accessories.', imgId: 'product-electronics-3m4n5o' },
  { name: 'Machinery & Industrial Parts', desc: 'Custom metal parts, tooling, hardware, and industrial equipment.', imgId: 'product-machinery-4n5o6p' },
  { name: 'Packaging & Print Materials', desc: 'Custom boxes, labels, bags, and retail-ready packaging.', imgId: 'product-packaging-5o6p7q' },
  { name: 'Textiles & Apparel', desc: 'Fabrics, garments, bags, and fashion accessories.', imgId: 'product-textiles-6p7q8r' },
  { name: 'Home & Hardware', desc: 'Furniture hardware, kitchenware, lighting, and household goods.', imgId: 'product-home-hardware-7q8r9s' },
  { name: 'Beauty & Personal Care', desc: 'Cosmetic packaging, skincare accessories, and personal care items.', imgId: 'product-beauty-8r9s0t' },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="section-label">Products We Source</span>
          <h2 id="products-title" className="text-3xl sm:text-4xl font-bold mt-3">
            Wide Range of Product Categories
          </h2>
          <p id="products-desc" className="text-lg text-slate-600 mt-4">
            We source across multiple industries. If you do not see your category, contact us to discuss your project.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => {
            const slug = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
            return (
              <div key={product.name} className="card overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[product-${slug}-desc] [product-${slug}-title] [products-title] [products-desc]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3
                    id={`product-${slug}-title`}
                    className="text-xl font-semibold"
                  >
                    {product.name}
                  </h3>
                  <p
                    id={`product-${slug}-desc`}
                    className="text-slate-600 mt-2"
                  >
                    {product.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/products" className="btn-primary">
            Explore All Categories
          </Link>
        </div>
      </div>
    </section>
  )
}
