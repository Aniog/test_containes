import SectionHeading from '@/components/common/SectionHeading'
import ProductCard from '@/components/shop/ProductCard'
import { products } from '@/data/storefront'

const BestsellersSection = () => {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 5)

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Bestsellers"
          title="An elevated edit for everyday shine"
          titleId="home-bestsellers-title"
          description="Our most-worn silhouettes blend warm polish, subtle sparkle, and giftable ease."
          descriptionId="home-bestsellers-desc"
        />
        <p className="max-w-sm text-sm leading-7 text-velmora-stone">
          Hover to reveal a second look and quick-add straight into the cart drawer.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {featuredProducts.map((product, index) => (
          <ProductCard
            key={product.slug}
            priority={index === 0}
            product={product}
            sectionTitleId="home-bestsellers-title"
            sectionDescId="home-bestsellers-desc"
          />
        ))}
      </div>
    </section>
  )
}

export default BestsellersSection
