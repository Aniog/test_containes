import { Link } from 'react-router-dom'

const categories = [
  { id: 'electronics', title: 'Electronics & Components', titleId: 'prod-electronics-title', descId: 'prod-electronics-desc', desc: 'Consumer electronics, PCBs, LED lighting, cables, and electronic accessories.', imgId: 'prod-electronics-img-a1b2c3' },
  { id: 'textiles', title: 'Textiles & Apparel', titleId: 'prod-textiles-title', descId: 'prod-textiles-desc', desc: 'Clothing, fabrics, home textiles, sportswear, and fashion accessories.', imgId: 'prod-textiles-img-d4e5f6' },
  { id: 'furniture', title: 'Furniture & Home', titleId: 'prod-furniture-title', descId: 'prod-furniture-desc', desc: 'Office furniture, home decor, kitchenware, bathroom fixtures, and storage.', imgId: 'prod-furniture-img-g7h8i9' },
  { id: 'machinery', title: 'Machinery & Parts', titleId: 'prod-machinery-title', descId: 'prod-machinery-desc', desc: 'Industrial machinery, auto parts, CNC components, and metal fabrication.', imgId: 'prod-machinery-img-j1k2l3' },
  { id: 'packaging', title: 'Packaging & Printing', titleId: 'prod-packaging-title', descId: 'prod-packaging-desc', desc: 'Custom packaging, labels, boxes, bags, and promotional materials.', imgId: 'prod-packaging-img-m4n5o6' },
  { id: 'health', title: 'Health & Beauty', titleId: 'prod-health-title', descId: 'prod-health-desc', desc: 'Cosmetics, skincare, supplements, medical devices, and personal care.', imgId: 'prod-health-img-p7q8r9' },
]

const ProductsOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold text-brand-blue uppercase tracking-wide mb-3">Product Categories</span>
          <h2 id="products-section-title" className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Products We Source
          </h2>
          <p id="products-section-subtitle" className="text-brand-muted text-lg">
            We source across a wide range of industries. If it is made in China, we can help you find it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group relative rounded-xl overflow-hidden border border-brand-border bg-brand-light hover:shadow-md transition-shadow">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-lg font-semibold text-brand-dark mb-1">{cat.title}</h3>
                <p id={cat.descId} className="text-sm text-brand-muted">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline"
          >
            See All Product Categories →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsOverview
