import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const categories = [
  {
    title: 'Consumer Electronics',
    desc: 'Smart devices, LED lighting, phone accessories, chargers, speakers, headphones, power banks, and more.',
    products: ['Phone cases & accessories', 'Bluetooth speakers', 'LED strip lights', 'Wireless chargers', 'USB cables & hubs', 'Smart home devices'],
    titleId: 'prod-cat-electronics-title',
    descId: 'prod-cat-electronics-desc',
    imgId: 'prod-cat-electronics-img',
  },
  {
    title: 'Home & Kitchen',
    desc: 'Furniture, cookware, storage solutions, home decor, kitchen gadgets, and household appliances.',
    products: ['Stainless steel cookware', 'Storage organizers', 'Wall decor & art', 'Kitchen utensils', 'Bathroom accessories', 'Small appliances'],
    titleId: 'prod-cat-home-title',
    descId: 'prod-cat-home-desc',
    imgId: 'prod-cat-home-img',
  },
  {
    title: 'Apparel & Fashion',
    desc: 'Clothing, bags, shoes, fabrics, jewelry, watches, and fashion accessories at competitive MOQs.',
    products: ['T-shirts & activewear', 'Handbags & backpacks', 'Sunglasses & jewelry', 'Custom fabrics', 'Shoes & sandals', 'Hats & scarves'],
    titleId: 'prod-cat-apparel-title',
    descId: 'prod-cat-apparel-desc',
    imgId: 'prod-cat-apparel-img',
  },
  {
    title: 'Industrial & Hardware',
    desc: 'Hand tools, power tool accessories, fasteners, safety equipment, machinery parts, and construction materials.',
    products: ['Hand tools', 'Safety helmets & vests', 'Fasteners & bolts', 'Machinery parts', 'Hydraulic fittings', 'Welding equipment'],
    titleId: 'prod-cat-industrial-title',
    descId: 'prod-cat-industrial-desc',
    imgId: 'prod-cat-industrial-img',
  },
  {
    title: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare, haircare, packaging, brushes, mirrors, and wellness products.',
    products: ['Skincare packaging', 'Makeup brushes', 'Hair accessories', 'Cosmetic bags', 'LED beauty tools', 'Nail art supplies'],
    titleId: 'prod-cat-beauty-title',
    descId: 'prod-cat-beauty-desc',
    imgId: 'prod-cat-beauty-img',
  },
  {
    title: 'Automotive & EV',
    desc: 'Car accessories, replacement parts, EV charging components, dash cameras, and aftermarket products.',
    products: ['Car phone mounts', 'Dash cameras', 'Seat covers', 'LED headlights', 'EV charging cables', 'Floor mats'],
    titleId: 'prod-cat-auto-title',
    descId: 'prod-cat-auto-desc',
    imgId: 'prod-cat-auto-img',
  },
  {
    title: 'Toys & Baby Products',
    desc: 'Educational toys, outdoor play equipment, baby gear, plush toys, and developmental products.',
    products: ['STEM toys', 'Building blocks', 'Plush animals', 'Baby strollers', 'Play tents', 'Puzzles & games'],
    titleId: 'prod-cat-toys-title',
    descId: 'prod-cat-toys-desc',
    imgId: 'prod-cat-toys-img',
  },
  {
    title: 'Sports & Outdoor',
    desc: 'Fitness equipment, camping gear, yoga mats, water bottles, bags, and outdoor recreation products.',
    products: ['Yoga mats', 'Resistance bands', 'Water bottles', 'Camping gear', 'Gym accessories', 'Hiking backpacks'],
    titleId: 'prod-cat-sports-title',
    descId: 'prod-cat-sports-desc',
    imgId: 'prod-cat-sports-img',
  },
]

export default function Products() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Product Categories</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-heading font-extrabold text-white">
            Products We Source
          </h1>
          <p className="mt-5 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            We source across major product categories from verified Chinese manufacturers. If you don't see your category, ask us — we likely have a supplier for it.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
                <div
                  className="aspect-[16/9] bg-surface-alt relative overflow-hidden"
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={cat.titleId} className="font-heading font-bold text-xl text-text mb-2">{cat.title}</h2>
                  <p id={cat.descId} className="text-text-muted text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {cat.products.map((p) => (
                      <span key={p} className="flex items-center gap-1.5 text-text text-xs">
                        <CheckCircle className="w-3.5 h-3.5 text-success shrink-0" /> {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-text mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            We source thousands of products. Send us your specifications and we'll find the right supplier for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-base px-7 py-3.5 rounded-lg transition-colors"
          >
            Request a Custom Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
