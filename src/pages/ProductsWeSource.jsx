import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Home, Shirt, Cog, Package, Trophy, Gamepad2, Car } from 'lucide-react'

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, cables, connectors, LED products, smart devices, and electronic components.',
    examples: ['Bluetooth speakers', 'Smart home devices', 'Phone accessories', 'LED lighting', 'PCB assemblies'],
  },
  {
    icon: Home,
    title: 'Home & Garden Products',
    description: 'Furniture, kitchenware, home decor, garden tools, lighting, and household items.',
    examples: ['Kitchen gadgets', 'Outdoor furniture', 'Home decor items', 'Garden tools', 'Storage solutions'],
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    description: 'Clothing, fabrics, accessories, footwear, and textile products for all markets.',
    examples: ['Custom t-shirts', 'Activewear', 'Bags and backpacks', 'Footwear', 'Fabric rolls'],
  },
  {
    icon: Cog,
    title: 'Machinery & Industrial',
    description: 'Industrial equipment, machine parts, tools, hardware, and manufacturing supplies.',
    examples: ['CNC parts', 'Power tools', 'Industrial valves', 'Hardware components', 'Packaging machines'],
  },
  {
    icon: Package,
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, boxes, bags, and printed materials for products.',
    examples: ['Custom boxes', 'Product labels', 'Shopping bags', 'Gift packaging', 'Printed materials'],
  },
  {
    icon: Trophy,
    title: 'Sports & Outdoor',
    description: 'Sports equipment, outdoor gear, fitness products, and recreational items.',
    examples: ['Fitness equipment', 'Camping gear', 'Sports accessories', 'Outdoor apparel', 'Water sports products'],
  },
  {
    icon: Gamepad2,
    title: 'Toys & Gifts',
    description: 'Children\'s toys, promotional gifts, games, and novelty items.',
    examples: ['Educational toys', 'Plush toys', 'Promotional items', 'Board games', 'Holiday decorations'],
  },
  {
    icon: Car,
    title: 'Auto Parts & Accessories',
    description: 'Vehicle parts, accessories, tools, and automotive supplies.',
    examples: ['Car electronics', 'Interior accessories', 'Exterior parts', 'Maintenance tools', 'Lighting systems'],
  },
]

export default function ProductsWeSource() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Product Categories</span>
            <h1 className="heading-xl text-white mt-3 mb-6">Products We Source</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We source across a wide range of product categories from verified Chinese manufacturers. If it is made in China, we can help you find it.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <category.icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h2 className="heading-sm text-blue-900 mb-2">{category.title}</h2>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((example, eIndex) => (
                        <span key={eIndex} className="bg-white text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-blue-900 mb-4">Do Not See Your Product Category?</h2>
            <p className="text-gray-600 text-lg mb-8">
              We source virtually any product manufactured in China. Contact us with your specific requirements.
            </p>
            <Link to="/contact" className="btn-primary">
              Tell Us What You Need
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
