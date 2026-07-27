import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Search } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Gadgets',
    description: 'Consumer electronics, Bluetooth devices, phone accessories, LED products, smart home devices, power banks, and tech gadgets.',
    examples: ['Bluetooth earbuds', 'LED strip lights', 'Power banks', 'Phone cases', 'Smart plugs'],
    imgId: 'cat-electronics-b2d4f8',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
    query: '[cat-electronics-desc] [cat-electronics-title]',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    description: 'Furniture, kitchenware, bathroom accessories, storage solutions, garden tools, outdoor furniture, and home decor items.',
    examples: ['Storage organizers', 'Kitchen utensils', 'Garden planters', 'LED solar lights', 'Wall art'],
    imgId: 'cat-home-garden-a3e7c1',
    titleId: 'cat-home-title',
    descId: 'cat-home-desc',
    query: '[cat-home-desc] [cat-home-title]',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    description: 'Clothing, sportswear, activewear, bags, shoes, hats, scarves, fabrics, and fashion accessories for men, women, and children.',
    examples: ['T-shirts & polos', 'Yoga pants', 'Tote bags', 'Baseball caps', 'Scarves & shawls'],
    imgId: 'cat-apparel-c5f9a2',
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
    query: '[cat-apparel-desc] [cat-apparel-title]',
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    description: 'CNC machined parts, metal stamping, die casting, plastic injection molding, industrial tools, packaging machinery, and automotive components.',
    examples: ['CNC aluminum parts', 'Custom springs', 'Hydraulic fittings', 'Packaging machines', 'Welding equipment'],
    imgId: 'cat-industrial-d8b3e6',
    titleId: 'cat-industrial-title',
    descId: 'cat-industrial-desc',
    query: '[cat-industrial-desc] [cat-industrial-title]',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    description: 'Cosmetics, skincare products, personal care items, fitness equipment, wellness products, essential oils, and supplement packaging.',
    examples: ['Face creams', 'Essential oil sets', 'Yoga mats', 'Makeup brushes', 'Hair accessories'],
    imgId: 'cat-health-beauty-e1a6d4',
    titleId: 'cat-health-title',
    descId: 'cat-health-desc',
    query: '[cat-health-desc] [cat-health-title]',
  },
  {
    id: 'toys-promotional',
    title: 'Toys & Promotional Products',
    description: 'Custom toys, board games, promotional merchandise, branded giveaways, corporate gifts, event swag, and seasonal products.',
    examples: ['Custom plush toys', 'Branded pens', 'USB drives', 'Keychains', 'Drink bottles'],
    imgId: 'cat-toys-promo-f4c8b9',
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
    query: '[cat-toys-desc] [cat-toys-title]',
  },
  {
    id: 'automotive',
    title: 'Automotive Parts',
    description: 'Replacement parts, accessories, maintenance products, car electronics, lighting, and custom automotive components.',
    examples: ['LED headlights', 'Floor mats', 'Seat covers', 'Dash cameras', 'Wiper blades'],
    imgId: 'cat-automotive-g7d2e5',
    titleId: 'cat-automotive-title',
    descId: 'cat-automotive-desc',
    query: '[cat-automotive-desc] [cat-automotive-title]',
  },
  {
    id: 'pet-products',
    title: 'Pet Products',
    description: 'Pet toys, grooming supplies, pet beds, leashes, collars, feeding accessories, and pet clothing.',
    examples: ['Pet toys', 'Dog beds', 'Cat trees', 'Grooming kits', 'Pet clothing'],
    imgId: 'cat-pet-products-h9f1a7',
    titleId: 'cat-pet-title',
    descId: 'cat-pet-desc',
    query: '[cat-pet-desc] [cat-pet-title]',
  },
]

export default function Products() {
  const containerRef = useRef(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = categories.filter(
    (cat) =>
      cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [searchTerm])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-accent-500/30">
              Product Categories
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Products We Source
              <br />
              <span className="text-accent-400">From China</span>
            </h1>
            <p className="text-lg text-steel-200 leading-relaxed max-w-xl">
              We source across dozens of product categories from China's major
              manufacturing hubs. If you don't see your category, contact us — we
              can source almost any manufactured product.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-white border-b border-steel-200 sticky top-16 md:top-20 z-30">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-steel-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search product categories..."
              className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-steel-300 text-steel-800 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
            />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-steel-500 text-lg mb-4">No categories match your search.</p>
              <p className="text-steel-400 text-sm">
                Contact us — we can source almost any manufactured product from China.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((cat) => (
                <div key={cat.id} className="group card-base card-hover overflow-hidden p-0">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      alt={cat.title}
                      data-strk-img-id={cat.imgId}
                      data-strk-img={cat.query}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-800/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 id={cat.titleId} className="heading-card text-lg mb-2">{cat.title}</h3>
                    <p id={cat.descId} className="text-body text-sm mb-4">{cat.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cat.examples.map((item) => (
                        <span key={item} className="text-xs bg-steel-100 text-steel-600 px-2.5 py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-brand-500 font-semibold text-sm hover:gap-2.5 transition-all"
                    >
                      Request quote <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-steel-50">
        <div className="container-narrow mx-auto text-center">
          <h2 className="heading-section mb-4">Don't See Your Product?</h2>
          <p className="text-body text-lg mb-8 max-w-2xl mx-auto">
            We source almost any manufactured product from China. Share your
            requirements and we will let you know if we can help.
          </p>
          <Link to="/contact" className="btn-accent text-base px-8 py-4">
            Contact Us About Your Product
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
