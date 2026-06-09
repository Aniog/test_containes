import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Smartphone, Home, Shirt, Wrench, Car, Package as PackageIcon, ArmchairIcon, Heart } from 'lucide-react'

const categories = [
  {
    icon: Smartphone,
    name: 'Consumer Electronics',
    description: 'Smartphones, tablets, audio devices, wearables, smart home devices, computer accessories, and gaming peripherals.',
    examples: 'Bluetooth speakers, phone cases, charging cables, smartwatches, headphones',
  },
  {
    icon: Home,
    name: 'Home & Kitchen',
    description: 'Small and large home appliances, kitchen tools, cookware, storage solutions, cleaning products, and home improvement items.',
    examples: 'Air fryers, blenders, vacuum cleaners, kitchen utensils, food containers',
  },
  {
    icon: Shirt,
    name: 'Apparel & Accessories',
    description: 'Garments, fashion accessories, bags, luggage, shoes, textile products, and promotional apparel.',
    examples: 'T-shirts, jackets, backpacks, sneakers, scarves, hats, sportswear',
  },
  {
    icon: Wrench,
    name: 'Industrial & MRO',
    description: 'Industrial machinery, manufacturing equipment, MRO supplies, tools, components, and maintenance products.',
    examples: 'Power tools, safety equipment, industrial valves, bearings, conveyor parts',
  },
  {
    icon: Car,
    name: 'Auto Parts & Accessories',
    description: 'Vehicle components, auto parts, car accessories, interior upgrades, and maintenance tools.',
    examples: 'LED headlights, dash cameras, seat covers, floor mats, battery chargers',
  },
  {
    icon: PackageIcon,
    name: 'Packaging Materials',
    description: 'Custom packaging boxes, labels, bags, wrapping materials, display packaging, and shipping supplies.',
    examples: 'Corrugated boxes, poly mailers, shrink wrap, retail boxes, tape',
  },
  {
    icon: ArmchairIcon,
    name: 'Furniture & Home Decor',
    description: 'Indoor and outdoor furniture, lighting fixtures, home decor items, and office furniture.',
    examples: 'Sofas, dining tables, desk lamps, wall art, rugs, shelving units',
  },
  {
    icon: Heart,
    name: 'Health & Beauty',
    description: 'Cosmetics, personal care products, supplements, medical devices, and wellness products.',
    examples: 'Skincare products, makeup brushes, essential oils, fitness equipment, vitamin packaging',
  },
]

export default function ProductsPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Products We Source</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We source products across a wide range of industries. If it is manufactured in China, we can help you find the right supplier.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy/10 flex items-center justify-center shrink-0">
                    <cat.icon className="w-6 h-6 text-brand-navy" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-brand-navy mb-2">{cat.name}</h2>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{cat.description}</p>
                    <p className="text-gray-400 text-xs">
                      <span className="font-semibold">Examples:</span> {cat.examples}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Do Not See Your Product Category?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Contact us with your product requirements. We source across many more categories and can usually find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Submit Your Product Inquiry <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}