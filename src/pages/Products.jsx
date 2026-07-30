import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    label: 'Electronics',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
    imgId: 'cat-electronics-img-a1b2c3',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic components.',
    examples: ['Wireless earbuds', 'LED strip lights', 'USB hubs', 'Smart plugs', 'PCB assemblies'],
  },
  {
    id: 'furniture',
    label: 'Furniture',
    titleId: 'cat-furniture-title',
    descId: 'cat-furniture-desc',
    imgId: 'cat-furniture-img-d4e5f6',
    title: 'Furniture & Home Decor',
    desc: 'Solid wood and engineered furniture, upholstered pieces, home accessories, and decorative items.',
    examples: ['Dining sets', 'Office chairs', 'Sofas', 'Wall art', 'Storage solutions'],
  },
  {
    id: 'clothing',
    label: 'Clothing',
    titleId: 'cat-clothing-title',
    descId: 'cat-clothing-desc',
    imgId: 'cat-clothing-img-g7h8i9',
    title: 'Clothing & Textiles',
    desc: 'Apparel, activewear, workwear, uniforms, fabrics, and textile accessories with OEM/ODM options.',
    examples: ['Activewear sets', 'T-shirts & hoodies', 'Workwear uniforms', 'Swimwear', 'Bags & accessories'],
  },
  {
    id: 'machinery',
    label: 'Machinery',
    titleId: 'cat-machinery-title',
    descId: 'cat-machinery-desc',
    imgId: 'cat-machinery-img-j1k2l3',
    title: 'Machinery & Industrial',
    desc: 'Industrial equipment, power tools, hardware, fasteners, and manufacturing machinery.',
    examples: ['Power tools', 'CNC parts', 'Hydraulic equipment', 'Fasteners', 'Safety equipment'],
  },
  {
    id: 'toys',
    label: 'Toys',
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
    imgId: 'cat-toys-img-m4n5o6',
    title: 'Toys & Baby Products',
    desc: 'Plastic and wooden toys, educational products, baby gear, and children\'s accessories with safety certifications.',
    examples: ['Educational toys', 'Plush toys', 'Baby strollers', 'Ride-on toys', 'Puzzles'],
  },
  {
    id: 'health',
    label: 'Health & Beauty',
    titleId: 'cat-health-title',
    descId: 'cat-health-desc',
    imgId: 'cat-health-img-p7q8r9',
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, wellness devices, supplements packaging, and medical accessories.',
    examples: ['Skincare products', 'Hair tools', 'Massage devices', 'Supplement bottles', 'Face masks'],
  },
  {
    id: 'sports',
    label: 'Sports',
    titleId: 'cat-sports-title',
    descId: 'cat-sports-desc',
    imgId: 'cat-sports-img-s1t2u3',
    title: 'Sports & Outdoor',
    desc: 'Fitness equipment, outdoor gear, camping products, sporting goods, and protective equipment.',
    examples: ['Resistance bands', 'Camping tents', 'Yoga mats', 'Cycling gear', 'Water bottles'],
  },
  {
    id: 'packaging',
    label: 'Packaging',
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
    imgId: 'cat-packaging-img-v4w5x6',
    title: 'Packaging & Printing',
    desc: 'Custom packaging boxes, bags, labels, promotional materials, and branded packaging solutions.',
    examples: ['Custom gift boxes', 'Kraft paper bags', 'Product labels', 'Hang tags', 'Mailer boxes'],
  },
  {
    id: 'auto',
    label: 'Auto Parts',
    titleId: 'cat-auto-title',
    descId: 'cat-auto-desc',
    imgId: 'cat-auto-img-y7z8a9',
    title: 'Auto Parts & Accessories',
    desc: 'Aftermarket auto parts, car accessories, motorcycle parts, and vehicle maintenance products.',
    examples: ['LED headlights', 'Car seat covers', 'Brake pads', 'Filters', 'Dashboard accessories'],
  },
]

export default function Products() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(categories[0].id)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active])

  const activeCat = categories.find((c) => c.id === active)

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-[#0F2A4A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#C8102E] text-sm font-semibold uppercase tracking-wider">Product Categories</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
              Products We Source from China
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              We source across a wide range of product categories. If you don't see your product listed, contact us — we likely source it.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs + Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Bar */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat.id
                    ? 'bg-[#C8102E] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Active Category Detail */}
          {activeCat && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 id={activeCat.titleId} className="text-2xl md:text-3xl font-bold text-[#0F2A4A] mb-3">{activeCat.title}</h2>
                <p id={activeCat.descId} className="text-slate-600 leading-relaxed mb-6">{activeCat.desc}</p>
                <div className="mb-6">
                  <h3 className="text-[#0F2A4A] font-semibold text-sm uppercase tracking-wider mb-3">Common Products</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeCat.examples.map((ex) => (
                      <span key={ex} className="bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#C8102E] text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-[#A80D26] transition-colors"
                >
                  Source This Product Category <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden bg-slate-100 aspect-video">
                <img
                  alt={activeCat.title}
                  data-strk-img-id={activeCat.imgId}
                  data-strk-img={`[${activeCat.descId}] [${activeCat.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F2A4A] mb-3">All Product Categories</h2>
            <p className="text-slate-600">Click any category to learn more about what we source.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActive(cat.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className="bg-white border border-slate-200 rounded-xl p-5 text-left hover:border-[#C8102E]/40 hover:shadow-sm transition-all group"
              >
                <h3 className="text-[#0F2A4A] font-semibold mb-1 group-hover:text-[#C8102E] transition-colors">{cat.title}</h3>
                <p className="text-slate-500 text-sm line-clamp-2">{cat.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F2A4A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Don't See Your Product?</h2>
          <p className="text-slate-300 mb-8">
            We source a wide variety of products beyond the categories listed. Contact us with your requirements and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C8102E] text-white px-7 py-3.5 rounded-md font-semibold hover:bg-[#A80D26] transition-colors"
          >
            Submit Your Sourcing Request <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
