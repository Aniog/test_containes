import { Link } from "react-router-dom"
import { categories, products } from "@/data/products"
import { useStrkImages, IMG_PLACEHOLDER } from "@/lib/strk-images"

export default function Collections() {
  const ref = useStrkImages([])
  return (
    <div ref={ref} className="pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center md:px-10 md:py-20">
        <p className="text-xs uppercase tracking-widest2 text-gold">Curated Edits</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-ink">Collections</h1>
        <p className="mt-4 max-w-md mx-auto text-sm text-stone">
          Explore our curated edits, each designed around a moment of wear.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <div className="space-y-6">
          {categories.map((cat) => {
            const catProducts = products.filter((p) => p.category === cat.name)
            const nameId = `coll-${cat.id}-name`
            const descId = `coll-${cat.id}-desc`
            return (
              <div key={cat.id} className="grid grid-cols-1 overflow-hidden border border-line md:grid-cols-2">
                <Link to={`/shop?category=${cat.name}`} className="relative aspect-[4x3] md:aspect-auto">
                  <img
                    alt={cat.name}
                    data-strk-img-id={`coll-${cat.imgId}`}
                    data-strk-img={`[${descId}] [${nameId}] gold jewelry editorial warm`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src={IMG_PLACEHOLDER}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </Link>
                <div className="flex flex-col justify-center bg-sand px-8 py-10 md:px-12">
                  <h2 id={nameId} className="font-serif text-3xl uppercase tracking-widest3 text-ink md:text-4xl">
                    {cat.name}
                  </h2>
                  <p id={descId} className="mt-2 text-sm text-stone">{cat.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {catProducts.map((p) => (
                      <Link
                        key={p.id}
                        to={`/product/${p.id}`}
                        className="text-xs uppercase tracking-widest2 text-ink hover:text-gold transition-colors"
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                  <Link
                    to={`/shop?category=${cat.name}`}
                    className="mt-8 inline-flex w-fit items-center gap-2 border border-ink px-7 py-3 text-xs uppercase tracking-widest2 text-ink transition-colors hover:bg-ink hover:text-cream"
                  >
                    Shop {cat.name} →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
