import ProductCard from '@/components/shared/ProductCard'
import SectionIntro from '@/components/shared/SectionIntro'
import { productCatalog } from '@/data/products'

function BestsellersSection() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Bestsellers"
          title="Pieces our customers return to again and again"
          description="Designed to feel polished every day and gift-worthy the moment they arrive."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {productCatalog.map((product) => (
            <ProductCard key={product.id} product={product} sectionId="bestsellers" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestsellersSection
