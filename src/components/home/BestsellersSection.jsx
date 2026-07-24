import ProductCard from '../common/ProductCard'
import SectionHeading from '../common/SectionHeading'

const BestsellersSection = ({ products }) => (
  <section className="px-6 py-20 lg:px-10 lg:py-28">
    <div className="mx-auto max-w-7xl space-y-10">
      <SectionHeading
        eyebrow="Bestsellers"
        title="Pieces that stay in rotation"
        description="Best-loved Velmora styles chosen for gifting, layering, and those quiet polished moments that call for a little shine."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} scope="home-bestseller" />
        ))}
      </div>
    </div>
  </section>
)

export default BestsellersSection
