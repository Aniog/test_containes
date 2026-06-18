import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Cpu, 
  Shirt, 
  Sofa, 
  Wrench, 
  Package, 
  Home, 
  Gamepad2, 
  Car, 
  ArrowRight,
  CheckCircle,
  Star,
  Filter
} from 'lucide-react'

const productCategories = [
  {
    id: 'electronics',
    icon: Cpu,
    name: 'Electronics',
    description: 'Consumer electronics, smart devices, PC accessories, and electronic components',
    products: [
      'Smartphones & Tablets',
      'Laptop & Computer Accessories',
      'Smart Home Devices',
      'Audio & Video Equipment',
      'Wearable Technology',
      'Electronic Components',
      'LED Lighting',
      'Power Banks & Chargers',
    ],
    certifications: ['CE', 'FCC', 'RoHS', 'UL'],
  },
  {
    id: 'textiles',
    icon: Shirt,
    name: 'Textiles & Apparel',
    description: 'Garments, fabrics, and fashion accessories for all markets',
    products: [
      'Casual Wear',
      'Sportswear & Activewear',
      'Formal Attire',
      'Kids Clothing',
      'Fabric & Materials',
      'Fashion Accessories',
      'Sports Equipment',
      'Uniforms & Workwear',
    ],
    certifications: ['OEKO-TEX', 'GOTS', 'ISO 9001'],
  },
  {
    id: 'furniture',
    icon: Sofa,
    name: 'Furniture',
    description: 'Residential, commercial, and outdoor furniture solutions',
    products: [
      'Living Room Furniture',
      'Bedroom Furniture',
      'Office Furniture',
      'Outdoor Furniture',
      'Kitchen & Dining',
      'Children Furniture',
      'Hotel Furniture',
      'Furniture Components',
    ],
    certifications: ['FSC', 'ISO 9001', 'CARB'],
  },
  {
    id: 'machinery',
    icon: Wrench,
    name: 'Machinery',
    description: 'Industrial equipment, machinery parts, and manufacturing tools',
    products: [
      'Industrial Machinery',
      'Machinery Parts',
      'Agricultural Equipment',
      'Construction Equipment',
      'Packaging Machinery',
      'Food Processing Equipment',
      'Textile Machinery',
      'CNC Machines',
    ],
    certifications: ['ISO 9001', 'CE', 'CCC'],
  },
  {
    id: 'packaging',
    icon: Package,
    name: 'Packaging',
    description: 'All types of packaging solutions for various industries',
    products: [
      'Paper Packaging',
      'Plastic Packaging',
      'Corrugated Boxes',
      'Flexible Packaging',
      'Bottles & Containers',
      'Labels & Stickers',
      'Gift Boxes',
      'Industrial Packaging',
    ],
    certifications: ['FSC', 'ISO 9001'],
  },
  {
    id: 'home',
    icon: Home,
    name: 'Home & Garden',
    description: 'Products for home improvement, decoration, and outdoor living',
    products: [
      'Kitchenware',
      'Home Decor',
      'Bedding & Linens',
      'Bathroom Products',
      'Garden Tools',
      'Outdoor Equipment',
      'Pet Supplies',
      'Cleaning Products',
    ],
    certifications: ['CE', 'FDA', 'LFGB'],
  },
  {
    id: 'toys',
    icon: Gamepad2,
    name: 'Toys & Gifts',
    description: 'Toys, games, promotional items, and gift products',
    products: [
      'Educational Toys',
      'Electronic Toys',
      'Plush Toys',
      'Board Games',
      'Puzzles',
      'Promotional Gifts',
      'Seasonal Items',
      'Craft Supplies',
    ],
    certifications: ['EN71', 'ASTM', 'CE'],
  },
  {
    id: 'automotive',
    icon: Car,
    name: 'Automotive',
    description: 'Auto parts, accessories, and vehicle components',
    products: [
      'Auto Parts',
      'Car Accessories',
      'Electronics',
      'Interior Accessories',
      'Exterior Accessories',
      'Tools & Equipment',
      'Motorcycle Parts',
      'Electric Vehicle Parts',
    ],
    certifications: ['IATF 16949', 'CE', 'DOT'],
  },
]

const capabilities = [
  'Custom product development',
  'Private label manufacturing',
  'OEM/ODM services',
  'Prototype development',
  'Mass production',
  'Quality control',
  'Packaging design',
  'Logistics coordination',
]

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('electronics')
  const [filter, setFilter] = useState('all')

  const currentCategory = productCategories.find(c => c.id === activeCategory)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-gray-300">
              We have expertise across a wide range of industries, connecting you with verified manufacturers in China
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-5 py-2.5 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <currentCategory.icon className="w-8 h-8 text-blue-900" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {currentCategory.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {currentCategory.description}
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Types</h3>
              <div className="grid grid-cols-2 gap-3">
                {currentCategory.products.map((product, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{product}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Common Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {currentCategory.certifications.map((cert, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Sourcing Capabilities
              </h3>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="ml-4 text-gray-700">{capability}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> This is a representative list. If you don't see your product category, 
                  please contact us - we likely have suppliers for your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Source from China */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Source {currentCategory.name} from China?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              China offers significant advantages for {currentCategory.name.toLowerCase()} sourcing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-blue-900 mb-2">30-50%</div>
              <p className="text-gray-600">Cost savings compared to Western manufacturers</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-blue-900 mb-2">10,000+</div>
              <p className="text-gray-600">Verified factories in our network</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-blue-900 mb-2">Full Range</div>
              <p className="text-gray-600">From components to finished products</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See What You're Looking For?
            </h2>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              Contact us with your specific requirements. We have access to thousands of manufacturers 
              across all industries and can likely find the right supplier for you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Tell Us What You Need
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products