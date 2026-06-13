import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/button'

const categories = [
  {
    name: 'Industrial Equipment & Machinery',
    items: 'CNC machines, packaging machinery, textile equipment, food processing machinery, construction equipment, injection molding machines, printing equipment.',
  },
  {
    name: 'Consumer Electronics',
    items: 'Smartphones & accessories, audio equipment, wearables, smart home devices, gaming accessories, charging solutions, cables & adapters.',
  },
  {
    name: 'Home & Living Products',
    items: 'Furniture (indoor & outdoor), home decor, kitchenware & utensils, bedding & textiles, storage solutions, lighting fixtures, bathroom accessories.',
  },
  {
    name: 'Apparel, Textiles & Accessories',
    items: 'Ready-made garments, fabrics & materials, footwear, bags & luggage, hats & caps, scarves & accessories, workwear & uniforms.',
  },
  {
    name: 'Packaging & Printing',
    items: 'Custom boxes & cartons, labels & stickers, flexible packaging, rigid packaging, promotional materials, corrugated packaging, eco-friendly packaging.',
  },
  {
    name: 'Automotive Parts & Accessories',
    items: 'Engine components, body parts, interior accessories, lighting, tires & wheels, diagnostic tools, car care products.',
  },
  {
    name: 'Health & Beauty Products',
    items: 'Cosmetics & makeup, skin care products, hair care, supplements & vitamins, personal care devices, essential oils, organic products.',
  },
  {
    name: 'Building & Construction Materials',
    items: 'Steel & metal products, pipes & fittings, tiles & flooring, doors & windows, hardware tools, electrical supplies, plumbing materials.',
  },
  {
    name: 'Sports & Outdoor Equipment',
    items: 'Fitness equipment, camping gear, cycling accessories, outdoor apparel, sports protective gear, yoga & exercise mats.',
  },
  {
    name: 'Food & Beverage Equipment',
    items: 'Food processing machinery, packaging equipment, commercial kitchen equipment, beverage dispensers, refrigeration units.',
  },
]

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-neutral-900 to-brand-900 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">Products We Source</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Across dozens of industries, we connect buyers with verified Chinese manufacturers for quality products at competitive prices.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 lg:p-8 border border-neutral-200 hover:border-brand-300 hover:shadow-lg transition-all duration-300">
                <h2 className="text-xl font-bold text-neutral-900 mb-3">{cat.name}</h2>
                <p className="text-sm text-neutral-600 leading-relaxed">{cat.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Source */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-50 rounded-2xl p-8 lg:p-12 border border-neutral-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Not Seeing Your Product Category?</h2>
            <p className="text-neutral-600 mb-6">
              We\'re always expanding our network. If your product isn\'t listed here, we likely still have suppliers who can produce it. China\'s manufacturing ecosystem is vast — tell us what you need, and we\'ll find the right match.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Custom product specifications welcome',
                'Small MOQ options available for most categories',
                'OEM/ODM manufacturing supported',
                'Sample development for new product ideas',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Tell Us What You Need
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}