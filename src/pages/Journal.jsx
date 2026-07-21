import { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { strkImgSrc } from "@/lib/images"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const POSTS = [
  {
    id: "journal-1",
    title: "How to Layer Gold Necklaces",
    excerpt: "A simple guide to mixing chain lengths and pendants for an effortless stack.",
    cat: "Styling",
    titleId: "journal-1-title",
    descId: "journal-1-desc",
    imgId: "journal-1-img",
  },
  {
    id: "journal-2",
    title: "Caring for Gold Plated Jewelry",
    excerpt: "Keep your pieces glowing — the everyday rituals that extend their life.",
    cat: "Care",
    titleId: "journal-2-title",
    descId: "journal-2-desc",
    imgId: "journal-2-img",
  },
  {
    id: "journal-3",
    title: "The Quiet Luxury Edit",
    excerpt: "Why understated gold is the defining look of the season.",
    cat: "Edit",
    titleId: "journal-3-title",
    descId: "journal-3-desc",
    imgId: "journal-3-img",
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
    <div ref={ref} className="pt-16 md:pt-20">
      <div className="border-b border-sand">
        <div className="max-w-8xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Notes</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink font-light">The Journal</h1>
          <p className="mt-4 text-stone max-w-xl mx-auto">
            Styling notes, care rituals, and the stories behind our pieces.
          </p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-cream mb-5">
                <img
                  alt={post.title}
                  src={strkImgSrc(post.imgId, 600)}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[11px] uppercase tracking-widest3 text-gold mb-2">{post.cat}</p>
              <h2
                id={post.titleId}
                className="font-serif text-2xl md:text-3xl text-ink leading-tight group-hover:text-gold transition-colors"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="mt-3 text-stone leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="inline-block mt-4 text-[11px] uppercase tracking-widest3 text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
