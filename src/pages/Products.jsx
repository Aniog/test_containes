import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Electronics & Electrical',
    examples: 'Consumer electronics, components, lighting, cables, chargers, sensors',
  },
  {
    title: 'Home & Kitchen',
    examples: 'Cookware, storage, cleaning tools, small appliances, tableware',
  },
  {
    title: 'Industrial & Hardware',
    examples: 'Fasteners, fittings, tools, machinery parts, safety equipment',
  },
  {
    title: 'Textiles & Apparel',
    examples: 'Fabrics, garments, home textiles, bags, accessories',
  },
  {
    title: 'Packaging & Printing',
    examples: 'Boxes, labels, flexible packaging, paper products, displays',
  },
  {
    title: 'Garden & Outdoor',
    examples: 'Tools, furniture, decor, irrigation, camping equipment',
  },
  {
    title: 'Health & Beauty',
    examples: 'Personal care devices, cosmetics packaging, wellness accessories',
  },
  {
    title: 'Toys & Gifts',
    examples: 'Promotional items, seasonal gifts, educational toys, party supplies',
  },
]

export default function Products() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-semibold text-slate-900">Products We Source</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            We support a broad range of product categories. If your item is not listed, tell us what you need and we will confirm whether we can help.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.examples}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-semibold text-slate-900">Not sure if we source your product?</h2>
          <p className="mt-2 text-slate-600">Send us your product details and we will confirm feasibility, typical sourcing channels, and estimated timelines.</p>
          <div className="mt-6">
            <Button asChild>
              <Link to="/contact">Get a Free Sourcing Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
