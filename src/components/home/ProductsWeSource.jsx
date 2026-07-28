import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Electronics & Gadgets',
    description: 'Consumer electronics, accessories, smart devices, and tech components from certified manufacturers.',
    imgId: 'products-electronics',
    titleId: 'products-electronics-title',
    descId: 'products-electronics-desc',
  },
  {
    title: 'Home & Garden',
    description: 'Furniture, kitchenware, décor, garden tools, and household items at competitive factory prices.',
    imgId: 'products-home-garden',
    titleId: 'products-home-garden-title',
    descId: 'products-home-garden-desc',
  },
  {
    title: 'Apparel & Textiles',
    description: 'Clothing, fabrics, bags, shoes, and fashion accessories with flexible MOQ options.',
    imgId: 'products-apparel',
    titleId: 'products-apparel-title',
    descId: 'products-apparel-desc',
  },
  {
    title: 'Machinery & Parts',
    description: 'Industrial equipment, custom machined parts, and manufacturing tools for B2B buyers.',
    imgId: 'products-machinery',
    titleId: 'products-machinery-title',
    descId: 'products-machinery-desc',
  },
  {
    title: 'Promotional Products',
    description: 'Custom branded merchandise, corporate gifts, trade show giveaways, and packaging solutions.',
    imgId: 'products-promotional',
    titleId: 'products-promotional-title',
    descId: 'products-promotional-desc',
  },
  {
    title: 'Building Materials',
    description: 'Construction materials, hardware, plumbing fixtures, and renovation supplies at wholesale rates.',
    imgId: 'products-building',
    titleId: 'products-building-title',
    descId: 'products-building-desc',
  },
]

export default function ProductsWeSource() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">What We Source</span>
          <h2 id="products-title" className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy">
            Products We Source
          </h2>
          <p id="products-subtitle" className="mt-4 text-lg text-gray-600">
            We source a wide range of products across major industry categories. No matter your niche, we can find the right suppliers.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gray-100 hover:border-brand-orange/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 id={cat.titleId} className="text-lg font-semibold text-brand-navy mb-2">{cat.title}</h3>
                <p id={cat.descId} className="text-sm text-gray-600 leading-relaxed">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-medium px-6">
            <Link to="/products" className="flex items-center gap-2">
              View All Product Categories <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
