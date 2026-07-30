import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    label: 'Electronics',
    items: ['Bluetooth Speakers', 'LED Lighting', 'Power Banks', 'Smart Home Devices', 'PCBs & Components', 'Cables & Accessories'],
    imgId: 'prod-electronics-img-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    desc: 'Consumer electronics, components, and smart devices from certified Chinese manufacturers.',
  },
  {
    id: 'furniture',
    label: 'Furniture & Home',
    items: ['Office Furniture', 'Bedroom Sets', 'Outdoor Furniture', 'Home Decor', 'Kitchen Accessories', 'Storage Solutions'],
    imgId: 'prod-furniture-img-d4e5f6',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    desc: 'Furniture and home goods from Foshan, Guangzhou, and other major manufacturing hubs.',
  },
  {
    id: 'apparel',
    label: 'Clothing & Textiles',
    items: ['T-Shirts & Tops', 'Sportswear', 'Workwear & Uniforms', 'Bags & Accessories', 'Fabrics & Yarn', 'Footwear'],
    imgId: 'prod-apparel-img-g7h8i9',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
    desc: 'Apparel and textile products from Guangzhou, Hangzhou, and Yiwu garment districts.',
  },
  {
    id: 'machinery',
    label: 'Machinery & Industrial',
    items: ['CNC Machines', 'Packaging Equipment', 'Agricultural Machinery', 'Power Tools', 'Pumps & Valves', 'Safety Equipment'],
    imgId: 'prod-machinery-img-j1k2l3',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
    desc: 'Industrial machinery and equipment sourced from verified Chinese manufacturers.',
  },
  {
    id: 'toys',
    label: 'Toys & Baby Products',
    items: ['Educational Toys', 'Outdoor Play Equipment', 'Baby Gear', 'Plush Toys', 'Board Games', 'RC Vehicles'],
    imgId: 'prod-toys-img-m4n5o6',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
    desc: 'Toys and baby products with EN71, ASTM, and other safety certifications available.',
  },
  {
    id: 'health',
    label: 'Health & Beauty',
    items: ['Skincare Products', 'Supplements', 'Medical Devices', 'Fitness Equipment', 'Personal Care', 'Wellness Products'],
    imgId: 'prod-health-img-p7q8r9',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
    desc: 'Health, beauty, and wellness products from GMP-certified Chinese manufacturers.',
  },
  {
    id: 'sports',
    label: 'Sports & Outdoor',
    items: ['Gym Equipment', 'Camping Gear', 'Cycling Accessories', 'Water Sports', 'Team Sports Equipment', 'Outdoor Apparel'],
    imgId: 'prod-sports-img-s1t2u3',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
    desc: 'Sports and outdoor products for retail, wholesale, and private label buyers.',
  },
  {
    id: 'packaging',
    label: 'Packaging & Printing',
    items: ['Custom Boxes', 'Paper Bags', 'Labels & Stickers', 'Promotional Items', 'Gift Packaging', 'Industrial Packaging'],
    imgId: 'prod-packaging-img-v4w5x6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    desc: 'Custom packaging and printed materials for brands and retailers worldwide.',
  },
]

export default function Products() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(categories[0].id)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active])

  const activeCategory = categories.find((c) => c.id === active)

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-300 font-semibold text-sm uppercase tracking-wider">Product Categories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Products We Source from China
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We source across a wide range of product categories. If you don't see your product listed, contact us — we likely source it.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs + Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Bar */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  active === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-lightblue text-textdark hover:bg-blue-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Active Category Detail */}
          {activeCategory && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id={activeCategory.titleId} className="text-2xl md:text-3xl font-bold text-textdark mb-3">
                  {activeCategory.label}
                </h2>
                <p id={activeCategory.descId} className="text-muted text-lg mb-6 leading-relaxed">
                  {activeCategory.desc}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {activeCategory.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 bg-lightblue rounded-lg px-3 py-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-textdark text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Source {activeCategory.label} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-video bg-lightblue">
                <img
                  data-strk-img-id={activeCategory.imgId}
                  data-strk-img={`[${activeCategory.descId}] [${activeCategory.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={activeCategory.label}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="py-16 bg-lightblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-textdark mb-3">All Product Categories</h2>
            <p className="text-muted">We source across these major categories and more.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActive(cat.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className="bg-white rounded-xl p-5 text-left border border-border hover:border-primary hover:shadow-md transition-all group"
              >
                <p className="font-semibold text-textdark text-sm group-hover:text-primary transition-colors">{cat.label}</p>
                <p className="text-muted text-xs mt-1">{cat.items.length} product types</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Product?</h2>
          <p className="text-blue-200 text-lg mb-8">
            We source a wide range of products beyond this list. Contact us with your requirements and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors"
          >
            Submit Your Sourcing Request <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
