import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const posts = [
  {
    id: "journal-1",
    title: "How to Layer Gold Necklaces",
    excerpt:
      "A simple guide to stacking chains at the collarbone without the tangle.",
    category: "Styling",
    imgId: "journal-1-img",
    titleId: "journal-1-title",
    descId: "journal-1-desc",
  },
  {
    id: "journal-2",
    title: "Caring for 18K Gold Plated Jewelry",
    excerpt:
      "Five habits that keep your gold warm and glowing for years to come.",
    category: "Care",
    imgId: "journal-2-img",
    titleId: "journal-2-title",
    descId: "journal-2-desc",
  },
  {
    id: "journal-3",
    title: "The Quiet Luxury Edit",
    excerpt:
      "Why understated gold is the defining mood of the season — and beyond.",
    category: "Edit",
    imgId: "journal-3-img",
    titleId: "journal-3-title",
    descId: "journal-3-desc",
  },
]

export default function Journal() {
  const containerRef = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="pt-20">
      <section className="border-b border-espresso/10 bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center md:px-10 md:py-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-taupe">
            Notes from the Studio
          </p>
          <h1 className="mt-3 font-serif text-4xl text-espresso md:text-5xl">
            The Journal
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-taupe">
            Styling notes, care guides, and the stories behind our pieces.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-[0.25em] text-gold">
                {post.category}
              </p>
              <h2
                id={post.titleId}
                className="mt-2 font-serif text-2xl text-espresso"
              >
                {post.title}
              </h2>
              <p
                id={post.descId}
                className="mt-2 text-sm leading-relaxed text-taupe"
              >
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="mt-4 inline-block text-[11px] uppercase tracking-[0.2em] text-espresso underline-offset-4 transition-colors hover:text-gold hover:underline"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
