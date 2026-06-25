import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const CATEGORIES = [
  {
    id: 'consumer-electronics',
    title: 'Consumer Electronics',
    desc: 'Power banks, chargers, audio, smart home, small appliances and OEM/ODM electronics.',
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    desc: 'Cookware, kitchen tools, organizers, bath, decor and daily-use household goods.',
  },
  {
    id: 'apparel-textiles',
    title: 'Apparel & Textiles',
    desc: 'T-shirts, sportswear, uniforms, bags, bedding, towels and private-label apparel.',
  },
  {
    id: 'furniture',
    title: 'Furniture',
    desc: 'Office, hospitality and home furniture in wood, metal, rattan and upholstered styles.',
  },
  {
    id: 'hardware-tools',
    title: 'Hardware & Tools',
    desc: 'Hand tools, power tools, fasteners, plumbing, electrical fittings and DIY supplies.',
  },
  {
    id: 'beauty-personal-care',
    title: 'Beauty & Personal Care',
    desc: 'Brushes, mirrors, accessories, packaging, salon equipment and private-label cosmetics.',
  },
  {
    id: 'toys-baby',
    title: 'Toys & Baby',
    desc: 'Educational toys, plush, outdoor toys, baby gear and licensed character products.',
  },
  {
    id: 'auto-industrial',
    title: 'Auto & Industrial',
    desc: 'Auto accessories, replacement parts, industrial equipment, machinery and packaging.',
  },
]

export default function Products() {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p id="products-eyebrow" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E63946]">
              Products We Source
            </p>
            <h2 id="products-title" className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#0B2545]">
              Broad category coverage, strongest in consumer goods
            </h2>
            <p id="products-subtitle" className="mt-4 text-base text-slate-600 leading-relaxed">
              We source across most consumer and light industrial categories. Our deepest expertise is
              in everyday products manufactured around Yiwu, Ningbo, Shenzhen and the Pearl River Delta.
            </p>
          </div>
          <Link to="/products-we-source" className="inline-flex items-center gap-1.5 text-[#0B2545] font-semibold hover:text-[#E63946] transition">
            View all categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <article key={cat.id} className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  data-strk-img-id={`product-${cat.id}-img-${cat.id.slice(0,6)}a2`}
                  data-strk-img={`[product-${cat.id}-desc] [product-${cat.id}-title] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-5">
                <h3 id={`product-${cat.id}-title`} className="text-base font-semibold text-[#0B2545]">{cat.title}</h3>
                <p id={`product-${cat.id}-desc`} className="mt-1.5 text-sm text-slate-600 leading-relaxed">{cat.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
