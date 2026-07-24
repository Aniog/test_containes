import CollectionHero from '../components/shop/CollectionHero'
import ProductCard from '../components/common/ProductCard'
import SectionHeading from '../components/common/SectionHeading'
import { categoryTiles, products } from '../data/store'
import useStrkImages from '../lib/useStrkImages'

const Collections = () => {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="bg-stone-950 text-stone-50">
      <CollectionHero />

      <section className="px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Signature edits"
            title="Curated around how she shops"
            description="Three ways into the collection, from ear-focused stacking to necklace layering and giftable finishing touches."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {categoryTiles.map((category) => (
              <article key={category.title} className="rounded-[2rem] border border-stone-200/10 bg-stone-900/60 p-6">
                <p className="font-display text-4xl text-stone-50">{category.title}</p>
                <p className="mt-3 text-sm leading-7 text-stone-300">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200/10 px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Collection preview"
            title="A look inside the line"
            description="Bestselling demi-fine pieces designed to feel elevated from the first glance to the final unboxing."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.slug} product={product} scope="collections" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Collections
