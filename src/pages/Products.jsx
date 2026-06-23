import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap, Cpu, Shirt, Sofa, Wrench, Box, Flower, Watch } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const productCategories = [
  {
    id: 'electronics',
    name: 'Electronics',
    icon: Cpu,
    description: 'Consumer electronics, smart devices, circuit boards, and electronic components.',
    image: 'electronics manufacturing',
    subcategories: [
      'Smartphones & Tablets',
      'Smart Home Devices',
      'Wearable Technology',
      'Audio & Video Equipment',
      'Computer Accessories',
      'Electronic Components',
    ],
  },
  {
    id: 'textiles',
    name: 'Textiles & Apparel',
    icon: Shirt,
    description: 'Garments, fabrics, accessories, and textile products for all industries.',
    image: 'textile factory manufacturing',
    subcategories: [
      'Casual Wear',
      'Sportswear & Activewear',
      'Formal Attire',
      'Technical Textiles',
      'Home Textiles',
      'Fashion Accessories',
    ],
  },
  {
    id: 'furniture',
    name: 'Furniture',
    icon: Sofa,
    description: 'Residential, commercial, and industrial furniture solutions.',
    image: 'furniture manufacturing factory',
    subcategories: [
      'Office Furniture',
      'Home Furniture',
      'Outdoor Furniture',
      'Hotel Furniture',
      'Industrial Furniture',
      'Furniture Components',
    ],
  },
  {
    id: 'machinery',
    name: 'Machinery',
    icon: Wrench,
    description: 'Industrial machinery, equipment, and mechanical components.',
    image: 'industrial machinery manufacturing',
    subcategories: [
      'Manufacturing Equipment',
      'Agricultural Machinery',
      'Construction Equipment',
      'Food Processing Machinery',
      'Packaging Machinery',
      'Machinery Parts',
    ],
  },
  {
    id: 'packaging',
    name: 'Packaging',
    icon: Box,
    description: 'All types of packaging solutions for various industries.',
    image: 'packaging materials factory',
    subcategories: [
      'Paper Packaging',
      'Plastic Packaging',
      'Metal Packaging',
      'Glass Containers',
      'Flexible Packaging',
      'Eco-friendly Packaging',
    ],
  },
  {
    id: 'home-garden',
    name: 'Home & Garden',
    icon: Flower,
    description: 'Products for home improvement, decoration, and gardening.',
    image: 'home products manufacturing',
    subcategories: [
      'Kitchenware',
      'Home Decor',
      'Garden Tools',
      'Lighting Products',
      'Bathroom Accessories',
      'Pet Supplies',
    ],
  },
  {
    id: 'toys',
    name: 'Toys & Games',
    icon: Zap,
    description: 'Children\'s toys, games, and recreational products.',
    image: 'toy manufacturing factory',
    subcategories: [
      'Educational Toys',
      'Electronic Toys',
      'Plush Toys',
      'Board Games',
      'Outdoor Toys',
      'Baby Toys',
    ],
  },
  {
    id: 'jewelry',
    name: 'Jewelry & Watches',
    icon: Watch,
    description: 'Fashion jewelry, watches, and related accessories.',
    image: 'jewelry manufacturing',
    subcategories: [
      'Fashion Jewelry',
      'Fine Jewelry',
      'Watches',
      'Watch Parts',
      'Jewelry Components',
      'Costume Jewelry',
    ],
  },
]

export default function Products() {
  const containerRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Products We Source
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We have expertise across a wide range of product categories. 
              Find the right suppliers for your business needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div 
                key={category.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all"
              >
                {/* Image */}
                <div className="aspect-video bg-gray-200 relative">
                  <img
                    data-strk-img-id={`category-${category.id}-img`}
                    data-strk-img={`[category-${category.id}-title] ${category.image}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-blue-900" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 
                    id={`category-${category.id}-title`}
                    className="text-xl font-bold text-gray-900 mb-2"
                  >
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  
                  {/* Subcategories */}
                  <button
                    onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                    className="text-sm text-blue-900 font-medium hover:text-blue-700"
                  >
                    {selectedCategory === category.id ? 'Hide' : 'View'} Subcategories ({category.subcategories.length})
                  </button>
                  
                  {selectedCategory === category.id && (
                    <ul className="mt-4 space-y-2">
                      {category.subcategories.map((sub, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond these categories, we have extensive networks in many other industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Automotive Parts',
              'Medical Devices',
              'Sports Equipment',
              'Beauty & Personal Care',
              'Office Supplies',
              'Security Products',
              'LED Lighting',
              'Solar Products',
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-xl border border-gray-200 text-center"
              >
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don\'t See Your Product?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            We have extensive networks across many industries. Contact us to discuss 
            your specific sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Tell Us About Your Product <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}