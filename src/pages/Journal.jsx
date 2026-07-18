import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const POSTS = [
  {
    id: "journal-1",
    title: "How to Style Gold Huggies for Everyday",
    excerpt: "Three simple ways to wear our most-loved huggies from desk to dinner.",
    category: "Styling",
    imgId: "journal-1-img-4g6h8i",
    titleId: "journal-1-title",
    descId: "journal-1-desc",
  },
  {
    id: "journal-2",
    title: "Caring for 18K Gold Plated Jewelry",
    excerpt: "A simple routine to keep your pieces glowing for years to come.",
    category: "Care",
    imgId: "journal-2-img-0j2k4l",
    titleId: "journal-2-title",
    descId: "journal-2-desc",
  },
  {
    id: "journal-3",
    title: "The Art of Gifting Fine Jewelry",
    excerpt: "Why a thoughtfully chosen piece is the gift that lasts a lifetime.",
    category: "Gifting",
    imgId: "journal-3-img-6m8n0p",
    titleId: "journal-3-title",
    descId: "journal-3-desc",
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
    <div ref={ref} className="bg-cream pt-16 md:pt-20">
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-champagne-deep">Notes</p>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl text-ink">The Journal</h1>
          <p className="mt-4 max-w-lg mx-auto text-sm text-stone">
            Styling notes, care guides and stories from the Velmora studio.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src={PLACEHOLDER}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-widest2 text-champagne-deep">
                {post.category}
              </p>
              <h2
                id={post.titleId}
                className="mt-2 font-serif text-2xl text-ink leading-snug"
              >
                {post.title}
              </h2>
              <p
                id={post.descId}
                className="mt-2 text-sm text-stone leading-relaxed"
              >
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink">
                Read More <ArrowRight size={13} strokeWidth={1.5} />
              </span>
            </article>
          ))}
        </div>
      </div>

      <div className="border-t border-line py-16 text-center">
        <Link
          to="/shop"
          className="inline-block border border-ink px-10 py-4 text-[11px] uppercase tracking-widest2 text-ink hover:bg-ink hover:text-cream transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </div>
  )
}
