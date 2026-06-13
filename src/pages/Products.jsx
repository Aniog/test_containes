import { Link } from 'react-router-dom'
import {
  Monitor, Sofa, Shirt, Cog, Heart, Boxes,
  ArrowRight, CheckCircle, Globe
} from 'lucide-react'

const categories = [
  {
    icon: Monitor,
    title: 'Electronics & Gadgets',
    desc: 'Consumer electronics, LED lighting, phone accessories, smart home devices, power banks, wireless earbuds, chargers, and power tools.',
    items: ['LED lighting systems', 'Phone & tablet accessories', 'Smart home devices', 'Power tools & equipment', 'Audio equipment', 'USB chargers & cables'],
    imgId: 'products-cat-electronics-3f8a1b',
    altId: 'products-electronics-main-alt',
  },
  {
    icon: Sofa,
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, home decor, garden tools, storage solutions, bathroom fixtures, and household appliances.',
    items: ['Indoor & outdoor furniture', 'Kitchen tools & gadgets', 'Home decor & wall art', 'Garden tools & planters', 'Storage & organization', 'Bathroom accessories'],
    imgId: 'products-cat-home-9c2d4e',
    altId: 'products-home-main-alt',
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    desc: 'Clothing, bags, shoes, sportswear, workwear, custom fabric manufacturing, and fashion accessories.',
    items: ['Casual & formal wear', 'Sportswear & activewear', 'Bags & luggage', 'Shoes & footwear', 'Workwear & uniforms', 'Fashion accessories'],
    imgId: 'products-cat-apparel-5a7b8c',
    altId: 'products-apparel-main-alt',
  },
  {
    icon: Cog,
    title: 'Industrial & Machinery',
    desc: 'CNC machined parts, injection molds, auto components, packaging machines, and custom metal fabrication.',
    items: ['CNC machined components', 'Injection molds & dies', 'Auto parts & accessories', 'Packaging machinery', 'Metal fabrication', 'Custom tooling'],
    imgId: 'products-cat-industrial-1e4f6a',
    altId: 'products-industrial-main-alt',
  },
  {
    icon: Heart,
    title: 'Health & Beauty',
    desc: 'Cosmetics packaging, personal care products, fitness equipment, wellness accessories, and beauty tools.',
    items: ['Cosmetics packaging', 'Skincare & beauty tools', 'Fitness equipment', 'Wellness accessories', 'Hair care products', 'Personal care items'],
    imgId: 'products-cat-health-7b9d2c',
    altId: 'products-health-main-alt',
  },
  {
    icon: Boxes,
    title: 'Promotional & Custom Products',
    desc: 'Branded merchandise, custom packaging, corporate gifts, event materials, and private-label goods.',
    items: ['Branded merchandise', 'Custom packaging solutions', 'Corporate gifts', 'Event & trade show materials', 'Private-label products', 'Custom molds & designs'],
    imgId: 'products-cat-promo-4c6e8f',
    altId: 'products-promo-main-alt',
  },
]

export default function Products() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary-dark py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Product Categories</span>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
              Products We Source
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We source products across a wide range of industries from our network of over 2,000 verified factories in China. Whatever you need to manufacture, we can find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {categories.map((cat, index) => {
              const Icon = cat.icon
              const isEven = index % 2 === 0
              return (
                <div key={cat.title} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-text-primary mb-4">{cat.title}</h2>
                    <p className="text-text-secondary leading-relaxed mb-6">{cat.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {cat.items.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                          <span className="text-text-secondary text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-accent hover:text-accent-hover font-semibold text-sm transition-colors"
                    >
                      Request a Quote for {cat.title} <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="bg-surface-light rounded-2xl overflow-hidden border border-border">
                      <img
                        data-strk-img-id={cat.imgId}
                        data-strk-img={`[${cat.altId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="700"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={cat.title}
                        id={cat.altId}
                        className="w-full h-72 object-cover"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-16 bg-surface-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-text-primary mb-4">Don't See Your Product Category?</h2>
          <p className="text-text-secondary text-lg mb-8">
            We source virtually any manufactured product from China. If your product is not listed above, contact us and we will assess whether we can find the right supplier for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors"
          >
            Ask About Your Product <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Source Products?</h2>
          <p className="text-white/90 text-lg mb-8">
            Get a free sourcing quote within 24 hours. No obligation, no hidden fees.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-accent hover:bg-gray-100 font-semibold rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
