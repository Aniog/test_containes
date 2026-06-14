import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

const Products = () => {
  const categories = [
    {
      title: 'Consumer Electronics & Accessories',
      items: ['Power banks and chargers', 'Bluetooth speakers and headphones', 'Cables, adapters, and connectors', 'Phone cases and screen protectors', 'Smart home devices', 'Computer peripherals'],
    },
    {
      title: 'Home & Kitchen Appliances',
      items: ['Small kitchen appliances', 'Cookware and bakeware', 'Storage and organization', 'Cleaning tools and equipment', 'Lighting and lamps', 'Home security devices'],
    },
    {
      title: 'Textiles, Apparel & Accessories',
      items: ['Apparel and clothing', 'Bags, backpacks, and luggage', 'Home textiles and bedding', 'Towels and bath products', 'Workwear and uniforms', 'Fashion accessories'],
    },
    {
      title: 'Industrial Components & Tools',
      items: ['Fasteners and hardware', 'Hand tools and power tools', 'Machinery parts and spares', 'Safety equipment', 'Packaging machinery', 'Material handling equipment'],
    },
    {
      title: 'Packaging Materials & Supplies',
      items: ['Custom boxes and cartons', 'Bags, pouches, and envelopes', 'Labels and stickers', 'Protective packaging', 'Retail display packaging', 'Shipping supplies'],
    },
    {
      title: 'Furniture & Home Furnishings',
      items: ['Indoor furniture', 'Outdoor and garden furniture', 'Mattresses and bedding', 'Decorative items', 'Storage solutions', 'Office furniture'],
    },
    {
      title: 'Automotive Parts & Accessories',
      items: ['Interior accessories', 'Exterior trim and body parts', 'Lighting and electrical', 'Tools and maintenance', 'Tires and wheels', 'Performance parts'],
    },
    {
      title: 'Toys, Games & Sporting Goods',
      items: ['Plush toys and dolls', 'Board games and puzzles', 'Outdoor play equipment', 'Sports equipment', 'Fitness accessories', 'Seasonal and party items'],
    },
  ]

  const notes = [
    'We also source products outside these categories. If your product is not listed, contact us to discuss feasibility.',
    'Minimum order quantities vary significantly by product type and supplier. We will advise you during the consultation.',
    'Certain regulated products (medical devices, food contact items, electrical goods) may require additional compliance steps.',
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="text-sm tracking-[2px] text-slate-400 mb-4">PRODUCT CATEGORIES</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Products We Source</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We have experience across a broad range of product categories. Our team understands the specific 
            challenges and quality considerations for each.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-xl tracking-tight text-slate-900 mb-5 pb-3 border-b border-slate-200">{cat.title}</h3>
              <ul className="space-y-2.5 text-sm text-slate-600">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <h2 className="font-semibold text-xl tracking-tight text-slate-900 mb-6">Important Notes</h2>
          <ul className="space-y-3 text-sm text-slate-600">
            {notes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Don't See Your Product?</h2>
        <p className="text-slate-600 mb-8 max-w-lg mx-auto">We source many products beyond the categories listed here. Describe what you need and we'll let you know if we can help.</p>
        <Button asChild size="lg">
          <Link to="/contact">Get a Free Sourcing Quote</Link>
        </Button>
      </section>
    </div>
  )
}

export default Products
