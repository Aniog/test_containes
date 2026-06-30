import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ChevronRight } from "lucide-react"

const POSTS = [
  {
    slug: "how-to-care-for-gold-plating",
    kicker: "Jewelry Care",
    title: "How to make 18K gold plating last a lifetime",
    excerpt:
      "A few small habits that keep demi-fine pieces bright — water, perfume, and what to avoid.",
    imgId: "journal-care-img",
    nameId: "journal-care-name",
    descId: "journal-care-desc",
  },
  {
    slug: "the-everyday-edit",
    kicker: "Style Notes",
    title: "Building the everyday edit",
    excerpt:
      "Three pieces, ten outfits. The small set of jewelry we wear on rotation — and how to choose yours.",
    imgId: "journal-everyday-img",
    nameId: "journal-everyday-name",
    descId: "journal-everyday-desc",
  },
  {
    slug: "gifts-with-meaning",
    kicker: "Gifting",
    title: "Gifts with meaning (without overthinking it)",
    excerpt:
      "Heirloom sets, handwritten notes, and the pieces we keep coming back to when a moment matters.",
    imgId: "journal-gifts-img",
    nameId: "journal-gifts-name",
    descId: "journal-gifts-desc",
  },
]

export default function Journal() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Journal — Velmora Fine Jewelry"
    return () => {
      document.title = "Velmora Fine Jewelry"
    }
  }, [])

  return (
    <section className="bg-cream">
      <div className="bg-cream-deep border-b border-taupe">
        <div className="mx-auto max-w-page px-6 md:px-12 py-14 md:py-20 text-center">
          <p className="kicker">The Journal</p>
          <h1 className="mt-3 headline-xl text-espresso">
            Notes from the studio
          </h1>
          <p className="mt-4 max-w-md mx-auto editorial-body">
            Jewelry care, styling notes, and quiet observations from our atelier.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-page px-6 md:px-12 py-14 md:py-20">
        {/* Featured */}
        <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center border-b border-taupe pb-16 mb-16">
          <div className="md:col-span-7">
            <div className="relative aspect-product overflow-hidden bg-cream-deep">
              <img
                alt={POSTS[0].title}
                data-strk-img-id={POSTS[0].imgId}
                data-strk-img={`[${POSTS[0].descId}] [${POSTS[0].nameId}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-5">
            <p className="kicker">{POSTS[0].kicker}</p>
            <h2
              id={POSTS[0].nameId}
              className="mt-3 headline-lg text-espresso"
            >
              {POSTS[0].title}
            </h2>
            <p id={POSTS[0].descId} className="mt-4 editorial-body">
              {POSTS[0].excerpt}
            </p>
            <Link
              to="/journal"
              className="mt-8 inline-flex underline-link"
            >
              Read the story
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </article>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16">
          {POSTS.slice(1).map((post) => (
            <article key={post.slug} className="group">
              <div className="relative aspect-product overflow-hidden bg-cream-deep">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.nameId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-105"
                />
              </div>
              <p className="mt-6 kicker">{post.kicker}</p>
              <h3
                id={post.nameId}
                className="mt-3 font-serif text-[26px] md:text-[30px] text-espresso leading-snug"
              >
                {post.title}
              </h3>
              <p id={post.descId} className="mt-3 font-serif text-[16px] text-mink">
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="mt-5 inline-flex items-center gap-1 font-sans text-[11px] tracking-[0.24em] uppercase text-espresso underline underline-offset-4 hover:text-mink transition-colors"
              >
                Read more
                <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
