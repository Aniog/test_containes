import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export const PRODUCT_CATEGORIES = [
  {
    id: 'electronics',
    title: 'Consumer Electronics',
    desc: 'Bluetooth audio, smart home devices, accessories, small appliances, and OEM electronics.',
    imgId: 'product-cat-electronics-7d12e1',
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    desc: 'Cookware, kitchen tools, storage, home decor, and lifestyle goods for retail and e-commerce.',
    imgId: 'product-cat-home-2c84f5',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Knitwear, woven garments, sportswear, accessories, and home textiles with private-label support.',
    imgId: 'product-cat-apparel-91ba0d',
  },
  {
    id: 'furniture',
    title: 'Furniture',
    desc: 'Wooden, metal, and upholstered furniture for residential, hospitality, and office buyers.',
    imgId: 'product-cat-furniture-44ee23',
  },
  {
    id: 'industrial',
    title: 'Industrial & Hardware',
    desc: 'Tools, fasteners, machinery parts, and industrial supplies sourced from specialized clusters.',
    imgId: 'product-cat-industrial-8a17cd',
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    desc: 'Packaging, accessories, beauty tools, and finished cosmetics under your own brand.',
    imgId: 'product-cat-beauty-65ff31',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoors',
    desc: 'Fitness equipment, outdoor gear, camping, cycling, and water-sport accessories.',
    imgId: 'product-cat-sports-13ae90',
  },
  {
    id: 'toys',
    title: 'Toys & Baby',
    desc: 'Plush, plastic, and wooden toys, plus baby goods produced under EN71 / CPSIA standards.',
    imgId: 'product-cat-toys-72cb4b',
  },
]

export default function ProductsWeSource({ heading = true }) {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" className="py-16 md:py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {heading && (
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">Products We Source</p>
            <h2 id="products-section-title" className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-brand-navy">
              Categories we source across China
            </h2>
            <p id="products-section-subtitle" className="mt-4 text-ink-700 text-lg">
              We focus on durable consumer and industrial categories with mature supply clusters in
              Yiwu, Shenzhen, Ningbo, Foshan, and Dongguan.
            </p>
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCT_CATEGORIES.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-xl border border-ink-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="aspect-[4/3] overflow-hidden bg-surface-muted">
                <img
                  alt={p.title}
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-500"
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[product-cat-${p.id}-desc] [product-cat-${p.id}-title] products we source`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-5">
                <h3 id={`product-cat-${p.id}-title`} className="text-base font-semibold text-brand-navy">
                  {p.title}
                </h3>
                <p id={`product-cat-${p.id}-desc`} className="mt-1.5 text-sm text-ink-700 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-ink-200 bg-white px-5 py-3 text-sm font-semibold text-brand-navy hover:bg-surface-muted"
          >
            See all categories
          </Link>
        </div>
      </div>
    </section>
  )
}
