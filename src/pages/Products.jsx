import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { CheckCircle2 } from 'lucide-react'

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages({}, containerRef.current)
  }, [])

  const categories = [
    {
      name: 'Electronics & Tech',
      items: ['Smart Home Devices', 'Mobile Accessories', 'Audio Equipment', 'Consumer Electronics'],
      imgId: 'cat-electronics'
    },
    {
      name: 'Home & Kitchen',
      items: ['Kitchenware', 'Furniture', 'Home Decor', 'Garden Supplies'],
      imgId: 'cat-home'
    },
    {
      name: 'Fashion & Apparel',
      items: ['Activewear', 'Accessories', 'Textiles', 'Bags & Luggage'],
      imgId: 'cat-fashion'
    },
    {
      name: 'Industrial & Tools',
      items: ['Hardware Tools', 'Auto Parts', 'Machinery Components', 'Safety Gear'],
      imgId: 'cat-industrial'
    }
  ]

  return (
    <div ref={containerRef} className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="products-title" className="text-4xl font-bold text-slate-900 tracking-tight">Products We Source</h1>
          <p id="products-subtitle" className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Our expert team has deep experience across a wide range of product categories.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition flex flex-col">
                <h3 id={`cat-name-${i}`} className="text-xl font-bold text-slate-900 mb-6">{cat.name}</h3>
                <div className="mb-6 rounded-xl overflow-hidden h-40 bg-slate-100">
                  <img 
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[cat-name-${i}] [products-title] product supply china`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-4">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
