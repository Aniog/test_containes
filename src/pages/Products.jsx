import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Home, Shirt, Package, Car, Heart, Dumbbell, ShoppingBag, Baby, Coffee, Zap } from 'lucide-react'

const productCategories = [
  {
    id: 'electronics',
    icon: Cpu,
    name: 'Electronics & Gadgets',
    description: 'Consumer electronics, smart devices, and electronic components.',
    examples: ['Smartphones & Tablets', 'LED Lighting', 'Power Banks', 'Audio Equipment', 'Wearable Devices', 'Electronic Components'],
  },
  {
    id: 'home',
    icon: Home,
    name: 'Home & Garden',
    description: 'Furniture, decor, kitchenware, and outdoor products.',
    examples: ['Furniture', 'Kitchenware', 'Home Decor', 'Bedding', 'Garden Tools', 'Storage Solutions'],
  },
  {
    id: 'textiles',
    icon: Shirt,
    name: 'Textiles & Apparel',
    description: 'Fabrics, clothing, and fashion accessories.',
    examples: ['Casual Wear', 'Sportswear', 'Undergarments', 'Fabrics', 'Shoes & Sandals', 'Bags & Backpacks'],
  },
  {
    id: 'packaging',
    icon: Package,
    name: 'Packaging',
    description: 'All types of packaging solutions for various industries.',
    examples: ['Paper Packaging', 'Plastic Packaging', 'Gift Boxes', 'Corrugated Boxes', 'Flexible Packaging', 'Labels & Stickers'],
  },
  {
    id: 'automotive',
    icon: Car,
    name: 'Automotive Parts',
    description: 'Vehicle parts, accessories, and components.',
    examples: ['Car Accessories', 'Auto Parts', 'Motorcycle Parts', 'Tires & Wheels', 'Electronics', 'Tools & Equipment'],
  },
  {
    id: 'health',
    icon: Heart,
    name: 'Health & Beauty',
    description: 'Personal care products, cosmetics, and wellness items.',
    examples: ['Skincare Products', 'Hair Care', 'Makeup', 'Health Supplements', 'Medical Devices', 'Fitness Equipment'],
  },
  {
    id: 'sports',
    icon: Dumbbell,
    name: 'Sports & Outdoors',
    description: 'Fitness equipment, outdoor gear, and sporting goods.',
    examples: ['Fitness Equipment', 'Camping Gear', 'Water Sports', 'Cycling Accessories', 'Outdoor Furniture', 'Sports Apparel'],
  },
  {
    id: 'toys',
    icon: ShoppingBag,
    name: 'Toys & Games',
    description: 'Children toys, games, and educational products.',
    examples: ['Educational Toys', 'Electronic Toys', 'Plush Toys', 'Board Games', 'Outdoor Toys', 'Puzzles'],
  },
  {
    id: 'baby',
    icon: Baby,
    name: 'Baby & Kids',
    description: 'Products for infants, toddlers, and children.',
    examples: ['Baby Strollers', 'Baby Carriers', 'Kids Furniture', 'Baby Toys', 'Baby Feeding', 'Kids Clothing'],
  },
  {
    id: 'industrial',
    icon: Zap,
    name: 'Industrial & Machinery',
    description: 'Industrial equipment, machinery parts, and tools.',
    examples: ['Machinery Parts', 'Power Tools', 'Industrial Equipment', 'Safety Gear', 'Hardware', 'Electrical Components'],
  },
  {
    id: 'food',
    icon: Coffee,
    name: 'Food & Beverage',
    description: 'Food processing equipment and beverage-related products.',
    examples: ['Kitchen Appliances', 'Food Processing', 'Beverage Equipment', 'Restaurant Supplies', 'Coffee & Tea', 'Packaging Machinery'],
  },
  {
    id: 'promotional',
    icon: ShoppingBag,
    name: 'Promotional & Gifts',
    description: 'Custom promotional items and gift products.',
    examples: ['Promotional Products', 'Custom Mugs', 'Keychains', 'T-shirts', 'Stationery', 'Holiday Gifts'],
  },
]

export default function Products() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-lg text-gray-300">
              We have expertise across a wide range of product categories. 
              If you don't see your product listed, contact us - we likely can help.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <div key={category.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="w-7 h-7 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-medium text-gray-500 mb-2">Examples:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.slice(0, 4).map((example, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {example}
                      </span>
                    ))}
                    {category.examples.length > 4 && (
                      <span className="text-xs text-blue-600 font-medium">
                        +{category.examples.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don't See Your Product?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We have extensive networks across various industries in China. 
            Contact us to discuss your specific sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Discuss Your Requirements
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Process for New Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Sourcing Approach
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether your product is listed or not, we follow the same rigorous process to find you the best suppliers.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-900">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Research</h3>
              <p className="text-sm text-gray-600">We identify potential suppliers in our network</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-900">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Verify</h3>
              <p className="text-sm text-gray-600">We conduct factory verification audits</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-900">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sample</h3>
              <p className="text-sm text-gray-600">We evaluate samples for quality approval</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-900">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Produce</h3>
              <p className="text-sm text-gray-600">We monitor production and ensure quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Source Your Products?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Tell us what you need, and we'll find the right suppliers in China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}