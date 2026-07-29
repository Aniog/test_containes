import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/shared/PageHero'
import SectionCTA from '@/components/shared/SectionCTA'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, connectors, smart home devices, and electronic accessories.',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    imgId: 'prod-electronics-img-x1y2z3',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Clothing, fabrics, uniforms, sportswear, accessories, bags, and custom-branded fashion items.',
    titleId: 'prod-textiles-title',
    descId: 'prod-textiles-desc',
    imgId: 'prod-textiles-img-a4b5c6',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Kitchenware, bathroom accessories, garden tools, home decor, storage solutions, and cleaning products.',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
    imgId: 'prod-home-img-d7e8f9',
  },
  {
    id: 'industrial',
    title: 'Industrial Equipment',
    desc: 'Machinery, tools, hardware, safety equipment, pumps, valves, and industrial automation components.',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
    imgId: 'prod-industrial-img-g1h2i3',
  },
  {
    id: 'furniture',
    title: 'Furniture & Fixtures',
    desc: 'Office furniture, home furniture, commercial fixtures, custom woodwork, and metal fabrication.',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    imgId: 'prod-furniture-img-j4k5l6',
  },
  {
    id: 'packaging',
    title: 'Packaging Materials',
    desc: 'Custom boxes, labels, bags, bottles, jars, eco-friendly packaging, and branded packaging solutions.',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    imgId: 'prod-packaging-img-m7n8o9',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'Replacement parts, accessories, tools, tires, batteries, and aftermarket automotive components.',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
    imgId: 'prod-auto-img-p1q2r3',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Skincare, cosmetics, supplements, medical devices, personal care products, and salon equipment.',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
    imgId: 'prod-health-img-s4t5u6',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoors',
    desc: 'Fitness equipment, camping gear, bicycles, water sports, team sports equipment, and outdoor furniture.',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
    imgId: 'prod-sports-img-v7w8x9',
  },
  {
    id: 'toys',
    title: 'Toys & Games',
    desc: 'Educational toys, plush toys, board games, outdoor play equipment, and novelty items.',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
    imgId: 'prod-toys-img-y1z2a3',
  },
  {
    id: 'building',
    title: 'Building Materials',
    desc: 'Tiles, fittings, pipes, insulation, roofing, flooring, and construction hardware.',
    titleId: 'prod-building-title',
    descId: 'prod-building-desc',
    imgId: 'prod-building-img-b4c5d6',
  },
  {
    id: 'food-equipment',
    title: 'Food & Beverage Equipment',
    desc: 'Commercial kitchen equipment, food processing machinery, refrigeration, and restaurant supplies.',
    titleId: 'prod-food-title',
    descId: 'prod-food-desc',
    imgId: 'prod-food-img-e7f8g9',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        title="Products We Source"
        subtitle="We source across a wide range of product categories from China's manufacturing base. If you don't see your product listed, contact us — we likely can help."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-brand-light rounded-xl overflow-hidden border border-brand-border hover:shadow-md transition-shadow">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-brand-dark mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-brand-gray text-sm leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Don't See Your Product?</h2>
          <p className="text-lg text-brand-gray mb-4">
            This is not an exhaustive list. China manufactures virtually everything. If you have a specific product in mind, reach out and we will assess whether we can source it for you.
          </p>
        </div>
      </section>

      <SectionCTA
        title="Tell Us What You Need"
        subtitle="Share your product requirements and we will find the right suppliers in China."
      />
    </div>
  )
}
