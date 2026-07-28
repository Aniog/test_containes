import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const productCategories = [
  {
    name: 'Electronics & Components',
    description: 'Consumer electronics, PCB assemblies, LED lighting, power adapters, cables, and electronic components.',
    image: 'electronic components circuit board LED lights consumer electronics manufacturing',
    imgId: 'products-electronics-img',
    titleId: 'products-electronics-title',
    descId: 'products-electronics-desc',
  },
  {
    name: 'Home & Garden',
    description: 'Furniture, kitchenware, home decor, garden tools, storage solutions, and household items.',
    image: 'home furniture kitchenware garden tools household products manufacturing',
    imgId: 'products-home-img',
    titleId: 'products-home-title',
    descId: 'products-home-desc',
  },
  {
    name: 'Apparel & Textiles',
    description: 'Clothing, bags, shoes, fabrics, accessories, and textile products for all markets.',
    image: 'clothing textile factory garment manufacturing apparel production line',
    imgId: 'products-apparel-img',
    titleId: 'products-apparel-title',
    descId: 'products-apparel-desc',
  },
  {
    name: 'Machinery & Parts',
    description: 'Industrial machinery, CNC parts, auto components, metal fabrication, and custom engineering.',
    image: 'industrial machinery CNC metal parts manufacturing factory equipment',
    imgId: 'products-machinery-img',
    titleId: 'products-machinery-title',
    descId: 'products-machinery-desc',
  },
  {
    name: 'Promotional Products',
    description: 'Custom branded items, trade show giveaways, corporate gifts, and promotional merchandise.',
    image: 'promotional products custom branded merchandise corporate gifts manufacturing',
    imgId: 'products-promo-img',
    titleId: 'products-promo-title',
    descId: 'products-promo-desc',
  },
  {
    name: 'Building Materials',
    description: 'Tiles, hardware, plumbing fixtures, electrical fittings, and construction supplies.',
    image: 'building materials tiles hardware construction supplies manufacturing',
    imgId: 'products-building-img',
    titleId: 'products-building-title',
    descId: 'products-building-desc',
  },
]

export default function ProductsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Source</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
            Products We Source
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We source a wide range of products across major industries. Whatever you need, 
            we have the expertise and supplier network to deliver.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-gray-100 hover:border-primary/20 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  data-strk-img-id={category.imgId}
                  data-strk-img={`[${category.descId}] [${category.titleId}] Chinese manufacturing factory`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  className="w-full h-full object-cover bg-gray-100 group-hover:scale-105 transition-transform duration-500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={category.name}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 id={category.titleId} className="text-xl font-bold text-navy mb-2">
                  {category.name}
                </h3>
                <p id={category.descId} className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            View All Product Categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
