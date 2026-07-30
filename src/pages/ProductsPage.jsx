import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    description: 'Consumer electronics, components, PCBs, cables, and accessories from verified manufacturers.',
    examples: ['LED lighting', 'Phone accessories', 'USB cables', 'PCB assemblies', 'Power banks'],
    image: 'electronics components manufacturing',
  },
  {
    id: 'home-garden',
    name: 'Home & Garden',
    description: 'Furniture, decor, kitchenware, garden tools, and household items from quality suppliers.',
    examples: ['Furniture', 'Kitchen appliances', 'Garden tools', 'Home decor', 'Storage solutions'],
    image: 'home garden products furniture',
  },
  {
    id: 'machinery',
    name: 'Machinery & Equipment',
    description: 'Industrial machinery, manufacturing equipment, and specialized tools for various industries.',
    examples: ['CNC machines', 'Packaging equipment', 'Industrial tools', 'Automation systems', 'Spare parts'],
    image: 'industrial machinery equipment',
  },
  {
    id: 'textiles',
    name: 'Textiles & Apparel',
    description: 'Fabric, clothing, accessories, and textile products from established manufacturers.',
    examples: ['Cotton fabric', 'Workwear', 'Bags and luggage', 'Home textiles', 'Technical textiles'],
    image: 'textiles apparel manufacturing',
  },
  {
    id: 'auto-parts',
    name: 'Automotive Parts',
    description: 'Auto parts, accessories, and components from certified automotive suppliers.',
    examples: ['Brake components', 'Electrical parts', 'Body panels', 'Filters', 'Accessories'],
    image: 'automotive parts manufacturing',
  },
  {
    id: 'building',
    name: 'Building Materials',
    description: 'Construction materials, hardware, and building products from reliable manufacturers.',
    examples: ['Steel products', 'Ceramic tiles', 'Plumbing fixtures', 'Hardware', 'Insulation'],
    image: 'building materials construction',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    description: 'Custom packaging, labels, printed materials, and packaging machinery.',
    examples: ['Custom boxes', 'Labels and stickers', 'Gift packaging', 'Printing services', 'Packaging machines'],
    image: 'packaging printing products',
  },
  {
    id: 'promotional',
    name: 'Promotional Products',
    description: 'Custom branded merchandise, giveaways, and promotional items for marketing campaigns.',
    examples: ['Branded merchandise', 'Trade show giveaways', 'Corporate gifts', 'Custom packaging', 'Event materials'],
    image: 'promotional products branded merchandise',
  },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-h1 text-white mb-6">
              Products We Source
            </h1>
            <p className="text-body-lg text-primary-light/90 max-w-3xl mx-auto">
              We source a wide range of products across multiple industries. Whatever you need, 
              we have the expertise and supplier network to deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Category List */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeCategory.id === category.id
                        ? 'bg-primary text-white'
                        : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Category Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-card border border-neutral-200 overflow-hidden">
                {/* Image */}
                <div className="aspect-[16/9] bg-neutral-100">
                  <img
                    data-strk-img-id={`product-${activeCategory.id}-img`}
                    data-strk-img={`${activeCategory.name} China manufacturing products`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={activeCategory.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-h3 text-neutral-900 mb-4">{activeCategory.name}</h2>
                  <p className="text-body-lg text-neutral-600 mb-6">{activeCategory.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-h4 text-neutral-900 mb-4">Common Products We Source:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeCategory.examples.map((example) => (
                        <li key={example} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                          <span className="text-body text-neutral-700">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
                  >
                    Request sourcing for this category
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products Section */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-h2 text-neutral-900 mb-4">
              Don't See Your Product?
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              We work with virtually any product category. Tell us what you need and we'll find the right suppliers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-card p-6 text-center">
              <div className="text-h4 font-bold text-primary mb-2">10,000+</div>
              <div className="text-body font-semibold text-neutral-900 mb-2">Products Sourced</div>
              <p className="text-small text-neutral-600">Across all major product categories</p>
            </div>
            <div className="bg-white rounded-card p-6 text-center">
              <div className="text-h4 font-bold text-primary mb-2">500+</div>
              <div className="text-body font-semibold text-neutral-900 mb-2">Verified Suppliers</div>
              <p className="text-small text-neutral-600">Pre-vetted and audited factories</p>
            </div>
            <div className="bg-white rounded-card p-6 text-center">
              <div className="text-h4 font-bold text-primary mb-2">50+</div>
              <div className="text-body font-semibold text-neutral-900 mb-2">Countries Served</div>
              <p className="text-small text-neutral-600">Global shipping and logistics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 text-neutral-900 mb-6">
            Ready to Source Your Products?
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Tell us what you need and we'll provide a detailed sourcing proposal within 48 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-button bg-accent px-8 py-4 text-body font-semibold text-white shadow-lg transition-all duration-200 hover:bg-accent-dark hover:shadow-xl"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
