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
    title: 'Consumer Electronics',
    desc: 'Smartphones, tablets, earbuds, smart home devices, LED lighting, power banks, and electronic accessories.',
    examples: ['Bluetooth speakers', 'LED strip lights', 'USB hubs', 'Smart plugs', 'Wireless chargers'],
  },
  {
    id: 'furniture',
    label: 'Furniture',
    titleId: 'cat-furniture-title',
    descId: 'cat-furniture-desc',
    imgId: 'cat-furniture-img-d4e5f6',
    title: 'Furniture & Home Décor',
    desc: 'Solid wood furniture, upholstered pieces, office furniture, outdoor furniture, and decorative home accessories.',
    examples: ['Dining tables', 'Sofas', 'Office chairs', 'Shelving units', 'Decorative mirrors'],
  },
  {
    id: 'apparel',
    label: 'Apparel',
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
    imgId: 'cat-apparel-img-g7h8i9',
    title: 'Apparel & Textiles',
    desc: 'Private label clothing, sportswear, workwear, fashion accessories, and home textiles including bedding and towels.',
    examples: ['T-shirts and hoodies', 'Activewear', 'Uniforms', 'Bags and backpacks', 'Bed linen'],
  },
  {
    id: 'homegoods',
    label: 'Home Goods',
    titleId: 'cat-homegoods-title',
    descId: 'cat-homegoods-desc',
    imgId: 'cat-homegoods-img-j1k2l3',
    title: 'Home & Kitchen',
    desc: 'Kitchenware, cookware, storage solutions, cleaning products, bathroom accessories, and household tools.',
    examples: ['Cookware sets', 'Storage containers', 'Cleaning tools', 'Bathroom accessories', 'Kitchen gadgets'],
  },
  {
    id: 'industrial',
    label: 'Industrial',
    titleId: 'cat-industrial-title',
    descId: 'cat-industrial-desc',
    imgId: 'cat-industrial-img-m4n5o6',
    title: 'Industrial & Hardware',
    desc: 'Mechanical parts, fasteners, tools, safety equipment, construction materials, and OEM components.',
    examples: ['Fasteners and bolts', 'Power tools', 'Safety helmets', 'Hydraulic fittings', 'CNC machined parts'],
  },
  {
    id: 'packaging',
    label: 'Packaging',
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
    imgId: 'cat-packaging-img-p7q8r9',
    title: 'Packaging & Printing',
    desc: 'Custom packaging boxes, bags, labels, promotional materials, and branded retail packaging for any product category.',
    examples: ['Custom gift boxes', 'Poly mailers', 'Product labels', 'Hang tags', 'Retail display stands'],
  },
  {
    id: 'toys',
    label: 'Toys',
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
    imgId: 'cat-toys-img-s1t2u3',
    title: 'Toys & Baby Products',
    desc: 'Educational toys, outdoor play equipment, baby care products, and children\'s accessories with full safety compliance support.',
    examples: ['Educational toys', 'Plush toys', 'Baby monitors', 'Ride-on toys', 'Puzzles'],
  },
  {
    id: 'sports',
    label: 'Sports',
    titleId: 'cat-sports-title',
    descId: 'cat-sports-desc',
    imgId: 'cat-sports-img-v4w5x6',
    title: 'Sports & Outdoor',
    desc: 'Fitness equipment, outdoor gear, camping products, cycling accessories, and sports apparel.',
    examples: ['Resistance bands', 'Camping tents', 'Yoga mats', 'Cycling helmets', 'Gym equipment'],
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

  const activeCategory = categories.find((c) => c.id === active)

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Product Categories</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-4">
              Products We Source from China
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We source across a wide range of product categories. If it's manufactured in China, our team can find the right supplier for you.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs + Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Bar */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat.id
                    ? 'bg-blue-800 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Active Category Detail */}
          {activeCategory && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id={activeCategory.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                  {activeCategory.title}
                </h2>
                <p id={activeCategory.descId} className="text-slate-600 leading-relaxed mb-6">
                  {activeCategory.desc}
                </p>
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    Common Products
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.examples.map((ex) => (
                      <span
                        key={ex}
                        className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full border border-blue-100"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Source This Product <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img
                  alt={activeCategory.title}
                  className="w-full h-80 object-cover"
                  data-strk-img-id={activeCategory.imgId}
                  data-strk-img={`[${activeCategory.descId}] [${activeCategory.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">All Product Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActive(cat.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className="bg-white border border-slate-200 rounded-xl p-4 text-left hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className="font-semibold text-slate-900 text-sm">{cat.title}</div>
                <div className="text-slate-500 text-xs mt-1 line-clamp-2">{cat.desc.split('.')[0]}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Product Category?</h2>
          <p className="text-blue-200 mb-8">
            We source a wide range of products beyond the categories listed here. Contact us with your requirements and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Submit Your Inquiry <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
