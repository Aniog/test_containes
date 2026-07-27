import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'

const products = [
  {
    id: 'electronics',
    title: 'Consumer Electronics',
    desc: 'Bluetooth audio, smart accessories, small home appliances and OEM electronics from Shenzhen and Dongguan.',
    imgId: 'prod-electronics-3d81ac',
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    desc: 'Cookware, storage, tableware and household essentials from certified factories across Guangdong and Zhejiang.',
    imgId: 'prod-homekitchen-7b42e1',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Decor',
    desc: 'Indoor and outdoor furniture, lighting, and decor with strict material and finish inspections before loading.',
    imgId: 'prod-furniture-9f27d4',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Garments, activewear and home textiles with fabric testing, measurement checks and AQL inspections.',
    imgId: 'prod-apparel-5c68b2',
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    desc: 'Cosmetics tools, skincare packaging and personal care devices from GMP-compliant workshops.',
    imgId: 'prod-beauty-2e94f7',
  },
  {
    id: 'industrial',
    title: 'Industrial & Hardware',
    desc: 'Tools, components, and custom metal or plastic parts with dimensional and material verification.',
    imgId: 'prod-industrial-6a35c8',
  },
]

const ProductsGrid = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products We Source"
          title="Categories we know deeply"
          description="We focus on categories where we have long-standing factory relationships and hands-on inspection experience."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-paper">
                <img
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[prod-${product.id}-desc] [prod-${product.id}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <h3 id={`prod-${product.id}-title`} className="text-lg font-semibold text-ink">
                  {product.title}
                </h3>
                <p id={`prod-${product.id}-desc`} className="mt-2 text-sm leading-relaxed text-slate-body">
                  {product.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-base font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            View all product categories <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsGrid
