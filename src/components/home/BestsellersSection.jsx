import ProductCard from '../products/ProductCard.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function BestsellersSection({ products }) {
  return (
    <section className="bg-velmora-cream px-5 py-16 text-velmora-ink md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Bestsellers"
          title="The pieces she keeps reaching for"
          copy="Quietly radiant earrings, necklaces, and huggies made to elevate the everyday without ever feeling overdone."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
