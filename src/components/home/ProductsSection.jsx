import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    category: 'Electronics & Gadgets',
    desc: 'Consumer electronics, mobile accessories, smart devices, and home tech.',
    imgId: 'prod-electronics',
    titleId: 'prod-title-electronics',
    descId: 'prod-desc-electronics',
  },
  {
    category: 'Apparel & Textiles',
    desc: 'Garments, fabrics, footwear, bags, and fashion accessories from verified workshops.',
    imgId: 'prod-apparel',
    titleId: 'prod-title-apparel',
    descId: 'prod-desc-apparel',
  },
  {
    category: 'Home & Furniture',
    desc: 'Furniture, kitchenware, home decor, lighting, and household goods.',
    imgId: 'prod-home',
    titleId: 'prod-title-home',
    descId: 'prod-desc-home',
  },
  {
    category: 'Industrial & Hardware',
    desc: 'Machinery parts, tools, metal components, and industrial equipment.',
    imgId: 'prod-industrial',
    titleId: 'prod-title-industrial',
    descId: 'prod-desc-industrial',
  },
  {
    category: 'Packaging & Printing',
    desc: 'Custom packaging, labels, printed materials, and promotional products.',
    imgId: 'prod-packaging',
    titleId: 'prod-title-packaging',
    descId: 'prod-desc-packaging',
  },
  {
    category: 'Health & Beauty',
    desc: 'Cosmetics, personal care products, health supplements, and skincare.',
    imgId: 'prod-beauty',
    titleId: 'prod-title-beauty',
    descId: 'prod-desc-beauty',
  },
]

export default function ProductsSection() {
  return (
    <section className="bg-[#f6f7f9] section-padding">
      <div className="container-main">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1a2b4a] mb-4">
            Products We Source
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto">
            We source across a wide range of industries. Whether you need electronics, textiles, or industrial goods, we have you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((p) => (
            <div
              key={p.category}
              className="group bg-white rounded-xl overflow-hidden border border-[#e2e8f0] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="overflow-hidden">
                <img
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.category}
                  className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3
                  id={p.titleId}
                  className="text-base font-bold text-[#1a2b4a] mb-1"
                >
                  {p.category}
                </h3>
                <p
                  id={p.descId}
                  className="text-sm text-[#64748b] leading-relaxed mb-4"
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products" className="btn-secondary">
            View All Products
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
