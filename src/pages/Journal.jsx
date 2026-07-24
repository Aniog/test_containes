import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const POSTS = [
  {
    id: "p1",
    title: "How to Style Gold Huggies for Every Day",
    excerpt:
      "The quiet art of stacking huggies — from a single dome to a curated ear.",
    imgId: "journal-1-01",
    titleId: "journal-1-title",
    descId: "journal-1-desc",
    category: "Styling",
  },
  {
    id: "p2",
    title: "Caring for Gold Plated Jewelry",
    excerpt:
      "Simple rituals to keep your pieces warm and luminous for years.",
    imgId: "journal-2-01",
    titleId: "journal-2-title",
    descId: "journal-2-desc",
    category: "Care",
  },
  {
    id: "p3",
    title: "The Story Behind the Vivid Aura Cuff",
    excerpt:
      "From sketch to studio — how our best-selling ear cuff came to be.",
    imgId: "journal-3-01",
    titleId: "journal-3-title",
    descId: "journal-3-desc",
    category: "Behind the Design",
  },
]

export default function Journal() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={ref} className="pt-16 md:pt-20 bg-ivory min-h-screen">
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
            Notes & Stories
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">The Journal</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial warm`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-widest2 text-gold">
                {post.category}
              </p>
              <h2
                id={post.titleId}
                className="mt-2 font-serif text-2xl text-ink leading-snug group-hover:text-gold-deep transition-colors"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="mt-2 text-sm text-ink-soft leading-relaxed">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-block text-[11px] uppercase tracking-widest2 text-ink-soft border-b border-ink-soft pb-0.5 group-hover:text-gold group-hover:border-gold transition-colors">
                Read More
              </span>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/shop"
            className="inline-block text-[11px] uppercase tracking-widest2 text-ink border border-ink px-8 py-3.5 hover:bg-ink hover:text-ivory transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
