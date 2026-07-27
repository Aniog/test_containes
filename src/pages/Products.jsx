import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Consumer Electronics',
    description: 'Smart devices, audio equipment, chargers, cables, and accessories.',
    examples: ['Wireless earbuds', 'Phone cases', 'LED lighting', 'Power banks'],
  },
  {
    title: 'Home & Kitchen',
    description: 'Household essentials, kitchen tools, storage solutions, and decor.',
    examples: ['Cookware', 'Storage containers', 'Cleaning tools', 'Home textiles'],
  },
  {
    title: 'Industrial & Hardware',
    description: 'Components, fasteners, tools, and equipment for industrial use.',
    examples: ['Fasteners', 'Bearings', 'Hand tools', 'Safety equipment'],
  },
  {
    title: 'Fashion & Accessories',
    description: 'Apparel, bags, shoes, and fashion accessories for global brands.',
    examples: ['Bags', 'Shoes', 'Jewelry', 'Watches'],
  },
  {
    title: 'Health & Beauty',
    description: 'Personal care, skincare, cosmetics, and wellness products.',
    examples: ['Skincare sets', 'Hair tools', 'Beauty devices', 'Wellness items'],
  },
  {
    title: 'Toys & Gifts',
    description: 'Promotional gifts, toys, games, and seasonal products.',
    examples: ['Plush toys', 'Promotional items', 'Party supplies', 'Gift sets'],
  },
]

const Products = () => {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Products We Source</h1>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">We source a wide range of products across multiple categories. Tell us what you need and we will find the right suppliers.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{category.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <span key={example} className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                      {example}
                    </span>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-600">Do not see your product category? Contact us and we will assess feasibility.</p>
            <div className="mt-4">
              <Button asChild size="lg">
                <Link to="/contact">Request a Product Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
