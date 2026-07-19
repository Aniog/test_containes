import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const posts = [
  {
    id: "how-to-style-huggies",
    title: "How to Style Huggies for Every Ear",
    excerpt: "A guide to stacking, spacing, and curating the perfect ear constellation.",
    imgId: "journal-1-a1b2",
    titleId: "journal-1-title",
    descId: "journal-1-desc",
  },
  {
    id: "caring-for-gold-plated-jewelry",
    title: "Caring for Gold Plated Jewelry",
    excerpt: "Simple rituals to keep your pieces glowing for years to come.",
    imgId: "journal-2-c3d4",
    titleId: "journal-2-title",
    descId: "journal-2-desc",
  },
  {
    id: "the-quiet-luxury-edit",
    title: "The Quiet Luxury Edit",
    excerpt: "Why understated gold is the foundation of a timeless jewelry wardrobe.",
    imgId: "journal-3-e5f6",
    titleId: "journal-3-title",
    descId: "journal-3-desc",
  },
]


export default function Journal() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <section className="border-b border-ink/10 bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center md:px-8 md:py-20">
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Notes</span>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-6xl">The Journal</h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone">
            Styling notes, care rituals, and stories from the Velmora studio.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[4/3] overflow-hidden bg-sand">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2
                id={post.titleId}
                className="mt-5 font-serif text-2xl leading-snug text-ink"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="mt-2 text-sm leading-relaxed text-stone">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.22em] text-gold">
                Read More →
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink py-16 text-center md:py-20">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="font-serif text-3xl text-cream md:text-4xl">
            Find your next treasure
          </h2>
          <Link
            to="/shop"
            className="mt-6 inline-block bg-gold px-10 py-4 text-[11px] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-gold-deep"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
