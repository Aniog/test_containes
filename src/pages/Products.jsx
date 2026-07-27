import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle } from 'lucide-react'

const categories = [
  {
    name: 'Electronics & Gadgets',
    desc: 'Consumer electronics, smart home devices, wearables, mobile accessories, PCBA, components, cables, chargers, Bluetooth devices, IoT products.',
    items: ['Bluetooth speakers & earphones', 'Smart home devices', 'Mobile phone accessories', 'PCBA & electronic components', 'Chargers & power banks', 'LED lighting products'],
    imgId: 'prod-page-electronics-z9y8x7',
    titleId: 'prod-page-electronics-title',
    descId: 'prod-page-electronics-desc',
  },
  {
    name: 'Home & Kitchen',
    desc: 'Kitchen appliances, cookware, bakeware, home storage, organization products, furniture, home decor, textiles, bedding, bath accessories.',
    items: ['Kitchen appliances & gadgets', 'Cookware & bakeware', 'Home storage & organization', 'Furniture & home decor', 'Bedding & bath textiles', 'Cleaning tools & accessories'],
    imgId: 'prod-page-home-w6v5u4',
    titleId: 'prod-page-home-title',
    descId: 'prod-page-home-desc',
  },
  {
    name: 'Apparel & Textiles',
    desc: 'Men\'s and women\'s clothing, sportswear, activewear, bags, backpacks, shoes, footwear, fabrics, towels, uniforms, promotional clothing.',
    items: ['Casual & formal clothing', 'Sportswear & activewear', 'Bags, backpacks & luggage', 'Shoes & footwear', 'Fabrics & raw textiles', 'Uniforms & workwear'],
    imgId: 'prod-page-apparel-t3s2r1',
    titleId: 'prod-page-apparel-title',
    descId: 'prod-page-apparel-desc',
  },
  {
    name: 'Industrial & Machinery',
    desc: 'Manufacturing equipment, CNC parts, industrial tools, hardware, fasteners, molds, raw materials, metal fabrication, plastic components.',
    items: ['Manufacturing equipment', 'CNC machined parts', 'Industrial tools & hardware', 'Fasteners & fittings', 'Molds & tooling', 'Metal & plastic components'],
    imgId: 'prod-page-industrial-q0p9o8',
    titleId: 'prod-page-industrial-title',
    descId: 'prod-page-industrial-desc',
  },
  {
    name: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare products, haircare, personal care devices, beauty tools, makeup brushes, cosmetic packaging, private label beauty.',
    items: ['Skincare & cosmetics', 'Haircare products', 'Personal care devices', 'Beauty tools & brushes', 'Cosmetic packaging', 'Private label beauty'],
    imgId: 'prod-page-beauty-n7m6l5',
    titleId: 'prod-page-beauty-title',
    descId: 'prod-page-beauty-desc',
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom boxes, retail packaging, labels, stickers, gift boxes, paper bags, promotional materials, brochures, catalogs, printed merchandise.',
    items: ['Custom retail boxes', 'Labels & stickers', 'Paper bags & gift boxes', 'Promotional materials', 'Brochures & catalogs', 'Printed merchandise'],
    imgId: 'prod-page-packaging-k4j3h2',
    titleId: 'prod-page-packaging-title',
    descId: 'prod-page-packaging-desc',
  },
  {
    name: 'Sports & Outdoor',
    desc: 'Fitness equipment, camping gear, outdoor accessories, sports accessories, yoga products, bicycle parts, water sports equipment.',
    items: ['Fitness & gym equipment', 'Camping & hiking gear', 'Sports accessories', 'Yoga & wellness products', 'Bicycle parts & accessories', 'Water sports equipment'],
    imgId: 'prod-page-sports-g1f0e9',
    titleId: 'prod-page-sports-title',
    descId: 'prod-page-sports-desc',
  },
  {
    name: 'Pet Supplies',
    desc: 'Pet toys, accessories, grooming products, pet beds, feeding supplies, leashes, collars, pet clothing, aquarium supplies.',
    items: ['Pet toys & accessories', 'Grooming & care products', 'Pet beds & furniture', 'Feeding & watering supplies', 'Leashes, collars & harnesses', 'Aquarium & small pet supplies'],
    imgId: 'prod-page-pets-d8c7b6',
    titleId: 'prod-page-pets-title',
    descId: 'prod-page-pets-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Products We Source</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            With 10+ years of experience across 50+ product categories, we've likely sourced
            something similar to what you need.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-all">
                <div className="grid sm:grid-cols-2">
                  <div
                    className="aspect-[4/3] sm:aspect-auto bg-slate-100"
                    data-strk-bg-id={cat.imgId}
                    data-strk-bg={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="600"
                  />
                  <div className="p-6">
                    <h3 id={cat.titleId} className="font-bold text-lg text-slate-900 mb-2">{cat.name}</h3>
                    <p id={cat.descId} className="text-sm text-slate-500 leading-relaxed mb-4">{cat.desc}</p>
                    <ul className="space-y-1.5">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border border-slate-200 rounded-2xl p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Don't See Your Product?</h2>
            <p className="text-slate-500 mb-8 max-w-xl mx-auto">
              If your product isn't listed, contact us anyway. Our network spans 5,000+ factories
              across virtually every manufacturing sector in China.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-cta text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
              Tell Us What You Need <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

