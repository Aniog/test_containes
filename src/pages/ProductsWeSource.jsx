import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ArrowRight, Smartphone, Home, Shirt, Wrench, Package, Sparkles,
  Baby, Car, Bike, Leaf, Coffee, Gift, CheckCircle2
} from 'lucide-react'

const categories = [
  {
    icon: Smartphone,
    title: 'Electronics & Gadgets',
    desc: 'Consumer electronics, mobile accessories, smart home devices, audio equipment, and tech gadgets.',
    items: ['Phone cases and accessories', 'Bluetooth speakers and earbuds', 'Smart home devices', 'LED lighting products', 'Power banks and chargers', 'Security cameras'],
    imgId: 'products-electronics-8f2a9c',
  },
  {
    icon: Home,
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, home decor, garden tools, storage solutions, and household essentials.',
    items: ['Kitchen utensils and cookware', 'Storage and organization', 'Garden tools and planters', 'Home decor and wall art', 'Bathroom accessories', 'Cleaning supplies'],
    imgId: 'products-home-garden-6d34fa',
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    desc: 'Clothing, fabrics, bags, shoes, hats, sportswear, and fashion accessories.',
    items: ['T-shirts and casual wear', 'Workwear and uniforms', 'Bags and backpacks', 'Hats and caps', 'Scarves and accessories', 'Fabric and textiles'],
    imgId: 'products-apparel-9e27b1',
  },
  {
    icon: Wrench,
    title: 'Machinery & Industrial Parts',
    desc: 'Industrial equipment, spare parts, hardware, fasteners, and precision components.',
    items: ['CNC machined parts', 'Fasteners and hardware', 'Hydraulic components', 'Industrial pumps and valves', 'Custom metal fabrication', 'Tool and die making'],
    imgId: 'products-machinery-a1b2c3',
  },
  {
    icon: Package,
    title: 'Packaging & Printing',
    desc: 'Custom packaging, boxes, labels, promotional items, printed materials, and branded merchandise.',
    items: ['Custom boxes and cartons', 'Labels and stickers', 'Promotional products', 'Branded merchandise', 'Gift packaging', 'Eco-friendly packaging'],
    imgId: 'products-packaging-d4e5f6',
  },
  {
    icon: Sparkles,
    title: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare, haircare, personal care items, and beauty tools.',
    items: ['Skincare products', 'Hair accessories', 'Makeup tools and brushes', 'Personal care items', 'Nail art supplies', 'Beauty packaging'],
    imgId: 'products-beauty-g7h8i9',
  },
  {
    icon: Baby,
    title: 'Baby & Kids Products',
    desc: 'Toys, baby gear, children\'s clothing, educational products, and nursery items.',
    items: ['Educational toys', 'Baby clothing', 'Strollers and car seats', 'Nursery furniture', 'Kids bags and accessories', 'Safety products'],
    imgId: 'products-baby-j0k1l2',
  },
  {
    icon: Gift,
    title: 'Promotional & Gift Items',
    desc: 'Corporate gifts, trade show giveaways, custom merchandise, and branded products.',
    items: ['Custom USB drives', 'Branded drinkware', 'Corporate gift sets', 'Trade show displays', 'Custom keychains', 'Promotional bags'],
    imgId: 'products-promo-m3n4o5',
  },
  {
    icon: Car,
    title: 'Automotive Parts & Accessories',
    desc: 'Auto parts, car accessories, tools, and equipment for the automotive industry.',
    items: ['Car interior accessories', 'LED headlights and bulbs', 'Car cleaning products', 'Tools and equipment', 'Motorcycle parts', 'EV accessories'],
    imgId: 'products-auto-p6q7r8',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly & Sustainable',
    desc: 'Biodegradable packaging, reusable products, eco-friendly materials, and sustainable alternatives.',
    items: ['Biodegradable packaging', 'Reusable shopping bags', 'Bamboo products', 'Solar-powered devices', 'Eco-friendly cleaning', 'Sustainable fashion'],
    imgId: 'products-eco-s9t0u1',
  },
]

const whySourceFromChina = [
  'Largest manufacturing ecosystem in the world',
  'Competitive pricing with no quality compromise',
  'Wide range of raw materials and components',
  'Advanced manufacturing technology and infrastructure',
  'Flexible MOQ options for businesses of all sizes',
  'Established supply chain and logistics networks',
]

export default function ProductsWeSource() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-500 to-brand-900 py-20 md:py-28">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Products We Source
          </h1>
          <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto">
            We source across 15+ industries with deep knowledge of manufacturing processes, quality standards, and supplier capabilities in each category.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div key={category.title} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="grid md:grid-cols-2">
                  <div className="h-48 md:h-auto overflow-hidden">
                    <img
                      data-strk-img-id={category.imgId}
                      data-strk-img={`[${category.title.toLowerCase().replace(/[^a-z]/g, '')}-section-title] china manufacturing`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span id={`${category.title.toLowerCase().replace(/[^a-z]/g, '')}-section-title`} className="sr-only">{category.title}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-brand-500" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900">{category.title}</h3>
                    </div>
                    <p className="text-neutral-600 text-sm mb-4">{category.desc}</p>
                    <ul className="space-y-2">
                      {category.items.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-neutral-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
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

      {/* Why Source from China */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Why Source from China?
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                China remains the world's largest manufacturing hub, offering unmatched capabilities across virtually every product category. With the right sourcing partner, you can access this ecosystem with confidence.
              </p>
              <ul className="space-y-4">
                {whySourceFromChina.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 text-lg">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
              <img
                data-strk-img-id="products-why-china-manufacturing"
                data-strk-img="china manufacturing factory production line industrial"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Modern Chinese manufacturing facility"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-500">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-lg text-brand-100 max-w-2xl mx-auto mb-8">
            We source across many more categories. Contact us with your specific product requirements and we will let you know how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-500 font-bold rounded-lg hover:bg-neutral-100 transition-all shadow-lg text-lg"
          >
            Ask About Your Product <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
