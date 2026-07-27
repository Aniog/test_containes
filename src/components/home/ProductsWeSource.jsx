import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, sensors, connectors, and electronic assemblies.',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
    imgId: 'cat-electronics-img-a1b2',
  },
  {
    id: 'textiles',
    title: 'Textiles & Garments',
    desc: 'Fabrics, apparel, home textiles, sportswear, and fashion accessories.',
    titleId: 'cat-textiles-title',
    descId: 'cat-textiles-desc',
    imgId: 'cat-textiles-img-c3d4',
  },
  {
    id: 'hardware',
    title: 'Hardware & Tools',
    desc: 'Fasteners, hand tools, power tools, locks, hinges, and metal components.',
    titleId: 'cat-hardware-title',
    descId: 'cat-hardware-desc',
    imgId: 'cat-hardware-img-e5f6',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden Products',
    desc: 'Furniture, kitchenware, garden tools, lighting, and home decor items.',
    titleId: 'cat-home-garden-title',
    descId: 'cat-home-garden-desc',
    imgId: 'cat-home-garden-img-g7h8',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, and commercial printing services.',
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
    imgId: 'cat-packaging-img-i9j0',
  },
  {
    id: 'automotive',
    title: 'Auto Parts & Accessories',
    desc: 'OEM and aftermarket auto parts, interior accessories, and vehicle components.',
    titleId: 'cat-automotive-title',
    descId: 'cat-automotive-desc',
    imgId: 'cat-automotive-img-k1l2',
  },
]

export default function ProductsWeSource() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="products-section-title" className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Products We Source
          </h2>
          <p id="products-section-subtitle" className="text-neutral-mid max-w-2xl mx-auto">
            We work across a wide range of product categories. If your product is made in China, we can help you source it reliably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white border border-neutral-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                alt={cat.title}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-section-subtitle] [products-section-title]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-48 object-cover bg-neutral-light"
              />
              <div className="p-6">
                <h3 id={cat.titleId} className="text-lg font-semibold text-primary mb-2">
                  {cat.title}
                </h3>
                <p id={cat.descId} className="text-neutral-mid text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-accent font-semibold no-underline hover:text-accent-light transition-colors"
          >
            View All Product Categories →
          </Link>
        </div>
      </div>
    </section>
  )
}
