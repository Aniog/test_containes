import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const categories = [
  {
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, sensors, connectors, and electronic components for OEM and ODM projects.',
    items: ['LED Lighting', 'PCB & PCBA', 'Consumer Electronics', 'Sensors & Modules', 'Connectors & Cables', 'Power Supplies'],
    imgId: 'cat-electronics-h1i2j3',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
  },
  {
    name: 'Textiles & Apparel',
    desc: 'Garments, fabrics, home textiles, sportswear, and fashion accessories from China\'s major textile manufacturing regions.',
    items: ['Casual Wear', 'Sportswear', 'Home Textiles', 'Fabrics & Materials', 'Bags & Accessories', 'Workwear & Uniforms'],
    imgId: 'cat-textiles-k4l5m6',
    titleId: 'cat-textiles-title',
    descId: 'cat-textiles-desc',
  },
  {
    name: 'Machinery & Equipment',
    desc: 'Industrial machinery, CNC equipment, automation systems, and manufacturing equipment for various industries.',
    items: ['CNC Machines', 'Packaging Machinery', 'Construction Equipment', 'Automation Systems', 'Woodworking Machinery', 'Food Processing Equipment'],
    imgId: 'cat-machinery-n7o8p9',
    titleId: 'cat-machinery-title',
    descId: 'cat-machinery-desc',
  },
  {
    name: 'Home & Garden',
    desc: 'Furniture, kitchenware, garden tools, home decor, and household products for retail and wholesale distribution.',
    items: ['Furniture', 'Kitchenware', 'Garden Tools', 'Home Decor', 'Storage & Organization', 'Pet Supplies'],
    imgId: 'cat-home-q1r2s3',
    titleId: 'cat-home-title',
    descId: 'cat-home-desc',
  },
  {
    name: 'Auto Parts & Accessories',
    desc: 'OEM parts, aftermarket components, vehicle accessories, and automotive electronics for global automotive markets.',
    items: ['Engine Components', 'Body Parts', 'Lighting Systems', 'Interior Accessories', 'Brake Systems', 'Electric Vehicle Parts'],
    imgId: 'cat-auto-t4u5v6',
    titleId: 'cat-auto-title',
    descId: 'cat-auto-desc',
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom packaging, labels, commercial printing, and specialty packaging solutions for brands and distributors.',
    items: ['Custom Boxes', 'Labels & Stickers', 'Flexible Packaging', 'Bottles & Containers', 'Display Packaging', 'Commercial Printing'],
    imgId: 'cat-pack-w7x8y9',
    titleId: 'cat-pack-title',
    descId: 'cat-pack-desc',
  },
  {
    name: 'Building Materials',
    desc: 'Construction materials, tiles, sanitary ware, hardware, and building supplies for commercial and residential projects.',
    items: ['Tiles & Flooring', 'Sanitary Ware', 'Doors & Windows', 'Hardware & Fittings', 'Plumbing Supplies', 'Insulation Materials'],
    imgId: 'cat-build-z1a2b3',
    titleId: 'cat-build-title',
    descId: 'cat-build-desc',
  },
  {
    name: 'Health & Beauty',
    desc: 'Cosmetics, personal care products, health supplements, and beauty tools from GMP-certified manufacturers.',
    items: ['Skincare Products', 'Hair Care', 'Cosmetics', 'Health Supplements', 'Beauty Tools', 'Personal Care'],
    imgId: 'cat-health-c4d5e6',
    titleId: 'cat-health-title',
    descId: 'cat-health-desc',
  },
  {
    name: 'Sports & Outdoors',
    desc: 'Sporting goods, fitness equipment, outdoor gear, and recreational products for retail and wholesale.',
    items: ['Fitness Equipment', 'Camping Gear', 'Team Sports', 'Water Sports', 'Cycling Accessories', 'Yoga & Wellness'],
    imgId: 'cat-sports-f7g8h9',
    titleId: 'cat-sports-title',
    descId: 'cat-sports-desc',
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
      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Product Categories
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Products We Source
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              We source across a wide range of industries from China's major manufacturing hubs.
              If it's made in China, we can find the right supplier for you.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-xl font-semibold text-neutral-900 mb-2">
                    {cat.name}
                  </h3>
                  <p id={cat.descId} className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Can't Find Your Product */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-neutral-600 text-lg mb-8">
            The categories above are just a sample. We source thousands of product types across
            virtually every industry. Tell us what you need and we'll find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Tell Us What You Need
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
