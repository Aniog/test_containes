import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const categories = [
  {
    title: 'Home & Kitchen',
    description: 'Cookware, tableware, storage containers, small appliances, and home organization products.',
    examples: ['Stainless steel cookware', 'Ceramic dinnerware', 'Bamboo kitchen tools', 'LED lighting fixtures'],
  },
  {
    title: 'Consumer Electronics',
    description: 'Audio devices, chargers, cables, smart home gadgets, and personal electronics.',
    examples: ['Bluetooth speakers', 'USB-C chargers', 'Wireless earbuds', 'Smart plugs'],
  },
  {
    title: 'Garden & Outdoor',
    description: 'Patio furniture, garden tools, outdoor lighting, camping gear, and landscaping supplies.',
    examples: ['Folding chairs', 'Garden tool sets', 'Solar path lights', 'Camping equipment'],
  },
  {
    title: 'Industrial & Hardware',
    description: 'Fasteners, fittings, tools, safety equipment, and mechanical components.',
    examples: ['Stainless steel bolts', 'Pipe fittings', 'Hand tools', 'Safety helmets'],
  },
  {
    title: 'Textiles & Apparel',
    description: 'Fabrics, garments, home textiles, bags, and accessories.',
    examples: ['Cotton fabrics', 'Work uniforms', 'Canvas bags', 'Bedding sets'],
  },
  {
    title: 'Toys & Gifts',
    description: 'Promotional items, toys, stationery, and seasonal gift products.',
    examples: ['Plush toys', 'Promotional pens', 'Greeting cards', 'Party supplies'],
  },
]

export default function Products() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Products We Source</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">We work with a wide range of product categories. If you do not see your product listed, contact us anyway.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div key={category.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
                <div className="mt-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Common items</div>
                  <ul className="mt-2 space-y-2">
                    {category.examples.map((example) => (
                      <li key={example} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-900" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
            <h3 className="text-lg font-semibold text-slate-900">Do not see your product?</h3>
            <p className="mt-2 text-sm text-slate-600">We source many more categories. Tell us what you need and we will confirm feasibility.</p>
            <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700">
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
