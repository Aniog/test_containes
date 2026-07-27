import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Electronics & Components',
    desc: 'PCBs, cables, connectors, consumer electronics, IoT devices',
    imgId: 'product-electronics-a1b2c3',
    titleId: 'product-electronics-title',
    descId: 'product-electronics-desc',
  },
  {
    name: 'Machinery & Hardware',
    desc: 'Industrial tools, CNC parts, fasteners, hydraulic components',
    imgId: 'product-machinery-d4e5f6',
    titleId: 'product-machinery-title',
    descId: 'product-machinery-desc',
  },
  {
    name: 'Textiles & Apparel',
    desc: 'Fabrics, garments, bags, footwear, home textiles',
    imgId: 'product-textiles-g7h8i9',
    titleId: 'product-textiles-title',
    descId: 'product-textiles-desc',
  },
  {
    name: 'Packaging Materials',
    desc: 'Boxes, bags, labels, bottles, custom packaging solutions',
    imgId: 'product-packaging-j0k1l2',
    titleId: 'product-packaging-title',
    descId: 'product-packaging-desc',
  },
  {
    name: 'Home & Furniture',
    desc: 'Indoor furniture, outdoor sets, kitchenware, decor items',
    imgId: 'product-furniture-m3n4o5',
    titleId: 'product-furniture-title',
    descId: 'product-furniture-desc',
  },
  {
    name: 'Automotive Parts',
    desc: 'Replacement parts, accessories, tools, EV components',
    imgId: 'product-automotive-p6q7r8',
    titleId: 'product-automotive-title',
    descId: 'product-automotive-desc',
  },
]

export default function ProductsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have extensive experience sourcing across a wide range of product categories from vetted manufacturers across China.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group relative bg-[#f8f9fa] rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-lg font-semibold text-navy mb-1">
                  {cat.name}
                </h3>
                <p id={cat.descId} className="text-sm text-gray-600">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-700 transition-colors"
          >
            See All Product Categories
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
