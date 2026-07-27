import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Products = () => {
  const categories = [
    {
      title: 'Consumer Electronics & Accessories',
      examples: ['Power banks and chargers', 'Bluetooth speakers and headphones', 'Phone cases and accessories', 'LED lighting products', 'Smart home devices'],
      notes: 'We work with factories holding ISO and BSCI certifications. Typical MOQ ranges from 500-2000 units.',
    },
    {
      title: 'Home & Kitchen Products',
      examples: ['Cookware and bakeware', 'Small kitchen appliances', 'Storage and organization', 'Tableware and serveware', 'Cleaning tools and supplies'],
      notes: 'Food-contact compliance (LFGB, FDA) verification included. Sample testing available before bulk orders.',
    },
    {
      title: 'Textiles & Apparel',
      examples: ['Home textiles (bedding, towels)', 'Workwear and uniforms', 'Fashion accessories', 'Promotional textiles', 'Technical fabrics'],
      notes: 'OEKO-TEX and GOTS certification support. Fabric testing and color matching services available.',
    },
    {
      title: 'Industrial Components & Tools',
      examples: ['Fasteners and hardware', 'Hand tools and power tools', 'Machinery spare parts', 'Safety equipment', 'Material handling products'],
      notes: 'Material certificates and dimensional inspection included. Custom tooling coordination available.',
    },
    {
      title: 'Furniture & Home Furnishings',
      examples: ['Indoor furniture', 'Outdoor and garden furniture', 'Storage solutions', 'Decorative accessories', 'Contract furniture'],
      notes: 'Structural testing and packaging validation. Flat-pack optimization and assembly instructions support.',
    },
    {
      title: 'Packaging Materials',
      examples: ['Custom corrugated boxes', 'Retail display packaging', 'Protective packaging', 'Labels and tags', 'Sustainable packaging options'],
      notes: 'Material specification review and print quality inspection. FSC certification support available.',
    },
    {
      title: 'Automotive Parts',
      examples: ['Aftermarket accessories', 'Replacement components', 'Maintenance tools', 'Interior trim parts', 'Electrical components'],
      notes: 'IATF 16949 certified suppliers preferred. PPAP documentation support for automotive clients.',
    },
    {
      title: 'Medical & Safety Equipment',
      examples: ['Personal protective equipment', 'First aid supplies', 'Medical consumables', 'Safety signage', 'Workplace safety products'],
      notes: 'CE, FDA, and ISO 13485 supplier verification. Batch testing and traceability documentation provided.',
    },
  ]

  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-6">Products We Source</h1>
          <p className="text-xl text-slate-300">Established supplier networks across major product categories. Each category includes factories with relevant certifications and compliance experience.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">{category.title}</h2>
              <ul className="space-y-2 mb-4 text-slate-600">
                {category.examples.map((example, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span> {example}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-500 italic">{category.notes}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Don't see your product category?</h3>
          <p className="text-slate-600 mb-8">We source across additional categories based on client requirements. Contact us to discuss your specific sourcing needs.</p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Discuss Your Product <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products