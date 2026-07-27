import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Electronics & Components',
    items: 'Consumer electronics, PCBs, connectors, sensors, LED products',
    imgId: 'products-electronics-d4e5f6',
    titleId: 'products-electronics-title',
    descId: 'products-electronics-desc',
  },
  {
    name: 'Textiles & Garments',
    items: 'Apparel, fabrics, home textiles, sportswear, accessories',
    imgId: 'products-textiles-g7h8i9',
    titleId: 'products-textiles-title',
    descId: 'products-textiles-desc',
  },
  {
    name: 'Hardware & Tools',
    items: 'Hand tools, power tools, fasteners, locks, plumbing fixtures',
    imgId: 'products-hardware-j1k2l3',
    titleId: 'products-hardware-title',
    descId: 'products-hardware-desc',
  },
  {
    name: 'Home & Garden',
    items: 'Furniture, kitchenware, garden tools, lighting, decor',
    imgId: 'products-home-m4n5o6',
    titleId: 'products-home-title',
    descId: 'products-home-desc',
  },
  {
    name: 'Packaging & Printing',
    items: 'Custom packaging, labels, boxes, bags, printing materials',
    imgId: 'products-packaging-p7q8r9',
    titleId: 'products-packaging-title',
    descId: 'products-packaging-desc',
  },
  {
    name: 'Auto Parts & Accessories',
    items: 'Car parts, motorcycle components, EV accessories, tires',
    imgId: 'products-auto-s1t2u3',
    titleId: 'products-auto-title',
    descId: 'products-auto-desc',
  },
]

export default function ProductsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="products-section-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Products We Source
          </h2>
          <p id="products-section-subtitle" className="text-slate-600 max-w-2xl mx-auto">
            We source across a wide range of product categories. If you need something made in China, we can find the right supplier for it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden group hover:border-primary-200 hover:shadow-md transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-section-subtitle] [products-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-lg font-semibold text-slate-900 mb-2">{cat.name}</h3>
                <p id={cat.descId} className="text-slate-600 text-sm leading-relaxed">{cat.items}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary-500 font-medium hover:text-primary-600 no-underline transition-colors"
          >
            View all product categories
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
