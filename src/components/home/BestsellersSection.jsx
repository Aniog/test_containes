import ProductGrid from '@/components/product/ProductGrid.jsx'
import SectionIntro from './SectionIntro.jsx'

export default function BestsellersSection({ products }) {
  return (
    <section id="collections" className="bg-velmora-ivory px-5 py-16 text-velmora-espresso md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            eyebrow="Bestsellers"
            title="Pieces with a waiting-list feeling"
            text="Our most-loved demi-fine silhouettes, styled to move from desk to dinner without changing your mood."
            align="left"
          />
          <a href="/shop" className="w-fit border-b border-velmora-champagne pb-1 text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze transition hover:text-velmora-espresso">
            View all jewelry
          </a>
        </div>
        <ProductGrid products={products} />
      </div>
    </section>
  )
}
