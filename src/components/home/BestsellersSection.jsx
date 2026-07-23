import ProductCard from '@/components/shared/ProductCard'
import SectionHeader from '@/components/shared/SectionHeader'
import ImageLoaderSection from '@/components/shared/ImageLoaderSection'

const BestsellersSection = ({ products }) => {
  return (
    <ImageLoaderSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8" deps={[products.length]}>
      <SectionHeader
        description="A curated edit of Velmora signatures with polished finishes, giftable appeal, and easy everyday wear."
        eyebrow="Most loved"
        title="Bestsellers"
      />
      <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-5">
        {products.map((product, index) => (
          <ProductCard key={product.id} priority={index < 2} product={product} />
        ))}
      </div>
    </ImageLoaderSection>
  )
}

export default BestsellersSection
