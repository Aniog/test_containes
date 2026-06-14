import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    title: 'Electronics & Electrical',
    description: 'Consumer electronics, components, LED lighting, cables, and electrical accessories.',
    examples: ['Smart home devices', 'Power banks', 'USB cables', 'LED strips'],
  },
  {
    title: 'Home & Kitchen',
    description: 'Household goods, kitchenware, furniture, decor, and storage solutions.',
    examples: ['Cookware sets', 'Storage containers', 'Bathroom accessories', 'Home textiles'],
  },
  {
    title: 'Textiles & Apparel',
    description: 'Clothing, fabrics, bags, shoes, and fashion accessories.',
    examples: ['Casual wear', 'Sports apparel', 'Canvas bags', 'Sneakers'],
  },
  {
    title: 'Industrial & Hardware',
    description: 'Tools, machinery parts, fasteners, and industrial equipment.',
    examples: ['Hand tools', 'Bearings', 'Fasteners', 'Pumps'],
  },
  {
    title: 'Automotive & Parts',
    description: 'Auto components, accessories, and replacement parts.',
    examples: ['Brake pads', 'Filters', 'Lighting', 'Interior parts'],
  },
  {
    title: 'Toys & Gifts',
    description: 'Promotional items, toys, stationery, and gift products.',
    examples: ['Plush toys', 'Stationery sets', 'Promotional pens', 'Gift boxes'],
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="flex flex-col">
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 id="products-page-title" className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Products We Source
            </h1>
            <p id="products-page-subtitle" className="mt-4 text-lg text-slate-600">
              We source a wide range of products across multiple industries. If you do not see your category listed, ask us — we likely cover it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.title}
                id={`product-category-${category.title.toLowerCase().replace(/ /g, '-')}-section`}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h2 id={`product-category-${category.title.toLowerCase().replace(/ /g, '-')}-title`} className="text-lg font-semibold text-slate-900">
                  {category.title}
                </h2>
                <p id={`product-category-${category.title.toLowerCase().replace(/ /g, '-')}-desc`} className="mt-2 text-sm text-slate-600">
                  {category.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {category.examples.map((example) => (
                    <li key={example} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">
                      Inquire about this category <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 id="products-cta-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Do not see your product?
              </h2>
              <p id="products-cta-subtitle" className="mt-4 text-lg text-slate-600">
                We source across dozens of industries. Tell us what you need and we will let you know if we can help.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Custom and private label products',
                  'OEM and ODM manufacturing',
                  'Prototype to mass production',
                  'Sustainable and eco-friendly materials',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/contact">Contact us about your product</Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                data-strk-img-id="products-cta-img"
                data-strk-img="[products-cta-subtitle] [products-cta-title] [products-page-subtitle] [products-page-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Product sourcing"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
