import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'electronics',
    title: 'Consumer Electronics',
    desc: 'Small appliances, smart home, accessories, chargers and lifestyle electronics.',
    imgId: 'cat-electronics-91ab2c',
  },
  {
    id: 'home',
    title: 'Home & Kitchen',
    desc: 'Cookware, kitchen tools, organizers, household goods and HoReCa supplies.',
    imgId: 'cat-home-77df30',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Fashion, workwear, sportswear, accessories and home textiles in cotton or technical fabrics.',
    imgId: 'cat-apparel-43be19',
  },
  {
    id: 'furniture',
    title: 'Furniture',
    desc: 'Living, office and outdoor furniture, including custom wood and metal pieces.',
    imgId: 'cat-furniture-5dc214',
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    desc: 'Components, OEM parts, packaging machinery and light industrial equipment.',
    imgId: 'cat-industrial-08fea1',
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    desc: 'Skincare packaging, beauty tools, personal care devices and salon supplies.',
    imgId: 'cat-beauty-6712aa',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    desc: 'Fitness, camping, cycling, outdoor accessories and team sports equipment.',
    imgId: 'cat-sports-2391fa',
  },
  {
    id: 'toys',
    title: 'Toys & Baby',
    desc: 'Educational toys, plush, baby products and licensed merchandise (with safety testing).',
    imgId: 'cat-toys-a47cd1',
  },
]

export default function HomeProducts() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-600">Products we source</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Categories we source every month
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              We work across Yiwu, Guangzhou, Shenzhen, Ningbo and other key Chinese sourcing hubs.
              These are the categories we handle most often.
            </p>
          </div>
          <Link
            to="/products"
            className="text-sm font-semibold text-red-600 hover:text-red-700"
          >
            See all categories →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <article
              key={c.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[cat-${c.id}-desc] [cat-${c.id}-title] manufacturing factory`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 id={`cat-${c.id}-title`} className="text-base font-semibold text-slate-900">
                  {c.title}
                </h3>
                <p id={`cat-${c.id}-desc`} className="mt-2 text-sm leading-relaxed text-slate-600">
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
