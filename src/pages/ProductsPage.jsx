import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import CTAButton from '../components/CTAButton.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    imgId: 'prod-img-electronics-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic components.',
    examples: ['LED Lights & Fixtures', 'Cables & Adapters', 'Smart Home Devices', 'PCBs & Components', 'Chargers & Power Banks', 'Surveillance Cameras'],
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Decor',
    imgId: 'prod-img-furniture-d4e5f6',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    desc: 'Office furniture, home furniture, decorative items, kitchenware, and home accessories from Foshan and Guangdong.',
    examples: ['Office Chairs & Desks', 'Sofas & Upholstery', 'Decorative Items', 'Kitchenware', 'Bedding & Textiles', 'Storage Solutions'],
  },
  {
    id: 'clothing',
    name: 'Clothing & Textiles',
    imgId: 'prod-img-clothing-g7h8i9',
    titleId: 'prod-clothing-title',
    descId: 'prod-clothing-desc',
    desc: 'Apparel, activewear, workwear, uniforms, fabrics, and accessories from Guangzhou, Hangzhou, and Yiwu.',
    examples: ['T-Shirts & Casual Wear', 'Activewear & Sportswear', 'Workwear & Uniforms', 'Bags & Accessories', 'Fabrics & Yarn', 'Children\'s Clothing'],
  },
  {
    id: 'machinery',
    name: 'Machinery & Industrial',
    imgId: 'prod-img-machinery-j1k2l3',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
    desc: 'Industrial machinery, tools, equipment, and components for manufacturing, construction, and agriculture.',
    examples: ['CNC Machines', 'Power Tools', 'Agricultural Equipment', 'Pumps & Valves', 'Safety Equipment', 'Industrial Fasteners'],
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    imgId: 'prod-img-toys-m4n5o6',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
    desc: 'Educational toys, outdoor toys, baby gear, and children\'s products from Guangdong and Zhejiang.',
    examples: ['Educational Toys', 'Outdoor & Sports Toys', 'Baby Gear & Accessories', 'Plush Toys', 'Board Games', 'Ride-On Toys'],
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    imgId: 'prod-img-health-p7q8r9',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
    desc: 'Personal care products, cosmetics, health devices, supplements packaging, and wellness accessories.',
    examples: ['Skincare & Cosmetics', 'Hair Care Products', 'Health Monitoring Devices', 'Massage & Wellness', 'Fitness Equipment', 'Medical Supplies'],
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    imgId: 'prod-img-sports-s1t2u3',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
    desc: 'Sporting goods, outdoor equipment, camping gear, and fitness accessories.',
    examples: ['Gym Equipment', 'Camping & Hiking Gear', 'Cycling Accessories', 'Water Sports', 'Team Sports Equipment', 'Outdoor Furniture'],
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    imgId: 'prod-img-packaging-v4w5x6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    desc: 'Custom packaging, printed materials, labels, boxes, bags, and promotional items.',
    examples: ['Custom Boxes & Cartons', 'Printed Labels & Stickers', 'Promotional Items', 'Paper Bags', 'Plastic Packaging', 'Gift Packaging'],
  },
  {
    id: 'auto',
    name: 'Auto Parts',
    imgId: 'prod-img-auto-y7z8a9',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
    desc: 'Aftermarket auto parts, accessories, tools, and components for passenger and commercial vehicles.',
    examples: ['Body Parts & Panels', 'Engine Components', 'Car Accessories', 'Lighting & Electrical', 'Tires & Wheels', 'Tools & Equipment'],
  },
]

export default function ProductsPage() {
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
      <section className="bg-brand-blue py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-red text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Products We Source
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            30+ Product Categories from China
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            We source across a wide range of industries. If it's made in China, we can help you find the right supplier for it.
          </p>
          <CTAButton to="/contact" variant="primary">Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>

      {/* Category Grid */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Categories"
            title="What We Source"
            subtitle="Browse our main product categories. Don't see yours? Contact us — we source across many more."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`text-left p-4 rounded-xl border-2 transition-all text-sm font-medium ${
                  active === cat.id
                    ? 'border-brand-blue bg-brand-blue text-white shadow-md'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-brand-light hover:text-brand-blue'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active Category Detail */}
          {activeCategory && (
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img
                    data-strk-img-id={activeCategory.imgId}
                    data-strk-img={`[${activeCategory.descId}] [${activeCategory.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={activeCategory.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                    {activeCategory.name}
                  </span>
                  <h2 id={activeCategory.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                    {activeCategory.name}
                  </h2>
                  <p id={activeCategory.descId} className="text-gray-500 leading-relaxed mb-6">
                    {activeCategory.desc}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-brand-dark mb-3 text-sm uppercase tracking-wide">Common Products</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeCategory.examples.map((ex) => (
                        <span key={ex} className="bg-brand-bg text-gray-700 text-sm px-3 py-1 rounded-full border border-gray-200">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                  <CTAButton to="/contact" variant="primary">Source This Category</CTAButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Product Category?</h2>
          <p className="text-red-100 text-lg mb-8">We source across many more categories. Tell us what you need and we'll find the right supplier.</p>
          <CTAButton to="/contact" variant="white">Contact Us</CTAButton>
        </div>
      </section>
    </div>
  )
}
