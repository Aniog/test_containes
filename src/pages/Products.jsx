import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Tech',
    desc: 'Consumer electronics, smart home devices, LED lighting, power banks, cables, and accessories. We work with certified factories for CE, FCC, and RoHS compliance.',
    examples: ['Bluetooth speakers', 'LED lighting', 'Smart home devices', 'Phone accessories', 'Power tools'],
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
    imgId: 'cat-electronics-img-a1b2c3',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Décor',
    desc: 'Indoor and outdoor furniture, home accessories, storage solutions, and decorative items. We source from Foshan, Guangzhou, and surrounding manufacturing clusters.',
    examples: ['Office furniture', 'Outdoor furniture', 'Storage & shelving', 'Home accessories', 'Lighting fixtures'],
    titleId: 'cat-furniture-title',
    descId: 'cat-furniture-desc',
    imgId: 'cat-furniture-img-d4e5f6',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, bags, and textile products. We source from Guangzhou, Hangzhou, and Yiwu with full OEM and private label capabilities.',
    examples: ['T-shirts & hoodies', 'Sportswear', 'Workwear & uniforms', 'Bags & accessories', 'Home textiles'],
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
    imgId: 'cat-apparel-img-g7h8i9',
  },
  {
    id: 'hardware',
    title: 'Hardware & Industrial',
    desc: 'Tools, fasteners, construction materials, machinery parts, and industrial equipment. We verify technical specifications and conduct functional testing.',
    examples: ['Hand tools', 'Power tools', 'Fasteners & fittings', 'Safety equipment', 'Machinery parts'],
    titleId: 'cat-hardware-title',
    descId: 'cat-hardware-desc',
    imgId: 'cat-hardware-img-j1k2l3',
  },
  {
    id: 'toys',
    title: 'Toys & Baby Products',
    desc: 'Toys, games, educational products, and baby items. We ensure EN71, ASTM, and CPSC compliance and conduct safety testing before shipment.',
    examples: ['Plastic toys', 'Educational toys', 'Outdoor play equipment', 'Baby accessories', 'Board games'],
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
    imgId: 'cat-toys-img-m4n5o6',
  },
  {
    id: 'health-beauty',
    title: 'Health, Beauty & Personal Care',
    desc: 'Cosmetics, skincare, wellness products, and personal care items. We work with GMP-certified factories and support FDA, CE, and ISO compliance.',
    examples: ['Skincare products', 'Hair care', 'Wellness devices', 'Supplements packaging', 'Personal care tools'],
    titleId: 'cat-health-title',
    descId: 'cat-health-desc',
    imgId: 'cat-health-img-p7q8r9',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    desc: 'Fitness equipment, outdoor gear, camping products, and sporting goods. We source from specialized factories with experience in international sports brands.',
    examples: ['Gym equipment', 'Camping gear', 'Cycling accessories', 'Water sports', 'Team sports equipment'],
    titleId: 'cat-sports-title',
    descId: 'cat-sports-desc',
    imgId: 'cat-sports-img-s1t2u3',
  },
  {
    id: 'packaging',
    title: 'Packaging & Print',
    desc: 'Custom packaging, boxes, bags, labels, and printed materials. We coordinate design, sampling, and production for branded packaging projects.',
    examples: ['Custom boxes', 'Paper bags', 'Labels & stickers', 'Display stands', 'Promotional materials'],
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
    imgId: 'cat-packaging-img-v4w5x6',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-navy-900 py-20">
        <div className="container-xl text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Product Categories
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Products We Source
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We source a wide range of consumer and industrial products from China. If your product category is not listed, contact us — we likely have relevant experience.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="card group overflow-hidden p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQAABjE+ibYAAAAASUVORK5CYII="
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="font-semibold text-gray-900 mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-gray-500 text-sm leading-relaxed mb-3">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{ex}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-16 bg-gray-50">
        <div className="container-xl text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Product?</h2>
          <p className="text-gray-500 text-lg mb-8">
            We source a much wider range of products than listed here. If you have a specific product in mind, contact us and we will confirm whether we can help.
          </p>
          <Link to="/contact" className="btn-primary">
            Ask About Your Product <ArrowRight className="inline w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}
