import SectionHeading from '@/components/common/SectionHeading.jsx'
import ProductCard from '@/components/common/ProductCard.jsx'
import { products } from '@/data/products.js'

const BestsellersSection = () => {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Bestsellers"
            title={<span id="bestsellers-title">A considered edit of everyday icons</span>}
            description="Polished shapes and softly luminous finishes, chosen for daily wear, gifting, and easy layering."
          />
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index < 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestsellersSection
