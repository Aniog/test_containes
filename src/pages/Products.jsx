import { useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Cpu, Cog, Shirt, Home, Package, Car, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'PCBs, cables, chargers, smart devices, consumer electronics, semiconductors, and IoT components.',
    examples: ['USB cables & adapters', 'LED drivers', 'Bluetooth modules', 'Smart home devices'],
  },
  {
    icon: Cog,
    title: 'Machinery & Industrial',
    description: 'Manufacturing equipment, tooling, spare parts, automation systems, and industrial components.',
    examples: ['CNC machine parts', 'Conveyor systems', 'Pneumatic components', 'Industrial sensors'],
  },
  {
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'Fabrics, garments, bags, footwear, home textiles, and fashion accessories.',
    examples: ['Cotton fabrics', 'Activewear', 'Leather bags', 'Canvas shoes'],
  },
  {
    icon: Home,
    title: 'Home & Furniture',
    description: 'Furniture, kitchenware, lighting, decor, bathroom fixtures, and outdoor living products.',
    examples: ['Sofas & chairs', 'Kitchen utensils', 'LED lighting', 'Bathroom vanities'],
  },
  {
    icon: Package,
    title: 'Packaging Materials',
    description: 'Boxes, bags, bottles, labels, custom printed packaging, and sustainable packaging solutions.',
    examples: ['Corrugated boxes', 'Glass bottles', 'Paper bags', 'Custom labels'],
  },
  {
    icon: Car,
    title: 'Auto Parts & Accessories',
    description: 'Replacement parts, accessories, EV components, car care products, and aftermarket upgrades.',
    examples: ['Brake pads', 'LED headlights', 'EV charging cables', 'Floor mats'],
  },
]

export default function Products() {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      return ImageHelper.loadImages(strkImgConfig, ref.current)
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Products We Source | Electronics, Machinery, Textiles | SSourcing China</title>
        <meta name="description" content="We source electronics, machinery, textiles, home goods, packaging, and auto parts from verified factories across China." />
      </Helmet>

      {/* Hero */}
      <section className="w-full bg-navy-900 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Products We Source</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            We have experience sourcing across dozens of product categories. Here are some of the most common ones we handle.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section ref={ref} className="w-full bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <div key={cat.title} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="aspect-video w-full overflow-hidden bg-slate-100">
                    <img
                      data-strk-img-id={`prod-cat-${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
                      data-strk-img={`[prod-title-${cat.title.toLowerCase().replace(/\s+/g, '-')}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cat.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <h2 id={`prod-title-${cat.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-lg font-semibold text-slate-900">
                        {cat.title}
                      </h2>
                    </div>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">{cat.description}</p>
                    <div className="space-y-1.5">
                      {cat.examples.map((ex) => (
                        <div key={ex} className="flex items-center gap-2 text-xs text-slate-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          {ex}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Do not see your product category?</h2>
          <p className="text-slate-600 mb-6">We source across dozens of categories. Reach out and we will let you know if we can help.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Request a Free Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
