import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (ImageHelper && ImageHelper.loadImages && strkImgConfig) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full pb-20">
      <div className="bg-gray-50 py-16 lg:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 id="page-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Products We Source</h1>
          <p id="page-desc" className="text-xl text-gray-600">
            With our extensive network in China's manufacturing hubs, we can source almost any product. Here are some of our strongest categories.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((cat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-56 bg-gray-200 relative">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`product-cat-img-${index}`}
                  data-strk-img={`[cat-title-${index}] [cat-desc-${index}] [page-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                />
              </div>
              <div className="p-6">
                <h2 id={`cat-title-${index}`} className="text-xl font-bold text-gray-900 mb-3">{cat.title}</h2>
                <p id={`cat-desc-${index}`} className="text-gray-600 mb-4 text-sm">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.subItems.map((item, i) => (
                    <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-24">
        <div className="bg-gray-900 rounded-2xl p-10 md:p-16 text-center text-white flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">Don't see your product?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl text-center">
            This is just a selection. Our sourcing team is highly adept at finding manufacturers for niche, custom, or highly specialized industrial products.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md text-lg font-bold bg-blue-600 text-white hover:bg-blue-700 h-14 px-10 transition-colors"
          >
            Send Us Your Product Specs
          </Link>
        </div>
      </div>
    </div>
  )
}

const productCategories = [
  {
    title: "Consumer Electronics",
    description: "Sourced primarily from Shenzhen and Dongguan, ensuring high-tech capabilities and strict QC for safety standards.",
    subItems: ["Smartwatches", "Audio Devices", "Smart Home Tech", "PCBA & Components"]
  },
  {
    title: "Apparel & Textiles",
    description: "Working with factories in Guangdong, Zhejiang, and Jiangsu for both fast fashion and high-end technical garments.",
    subItems: ["Activewear", "Footwear", "Custom Uniforms", "Bags & Accessories"]
  },
  {
    title: "Home & Furniture",
    description: "From indoor decorative pieces to outdoor patio sets, sourced from specialized hubs like Foshan.",
    subItems: ["Indoor Furniture", "Lighting Fixtures", "Kitchenware", "Home Decor"]
  },
  {
    title: "Hardware & Tools",
    description: "Durable hand tools, power tools, and industrial hardware manufactured to exact CNC tolerances.",
    subItems: ["Power Tools", "Fasteners", "CNC Parts", "Gardening Equipment"]
  },
  {
    title: "Toys & Hobbies",
    description: "Sourcing safe, non-toxic materials for children's toys and complex mold making for hobbyist items.",
    subItems: ["Educational Toys", "Plush Toys", "Board Games", "RC Vehicles"]
  },
  {
    title: "Packaging & Printing",
    description: "Custom retail packaging, eco-friendly materials, and commercial printing to elevate your brand presentation.",
    subItems: ["Corrugated Boxes", "Eco-packaging", "Custom Labels", "Display Boxes"]
  }
]

export default Products
