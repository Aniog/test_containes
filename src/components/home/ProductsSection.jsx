import { Link } from 'react-router-dom'
import { Cpu, Shirt, Home, Car, Package, Watch } from 'lucide-react'

const productCategories = [
  {
    icon: Cpu,
    title: 'Electronics & Gadgets',
    items: ['Consumer Electronics', 'Smart Home Devices', 'Electronic Components', 'LED Lighting'],
  },
  {
    icon: Shirt,
    title: 'Textiles & Apparel',
    items: ['Clothing & Garments', 'Fabrics & Textiles', 'Bags & Accessories', 'Footwear'],
  },
  {
    icon: Home,
    title: 'Home & Furniture',
    items: ['Home Furniture', 'Kitchenware', 'Home Decor', 'Garden & Outdoor'],
  },
  {
    icon: Car,
    title: 'Automotive & Machinery',
    items: ['Auto Parts', 'Industrial Machinery', 'Tools & Hardware', 'Mechanical Components'],
  },
  {
    icon: Package,
    title: 'Packaging & Printing',
    items: ['Custom Packaging', 'Printed Materials', 'Labels & Stickers', 'Promotional Items'],
  },
  {
    icon: Watch,
    title: 'Fashion Accessories',
    items: ['Watches & Jewelry', 'Eyewear', 'Personal Accessories', 'Beauty Tools'],
  },
]

const ProductsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We have extensive experience sourcing a wide range of products across
            multiple industries. Our supplier network covers all major manufacturing
            hubs in China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow hover:border-blue-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
          >
            View All Product Categories
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
