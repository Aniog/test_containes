import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBA, cables, chargers, and components.',
    imgId: 'product-electronics-ssourcing-1a2b',
  },
  {
    title: 'Machinery & Industrial Parts',
    description: 'Tools, hardware, mechanical parts, and industrial equipment.',
    imgId: 'product-machinery-ssourcing-3c4d',
  },
  {
    title: 'Home & Kitchen Goods',
    description: 'Furniture, kitchenware, home decor, and household items.',
    imgId: 'product-home-ssourcing-5e6f',
  },
  {
    title: 'Apparel & Textiles',
    description: 'Clothing, bags, fabrics, and fashion accessories.',
    imgId: 'product-apparel-ssourcing-7g8h',
  },
  {
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, boxes, and printed materials.',
    imgId: 'product-packaging-ssourcing-9i0j',
  },
  {
    title: 'Consumer & Promotional Goods',
    description: 'Promotional products, toys, gifts, and everyday consumer items.',
    imgId: 'product-consumer-ssourcing-1k2l',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Products We Source</span>
          <h2 id="products-title" className="text-3xl lg:text-4xl font-bold mt-3 mb-4">
            Wide range of product categories
          </h2>
          <p id="products-desc" className="text-lg text-slate-600">
            We source across many industries. If you do not see your category, contact us — we can likely help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.title} className="card overflow-hidden group hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[products-desc] [products-title] [product-title-${product.title}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <h3 id={`product-title-${product.title}`} className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/products" className="btn-secondary">
            See All Categories
          </Link>
        </div>
      </div>
    </section>
  )
}
