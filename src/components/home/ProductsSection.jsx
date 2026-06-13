import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const productCategories = [
  { title: 'Electronics & Gadgets', items: 'Consumer electronics, LED products, phone accessories, power banks' },
  { title: 'Home & Garden', items: 'Furniture, kitchenware, home decor, garden tools, lighting fixtures' },
  { title: 'Apparel & Textiles', items: 'Clothing, bags, shoes, sportswear, fabric and materials' },
  { title: 'Machinery & Industrial', items: 'CNC machines, packaging equipment, auto parts, industrial tools' },
  { title: 'Promotional Products', items: 'Custom gifts, branded merchandise, event giveaways, corporate items' },
  { title: 'Beauty & Personal Care', items: 'Cosmetics, skincare, hair tools, packaging, private label products' },
]

export default function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="What We Source"
          title="Products We Source from China"
          description="We source across 15+ categories. No matter how niche your product, our network covers the major manufacturing regions of China."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {productCategories.map((category) => (
            <div
              key={category.title}
              className="border border-neutral-200 rounded-xl p-6 hover:border-primary/30 hover:shadow-sm transition-all group"
            >
              <h3 className="text-base font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{category.items}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
          >
            View all product categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
