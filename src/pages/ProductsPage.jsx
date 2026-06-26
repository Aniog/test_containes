import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ProductsPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    return cleanup
  }, [])

  const products = [
    {
      id: 'double-folding-machine',
      title: 'Double Folding Machine',
      description: 'Advanced dual-folding technology for complex sheet metal fabrication with precision control and high efficiency.',
      features: ['Dual folding capability', 'CNC control system', 'High precision accuracy', 'Automatic back gauge'],
      imageId: 'product-double-folding-001',
      titleId: 'product-title-double-folding',
      descId: 'product-desc-double-folding'
    },
    {
      id: 'double-folder',
      title: 'Double Folder',
      description: 'Compact and versatile double folding solution perfect for workshops and medium-scale production.',
      features: ['Space-saving design', 'Easy operation', 'Durable construction', 'Quick setup'],
      imageId: 'product-double-folder-002',
      titleId: 'product-title-double-folder',
      descId: 'product-desc-double-folder'
    },
    {
      id: 'sheet-metal-folder',
      title: 'Sheet Metal Folder',
      description: 'Professional-grade sheet metal folding machine designed for precision and reliability in every project.',
      features: ['Heavy-duty frame', 'Adjustable clamping', 'Precision ground tools', 'Safety guards included'],
      imageId: 'product-sheet-folder-003',
      titleId: 'product-title-sheet-folder',
      descId: 'product-desc-sheet-folder'
    },
    {
      id: 'sheet-metal-folding-machine',
      title: 'Sheet Metal Folding Machine',
      description: 'Industrial-strength folding machine built for continuous operation and superior folding quality.',
      features: ['Industrial grade', 'Continuous operation', 'Low maintenance', 'Energy efficient'],
      imageId: 'product-sheet-folding-004',
      titleId: 'product-title-sheet-folding',
      descId: 'product-desc-sheet-folding'
    },
    {
      id: 'metal-folder',
      title: 'Metal Folder',
      description: 'Versatile metal folding machine suitable for various metals and thicknesses with consistent results.',
      features: ['Multi-metal compatible', 'Variable thickness', 'Consistent results', 'User-friendly interface'],
      imageId: 'product-metal-folder-005',
      titleId: 'product-title-metal-folder',
      descId: 'product-desc-metal-folder'
    },
    {
      id: 'metal-folder-machine',
      title: 'Metal Folder Machine',
      description: 'Heavy-duty metal folder machine engineered for demanding industrial applications and high-volume production.',
      features: ['High-volume capacity', 'Industrial durability', 'Advanced safety features', 'Programmable settings'],
      imageId: 'product-metal-folder-machine-006',
      titleId: 'product-title-metal-folder-machine',
      descId: 'product-desc-metal-folder-machine'
    },
    {
      id: 'metal-folding-machine',
      title: 'Metal Folding Machine',
      description: 'Premium metal folding machine combining precision engineering with robust performance for professional fabricators.',
      features: ['Premium build quality', 'Precision engineering', 'Robust performance', 'Professional grade'],
      imageId: 'product-metal-folding-007',
      titleId: 'product-title-metal-folding',
      descId: 'product-desc-metal-folding'
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 id="products-page-title" className="text-4xl md:text-5xl font-bold mb-4">
            Our Products
          </h1>
          <p id="products-page-subtitle" className="text-xl text-slate-300">
            Precision-engineered folding machines for every fabrication need
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-200"
              >
                {/* Product Image */}
                <div className="h-56 bg-slate-200 overflow-hidden">
                  <img 
                    alt={product.title}
                    data-strk-img-id={product.imageId}
                    data-strk-img={`[${product.descId}] [${product.titleId}] [products-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h2 id={product.titleId} className="text-2xl font-semibold mb-3 text-slate-900">
                    {product.title}
                  </h2>
                  <p id={product.descId} className="text-slate-600 mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-slate-900 mb-2">Key Features:</h3>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-slate-600">
                          <svg className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={() => document.getElementById('quote').scrollIntoView({ behavior: 'smooth' })}
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Get Quote
                    </button>
                    <button 
                      className="flex-1 border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section id="quote" className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Request a Quote
              </h2>
              <p className="text-lg text-slate-600">
                Get personalized pricing and specifications for your folding machine needs
              </p>
            </div>

            <form className="bg-white rounded-xl shadow-lg p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name *
                  </label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    placeholder="ABC Fabrication"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    placeholder="john@abc.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="product-interest" className="block text-sm font-medium text-slate-700 mb-2">
                  Product of Interest
                </label>
                <select 
                  id="product-interest"
                  name="product-interest"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                >
                  <option value="">Select a product...</option>
                  <option value="double-folding-machine">Double Folding Machine</option>
                  <option value="double-folder">Double Folder</option>
                  <option value="sheet-metal-folder">Sheet Metal Folder</option>
                  <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                  <option value="metal-folder">Metal Folder</option>
                  <option value="metal-folder-machine">Metal Folder Machine</option>
                  <option value="metal-folding-machine">Metal Folding Machine</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Project Details *
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors resize-none"
                  placeholder="Tell us about your project requirements, expected volume, materials, etc."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
