import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, sensors, and electronic components.',
    imgId: 'cat-electronics-d4e5f6',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, home textiles, garden tools, and decorative items.',
    imgId: 'cat-home-garden-g7h8i9',
    titleId: 'cat-home-garden-title',
    descId: 'cat-home-garden-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, fabrics, accessories, sportswear, and fashion items.',
    imgId: 'cat-apparel-j1k2l3',
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
  },
  {
    id: 'machinery',
    title: 'Machinery & Equipment',
    desc: 'Industrial machinery, CNC equipment, packaging machines, and automation systems.',
    imgId: 'cat-machinery-m4n5o6',
    titleId: 'cat-machinery-title',
    descId: 'cat-machinery-desc',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'OEM and aftermarket auto parts, EV components, and vehicle accessories.',
    imgId: 'cat-auto-parts-p7q8r9',
    titleId: 'cat-auto-parts-title',
    descId: 'cat-auto-parts-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, printing materials, and eco-friendly packaging solutions.',
    imgId: 'cat-packaging-s1t2u3',
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
  },
]

export default function ProductsWeSource() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-amber font-semibold text-sm uppercase tracking-wider mb-2">Product Categories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Products We Source
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We source across a wide range of industries. If it's made in China, we can help you find the right supplier.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-lg font-bold text-slate-900 mb-2">{cat.title}</h3>
                <p id={cat.descId} className="text-slate-600 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-dark transition-colors"
          >
            View all product categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
