import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Electronics & Gadgets',
    desc: 'Consumer electronics, smart devices, accessories, PCBA, components.',
    imgId: 'product-electronics-bg-p1q2r3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    name: 'Home & Kitchen',
    desc: 'Appliances, cookware, storage, furniture, home decor, textiles.',
    imgId: 'product-home-bg-s4t5u6',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    name: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, bags, shoes, fabrics, accessories.',
    imgId: 'product-apparel-bg-v7w8x9',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    name: 'Industrial & Machinery',
    desc: 'Manufacturing equipment, parts, tools, hardware, raw materials.',
    imgId: 'product-industrial-bg-y0z1a2',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
  },
  {
    name: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare, haircare, personal care devices, packaging.',
    imgId: 'product-beauty-bg-b3c4d5',
    titleId: 'prod-beauty-title',
    descId: 'prod-beauty-desc',
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom boxes, labels, bags, printing services, promotional materials.',
    imgId: 'product-packaging-bg-e6f7g8',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
]

export default function ProductsGrid() {
  return (
    <section className="py-20 md:py-28 bg-surface" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Product Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            We source across 50+ product categories. Whatever you need manufactured,
            our team has likely sourced it before.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-all">
              <div
                className="aspect-[16/9] bg-slate-100"
                data-strk-bg-id={cat.imgId}
                data-strk-bg={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="600"
              />
              <div className="p-5">
                <h3 id={cat.titleId} className="font-bold text-slate-900 mb-1.5">{cat.name}</h3>
                <p id={cat.descId} className="text-sm text-slate-500 leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors"
          >
            View All Product Categories &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
