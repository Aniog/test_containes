import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const categories = [
  {
    id: 'electronics',
    title: 'Consumer Electronics',
    description:
      'Small appliances, IoT and smart-home devices, audio products, wearables, accessories and cables.',
    examples: ['Bluetooth audio', 'Smart home devices', 'Phone accessories', 'Power banks'],
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    description:
      'Cookware, kitchen gadgets, dinnerware, home storage, decor, cleaning tools and seasonal goods.',
    examples: ['Cookware sets', 'Storage containers', 'Home decor', 'Kitchen gadgets'],
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    description:
      'Knit and woven apparel, workwear, sportswear, towels, bedding, bags and fashion accessories.',
    examples: ['T-shirts & hoodies', 'Sportswear', 'Bedding sets', 'Bags & backpacks'],
  },
  {
    id: 'furniture',
    title: 'Furniture',
    description:
      'Office, home, hospitality and outdoor furniture — wooden, metal, rattan and upholstered styles.',
    examples: ['Office chairs', 'Sofas & seating', 'Outdoor furniture', 'Wooden cabinets'],
  },
  {
    id: 'industrial',
    title: 'Industrial & Hardware',
    description:
      'Hand and power tool components, fasteners, fittings, machine parts and OEM industrial goods.',
    examples: ['Hand tools', 'Fasteners', 'Plumbing fittings', 'Machinery parts'],
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    description:
      'Beauty tools and accessories, cosmetic packaging, hair tools and contract-manufactured personal care.',
    examples: ['Beauty tools', 'Cosmetic packaging', 'Hair styling tools', 'Skincare accessories'],
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    description:
      'Fitness equipment, outdoor gear, camping, cycling accessories, sports apparel and recreational products.',
    examples: ['Yoga & fitness gear', 'Camping equipment', 'Cycling accessories', 'Outdoor apparel'],
  },
  {
    id: 'toys-baby',
    title: 'Toys & Baby',
    description:
      'Compliant, safety-tested toys, plush, educational products, baby gear and feeding products.',
    examples: ['Plush toys', 'Educational toys', 'Baby gear', 'Feeding products'],
  },
  {
    id: 'auto',
    title: 'Auto & Accessories',
    description:
      'Aftermarket car accessories, organizers, lighting, detailing tools and EV-related accessories.',
    examples: ['Car organizers', 'LED lighting', 'Detailing tools', 'EV accessories'],
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Products we source"
        titleId="products-page-title"
        descId="products-page-desc"
        title="Categories we source for global buyers"
        description="We focus on consumer and light-industrial goods that are widely manufactured in China, with strong supplier networks in the Guangdong, Zhejiang and Jiangsu clusters."
      />

      <section ref={containerRef} className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <article
                key={cat.id}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    alt={cat.title}
                    data-strk-img-id={`product-${cat.id}-a5d2e8`}
                    data-strk-img={`[product-${cat.id}-desc] [product-${cat.id}-title] product manufacturing china`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2
                    id={`product-${cat.id}-title`}
                    className="text-lg font-semibold text-slate-900"
                  >
                    {cat.title}
                  </h2>
                  <p
                    id={`product-${cat.id}-desc`}
                    className="mt-2 text-sm text-slate-600 leading-relaxed"
                  >
                    {cat.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span
                        key={ex}
                        className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
                Don't see your category?
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-600">
                Tell us what you need. If we cannot source it well, we will say so honestly.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-6 py-3.5 text-base font-semibold text-white hover:bg-blue-800 transition"
            >
              Talk to a sourcing manager
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
