import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

const categories = [
  {
    id: 'electronics',
    title: 'Consumer Electronics',
    description: 'Small appliances, accessories, IoT devices, audio and lifestyle electronics.',
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    description: 'Cookware, kitchenware, home decor, storage and everyday household goods.',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    description: 'Knit and woven garments, workwear, sportswear, towels, bedding and fabrics.',
  },
  {
    id: 'furniture',
    title: 'Furniture',
    description: 'Office, home and outdoor furniture in wood, metal, rattan and upholstered styles.',
  },
  {
    id: 'industrial',
    title: 'Industrial & Hardware',
    description: 'Hand tools, fasteners, fittings, machinery parts and OEM industrial components.',
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    description: 'Beauty tools, packaging, accessories and contract-manufactured personal care items.',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    description: 'Fitness equipment, outdoor gear, camping, cycling and recreational products.',
  },
  {
    id: 'toys-baby',
    title: 'Toys & Baby',
    description: 'Safe, compliant toys, plush, learning products and baby gear.',
  },
]

export default function HomeProducts() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
              Products we source
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Categories we source for global brands and importers
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              We focus on consumer and light industrial goods that are widely manufactured in
              China, particularly in the Guangdong, Zhejiang and Jiangsu clusters.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            View full list
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <article
              key={cat.id}
              className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={cat.title}
                  data-strk-img-id={`home-product-${cat.id}-b8e2f1`}
                  data-strk-img={`[home-product-${cat.id}-desc] [home-product-${cat.id}-title] product manufacturing`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3
                  id={`home-product-${cat.id}-title`}
                  className="text-base font-semibold text-slate-900"
                >
                  {cat.title}
                </h3>
                <p
                  id={`home-product-${cat.id}-desc`}
                  className="mt-2 text-sm text-slate-600 leading-relaxed"
                >
                  {cat.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
