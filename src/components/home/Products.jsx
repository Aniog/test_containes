import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Section, SectionHeader } from '../Section'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

const products = [
  {
    id: 'electronics',
    title: 'Consumer Electronics',
    desc: 'Bluetooth audio, smart accessories, chargers, cables, small appliances and IoT devices.',
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    desc: 'Cookware, kitchen tools, storage, home decor, lighting and small furniture.',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Casualwear, sportswear, knitwear, accessories and home textiles with private label.',
  },
  {
    id: 'industrial',
    title: 'Industrial & Hardware',
    desc: 'Tools, fittings, machinery parts, building hardware and packaging supplies.',
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    desc: 'Cosmetics packaging, beauty tools, brushes, and contract-manufactured personal care.',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoors',
    desc: 'Fitness gear, camping equipment, cycling accessories and travel goods.',
  },
  {
    id: 'toys',
    title: 'Toys & Baby',
    desc: 'Plush toys, educational toys, plastic toys and baby care accessories.',
  },
  {
    id: 'gifts',
    title: 'Promotional & Gifts',
    desc: 'Branded merchandise, custom printing, corporate gifts and event giveaways.',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <Section id="products" className="bg-slate-50">
      <SectionHeader
        eyebrow="Products We Source"
        title="Categories we work with every day"
        description="Our sourcing team focuses on consumer and industrial product categories where supplier quality varies widely. We help you avoid the wrong factories."
      />

      <div ref={containerRef} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <article
            key={p.id}
            className="group overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <img
                alt={p.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                data-strk-img-id={`product-${p.id}-img`}
                data-strk-img={`[product-${p.id}-desc] [product-${p.id}-title] china manufacturing`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="p-5">
              <h3 id={`product-${p.id}-title`} className="text-base font-semibold text-slate-900">{p.title}</h3>
              <p id={`product-${p.id}-desc`} className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          Explore all product categories
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}
