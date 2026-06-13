import { Link } from 'react-router-dom'
import { Button, Badge } from './ui.jsx'

const CATEGORIES = [
  {
    title: 'Electronics & Electrical',
    icon: '⚡',
    items: [
      'Consumer electronics (audio, wearables, accessories)',
      'PCB assembly and electronic components',
      'LED lighting and fixtures',
      'Power supplies, adapters, and chargers',
      'Smart home devices and IoT products',
      'Home appliances and kitchen electronics',
    ],
  },
  {
    title: 'Machinery & Industrial Equipment',
    icon: '⚙️',
    items: [
      'CNC machining and precision parts',
      'Industrial pumps, valves, and fittings',
      'Packaging machinery and equipment',
      'Construction tools and hardware',
      'Molds, dies, and tooling',
      'Automation and conveyor systems',
    ],
  },
  {
    title: 'Textiles & Apparel',
    icon: '👕',
    items: [
      'Garments — casual, formal, sportswear, outdoor',
      'Home textiles — bedding, towels, curtains',
      'Bags, backpacks, and luggage',
      'Footwear — athletic, casual, formal',
      'Fabric and textile raw materials',
      'Promotional apparel and uniforms',
    ],
  },
  {
    title: 'Home & Lifestyle',
    icon: '🏠',
    items: [
      'Furniture — indoor, outdoor, office, hospitality',
      'Kitchenware, cookware, and tableware',
      'Home décor, candles, and gift items',
      'Storage and organization products',
      'Garden tools and outdoor equipment',
      'Pet supplies and accessories',
    ],
  },
  {
    title: 'Packaging & Printing',
    icon: '📦',
    items: [
      'Custom packaging — boxes, bags, wraps',
      'Paper and cardboard products',
      'Plastic packaging and containers',
      'Labels, stickers, and tags',
      'Promotional materials and displays',
      'Eco-friendly and biodegradable packaging',
    ],
  },
  {
    title: 'Automotive & Transportation',
    icon: '🚗',
    items: [
      'Auto parts and accessories',
      'Motorcycle parts and gear',
      'Electric vehicle components',
      'Bicycle parts and e-bikes',
      'Transportation equipment and tools',
      'Garage and workshop equipment',
    ],
  },
  {
    title: 'Medical & Healthcare',
    icon: '🏥',
    items: [
      'Medical consumables and disposables',
      'Personal protective equipment (PPE)',
      'Diagnostic devices and instruments',
      'Rehabilitation and mobility aids',
      'Hospital furniture and equipment',
      'Health and wellness products',
    ],
  },
  {
    title: 'Other Categories',
    icon: '📋',
    items: [
      'Toys, games, and educational products',
      'Sports and fitness equipment',
      'Beauty and personal care products',
      'Office supplies and stationery',
      'Hardware and building materials',
      'Custom and specialty products',
    ],
  },
]

export default function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="blue" className="mb-4 bg-white/10 text-blue-200 border-0">Products We Source</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Virtually Any Product — Sourced from China</h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              We have deep experience across dozens of product categories, from consumer electronics to industrial machinery. If it can be manufactured in China, we can source it.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 border-0 shadow-lg">
                Tell Us What You Need
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Product Categories We Cover</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We have industry specialists for each category who understand the technical requirements, common pitfalls, and best suppliers.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-gray-900 mb-3">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-500 flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Product Category?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The categories above cover the majority of what we source, but we are always expanding. If your product is not listed, reach out — we likely have relevant experience or can tap our network to find the right supplier.
          </p>
          <Link to="/contact">
            <Button variant="primary">Contact Us About Your Product</Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Source Your Products?</h2>
          <p className="text-blue-100 mb-8 text-lg">Tell us your product specs and we will find the right factory for you.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 border-0 shadow-lg">
              Get a Free Sourcing Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}