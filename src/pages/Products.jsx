import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics',
      items: ['LED lighting and components', 'Power banks and chargers', 'Audio equipment', 'Smart home devices', 'Cables and connectors']
    },
    {
      name: 'Home & Kitchen',
      items: ['Small appliances', 'Cookware and bakeware', 'Storage solutions', 'Cleaning equipment', 'Tableware and utensils']
    },
    {
      name: 'Industrial & Machinery',
      items: ['CNC parts and tooling', 'Hydraulic components', 'Conveyor systems', 'Welding equipment', 'Safety gear']
    },
    {
      name: 'Textiles & Apparel',
      items: ['Workwear and uniforms', 'Home textiles', 'Technical fabrics', 'Accessories', 'Promotional items']
    },
    {
      name: 'Furniture & Decor',
      items: ['Office furniture', 'Home furnishings', 'Outdoor furniture', 'Lighting fixtures', 'Decorative accessories']
    },
    {
      name: 'Automotive',
      items: ['Aftermarket parts', 'Interior accessories', 'Maintenance tools', 'Safety equipment', 'Tires and wheels']
    },
    {
      name: 'Packaging',
      items: ['Custom boxes and cartons', 'Protective packaging', 'Labels and tags', 'Shipping supplies', 'Retail displays']
    },
    {
      name: 'Medical & Safety',
      items: ['PPE and protective gear', 'First aid supplies', 'Medical devices', 'Hygiene products', 'Safety signage']
    }
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm font-medium text-slate-400 tracking-wider mb-3">CATEGORIES</div>
          <h1 className="text-5xl font-semibold mb-6">Products We Source</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Established supplier relationships across major product categories.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-slate-900 mb-5">{category.name}</h3>
              <ul className="space-y-2 text-slate-600">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Don't see your category?</h2>
          <p className="text-lg text-slate-600 mb-8">We work with suppliers across many additional product types. Contact us to discuss your specific requirements.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
            Discuss Your Needs
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products