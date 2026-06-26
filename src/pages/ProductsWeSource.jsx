import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Package } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    title: 'Consumer Electronics',
    desc: 'Smartphones, tablets, headphones, Bluetooth speakers, smartwatches, chargers, cables, and other electronic accessories.',
    image: 'electronics',
  },
  {
    title: 'Home & Kitchen',
    desc: 'Small kitchen appliances, cookware, storage containers, home decor, cleaning tools, and smart home devices.',
    image: 'home-kitchen',
  },
  {
    title: 'Apparel & Textiles',
    desc: 'Garments, sportswear, workwear, fabrics, yarns, accessories, footwear, bags, and custom textile products.',
    image: 'apparel',
  },
  {
    title: 'Industrial Equipment',
    desc: 'Machinery parts, tools, hardware, fasteners, valves, pumps, bearings, automation components, and MRO supplies.',
    image: 'industrial',
  },
  {
    title: 'Health & Beauty',
    desc: 'Skincare, cosmetics, personal care products, supplements, health devices, and wellness accessories.',
    image: 'beauty',
  },
  {
    title: 'Auto Parts',
    desc: 'Automotive components, interior/exterior accessories, diagnostic tools, car care products, and aftermarket parts.',
    image: 'auto',
  },
  {
    title: 'Packaging Materials',
    desc: 'Custom boxes, corrugated packaging, labels, stickers, bags, pouches, and sustainable packaging solutions.',
    image: 'packaging',
  },
  {
    title: 'Sports & Outdoor',
    desc: 'Fitness equipment, camping gear, cycling accessories, outdoor apparel, yoga mats, and sports gear.',
    image: 'sports',
  },
  {
    title: 'Furniture',
    desc: 'Office furniture, home furniture, outdoor seating, shelving units, and custom furniture manufacturing.',
    image: 'furniture',
  },
  {
    title: 'Medical Supplies',
    desc: 'Medical devices, PPE, diagnostic equipment, hospital supplies, and healthcare consumables.',
    image: 'medical',
  },
  {
    title: 'Pet Products',
    desc: 'Pet food, toys, bedding, grooming tools, collars, leashes, and pet accessories.',
    image: 'pet',
  },
  {
    title: 'Toys & Gifts',
    desc: 'Educational toys, plush products, board games, promotional gifts, seasonal items, and novelty products.',
    image: 'toys',
  },
]

export default function ProductsWeSource() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F2B44] to-[#1B4A7A] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Products We Source</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            From consumer goods to industrial equipment, we source products across a wide range of categories. If it is manufactured in China, we can help find the right supplier.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={cat.title} className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-50 overflow-hidden">
                  <img
                    data-strk-img-id={`category-${cat.image}-${i}`}
                    data-strk-img={`[category-desc-${i}] [category-title-${i}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 bg-primary-blue/10 rounded flex items-center justify-center mb-3">
                    <Package className="w-5 h-5 text-primary-blue" />
                  </div>
                  <h3 id={`category-title-${i}`} className="text-lg font-semibold text-dark-text mb-2">{cat.title}</h3>
                  <p id={`category-desc-${i}`} className="text-sm text-medium-text">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-dark-text mb-4">Not Sure If We Can Source Your Product?</h2>
          <p className="text-lg text-medium-text mb-8">
            We work with thousands of manufacturers across dozens of industries. Send us your product details and we will let you know if we can help — typically within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-blue text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary-blue-hover transition-colors"
          >
            Ask About Your Product <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Source from China?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Get started with a free sourcing quote. No obligation, just expert advice.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-accent-red-hover transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}