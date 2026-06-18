import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Search, Filter } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Products = () => {
  const containerRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'textiles', name: 'Textiles & Apparel' },
    { id: 'machinery', name: 'Machinery' },
    { id: 'packaging', name: 'Packaging' },
    { id: 'home', name: 'Home & Garden' },
    { id: 'automotive', name: 'Automotive' }
  ]

  const products = [
    {
      category: 'electronics',
      name: 'Consumer Electronics',
      examples: ['Smartphones', 'Tablets', 'Laptops', 'Smart Watches', 'Wireless Earbuds', 'Cameras'],
      image: 'consumer electronics manufacturing'
    },
    {
      category: 'electronics',
      name: 'Electronic Components',
      examples: ['PCBs', 'Integrated Circuits', 'Sensors', 'Connectors', 'Capacitors', 'LEDs'],
      image: 'electronics factory components'
    },
    {
      category: 'electronics',
      name: 'Home Appliances',
      examples: ['Air Conditioners', 'Refrigerators', 'Washing Machines', 'Microwaves', 'Vacuum Cleaners'],
      image: 'appliance manufacturing factory'
    },
    {
      category: 'textiles',
      name: 'Apparel & Clothing',
      examples: ['T-Shirts', 'Jackets', 'Jeans', 'Dresses', 'Sportswear', 'Uniforms'],
      image: 'apparel textile factory'
    },
    {
      category: 'textiles',
      name: 'Fabrics & Materials',
      examples: ['Cotton Fabric', 'Polyester', 'Silk', 'Denim', 'Technical Textiles', 'Knitted Fabrics'],
      image: 'fabric textile manufacturing'
    },
    {
      category: 'textiles',
      name: 'Home Textiles',
      examples: ['Bedding Sets', 'Curtains', 'Towels', 'Rugs', 'Cushions', 'Mattresses'],
      image: 'home textiles factory'
    },
    {
      category: 'machinery',
      name: 'Industrial Machinery',
      examples: ['CNC Machines', 'Packaging Machines', 'Printing Machines', 'Construction Equipment'],
      image: 'industrial machinery factory'
    },
    {
      category: 'machinery',
      name: 'Agricultural Machinery',
      examples: ['Tractors', 'Harvesters', 'Irrigation Systems', 'Seeders', 'Cultivators'],
      image: 'agricultural machinery manufacturing'
    },
    {
      category: 'packaging',
      name: 'Paper & Cardboard',
      examples: ['Corrugated Boxes', 'Cartons', 'Paper Bags', 'Gift Boxes', 'Display Boxes'],
      image: 'paper packaging factory'
    },
    {
      category: 'packaging',
      name: 'Plastic Packaging',
      examples: ['Plastic Bottles', 'Containers', 'Blister Packs', 'Flexible Films', 'Bags'],
      image: 'plastic packaging manufacturing'
    },
    {
      category: 'packaging',
      name: 'Metal Packaging',
      examples: ['Tin Cans', 'Aerosol Cans', 'Metal Drums', 'Food Cans', 'Beverage Cans'],
      image: 'metal packaging factory'
    },
    {
      category: 'home',
      name: 'Furniture',
      examples: ['Office Chairs', 'Sofas', 'Tables', 'Cabinets', 'Outdoor Furniture'],
      image: 'furniture manufacturing factory'
    },
    {
      category: 'home',
      name: 'Kitchenware',
      examples: ['Cookware', 'Cutlery', 'Kitchen Utensils', 'Food Storage', 'Small Appliances'],
      image: 'kitchenware manufacturing'
    },
    {
      category: 'home',
      name: 'Lighting',
      examples: ['LED Lights', 'Smart Lighting', 'Outdoor Lights', 'Commercial Lighting', 'Decor Lights'],
      image: 'lighting factory manufacturing'
    },
    {
      category: 'automotive',
      name: 'Auto Parts',
      examples: ['Engine Parts', 'Brake Systems', 'Suspension Parts', 'Electrical Components', 'Body Parts'],
      image: 'auto parts manufacturing'
    },
    {
      category: 'automotive',
      name: 'Tires & Rubber',
      examples: ['Car Tires', 'Truck Tires', 'Industrial Rubber', 'Seals', 'Gaskets'],
      image: 'tire manufacturing factory'
    }
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Products We Source
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Extensive network of verified manufacturers across multiple industries. Find the right supplier for any product.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.name}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100"
              >
                <div className="h-48 bg-gray-200">
                  <img
                    data-strk-img-id={`product-${product.category}-${index}`}
                    data-strk-img={`[product-name-${product.category}-${index}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`product-name-${product.category}-${index}`} className="text-lg font-semibold text-gray-900 mb-3">{product.name}</h3>
                  <ul className="space-y-2">
                    {product.examples.map((example) => (
                      <li key={example} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700"
                    >
                      Request Quote <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See What You're Looking For?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            We have access to thousands of suppliers across all industries. Contact us with your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Tell Us What You Need
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products