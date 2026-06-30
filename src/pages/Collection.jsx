import React, { useEffect, useMemo } from "react"
import { Link, useParams } from "react-router-dom"
import { ArrowRight, ChevronRight } from "lucide-react"
import ProductCard from "@/components/ui/ProductCard"
import { products } from "@/data/products"

const COLLECTIONS = [
  {
    id: "the-everyday",
    name: "The Everyday",
    headline: "Worn, washed, and lived in",
    description:
      "Pieces designed to live on your body — from morning meetings to midnight dinners. Lightweight, water-resistant, and finished in 18K gold plating.",
    category: "all",
  },
  {
    id: "evening",
    name: "Evening",
    headline: "For the moments that matter",
    description:
      "A small edit of statement earrings and drop necklaces, hand-set in crystals and finished in brushed gold. Made to be remembered.",
    category: "earrings",
  },
  {
    id: "gifts",
    name: "Gifts",
    headline: "Wrapped and ready",
    description:
      "Sets and singular pieces presented in our keepsake box. Free handwritten note at checkout. The hardest gift you'll give this year.",
    category: "sets",
  },
]

export default function Collection() {
  const { slug } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // Collection landing
  if (!slug) {
    return (
      <section className="bg-cream">
        <div className="bg-cream-deep border-b border-taupe">
          <div className="mx-auto max-w-page px-6 md:px-12 py-14 md:py-20 text-center">
            <p className="kicker">Curated by us</p>
            <h1 className="mt-3 headline-xl text-espresso">Collections</h1>
            <p className="mt-4 max-w-md mx-auto editorial-body">
              Three small edits — one for the everyday, one for the evening, and one to give.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-page px-6 md:px-12 py-14 md:py-20">
          <div className="space-y-20 md:space-y-28">
            {COLLECTIONS.map((c, idx) => (
              <article
                key={c.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                <div
                  className={
                    idx % 2 === 0
                      ? "md:col-span-7 order-2 md:order-1"
                      : "md:col-span-7 md:col-start-6 order-2 md:order-2"
                  }
                >
                  <div className="relative aspect-product overflow-hidden bg-cream-deep">
                    <img
                      alt={c.headline}
                      data-strk-img-id={`collection-${c.id}-img`}
                      data-strk-img={`[collection-${c.id}-name] [collection-${c.id}-headline]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="1200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div
                  className={
                    idx % 2 === 0
                      ? "md:col-span-5 order-1 md:order-2"
                      : "md:col-span-5 md:row-start-1 order-1"
                  }
                >
                  <p className="kicker">Collection</p>
                  <h2
                    id={`collection-${c.id}-name`}
                    className="mt-3 headline-lg text-espresso"
                  >
                    {c.name}
                  </h2>
                  <p
                    id={`collection-${c.id}-headline`}
                    className="mt-4 font-serif text-[20px] italic text-mink"
                  >
                    {c.headline}
                  </p>
                  <p className="mt-4 max-w-sm editorial-body">
                    {c.description}
                  </p>
                  <Link
                    to={`/collections/${c.id}`}
                    className="mt-8 inline-flex underline-link"
                  >
                    Shop the edit
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Specific collection
  const collection = COLLECTIONS.find((c) => c.id === slug)

  if (!collection) {
    return (
      <section className="section-pad bg-cream min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="kicker">Not found</p>
          <h1 className="mt-4 headline-md text-espresso">
            We haven't curated this one yet.
          </h1>
          <Link to="/collections" className="mt-8 inline-flex underline-link">
            See all collections
          </Link>
        </div>
      </section>
    )
  }

  const list = useMemo(() => {
    if (collection.category === "all")
      return products
    return products.filter((p) => p.category === collection.category)
  }, [collection])

  return (
    <section className="bg-cream">
      <div className="bg-cream-deep border-b border-taupe">
        <div className="mx-auto max-w-page px-6 md:px-12 py-14 md:py-20 text-center">
          <nav
            aria-label="Breadcrumb"
            className="font-sans text-[11px] tracking-[0.2em] uppercase text-mink flex items-center justify-center gap-2 mb-4"
          >
            <Link to="/" className="hover:text-espresso transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            <Link
              to="/collections"
              className="hover:text-espresso transition-colors"
            >
              Collections
            </Link>
            <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            <span className="text-espresso">{collection.name}</span>
          </nav>
          <p className="kicker">Collection</p>
          <h1 className="mt-3 headline-xl text-espresso">
            {collection.name}
          </h1>
          <p className="mt-4 max-w-md mx-auto font-serif italic text-[20px] text-mink">
            {collection.headline}
          </p>
          <p className="mt-4 max-w-md mx-auto editorial-body">
            {collection.description}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-page px-6 md:px-12 py-14 md:py-20">
        <p className="font-sans text-[11px] tracking-[0.24em] uppercase text-mink mb-8 text-center">
          {list.length} pieces
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
