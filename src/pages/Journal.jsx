import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const posts = [
  {
    id: "j1",
    title: "How to Layer Necklaces Without Tangles",
    excerpt: "The art of stacking chains at different lengths for an effortless look.",
    category: "Styling",
    imgId: "journal-1-9a2b",
    titleId: "journal-1-title",
    descId: "journal-1-desc",
  },
  {
    id: "j2",
    title: "Caring for Gold Plated Jewelry",
    excerpt: "Simple rituals to keep your pieces glowing for years.",
    category: "Care",
    imgId: "journal-2-9a2c",
    titleId: "journal-2-title",
    descId: "journal-2-desc",
  },
  {
    id: "j3",
    title: "The Quiet Luxury Edit",
    excerpt: "Why understated gold is the new statement.",
    category: "Trends",
    imgId: "journal-3-9a2d",
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
    <div ref={containerRef} className="pt-20">
      <div className="border-b border-sand bg-cream">
        <div className="mx-auto max-w-8xl px-5 py-14 text-center md:px-8 md:py-20">
          <p className="text-xs uppercase tracking-widest3 text-gold">Notes & Stories</p>
          <h1 className="mt-3 font-serif text-5xl text-ink md:text-6xl">The Journal</h1>
          <p className="mx-auto mt-4 max-w-md text-base text-stone">
            Styling notes, care rituals, and stories from the Velmora atelier.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-8xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-xs uppercase tracking-widest2 text-gold">{post.category}</p>
              <h2
                id={post.titleId}
                className="mt-2 font-serif text-2xl text-ink transition-colors group-hover:text-gold"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="mt-2 text-sm text-stone">
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="mt-4 inline-block text-xs uppercase tracking-widest2 text-ink underline-offset-4 hover:text-gold hover:underline"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
