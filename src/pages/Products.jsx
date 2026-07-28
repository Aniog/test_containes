import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const categories = [
  {
    name: 'Electronics',
    description: 'Consumer electronics, components, accessories, and electronic devices',
    examples: ['Smartphones', 'Laptops', 'Audio equipment', 'Electronic components', 'Chargers & cables']
  },
  {
    name: 'Home & Garden',
    description: 'Home decor, kitchenware, furniture, and garden supplies',
    examples: ['Furniture', 'Kitchen appliances', 'Home decor', 'Garden tools', 'Storage solutions']
  },
  {
    name: 'Apparel & Textiles',
    description: 'Clothing, fabrics, accessories, and textile products',
    examples: ['Casual wear', 'Sportswear', 'Fabrics', 'Bags & luggage', 'Fashion accessories']
  },
  {
    name: 'Toys & Gifts',
    description: 'Toys, games, promotional items, and gift products',
    examples: ['Educational toys', 'Board games', 'Promotional items', 'Gift sets', 'Party supplies']
  },
  {
    name: 'Auto Parts',
    description: 'Automotive components, accessories, and replacement parts',
    examples: ['Engine parts', 'Brake systems', 'Lighting', 'Interior accessories', 'Tools & equipment']
  },
  {
    name: 'Industrial Equipment',
    description: 'Machinery, tools, and industrial supplies',
    examples: ['Power tools', 'Measuring instruments', 'Safety equipment', 'Industrial components', 'Material handling']
  },
  {
    name: 'Health & Beauty',
    description: 'Personal care, cosmetics, and health products',
    examples: ['Skincare', 'Hair care', 'Makeup', 'Health supplements', 'Personal care devices']
  },
  {
    name: 'Sports & Outdoors',
    description: 'Sports equipment, outdoor gear, and fitness products',
    examples: ['Fitness equipment', 'Camping gear', 'Sports accessories', 'Outdoor clothing', 'Recreation products']
  },
  {
    name: 'Packaging',
    description: 'Packaging materials, containers, and custom packaging solutions',
    examples: ['Boxes & cartons', 'Bags & pouches', 'Bottles & jars', 'Custom packaging', 'Eco-friendly options']
  },
  {
    name: 'Lighting',
    description: 'Indoor and outdoor lighting fixtures and components',
    examples: ['LED lights', 'Commercial lighting', 'Outdoor fixtures', 'Smart lighting', 'Decorative lights']
  },
  {
    name: 'Furniture',
    description: 'Office, home, and commercial furniture',
    examples: ['Office furniture', 'Home furniture', 'Outdoor furniture', 'Commercial fixtures', 'Custom furniture']
  },
  {
    name: 'Jewelry & Accessories',
    description: 'Fashion jewelry, watches, and accessories',
    examples: ['Fashion jewelry', 'Watches', 'Sunglasses', 'Belts & wallets', 'Fashion accessories']
  }
]

const Products = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Products We Source
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              We source a wide range of products across multiple industries. Whether you need a single item or a complete product line, we can help you find the right suppliers.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Tell Us What You Need</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Click on any category to learn more about our sourcing capabilities in that area.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {category.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Examples</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, eIdx) => (
                      <span
                        key={eIdx}
                        className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Inquire about this category <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Source */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How We Source Products
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our systematic approach ensures we find the right suppliers for your specific product needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Requirements Analysis',
                description: 'We analyze your product specifications, quality requirements, target price, and timeline to create a sourcing strategy.'
              },
              {
                title: 'Supplier Research',
                description: 'We leverage our network and market knowledge to identify potential suppliers, then verify their capabilities and credentials.'
              },
              {
                title: 'Sample Evaluation',
                description: 'We coordinate sample production and conduct thorough evaluations to ensure products meet your standards.'
              },
              {
                title: 'Factory Audits',
                description: 'On-site factory audits verify production capacity, quality systems, and compliance with your requirements.'
              },
              {
                title: 'Quality Control',
                description: 'Systematic inspections at key production stages ensure consistent quality and adherence to specifications.'
              },
              {
                title: 'Logistics Coordination',
                description: 'We handle shipping, customs, and delivery to ensure your products arrive safely and on time.'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We source many more products beyond what's listed here. Contact us with your specific requirements and we'll let you know how we can help.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Products