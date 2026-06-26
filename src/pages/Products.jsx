import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Cpu,
  Shirt,
  Home,
  Settings,
  Car,
  ArrowRight,
  CheckCircle2,
  Search,
  Filter,
} from 'lucide-react'

const categories = [
  { id: 'all', name: 'All Products', icon: Search },
  { id: 'electronics', name: 'Electronics', icon: Cpu },
  { id: 'textiles', name: 'Textiles & Apparel', icon: Shirt },
  { id: 'home', name: 'Home & Garden', icon: Home },
  { id: 'industrial', name: 'Industrial Equipment', icon: Settings },
  { id: 'auto', name: 'Auto Parts', icon: Car },
]

const products = [
  {
    id: 1,
    category: 'electronics',
    title: 'Consumer Electronics',
    description: 'Smartphones, tablets, headphones, smart watches, and other consumer electronic devices.',
    examples: ['Smartphones & Tablets', 'Audio Equipment', 'Wearable Tech', 'Smart Home Devices'],
    benefits: 'Access to Shenzhen\'s electronics ecosystem with competitive pricing and fast iteration.',
  },
  {
    id: 2,
    category: 'electronics',
    title: 'Electronic Components',
    description: 'Semiconductors, sensors, connectors, displays, and other electronic components.',
    examples: ['Semiconductors', 'Sensors & Modules', 'Connectors', 'LED Displays'],
    benefits: 'Direct relationships with component manufacturers for better pricing and availability.',
  },
  {
    id: 3,
    category: 'textiles',
    title: 'Apparel & Fashion',
    description: 'Casual wear, sportswear, formal wear, and fashion accessories for all demographics.',
    examples: ['Casual Wear', 'Sportswear', 'Formal Wear', 'Fashion Accessories'],
    benefits: 'Strong network in Guangzhou and Hangzhou textile hubs with quality fabric sourcing.',
  },
  {
    id: 4,
    category: 'textiles',
    title: 'Home Textiles',
    description: 'Bedding, curtains, towels, and other home textile products.',
    examples: ['Bedding Sets', 'Curtains & Blinds', 'Bath Towels', 'Table Linens'],
    benefits: 'Verified suppliers with OEKO-TEX and other international certifications.',
  },
  {
    id: 5,
    category: 'home',
    title: 'Home & Kitchen',
    description: 'Kitchenware, home organization, decor, and small appliances.',
    examples: ['Kitchen Utensils', 'Storage Solutions', 'Home Decor', 'Small Appliances'],
    benefits: 'Extensive supplier network in Zhejiang and Guangdong provinces.',
  },
  {
    id: 6,
    category: 'home',
    title: 'Garden & Outdoor',
    description: 'Garden tools, outdoor furniture, camping equipment, and landscaping products.',
    examples: ['Garden Tools', 'Outdoor Furniture', 'Camping Gear', 'Planters'],
    benefits: 'Experience with outdoor durability standards and weather-resistant materials.',
  },
  {
    id: 7,
    category: 'industrial',
    title: 'Industrial Equipment',
    description: 'Manufacturing equipment, tools, machinery, and industrial components.',
    examples: ['Manufacturing Tools', 'Industrial Machinery', 'Power Tools', 'Safety Equipment'],
    benefits: 'Technical expertise to evaluate equipment specifications and factory capabilities.',
  },
  {
    id: 8,
    category: 'industrial',
    title: 'Hardware & Tools',
    description: 'Hand tools, power tools, fasteners, and hardware accessories.',
    examples: ['Hand Tools', 'Power Tools', 'Fasteners', 'Locks & Hinges'],
    benefits: 'Long-standing relationships with hardware manufacturers in Yongkang and other hubs.',
  },
  {
    id: 9,
    category: 'auto',
    title: 'Auto Parts & Accessories',
    description: 'Replacement parts, performance parts, and automotive accessories.',
    examples: ['Engine Parts', 'Brake Systems', 'Lighting', 'Interior Accessories'],
    benefits: 'Knowledge of automotive quality standards and certification requirements.',
  },
  {
    id: 10,
    category: 'auto',
    title: 'EV Components',
    description: 'Electric vehicle components, batteries, charging equipment, and accessories.',
    examples: ['EV Batteries', 'Charging Equipment', 'Motor Components', 'EV Accessories'],
    benefits: 'Growing network in China\'s leading EV manufacturing regions.',
  },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter((p) => p.category === activeCategory)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Products We Source
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We source a wide range of products from China's major manufacturing hubs. Whether you need consumer goods or industrial equipment, we have the expertise and network to help.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Filter className="h-4 w-4 text-slate-400" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div key={product.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{product.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{product.description}</p>
                <div className="mb-4">
                  <p className="text-xs font-medium text-slate-500 mb-2">Common Products:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.examples.map((example) => (
                      <span key={example} className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-blue-50 p-3">
                  <p className="text-xs text-blue-800">
                    <span className="font-medium">Our Advantage:</span> {product.benefits}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-blue-600 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Don't see your product category?
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
              We source many more product categories than what's listed here. Contact us to discuss your specific sourcing needs.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link to="/contact">
                  Discuss Your Product <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}