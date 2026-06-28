import { Link } from 'react-router-dom'
import { ArrowRight, Package, ChevronRight } from 'lucide-react'

const Products = () => {
  const categories = [
    {
      name: 'Electronics & Gadgets',
      description: 'Consumer electronics, electronic components, gadgets, and tech accessories from certified manufacturers.',
      products: ['Smartphones & Accessories', 'Consumer Electronics', 'Electronic Components', 'Gadgets & Gizmos', 'Audio Equipment'],
      image: 'electronics-gadgets-consumer-tech'
    },
    {
      name: 'Home & Garden',
      description: 'Home improvement products, garden tools, furniture, and decorative items for indoor and outdoor spaces.',
      products: ['Furniture', 'Home Decor', 'Garden Tools', 'Kitchenware', 'Lighting'],
      image: 'home-garden-furniture-decor'
    },
    {
      name: 'Fashion & Textiles',
      description: 'Clothing, footwear, fabrics, and fashion accessories from established garment manufacturers.',
      products: ['Apparel', 'Footwear', 'Fabrics & Textiles', 'Fashion Accessories', 'Bags & Luggage'],
      image: 'fashion-textiles-clothing-apparel'
    },
    {
      name: 'Industrial & Machinery',
      description: 'Industrial equipment, machinery parts, tools, and B2B industrial products for various sectors.',
      products: ['Machinery & Equipment', 'Industrial Tools', 'Automotive Parts', 'Hardware', 'Safety Equipment'],
      image: 'industrial-machinery-equipment-tools'
    },
    {
      name: 'Health & Beauty',
      description: 'Personal care products, cosmetics, health supplements, and beauty items meeting international standards.',
      products: ['Cosmetics', 'Personal Care', 'Health Supplements', 'Beauty Tools', 'Wellness Products'],
      image: 'health-beauty-cosmetics-personal-care'
    },
    {
      name: 'Toys & Gifts',
      description: 'Toys, games, promotional gifts, and seasonal products from certified safe manufacturers.',
      products: ['Toys & Games', 'Promotional Gifts', 'Seasonal Products', 'Stationery', 'Pet Products'],
      image: 'toys-gifts-promotional-products'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Products We Source</h1>
          <p className="text-xl text-blue-100">We help you source a wide range of products from verified Chinese suppliers</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                  <Package className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.products.map((product, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Product?</h2>
          <p className="text-xl mb-8 text-blue-100">We source custom products too. Contact us with your requirements.</p>
          <Link
            to="/contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Request a Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
