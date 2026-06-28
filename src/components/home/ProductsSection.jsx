import React, { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folder-pro',
    title: 'Double Folder Pro',
    category: 'Flagship Model',
    description: 'Our most advanced double folding machine, designed for high-volume production with unparalleled precision and intuitive touchscreen controls.',
    specs: ['Max length: 4000mm', 'Max thickness (Steel): 2.5mm', 'Fully automated cycle'],
    imgId: 'product-img-01'
  },
  {
    id: 'sheet-master-3000',
    title: 'Sheet Master 3000',
    category: 'Versatile Workhorse',
    description: 'A highly adaptable sheet metal folder perfect for diverse manufacturing needs. Balances robust power with space-saving design.',
    specs: ['Max length: 3200mm', 'Max thickness (Steel): 1.5mm', 'Quick-change tooling'],
    imgId: 'product-img-02'
  },
  {
    id: 'compact-folder-x',
    title: 'Compact Folder X',
    category: 'Space Efficient',
    description: 'An elegant metal folding machine designed for smaller workshops without compromising on the ARTITECT standard of quality and durability.',
    specs: ['Max length: 2000mm', 'Max thickness (Steel): 1.2mm', 'Ergonomic manual assist'],
    imgId: 'product-img-03'
  }
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="products-section-title" className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Our Machine Lineup
          </h2>
          <p id="products-section-desc" className="text-lg text-slate-600 leading-relaxed">
            Discover our range of sophisticated metal folding solutions. Built to perform, designed to be understood.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
              {/* Product Image */}
              <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[product-title-${product.id}] industrial sheet metal folding machine equipment`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-amber-600 font-semibold text-sm mb-2 uppercase tracking-wide">
                  {product.category}
                </div>
                <h3 id={`product-title-${product.id}`} className="text-2xl font-bold text-slate-900 mb-4">
                  {product.title}
                </h3>
                <p id={`product-desc-${product.id}`} className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  {product.description}
                </p>
                
                <ul className="space-y-3 mb-8 bg-slate-50 p-4 rounded-lg">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm font-medium">{spec}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors mt-auto">
                  View Specifications
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
