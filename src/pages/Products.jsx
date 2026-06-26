import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Electronics & Components',
    items: ['PCBs & assemblies', 'Consumer electronics', 'Cables & connectors', 'Batteries & power banks', 'LED lighting & displays'],
    imgId: 'products-electronics-a1b2c3',
  },
  {
    title: 'Machinery & Industrial Parts',
    items: ['CNC machined parts', 'Injection molds', 'Pumps & valves', 'Automation equipment', 'Tools & abrasives'],
    imgId: 'products-machinery-d4e5f6',
  },
  {
    title: 'Home & Furniture',
    items: ['Furniture (indoor & outdoor)', 'Kitchenware & cookware', 'Bathroom fixtures', 'Home decor & textiles', 'Lighting fixtures'],
    imgId: 'products-home-g7h8i9',
  },
  {
    title: 'Apparel & Textiles',
    items: ['Men’s, women’s & kids’ garments', 'Fabrics & yarns', 'Bags & luggage', 'Footwear', 'Accessories & jewelry'],
    imgId: 'products-apparel-j0k1l2',
  },
  {
    title: 'Packaging & Printing',
    items: ['Corrugated & rigid boxes', 'Paper bags & pouches', 'Labels & stickers', 'Retail packaging', 'Printed materials'],
    imgId: 'products-packaging-m3n4o5',
  },
  {
    title: 'Automotive & Hardware',
    items: ['Auto parts & accessories', 'Fasteners & fittings', 'Building materials', 'Hardware & locks', 'Safety equipment'],
    imgId: 'products-automotive-p6q7r8',
  },
]

export default function Products() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Products We Source
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto">
            We cover a wide range of product categories across South China manufacturing hubs. If you do not see your product, ask us — we probably know the right cluster.
          </p>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-surface rounded-xl border border-border-light overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[products-title-${cat.title}] [products-desc-${cat.title}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3
                    id={`products-title-${cat.title}`}
                    className="text-lg font-bold text-text-primary mb-3"
                  >
                    {cat.title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface border-t border-border-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-4">
            Do not see your product category?
          </h2>
          <p className="text-text-secondary mb-8">
            China manufactures almost everything. Send us your specs and we will tell you which hub to target.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Request a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
