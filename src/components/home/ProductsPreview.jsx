import SectionHeading from '@/components/shared/SectionHeading'
import CTAButton from '@/components/shared/CTAButton'

const categories = [
  { id: 'electronics', name: 'Consumer Electronics', examples: 'Headphones, chargers, smart devices' },
  { id: 'textiles', name: 'Textiles & Apparel', examples: 'Clothing, fabrics, bags, shoes' },
  { id: 'home', name: 'Home & Garden', examples: 'Furniture, kitchenware, lighting' },
  { id: 'industrial', name: 'Industrial & Hardware', examples: 'Tools, machinery parts, fasteners' },
  { id: 'packaging', name: 'Packaging & Printing', examples: 'Custom boxes, labels, bags' },
  { id: 'beauty', name: 'Beauty & Personal Care', examples: 'Cosmetics, skincare, packaging' },
]

export default function ProductsPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Products We Source"
          title="Wide Range of Product Categories"
          subtitle="We source across dozens of industries. If it's made in China, we can find the right supplier for you."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-accent-500/30 hover:bg-accent-500/5 transition-all duration-200"
            >
              <h3 className="font-semibold text-navy-900 mb-1">{cat.name}</h3>
              <p className="text-sm text-slate-500">{cat.examples}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <CTAButton to="/products" variant="secondary">
            View All Product Categories
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
