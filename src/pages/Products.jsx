import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Products = () => {
  const categories = [
    { name: 'Consumer Electronics', items: ['Smart home devices', 'Audio equipment', 'Power banks', 'Cables and accessories', 'LED lighting'] },
    { name: 'Home & Kitchen', items: ['Cookware and utensils', 'Small appliances', 'Storage solutions', 'Textiles and linens', 'Cleaning supplies'] },
    { name: 'Textiles & Apparel', items: ['Garments and clothing', 'Home textiles', 'Workwear and uniforms', 'Bags and accessories', 'Footwear'] },
    { name: 'Industrial Components', items: ['Fasteners and hardware', 'Machined parts', 'Electrical components', 'Hydraulic fittings', 'Packaging machinery'] },
    { name: 'Furniture & Fixtures', items: ['Office furniture', 'Home furniture', 'Retail displays', 'Lighting fixtures', 'Architectural hardware'] },
    { name: 'Packaging Materials', items: ['Custom boxes', 'Protective packaging', 'Labels and tags', 'Shipping supplies', 'Retail packaging'] },
    { name: 'Automotive Parts', items: ['Aftermarket accessories', 'Replacement components', 'Maintenance supplies', 'Tools and equipment', 'Safety products'] },
    { name: 'Medical Supplies', items: ['PPE and protective gear', 'Medical devices', 'Disposables', 'Rehabilitation equipment', 'Diagnostic supplies'] },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Products We Source</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Experience sourcing across diverse product categories for clients worldwide.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category, i) => (
          <div key={i} className="border border-slate-200 rounded-lg p-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">{category.name}</h2>
            <ul className="space-y-2 text-slate-600">
              {category.items.map((item, j) => (
                <li key={j}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-slate-50 p-12 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Don't see your product category?</h3>
        <p className="text-slate-600 mb-6">We source across many additional categories. Contact us to discuss your specific requirements.</p>
        <Link to="/contact"><Button size="lg">Discuss Your Needs</Button></Link>
      </div>
    </div>
  )
}

export default Products