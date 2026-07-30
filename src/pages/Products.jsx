import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Package, Wrench, Cpu, Sofa, Shirt, Hammer, Star, Truck,
  ArrowRight, CheckCircle, Globe
} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const categories = [
  {
    icon: Cpu,
    name: 'Consumer Electronics',
    description: 'Phone accessories, Bluetooth devices, smart home products, power banks, cables, chargers, and wearable technology.',
    examples: ['Bluetooth speakers & earbuds', 'Phone cases & screen protectors', 'LED lights & smart bulbs', 'Power banks & chargers', 'Security cameras & smart home'],
    regions: 'Shenzhen, Dongguan',
    imgQuery: 'consumer electronics smartphone accessories gadgets technology',
    imgId: 'prod-electronics-v1w2x3',
  },
  {
    icon: Sofa,
    name: 'Furniture & Home Decor',
    description: 'Indoor and outdoor furniture, lighting fixtures, home decor items, kitchenware, and bathroom accessories.',
    examples: ['Modern & classic furniture', 'LED lighting fixtures', 'Kitchen utensils & cookware', 'Bathroom accessories', 'Wall art & decorative items'],
    regions: 'Foshan, Guangzhou',
    imgQuery: 'modern furniture home decor interior design living room',
    imgId: 'prod-furniture-y4z5a6',
  },
  {
    icon: Shirt,
    name: 'Apparel & Textiles',
    description: 'Men\'s, women\'s, and children\'s clothing, bags, shoes, hats, scarves, and fabric materials.',
    examples: ['Casual & formal wear', 'Sportswear & activewear', 'Bags, wallets & accessories', 'Shoes & footwear', 'Custom branded apparel'],
    regions: 'Guangzhou, Quanzhou',
    imgQuery: 'clothing apparel textiles fashion manufacturing factory',
    imgId: 'prod-apparel-b7c8d9',
  },
  {
    icon: Wrench,
    name: 'Industrial Equipment',
    description: 'Manufacturing machinery, industrial tools, auto parts, construction equipment, and mechanical components.',
    examples: ['CNC machines & equipment', 'Auto parts & accessories', 'Hand & power tools', 'Hydraulic components', 'Safety equipment'],
    regions: 'Ningbo, Wenzhou',
    imgQuery: 'industrial equipment machinery tools manufacturing factory',
    imgId: 'prod-industrial-e0f1g2',
  },
  {
    icon: Package,
    name: 'Promotional Products',
    description: 'Custom branded merchandise, corporate gifts, trade show giveaways, and packaging solutions.',
    examples: ['Custom branded pens & USB drives', 'Promotional bags & tote bags', 'Corporate gift sets', 'Custom packaging & boxes', 'Trade show displays'],
    regions: 'Yiwu, Shenzhen',
    imgQuery: 'promotional products custom branded merchandise gifts packaging',
    imgId: 'prod-promo-h3i4j5',
  },
  {
    icon: Star,
    name: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare products, hair care tools, personal hygiene items, and beauty accessories.',
    examples: ['Makeup brushes & tools', 'Skincare & cosmetics', 'Hair styling tools', 'Personal hygiene products', 'Beauty accessories'],
    regions: 'Guangzhou, Shantou',
    imgQuery: 'beauty cosmetics skincare personal care products',
    imgId: 'prod-beauty-k6l7m8',
  },
  {
    icon: Hammer,
    name: 'Hardware & Building Materials',
    description: 'Construction materials, plumbing fixtures, electrical components, door hardware, and building supplies.',
    examples: ['Door locks & handles', 'Plumbing fittings & fixtures', 'Electrical switches & sockets', 'Tiles & flooring materials', 'Aluminum & steel products'],
    regions: 'Foshan, Wenzhou',
    imgQuery: 'hardware building materials construction tools supplies',
    imgId: 'prod-hardware-n9o0p1',
  },
  {
    icon: Truck,
    name: 'Automotive Parts',
    description: 'Replacement parts, accessories, tools, and equipment for passenger vehicles, trucks, and motorcycles.',
    examples: ['Brake pads & rotors', 'LED headlights & lighting', 'Car electronics & GPS', 'Body parts & panels', 'Tires & wheels'],
    regions: 'Guangzhou, Zhejiang',
    imgQuery: 'automotive parts car accessories manufacturing',
    imgId: 'prod-auto-q2r3s4',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-primary pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-blue-200 uppercase tracking-wider mb-3">
              Product Categories
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Products We Source from China
            </h1>
            <p className="mt-5 text-lg text-blue-100 leading-relaxed">
              We have established supplier networks across major product categories, each with 
              verified factories ready to meet your specifications and quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="h-56 overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[prod-name-${cat.imgId}] ${cat.imgQuery}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-light-bg flex items-center justify-center">
                      <cat.icon className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <h2 id={`prod-name-${cat.imgId}`} className="text-xl font-bold text-brand-dark">{cat.name}</h2>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Globe className="w-3 h-3" /> {cat.regions}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{cat.description}</p>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Common Products
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.examples.map((ex) => (
                        <span
                          key={ex}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Regions */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Manufacturing Hubs"
            title="Key Sourcing Regions in China"
            subtitle="We operate across China's major manufacturing clusters, giving you access to the best suppliers for each product category."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: 'Guangzhou', specialty: 'Electronics, apparel, furniture', province: 'Guangdong' },
              { city: 'Shenzhen', specialty: 'Tech, electronics, hardware', province: 'Guangdong' },
              { city: 'Foshan', specialty: 'Furniture, ceramics, lighting', province: 'Guangdong' },
              { city: 'Yiwu', specialty: 'Small commodities, promotional', province: 'Zhejiang' },
            ].map((region) => (
              <div key={region.city} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-brand-dark text-lg">{region.city}</h3>
                <p className="text-xs text-gray-500 mb-2">{region.province} Province</p>
                <p className="text-sm text-gray-600">{region.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            We source a wide range of products beyond what's listed here. Contact us with your 
            specific requirements and we'll find the right suppliers.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent hover:bg-orange-600 text-white font-semibold rounded-lg text-base transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
