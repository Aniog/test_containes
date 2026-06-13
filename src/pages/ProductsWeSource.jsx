import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Wrench, Shirt, Home, Package, Car, Lightbulb, Heart, ShoppingBag, Monitor, Zap } from 'lucide-react'

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, cables, connectors, sensors, and electronic accessories.',
    examples: ['Bluetooth speakers', 'Smart home devices', 'USB cables & adapters', 'PCB assemblies', 'LED lighting'],
  },
  {
    icon: Wrench,
    title: 'Machinery & Industrial Equipment',
    description: 'Manufacturing equipment, tools, pumps, valves, and industrial components.',
    examples: ['CNC machines', 'Hydraulic components', 'Industrial pumps', 'Power tools', 'Welding equipment'],
  },
  {
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'Garments, fabrics, accessories, and custom clothing manufacturing.',
    examples: ['Custom apparel', 'Sportswear', 'Fabric rolls', 'Bags & luggage', 'Uniforms & workwear'],
  },
  {
    icon: Home,
    title: 'Home & Garden',
    description: 'Furniture, home decor, kitchenware, garden tools, and outdoor products.',
    examples: ['Indoor furniture', 'Kitchen utensils', 'Garden tools', 'Home decor items', 'Outdoor equipment'],
  },
  {
    icon: Package,
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, boxes, bags, and printed materials.',
    examples: ['Custom boxes', 'Product labels', 'Shopping bags', 'Gift packaging', 'Printed catalogs'],
  },
  {
    icon: Car,
    title: 'Auto Parts & Accessories',
    description: 'Vehicle components, aftermarket parts, and automotive accessories.',
    examples: ['Engine components', 'Body parts', 'Interior accessories', 'LED car lights', 'Car electronics'],
  },
  {
    icon: Lightbulb,
    title: 'Hardware & Building Materials',
    description: 'Fasteners, fittings, pipes, tiles, and construction materials.',
    examples: ['Stainless steel fasteners', 'PVC pipes & fittings', 'Ceramic tiles', 'Door hardware', 'Building tools'],
  },
  {
    icon: Heart,
    title: 'Health & Beauty',
    description: 'Cosmetics, skincare, personal care, and wellness products.',
    examples: ['Skincare products', 'Makeup tools', 'Hair accessories', 'Massage equipment', 'Personal care devices'],
  },
  {
    icon: ShoppingBag,
    title: 'Consumer Goods & Gifts',
    description: 'Toys, stationery, promotional items, and seasonal products.',
    examples: ['Promotional gifts', 'Toys & games', 'Stationery items', 'Seasonal decorations', 'Pet supplies'],
  },
  {
    icon: Monitor,
    title: 'IT & Telecom Equipment',
    description: 'Networking equipment, servers, displays, and communication devices.',
    examples: ['Network switches', 'Server racks', 'Digital displays', 'Fiber optic cables', 'Telecom accessories'],
  },
  {
    icon: Zap,
    title: 'Energy & Solar Products',
    description: 'Solar panels, batteries, inverters, and renewable energy components.',
    examples: ['Solar panels', 'Lithium batteries', 'Power inverters', 'Solar accessories', 'Energy storage systems'],
  },
]

export default function ProductsWeSource() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Products We Source</h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              We work across a wide range of product categories and industries. If you do not see your product listed, contact us — we can source almost anything manufactured in China.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="p-6 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                <cat.icon className="w-10 h-10 text-blue-700 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{cat.description}</p>
                <ul className="space-y-1">
                  {cat.examples.map((ex, ei) => (
                    <li key={ei} className="text-sm text-slate-500 flex items-center gap-2">
                      <span className="w-1 h-1 bg-slate-400 rounded-full" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Do Not See Your Product?</h2>
          <p className="mt-4 text-lg text-slate-600">
            We can source almost any product manufactured in China. Tell us what you need and we will find the right suppliers.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
