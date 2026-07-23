import { Link } from 'react-router-dom'
import { products } from '../../data/storefront.js'
import ProductCard from './ProductCard.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function BestsellersSection() {
  const featuredProducts = products.slice(0, 5)

  return (
    <section className="bg-[var(--velmora-ivory)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Bestsellers"
            id="bestsellers-title"
            title="The pieces our customers keep coming back for."
            description="Warm gold finishes, sculptural silhouettes, and effortless gifting favorites — chosen for repeat wear and easy styling."
          />
          <Link to="/shop" className="text-xs uppercase tracking-[0.24em] text-stone-500 transition hover:text-[var(--velmora-gold)]">
            View all products
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 2} sectionTitleId="bestsellers-title" />
          ))}
        </div>
      </div>
    </section>
  )
}
