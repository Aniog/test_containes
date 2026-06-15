import { Cpu, Shirt, Home, Car, Package, Watch, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const productCategories = [
  {
    icon: Cpu,
    title: 'Electronics & Gadgets',
    description: 'From consumer electronics to electronic components, we source a wide range of tech products from verified suppliers.',
    items: ['Consumer Electronics', 'Smart Home Devices', 'Electronic Components', 'LED Lighting', 'Wearables', 'Accessories'],
    image: 'Electronics and gadgets sourcing from China factories',
  },
  {
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'We help you source high-quality textiles, garments, and fashion accessories from China\'s manufacturing hubs.',
    items: ['Clothing & Garments', 'Fabrics & Textiles', 'Bags & Accessories', 'Footwear', 'Sportswear', 'Uniforms'],
    image: 'Textile and apparel manufacturing in China',
  },
  {
    icon: Home,
    title: 'Home & Furniture',
    description: 'From home furniture to kitchenware and decor, we connect you with reliable manufacturers for home products.',
    items: ['Home Furniture', 'Kitchenware', 'Home Decor', 'Garden & Outdoor', 'Bedding & Linens', 'Storage Solutions'],
    image: 'Home furniture and decor products from Chinese manufacturers',
  },
  {
    icon: Car,
    title: 'Automotive & Machinery',
    description: 'We source auto parts, industrial machinery, tools, and mechanical components from certified manufacturers.',
    items: ['Auto Parts', 'Industrial Machinery', 'Tools & Hardware', 'Mechanical Components', 'Spare Parts', 'Equipment'],
    image: 'Automotive parts and industrial machinery from China',
  },
  {
    icon: Package,
    title: 'Packaging & Printing',
    description: 'Custom packaging solutions, printed materials, and promotional items sourced from experienced suppliers.',
    items: ['Custom Packaging', 'Printed Materials', 'Labels & Stickers', 'Promotional Items', 'Displays', 'Boxes & Cartons'],
    image: 'Packaging and printing products from Chinese factories',
  },
  {
    icon: Watch,
    title: 'Fashion Accessories',
    description: 'We help you source fashion accessories, jewelry, eyewear, and beauty tools from specialized manufacturers.',
    items: ['Watches & Jewelry', 'Eyewear', 'Personal Accessories', 'Beauty Tools', 'Handbags', 'Belts & Wallets'],
    image: 'Fashion accessories and jewelry from China suppliers',
  },
]

const ProductsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We have extensive experience sourcing a wide range of products across
              multiple industries. Our supplier network covers all major manufacturing
              hubs in China, ensuring you get quality products at competitive prices.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow hover:border-blue-200"
              >
                {/* Image Placeholder */}
                <div
                  className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center"
                  data-strk-bg-id={`product-${index}`}
                  data-strk-bg={category.image}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="600"
                >
                  <Icon className="text-blue-300" size={48} />
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Icon className="text-blue-600" size={20} />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {category.description}
                  </p>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">What We Source:</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Don't See Your Product Category?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We source a wide variety of products beyond these categories.
            Contact us with your specific product requirements and we'll help you find
            the right suppliers.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Get a Free Sourcing Quote
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
