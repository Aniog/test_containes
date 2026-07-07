import SectionHeading from '@/components/common/SectionHeading'
import ProductCard from '@/components/common/ProductCard.jsx?velmora=20260707'
import { products } from '@/data/products.js?velmora=20260707'

export default function BestsellersSection() {
  return (
    <section className="container-shell py-16 md:py-24">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Bestsellers"
          title="Pieces our community keeps coming back for"
          description="Five polished favorites for elevated everyday wear, thoughtful gifting, and instant finishing touches."
        />
        <p id="bestsellers-title" className="max-w-sm text-sm leading-7 text-velmora-espresso/72">
          Signature silhouettes with refined sparkle, warm gold tones, and gifting-ready charm.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} contextLabel="home" />
        ))}
      </div>
    </section>
  )
}
