import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SectionHeading from '@/components/SectionHeading'

const categories = [
  {
    title: 'Electronics & Components',
    items: ['Consumer electronics', 'Electronic components', 'Cables and connectors', 'Power supplies', 'LED lighting', 'PCB assembly']
  },
  {
    title: 'Home & Kitchen',
    items: ['Kitchen appliances', 'Cookware and bakeware', 'Home textiles', 'Storage solutions', 'Cleaning products', 'Furniture hardware']
  },
  {
    title: 'Apparel & Textiles',
    items: ['Clothing and garments', 'Fabric and materials', 'Home textiles', 'Bags and accessories', 'Workwear and uniforms', 'Promotional apparel']
  },
  {
    title: 'Industrial Equipment',
    items: ['Machinery and tools', 'Safety equipment', 'Material handling', 'Packaging machinery', 'Testing equipment', 'Spare parts']
  },
  {
    title: 'Automotive Parts',
    items: ['Aftermarket parts', 'OEM components', 'Accessories', 'Maintenance supplies', 'Electrical components', 'Body and trim parts']
  },
  {
    title: 'Consumer Goods',
    items: ['Household products', 'Personal care items', 'Toys and games', 'Sports equipment', 'Pet products', 'Seasonal goods']
  },
  {
    title: 'Packaging & Materials',
    items: ['Custom packaging', 'Retail packaging', 'Shipping materials', 'Raw materials', 'Labels and tags', 'Protective packaging']
  },
  {
    title: 'Building & Construction',
    items: ['Building materials', 'Hardware and tools', 'Electrical supplies', 'Plumbing fixtures', 'Safety equipment', 'Finishing materials']
  }
]

const Products = () => {
  return (
    <div>
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[2px] uppercase text-slate-400 mb-3">PRODUCT RANGE</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Products We Source</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We have experience sourcing across diverse categories. If your product is not listed, we can still help.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeading
          title="Product Categories"
          description="Select a category to learn more about our sourcing capabilities in that area."
          align="center"
          className="mb-12"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <Card key={index} className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg">{cat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1.5 text-sm text-slate-600">
                  {cat.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold mb-3">Custom & OEM Products</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We regularly support custom product development, private label manufacturing, and OEM projects. 
              Our team can help translate your specifications into production-ready requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            {[
              { title: 'Product Development', desc: 'From concept to production-ready specifications.' },
              { title: 'Private Label', desc: 'Branded products manufactured to your requirements.' },
              { title: 'Component Sourcing', desc: 'Individual parts for your assembly operations.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-3">Don't see your product?</h2>
        <p className="text-slate-600 mb-6">We source many products not listed here. Contact us to discuss your specific requirements.</p>
        <Link to="/contact">
          <Button size="lg">Get a Free Sourcing Quote</Button>
        </Link>
      </section>
    </div>
  )
}

export default Products
