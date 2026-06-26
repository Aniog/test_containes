import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const CATEGORIES = [
  {
    id: 'electronics',
    title: 'Consumer electronics',
    desc: 'Bluetooth audio, smart home, accessories, cables, chargers, wearable devices.',
  },
  {
    id: 'home-kitchen',
    title: 'Home & kitchen',
    desc: 'Cookware, storage, small appliances, organizers, eco-friendly household goods.',
  },
  {
    id: 'apparel',
    title: 'Apparel & textiles',
    desc: 'Knitwear, woven garments, sportswear, uniforms, home textiles, custom packaging.',
  },
  {
    id: 'promo-gifts',
    title: 'Promotional & gifts',
    desc: 'Branded merchandise, custom logo items, corporate gifts and event giveaways.',
  },
  {
    id: 'industrial',
    title: 'Industrial & hardware',
    desc: 'Fasteners, tools, metal parts, plastic injection parts, OEM components.',
  },
  {
    id: 'beauty',
    title: 'Beauty & personal care',
    desc: 'Beauty tools, packaging, accessories, private-label cosmetics partners.',
  },
  {
    id: 'toys-baby',
    title: 'Toys & baby',
    desc: 'EN71 / ASTM compliant toys, plush, baby accessories and gift sets.',
  },
  {
    id: 'furniture',
    title: 'Furniture & lighting',
    desc: 'Flat-pack furniture, hotel and contract furniture, lamps and decorative lighting.',
  },
]

export default function ProductsWeSource({ compact = false }) {
  const ref = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, ref.current), [])

  return (
    <section
      ref={ref}
      className="border-b border-slate-200 bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-blue-700">
              Products we source
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Categories we know well
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
              We work across a focused set of categories where we have factory
              relationships, technical knowledge and reliable QC checklists.
            </p>
          </div>
          {!compact && (
            <Link
              to="/products"
              className="inline-flex w-fit items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
            >
              See all categories
            </Link>
          )}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <article
              key={c.id}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={c.title}
                  data-strk-img-id={`product-cat-${c.id}-a91d`}
                  data-strk-img={`[product-cat-${c.id}-desc] [product-cat-${c.id}-title] china manufacturing factory`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3
                  id={`product-cat-${c.id}-title`}
                  className="text-base font-semibold text-slate-900"
                >
                  {c.title}
                </h3>
                <p
                  id={`product-cat-${c.id}-desc`}
                  className="mt-2 text-sm leading-relaxed text-slate-600"
                >
                  {c.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
