import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductsWeSource() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const categories = [
    {
      id: 'electronics',
      title: 'Consumer Electronics',
      desc: 'Smart Home Devices, Wearables, Audio Equipment, Accessories',
      imgKw: 'consumer electronics gadgets'
    },
    {
      id: 'home',
      title: 'Home & Garden',
      desc: 'Furniture, Decor, Kitchenware, Outdoor Equipment',
      imgKw: 'home garden furniture'
    },
    {
      id: 'apparel',
      title: 'Apparel & Textiles',
      desc: 'Clothing, Bags, Shoes, Fabrics, Uniforms',
      imgKw: 'apparel textiles clothing'
    },
    {
      id: 'industrial',
      title: 'Industrial Parts & Machinery',
      desc: 'CNC Machined Parts, Injection Molding, Packaging Equipment',
      imgKw: 'industrial machinery manufacturing'
    },
    {
      id: 'toys',
      title: 'Toys & Hobbies',
      desc: 'Educational Toys, Board Games, Pet Supplies, Sporting Goods',
      imgKw: 'toys hobbies products'
    },
    {
      id: 'health',
      title: 'Health & Personal Care',
      desc: 'Fitness Equipment, Beauty Tools, Medical Accessories',
      imgKw: 'health beauty personal care'
    }
  ]

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <div className="bg-stone-100 py-16 lg:py-24 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="page-title" className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Products We Source
          </h1>
          <p id="page-subtitle" className="text-xl text-stone-600 max-w-3xl mx-auto">
            From simple consumer goods to complex industrial machinery, our sourcing reach covers major manufacturing hubs across China.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="group rounded-xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-all">
              <div className="aspect-w-16 aspect-h-9 bg-stone-100 relative min-h-[200px]">
                <img
                  alt={cat.title}
                  className="object-cover w-full h-full absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`prod-cat-${cat.id}`}
                  data-strk-img={`[cat-title-${cat.id}] ${cat.imgKw}`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <h3 id={`cat-title-${cat.id}`} className="text-xl font-bold text-stone-900 mb-2">{cat.title}</h3>
                <p className="text-stone-600">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-xl p-8 lg:p-12 text-center border border-blue-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Don't see your product category?</h2>
          <p className="text-lg text-stone-700 mb-8 max-w-2xl mx-auto">Our network extends far beyond these categories. If it can be manufactured in China, we can likely source it for you.</p>
          <a href="/contact" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded bg-blue-600 text-white hover:bg-blue-700 transition">
            Send Product Details
          </a>
        </div>
      </div>
    </div>
  )
}