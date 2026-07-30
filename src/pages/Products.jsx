import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    label: 'Electronics & Tech',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
    imgId: 'cat-electronics-img-a1b2c3',
    desc: 'Consumer electronics, smart devices, LED lighting, cables, chargers, and electronic components.',
    products: ['Bluetooth speakers', 'LED lighting', 'Smart home devices', 'Phone accessories', 'PCBs & components', 'Surveillance cameras'],
  },
  {
    id: 'home-garden',
    label: 'Home & Garden',
    titleId: 'cat-home-title',
    descId: 'cat-home-desc',
    imgId: 'cat-home-img-d4e5f6',
    desc: 'Home décor, kitchenware, garden tools, storage solutions, and household appliances.',
    products: ['Kitchen utensils', 'Garden tools', 'Storage organizers', 'Home décor items', 'Bedding & textiles', 'Small appliances'],
  },
  {
    id: 'apparel',
    label: 'Apparel & Textiles',
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
    imgId: 'cat-apparel-img-g7h8i9',
    desc: 'Clothing, footwear, bags, accessories, and technical fabrics for fashion and workwear brands.',
    products: ['T-shirts & hoodies', 'Workwear & uniforms', 'Bags & backpacks', 'Shoes & footwear', 'Hats & caps', 'Sportswear'],
  },
  {
    id: 'toys',
    label: 'Toys & Baby Products',
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
    imgId: 'cat-toys-img-j1k2l3',
    desc: 'Educational toys, outdoor play equipment, baby care products, and children\'s accessories.',
    products: ['Educational toys', 'Outdoor play sets', 'Baby care items', 'Stuffed animals', 'Board games', 'RC vehicles'],
  },
  {
    id: 'industrial',
    label: 'Industrial & Machinery',
    titleId: 'cat-industrial-title',
    descId: 'cat-industrial-desc',
    imgId: 'cat-industrial-img-m4n5o6',
    desc: 'Industrial equipment, tools, hardware, safety gear, and machinery components.',
    products: ['Power tools', 'Hand tools', 'Safety equipment', 'Industrial hardware', 'Pumps & motors', 'Fasteners & fittings'],
  },
  {
    id: 'health',
    label: 'Health & Beauty',
    titleId: 'cat-health-title',
    descId: 'cat-health-desc',
    imgId: 'cat-health-img-p7q8r9',
    desc: 'Personal care products, cosmetics, wellness devices, and health supplements.',
    products: ['Skincare products', 'Hair care items', 'Massage devices', 'Fitness equipment', 'Medical supplies', 'Vitamins & supplements'],
  },
  {
    id: 'sports',
    label: 'Sports & Outdoors',
    titleId: 'cat-sports-title',
    descId: 'cat-sports-desc',
    imgId: 'cat-sports-img-s1t2u3',
    desc: 'Sports equipment, outdoor gear, camping supplies, and fitness accessories.',
    products: ['Gym equipment', 'Camping gear', 'Cycling accessories', 'Water sports gear', 'Team sports equipment', 'Yoga & fitness'],
  },
  {
    id: 'furniture',
    label: 'Furniture & Decor',
    titleId: 'cat-furniture-title',
    descId: 'cat-furniture-desc',
    imgId: 'cat-furniture-img-v4w5x6',
    desc: 'Indoor and outdoor furniture, decorative items, lighting fixtures, and interior accessories.',
    products: ['Office furniture', 'Outdoor furniture', 'Decorative lighting', 'Wall art & mirrors', 'Shelving & storage', 'Rugs & mats'],
  },
  {
    id: 'packaging',
    label: 'Packaging & Printing',
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
    imgId: 'cat-packaging-img-y7z8a9',
    desc: 'Custom packaging, printed materials, labels, boxes, and promotional merchandise.',
    products: ['Custom boxes', 'Paper bags', 'Labels & stickers', 'Promotional items', 'Gift packaging', 'Eco-friendly packaging'],
  },
]

export default function Products() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(categories[0].id)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [active])

  const activeCat = categories.find((c) => c.id === active)

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-red-300 font-semibold text-sm uppercase tracking-wider mb-3">Product Categories</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We source across a wide range of product categories from verified Chinese manufacturers. If you don't see your product here, contact us — we can likely help.
            </p>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setActive(cat.id)}
              >
                <img
                  alt={cat.label}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-40 object-cover bg-gray-100"
                />
                <div className="p-5">
                  <h3 id={cat.titleId} className="font-bold text-primary text-lg mb-1">{cat.label}</h3>
                  <p id={cat.descId} className="text-gray-500 text-sm leading-relaxed mb-3">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.products.slice(0, 3).map((p) => (
                      <span key={p} className="bg-lightblue text-primary text-xs font-medium px-2 py-0.5 rounded-full">{p}</span>
                    ))}
                    {cat.products.length > 3 && (
                      <span className="bg-gray-100 text-gray-500 text-xs font-medium px-2 py-0.5 rounded-full">+{cat.products.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detail Panel */}
          {activeCat && (
            <div className="bg-lightblue rounded-2xl p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Selected Category</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">{activeCat.label}</h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{activeCat.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeCat.products.map((p) => (
                      <span key={p} className="bg-white text-primary text-sm font-medium px-3 py-1 rounded-full border border-gray-200">{p}</span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-red-700 transition-colors"
                  >
                    Source This Category <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div>
                  <img
                    alt={activeCat.label}
                    data-strk-img-id={`detail-${activeCat.imgId}`}
                    data-strk-img={`[${activeCat.descId}] [${activeCat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-xl shadow-md object-cover h-64 bg-gray-100"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            We source a wide variety of products beyond the categories listed. Contact us with your requirements and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-red-700 transition-colors"
          >
            Submit a Custom Inquiry
          </Link>
        </div>
      </section>
    </div>
  )
}
