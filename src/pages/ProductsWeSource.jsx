import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Wrench, Sofa, Shirt, Car, HardHat, Package as PackageIcon, Heart } from 'lucide-react'

const categories = [
  {
    icon: Cpu,
    name: 'Electronics & Components',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    description: 'Consumer electronics, PCB assemblies, sensors, LED lighting, power supplies, cables, and electronic components.',
    examples: ['Bluetooth speakers', 'LED drivers', 'Temperature sensors', 'Circuit boards'],
  },
  {
    icon: Wrench,
    name: 'Industrial Equipment',
    bgColor: 'bg-gray-50',
    iconColor: 'text-gray-700',
    description: 'Machinery parts, automation components, hydraulic systems, packaging equipment, and industrial tools.',
    examples: ['Pneumatic cylinders', 'Conveyor belts', 'Hydraulic pumps', 'Industrial valves'],
  },
  {
    icon: Sofa,
    name: 'Home & Lifestyle',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
    description: 'Furniture, kitchenware, home decor, textiles, storage solutions, and household products.',
    examples: ['Bamboo cutting boards', 'Storage bins', 'Decorative vases', 'Bed sheets'],
  },
  {
    icon: Shirt,
    name: 'Apparel & Accessories',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-600',
    description: 'Garments, bags, shoes, hats, scarves, workwear, uniforms, and fashion accessories.',
    examples: ['Cotton t-shirts', 'Backpacks', 'Safety vests', 'Leather belts'],
  },
  {
    icon: Car,
    name: 'Auto Parts & Accessories',
    bgColor: 'bg-sky-50',
    iconColor: 'text-sky-600',
    description: 'Car accessories, motorcycle parts, dash cams, interior accessories, and auto care products.',
    examples: ['Car phone mounts', 'LED interior lights', 'Floor mats', 'Motorcycle mirrors'],
  },
  {
    icon: HardHat,
    name: 'Building & Construction',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-700',
    description: 'Hardware, plumbing supplies, construction materials, safety equipment, and tools.',
    examples: ['Safety helmets', 'PVC pipes', 'Door handles', 'Work gloves'],
  },
  {
    icon: PackageIcon,
    name: 'Packaging & Printing',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    description: 'Boxes, labels, custom packaging, poly bags, display stands, and printed materials.',
    examples: ['Corrugated boxes', 'Product labels', 'Display stands', 'Poly mailers'],
  },
  {
    icon: Heart,
    name: 'Health & Safety',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-500',
    description: 'PPE, medical supplies, cleaning products, hygiene equipment, and wellness products.',
    examples: ['Face masks', 'Hand sanitizer', 'First aid kits', 'Cleaning wipes'],
  },
]

export default function ProductsWeSource() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We source across a wide range of product categories from manufacturing hubs across China. If it is made in China,
            we can help you find the right supplier.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${cat.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <cat.icon className={`w-6 h-6 ${cat.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-gray-900 mb-2">{cat.name}</h2>
                    <p className="text-gray-600 text-sm mb-3">{cat.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.examples.map((example) => (
                        <span
                          key={example}
                          className="text-xs bg-gray-100 text-gray-600 rounded-full px-3 py-1"
                        >
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have a Different Product in Mind?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            These are just examples. If you need something else manufactured in China, get in touch and we will help locate the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
          >
            Request a Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}