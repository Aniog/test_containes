import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import ProductCard from '@/components/shared/ProductCard'
import { collectionTiles, products } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

export default function CollectionsPage() {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="bg-stone-50">
      <section className="border-b border-stone-200 bg-stone-950 text-stone-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeader
            eyebrow="Collections"
            title="Curated edits for gifting, layering, and everyday polish"
            description="Discover the silhouettes our customers return to most, from sculptural earrings to softly radiant necklace moments."
            invert
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-5 lg:grid-cols-3">
          {collectionTiles.map((tile) => (
            <div
              key={tile.name}
              className="rounded-3xl border border-stone-200 bg-stone-100 p-6"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
                Signature Edit
              </p>
              <h2 className="mt-4 font-serif text-4xl text-stone-950">
                {tile.name}
              </h2>
              <p className="mt-4 text-base leading-7 text-stone-600">
                {tile.description}
              </p>
              <Link
                to={`/shop?category=${tile.name}`}
                className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-stone-900 transition hover:text-stone-700"
              >
                Shop {tile.name}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <SectionHeader
          eyebrow="Editor’s Picks"
          title="A polished selection from the house of Velmora"
          description="An elevated lineup for the customer who wants pieces that look premium, style easily, and feel giftable right away."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
