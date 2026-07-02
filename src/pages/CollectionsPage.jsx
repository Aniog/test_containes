import { Link } from 'react-router-dom'

import CategoryTiles from '@/components/home/CategoryTiles'
import JournalSection from '@/components/home/JournalSection'
import ImageLoaderSection from '@/components/shared/ImageLoaderSection'
import ProductCard from '@/components/shared/ProductCard'
import SectionHeader from '@/components/shared/SectionHeader'
import { categoryHighlights, journalEntries, products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const CollectionsPage = () => {
  const { addToCart } = useCart()
  const curatedProducts = [products[1], products[4], products[3]]

  return (
    <main className="pt-28 sm:pt-32">
      <section className="section-shell pb-8 pt-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-luxury text-velmora-gold">Collections</p>
            <h1 className="font-display text-5xl text-velmora-ink sm:text-6xl">
              Curated edits for self-gifting, occasion dressing, and modern keepsakes.
            </h1>
          </div>
          <p className="text-sm leading-8 text-velmora-muted sm:text-base">
            Explore warm, editorial combinations designed to make shopping feel more considered and elevated than a typical catalog grid.
          </p>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeader
          eyebrow="Curated now"
          title="The gifting edit"
          description="Pieces chosen for birthdays, bridal gifting, and the kind of personal self-purchase that deserves beautiful packaging."
        />

        <ImageLoaderSection className="mt-10 grid gap-6 lg:grid-cols-3" dependency={curatedProducts.length}>
          {curatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              context="collections-curated"
              sectionId="collections-curated-title"
              onQuickAdd={(entry) => addToCart(entry, entry.variantOptions[0], 1)}
            />
          ))}
        </ImageLoaderSection>
        <h2 id="collections-curated-title" className="sr-only">
          Velmora curated gifting edit
        </h2>
      </section>

      <CategoryTiles categories={categoryHighlights} />
      <JournalSection entries={journalEntries} />

      <section className="section-shell pt-0">
        <div className="rounded-[2.5rem] border border-velmora-line bg-velmora-sand px-6 py-10 shadow-velmora-soft sm:px-8 lg:flex lg:items-center lg:justify-between lg:px-12">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-luxury text-velmora-gold">Need the full edit?</p>
            <h2 className="font-display text-4xl text-velmora-ink">Browse every piece in the shop.</h2>
          </div>
          <Link to="/shop" className="btn-primary mt-6 inline-flex lg:mt-0">
            Shop all jewelry
          </Link>
        </div>
      </section>
    </main>
  )
}

export default CollectionsPage
