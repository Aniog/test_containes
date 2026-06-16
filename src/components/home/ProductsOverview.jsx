import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ProductsOverview() {
  const containerRef = useRef(null)

  const products = [
    {
      id: 'double-folding',
      title: 'Double Folding Machine',
      description: 'Advanced dual-action folding for complex geometries and high-volume production.',
      imgId: 'product-double-folding-a1b2c3',
      titleId: 'product-double-folding-title',
      descId: 'product-double-folding-desc',
    },
    {
      id: 'sheet-metal-folder',
      title: 'Sheet Metal Folder',
      description: 'Precision bending and folding for all sheet metal applications.',
      imgId: 'product-sheet-metal-d4e5f6',
      titleId: 'product-sheet-metal-title',
      descId: 'product-sheet-metal-desc',
    },
    {
      id: 'metal-folding',
      title: 'Metal Folding Machine',
      description: 'Heavy-duty folding solutions for industrial-grade metal fabrication.',
      imgId: 'product-metal-folding-g7h8i9',
      titleId: 'product-metal-folding-title',
      descId: 'product-metal-folding-desc',
    },
  ]

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Products</span>
          <h2 className="section-title mt-3">Premium Folding Machines</h2>
          <p className="section-subtitle mt-4">
            Discover our comprehensive range of sheet metal folding equipment, 
            designed to meet the highest industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card overflow-hidden group">
              <div className="aspect-[4/3] bg-background relative overflow-hidden">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-overview-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 id={product.titleId} className="text-xl font-semibold text-primary mb-2">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-text-muted mb-4 leading-relaxed">
                  {product.description}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn-primary">
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
