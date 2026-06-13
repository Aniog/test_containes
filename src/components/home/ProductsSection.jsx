import { Link } from 'react-router-dom'

const categories = [
  {
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, wiring harnesses, LED lighting, sensors, and more.',
    image: 'electronics',
  },
  {
    title: 'Industrial Equipment',
    description: 'Machinery parts, tools, pumps, valves, automation components, and heavy equipment.',
    image: 'industrial',
  },
  {
    title: 'Home & Lifestyle',
    description: 'Furniture, home decor, kitchenware, textiles, personal care, and pet products.',
    image: 'home',
  },
  {
    title: 'Packaging & Materials',
    description: 'Custom packaging, labels, raw materials, plastic molding, and metal fabrication.',
    image: 'packaging',
  },
  {
    title: 'Fashion & Accessories',
    description: 'Apparel, footwear, bags, jewelry, watches, and fashion accessories.',
    image: 'fashion',
  },
  {
    title: 'Health & Medical',
    description: 'Medical devices, PPE, fitness equipment, supplements, and health care products.',
    image: 'medical',
  },
]

export default function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">Product Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We source across a wide range of industries and product categories from China&apos;s manufacturing hubs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden border border-gray-100 bg-gray-50 shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <div
                  className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500"
                  data-strk-bg-id={`prod-cat-${cat.image}-${i}`}
                  data-strk-bg={`[prod-title-${i}] [prod-desc-${i}]`}
                  data-strk-bg-ratio="16x10"
                  data-strk-bg-width="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-5">
                <h3 id={`prod-title-${i}`} className="font-semibold text-gray-900 mb-1.5">{cat.title}</h3>
                <p id={`prod-desc-${i}`} className="text-sm text-gray-600 leading-relaxed">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            View All Categories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}