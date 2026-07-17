import ProductCard from '@/components/shared/ProductCard'
import SectionHeader from '@/components/shared/SectionHeader'

const BestsellersSection = ({ products }) => (
  <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
      <SectionHeader
        eyebrow="Bestsellers"
        title="The pieces clients return to, gift, and wear on repeat."
        description="Designed with warm gold tones, easy layering, and elevated proportions that feel polished from morning light to late dinner plans."
      />
      <a
        href="/shop"
        className="text-sm font-medium uppercase tracking-[0.3em] text-velvet-700 transition hover:text-gold-500"
      >
        Shop all pieces
      </a>
    </div>

    <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  </section>
)

export default BestsellersSection
