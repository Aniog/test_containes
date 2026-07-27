import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics',
      items: ['Smart home devices', 'Audio equipment', 'Mobile accessories', 'Wearables', 'Power banks']
    },
    {
      name: 'Home & Kitchen',
      items: ['Cookware and utensils', 'Small appliances', 'Storage solutions', 'Textiles and linens', 'Decor items']
    },
    {
      name: 'Textiles & Apparel',
      items: ['Garments and clothing', 'Workwear and uniforms', 'Home textiles', 'Bags and accessories', 'Footwear']
    },
    {
      name: 'Industrial Components',
      items: ['Fasteners and hardware', 'Machined parts', 'Electrical components', 'Packaging machinery', 'Tooling']
    },
    {
      name: 'Packaging Materials',
      items: ['Custom boxes and cartons', 'Protective packaging', 'Labels and tags', 'Retail displays', 'Shipping supplies']
    },
    {
      name: 'Furniture & Fixtures',
      items: ['Home furniture', 'Office furniture', 'Retail fixtures', 'Outdoor furniture', 'Component parts']
    },
    {
      name: 'Automotive Parts',
      items: ['Aftermarket accessories', 'Replacement components', 'Interior trim', 'Lighting products', 'Maintenance items']
    },
    {
      name: 'Medical & Healthcare',
      items: ['PPE and protective gear', 'Medical consumables', 'Wellness products', 'Rehabilitation equipment', 'Diagnostic supplies']
    }
  ]

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Products We Source</h1>
          <p className="text-xl text-slate-300">We work across diverse categories with established supplier networks in each sector.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <div key={idx} className="p-8 border border-slate-200 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">{category.name}</h3>
              <ul className="grid grid-cols-1 gap-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="text-slate-600 flex items-center gap-2">
                    <span className="text-sky-600">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-slate-50 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Product?</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">We source across many additional categories. Tell us what you need.</p>
          <Button asChild>
            <Link to="/contact">Inquire About Your Product</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Products