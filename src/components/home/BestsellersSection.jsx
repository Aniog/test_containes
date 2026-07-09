import ProductCard from '@/components/product/ProductCard.jsx'
import SectionIntro from '@/components/shared/SectionIntro.jsx'
import SectionLink from '@/components/shared/SectionLink.jsx'
import { products } from '@/data/products.js'

const BestsellersSection = () => {
  return (
    <section className="page-shell py-16 md:py-24" id="bestsellers">
      <SectionIntro
        eyebrow="Bestsellers"
        title="The pieces women come back for"
        description="Signature silhouettes with warm polish, easy layering, and giftable appeal. Each piece is designed to elevate everyday styling without losing softness."
        action={<SectionLink to="/shop">View all pieces</SectionLink>}
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {products.map((product, index) => (
          <ProductCard key={product.id} priority={index < 2} product={product} />
        ))}
      </div>
    </section>
  )
}

export default BestsellersSection
