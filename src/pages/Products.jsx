import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Products() {
  const categories = [
    {
      name: 'Consumer Electronics',
      items: ['Smart home devices', 'Audio equipment', 'Power banks & chargers', 'Wearables', 'LED lighting']
    },
    {
      name: 'Home & Kitchen',
      items: ['Cookware & bakeware', 'Small appliances', 'Storage solutions', 'Tableware', 'Cleaning tools']
    },
    {
      name: 'Apparel & Textiles',
      items: ['Casual clothing', 'Workwear & uniforms', 'Home textiles', 'Bags & accessories', 'Footwear']
    },
    {
      name: 'Industrial Components',
      items: ['Fasteners & hardware', 'Machined parts', 'Electrical components', 'Packaging machinery', 'Tooling']
    },
    {
      name: 'Furniture & Fixtures',
      items: ['Home furniture', 'Office furniture', 'Outdoor furniture', 'Retail fixtures', 'Hospitality furnishings']
    },
    {
      name: 'Packaging Materials',
      items: ['Custom boxes', 'Protective packaging', 'Labels & tags', 'Retail displays', 'Shipping supplies']
    },
    {
      name: 'Automotive Parts',
      items: ['Aftermarket accessories', 'Replacement components', 'Interior trim', 'Lighting', 'Maintenance tools']
    },
    {
      name: 'Promotional Products',
      items: ['Branded merchandise', 'Trade show giveaways', 'Corporate gifts', 'Event supplies', 'Custom printing']
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-semibold mb-4">Products We Source</h1>
        <p className="text-lg text-slate-600">We maintain active supplier relationships across a wide range of product categories. If your product is not listed, we can still assist through our extended network.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {categories.map((cat, idx) => (
          <div key={idx} className="border border-slate-200 rounded-xl p-8">
            <h2 className="font-semibold text-xl mb-5">{cat.name}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-600">
              {cat.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-10 text-center">
        <h3 className="font-semibold text-xl mb-3">Don't see your product category?</h3>
        <p className="text-slate-600 mb-6 max-w-md mx-auto">We work with suppliers across many additional categories. Contact us with your specific requirements.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
          Inquire About Your Product <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}