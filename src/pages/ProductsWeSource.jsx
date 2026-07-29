import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Cog, ShoppingBag, Shirt, Building, Car, HeartPulse, Package, Utensils, ToyBrick, Camera, Headphones, Wrench, Lightbulb, Watch, Gem } from 'lucide-react'

const categories = [
  {
    icon: Cpu,
    name: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, sensors, cables, semiconductors, and electronic components from verified manufacturers.',
    examples: ['Smart home devices', 'PCB assemblies', 'Sensors and modules', 'Cables and connectors', 'LED lighting'],
  },
  {
    icon: Cog,
    name: 'Machinery & Industrial',
    description: 'Industrial equipment, CNC parts, tools, automation systems, and manufacturing machinery.',
    examples: ['CNC machined parts', 'Industrial tools', 'Automation equipment', 'Pumps and valves', 'Motors and drives'],
  },
  {
    icon: ShoppingBag,
    name: 'Consumer Goods',
    description: 'Home products, kitchenware, gifts, sports equipment, and everyday consumer products.',
    examples: ['Kitchen appliances', 'Home decor', 'Sports equipment', 'Toys and games', 'Pet products'],
  },
  {
    icon: Shirt,
    name: 'Textiles & Apparel',
    description: 'Fabrics, garments, accessories, and textile products from established manufacturers.',
    examples: ['Custom apparel', 'Fabric rolls', 'Bags and accessories', 'Home textiles', 'Footwear'],
  },
  {
    icon: Building,
    name: 'Building Materials',
    description: 'Construction supplies, hardware, fixtures, tiles, and building components.',
    examples: ['Hardware and fasteners', 'Tiles and flooring', 'Bathroom fixtures', 'Doors and windows', 'Lighting fixtures'],
  },
  {
    icon: Car,
    name: 'Auto Parts & Accessories',
    description: 'OEM parts, aftermarket components, and automotive accessories.',
    examples: ['Engine components', 'Body parts', 'Interior accessories', 'Lighting systems', 'Electrical parts'],
  },
  {
    icon: HeartPulse,
    name: 'Medical & Health',
    description: 'Medical devices, lab equipment, PPE, and health-related products from certified manufacturers.',
    examples: ['Diagnostic equipment', 'Lab consumables', 'PPE and safety gear', 'Dental supplies', 'Rehabilitation equipment'],
  },
  {
    icon: Package,
    name: 'Packaging & Printing',
    description: 'Custom packaging, labels, promotional materials, and printed products.',
    examples: ['Custom boxes', 'Labels and stickers', 'Promotional items', 'Business cards', 'Catalogs and brochures'],
  },
  {
    icon: Utensils,
    name: 'Food & Beverage',
    description: 'Food processing equipment, packaging, and beverage-related products.',
    examples: ['Food packaging', 'Processing equipment', 'Beverage containers', 'Kitchen tools', 'Restaurant supplies'],
  },
  {
    icon: ToyBrick,
    name: 'Toys & Games',
    description: 'Children toys, board games, educational products, and outdoor play equipment.',
    examples: ['Educational toys', 'Board games', 'Plush toys', 'Outdoor play equipment', 'Puzzles'],
  },
  {
    icon: Camera,
    name: 'Photography & Video',
    description: 'Camera accessories, lighting equipment, tripods, and video production gear.',
    examples: ['Camera accessories', 'Studio lighting', 'Tripods and mounts', 'Video equipment', 'Drone accessories'],
  },
  {
    icon: Headphones,
    name: 'Audio Equipment',
    description: 'Speakers, headphones, microphones, and audio accessories.',
    examples: ['Bluetooth speakers', 'Headphones', 'Microphones', 'Audio cables', 'Amplifiers'],
  },
  {
    icon: Wrench,
    name: 'Hardware & Tools',
    description: 'Hand tools, power tools, measuring instruments, and workshop equipment.',
    examples: ['Hand tools', 'Power tools', 'Measuring instruments', 'Workshop equipment', 'Safety tools'],
  },
  {
    icon: Lightbulb,
    name: 'Lighting & Electrical',
    description: 'LED lighting, electrical components, smart lighting systems, and industrial lighting.',
    examples: ['LED panels', 'Smart lighting', 'Industrial lighting', 'Electrical components', 'Solar lighting'],
  },
  {
    icon: Watch,
    name: 'Jewelry & Accessories',
    description: 'Fashion jewelry, watches, accessories, and luxury items.',
    examples: ['Fashion jewelry', 'Watches', 'Sunglasses', 'Belts and wallets', 'Hair accessories'],
  },
  {
    icon: Gem,
    name: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare, personal care tools, and beauty accessories.',
    examples: ['Skincare products', 'Makeup tools', 'Hair care products', 'Personal care devices', 'Beauty accessories'],
  },
]

export default function ProductsWeSource() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Product Categories</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
              Products We Source
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We source a wide range of products from verified Chinese manufacturers.
              If you need it made in China, we can find the right supplier for you.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <cat.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{cat.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{cat.description}</p>
                <ul className="space-y-1.5">
                  {cat.examples.map((example) => (
                    <li key={example} className="text-sm text-gray-500 flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-blue-500 rounded-full" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Something Not Listed Here?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            We can source almost any product manufactured in China. Tell us what you need.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
