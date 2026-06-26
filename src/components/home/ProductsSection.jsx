import { Link } from 'react-router-dom'

const categories = [
  {
    title: 'Electronics & Gadgets',
    desc: 'Consumer electronics, LED lighting, phone accessories, chargers, and smart devices.',
    titleId: 'products-electronics-title',
    descId: 'products-electronics-desc',
    imgId: 'products-electronics-img',
  },
  {
    title: 'Home & Kitchen',
    desc: 'Furniture, cookware, storage solutions, home decor, and household appliances.',
    titleId: 'products-home-title',
    descId: 'products-home-desc',
    imgId: 'products-home-img',
  },
  {
    title: 'Apparel & Textiles',
    desc: 'Clothing, bags, shoes, fabrics, and fashion accessories at competitive MOQs.',
    titleId: 'products-apparel-title',
    descId: 'products-apparel-desc',
    imgId: 'products-apparel-img',
  },
  {
    title: 'Industrial & Tools',
    desc: 'Hardware, hand tools, machinery parts, safety equipment, and industrial supplies.',
    titleId: 'products-industrial-title',
    descId: 'products-industrial-desc',
    imgId: 'products-industrial-img',
  },
  {
    title: 'Beauty & Health',
    desc: 'Cosmetics, skincare, packaging, fitness equipment, and wellness products.',
    titleId: 'products-beauty-title',
    descId: 'products-beauty-desc',
    imgId: 'products-beauty-img',
  },
  {
    title: 'Automotive Parts',
    desc: 'Car accessories, replacement parts, EV components, and aftermarket products.',
    titleId: 'products-auto-title',
    descId: 'products-auto-desc',
    imgId: 'products-auto-img',
  },
]

export default function ProductsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Product Categories</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-extrabold text-text">
            Products We Source
          </h2>
          <p className="mt-4 text-text-muted text-base leading-relaxed">
            We source across major product categories from vetted manufacturers. Whatever you need to import from China, we can find the right supplier.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              to="/products"
              className="group block bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div
                className="aspect-[16/10] bg-surface-alt relative overflow-hidden"
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="font-heading font-bold text-base text-text mb-1 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p id={cat.descId} className="text-text-muted text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-light transition-colors"
          >
            View all product categories &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
