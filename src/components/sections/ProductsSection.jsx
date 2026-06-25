import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '../SectionHeader'

const categories = [
  {
    id: 'consumer-electronics',
    title: 'Consumer Electronics',
    desc: 'Bluetooth audio, chargers, cables, smart home devices, accessories. CE/FCC/RoHS guidance available.',
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    desc: 'Stainless steel, silicone, cookware, organizers, small appliances and FDA-compliant goods.',
  },
  {
    id: 'apparel-textiles',
    title: 'Apparel & Textiles',
    desc: 'Knitwear, woven garments, uniforms, bags and accessories with private-label packaging.',
  },
  {
    id: 'promotional-gifts',
    title: 'Promotional & Gifts',
    desc: 'Branded merchandise, tradeshow giveaways, corporate gifts in low to medium MOQs.',
  },
  {
    id: 'industrial-hardware',
    title: 'Industrial & Hardware',
    desc: 'Tools, fittings, fasteners, OEM components and small machinery from Yiwu and Ningbo.',
  },
  {
    id: 'beauty-personal-care',
    title: 'Beauty & Personal Care',
    desc: 'OEM cosmetics, skincare packaging, beauty tools and accessories with private labeling.',
  },
  {
    id: 'sports-outdoor',
    title: 'Sports & Outdoor',
    desc: 'Fitness equipment, camping gear, cycling and outdoor accessories with safety testing.',
  },
  {
    id: 'furniture',
    title: 'Furniture',
    desc: 'Wooden, metal and upholstered furniture for retail, hospitality and contract projects.',
  },
]

export default function ProductsSection({ showAllLink = true }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Products we source"
          title="Broad supplier coverage across major Chinese manufacturing hubs"
          description="From Yiwu and Guangzhou to Shenzhen and Ningbo, we work with factories across the categories below."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <article
              key={cat.id}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md"
            >
              <img
                alt={cat.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                data-strk-img-id={`products-cat-${cat.id}`}
                data-strk-img={`[products-cat-${cat.id}-title] [products-cat-${cat.id}-desc]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-5">
                <h3
                  id={`products-cat-${cat.id}-title`}
                  className="text-base font-semibold text-[#0B2545]"
                >
                  {cat.title}
                </h3>
                <p
                  id={`products-cat-${cat.id}-desc`}
                  className="mt-2 text-sm leading-relaxed text-slate-600"
                >
                  {cat.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#1B6FB8] hover:text-[#155A96]"
            >
              See all categories and example items
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
