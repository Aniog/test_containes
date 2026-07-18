import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const posts = [
  {
    id: "how-to-layer",
    title: "The Art of Layering Fine Chains",
    excerpt: "A simple guide to stacking necklaces and huggies without the tangle.",
    category: "Styling",
  },
  {
    id: "gold-care",
    title: "Caring for 18K Gold Plated Jewelry",
    excerpt: "Keep your pieces luminous for years with these simple habits.",
    category: "Care",
  },
  {
    id: "demi-fine",
    title: "What is Demi-Fine Jewelry?",
    excerpt: "Why demi-fine is the sweet spot between luxury and everyday wear.",
    category: "Guide",
  },
]

export default function Journal() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={ref} className="pt-16 md:pt-20 bg-ivory min-h-screen">
      <div className="border-b border-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">The Journal</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">Stories & Notes</h1>
          <p className="text-taupe mt-3 max-w-md mx-auto">
            Styling notes, care guides, and the craft behind Velmora.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  data-strk-bg-id={`journal-${post.id}-bg`}
                  data-strk-bg={`[journal-${post.id}-title] gold jewelry editorial`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width={800}
                />
              </div>
              <p className="text-[11px] uppercase tracking-widest2 text-gold mt-5">
                {post.category}
              </p>
              <h2
                id={`journal-${post.id}-title`}
                className="font-serif text-2xl text-ink mt-2 group-hover:text-gold transition-colors"
              >
                {post.title}
              </h2>
              <p className="text-taupe mt-2 text-sm leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-4 text-xs uppercase tracking-widest2 text-ink border-b border-ink pb-1 group-hover:text-gold group-hover:border-gold transition-colors">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>

      <div className="text-center pb-20">
        <Link
          to="/shop"
          className="inline-block border border-ink text-ink text-xs uppercase tracking-widest2 font-medium px-10 py-4 hover:bg-ink hover:text-ivory transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </div>
  )
}
