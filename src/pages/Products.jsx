import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics',
      items: ['Smartphones & Accessories', 'Audio Equipment', 'Wearables', 'Home Automation', 'Power Banks & Chargers'],
      moq: 'Typical MOQ: 500-2000 units'
    },
    {
      name: 'Home Appliances',
      items: ['Kitchen Appliances', 'Cleaning Equipment', 'Air Treatment', 'Small Appliances', 'Personal Care Devices'],
      moq: 'Typical MOQ: 200-1000 units'
    },
    {
      name: 'Furniture & Home Decor',
      items: ['Indoor Furniture', 'Outdoor Furniture', 'Lighting Fixtures', 'Textiles & Linens', 'Decorative Items'],
      moq: 'Typical MOQ: 50-500 units'
    },
    {
      name: 'Industrial Equipment',
      items: ['Manufacturing Machinery', 'Tools & Hardware', 'Safety Equipment', 'Material Handling', 'Packaging Machinery'],
      moq: 'Varies by equipment type'
    },
    {
      name: 'Textiles & Apparel',
      items: ['Clothing & Garments', 'Fabrics & Materials', 'Home Textiles', 'Workwear & Uniforms', 'Accessories'],
      moq: 'Typical MOQ: 300-2000 pieces'
    },
    {
      name: 'Automotive Parts',
      items: ['Aftermarket Accessories', 'Replacement Parts', 'Maintenance Supplies', 'Interior Components', 'Electrical Systems'],
      moq: 'Varies by component'
    },
    {
      name: 'Packaging Materials',
      items: ['Custom Boxes & Cartons', 'Protective Packaging', 'Labels & Tags', 'Shipping Supplies', 'Retail Displays'],
      moq: 'Typical MOQ: 1000-5000 units'
    },
    {
      name: 'Building Supplies',
      items: ['Construction Materials', 'Plumbing Fixtures', 'Electrical Supplies', 'Flooring & Wall Coverings', 'Hardware & Fasteners'],
      moq: 'Varies by material'
    },
    {
      name: 'Medical & Healthcare',
      items: ['Medical Devices', 'Personal Protective Equipment', 'Wellness Products', 'Diagnostic Equipment', 'Rehabilitation Aids'],
      moq: 'Varies by product type'
    }
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold mb-6">Products We Source</h1>
          <p className="text-xl text-slate-300">Established supplier networks across major product categories.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl p-8 hover:border-slate-300 transition-colors">
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <ul className="space-y-2 mb-6">
                {category.items.map((item, i) => (
                  <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 border-t pt-4">{category.moq}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Don't See Your Product?</h2>
          <p className="text-lg text-slate-600 mb-8">We work with suppliers across additional categories. Contact us with your specific requirements.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800">
            Submit Your Product Inquiry <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products