import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { Section } from '../components/Section'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Consumer Electronics',
    desc: 'Bluetooth audio, smart accessories, chargers, cables, small appliances and IoT devices.',
    examples: ['TWS earbuds', 'Power banks', 'Smart plugs', 'LED accessories', 'Cables & adapters'],
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    desc: 'Cookware, kitchen tools, storage, home decor, lighting and small furniture pieces.',
    examples: ['Stainless steel pans', 'Silicone kitchen tools', 'Storage organizers', 'Decorative lighting', 'Bedding sets'],
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Casualwear, sportswear, knitwear, accessories and home textiles with private label.',
    examples: ['T-shirts & hoodies', 'Activewear', 'Knit accessories', 'Tote bags', 'Towels & linens'],
  },
  {
    id: 'industrial',
    title: 'Industrial & Hardware',
    desc: 'Tools, fittings, machinery parts, building hardware and packaging supplies.',
    examples: ['Hand tools', 'Fasteners', 'Metal parts', 'Packaging boxes', 'Safety equipment'],
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    desc: 'Cosmetics packaging, beauty tools, brushes, and contract-manufactured personal care.',
    examples: ['Makeup brushes', 'Skincare bottles', 'Hair tools', 'Cosmetic packaging', 'Spa accessories'],
  },
  {
    id: 'sports',
    title: 'Sports & Outdoors',
    desc: 'Fitness gear, camping equipment, cycling accessories and travel goods.',
    examples: ['Yoga mats', 'Camping gear', 'Cycling accessories', 'Backpacks', 'Drinkware'],
  },
  {
    id: 'toys',
    title: 'Toys & Baby',
    desc: 'Plush toys, educational toys, plastic toys and baby care accessories.',
    examples: ['Plush toys', 'Wooden toys', 'STEM kits', 'Baby silicone items', 'Children apparel'],
  },
  {
    id: 'gifts',
    title: 'Promotional & Gifts',
    desc: 'Branded merchandise, custom printing, corporate gifts and event giveaways.',
    examples: ['Custom mugs', 'Branded notebooks', 'Logo apparel', 'Keychains', 'Event bags'],
  },
]

export default function ProductsPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Products We Source"
        title="Categories we source from China"
        description="We focus on consumer and industrial categories where supplier quality varies widely. We help you avoid the wrong factories and find the right ones."
      />

      <Section className="bg-white">
        <div ref={containerRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article
              key={c.id}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  data-strk-img-id={`cat-${c.id}-img`}
                  data-strk-img={`[cat-${c.id}-desc] [cat-${c.id}-title] china manufacturer products`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <h3 id={`cat-${c.id}-title`} className="text-lg font-semibold text-slate-900">{c.title}</h3>
                <p id={`cat-${c.id}-desc`} className="mt-2 text-sm text-slate-600 leading-relaxed">{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.examples.map((ex) => (
                    <span key={ex} className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
          <div className="grid gap-6 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Don't see your product?</h2>
              <p className="mt-3 text-slate-600">
                We regularly source outside this list. Tell us what you need and we will assess whether we can support
                your sourcing project.
              </p>
            </div>
            <div className="md:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Ask about your product
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
