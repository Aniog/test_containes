import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { PLACEHOLDER } from "@/context/CartContext"
import { resolveImgUrl } from "@/lib/utils"

const POSTS = [
  {
    id: "p1",
    imgId: "journal-p1-img-4a2b",
    titleId: "journal-p1-title-4a2b",
    category: "Styling",
    title: "How to Build an Everyday Ear Stack",
    excerpt: "A simple guide to layering huggies, cuffs and studs for a look that's unmistakably yours.",
    query: "gold ear stack layered earrings styling editorial",
  },
  {
    id: "p2",
    imgId: "journal-p2-img-6c3d",
    titleId: "journal-p2-title-6c3d",
    category: "Care",
    title: "Caring for Gold Plated Jewelry",
    excerpt: "Five simple habits to keep your pieces glowing for years to come.",
    query: "gold jewelry care cleaning cloth warm",
  },
  {
    id: "p3",
    imgId: "journal-p3-img-8e5f",
    titleId: "journal-p3-title-8e5f",
    category: "Gifting",
    title: "The Considered Gift: Choosing Jewelry She'll Treasure",
    excerpt: "How to read her style and pick a piece that feels personal, not generic.",
    query: "gold jewelry gift box elegant warm editorial",
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
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Notes</p>
          <h1 className="font-serif text-4xl md:text-6xl text-espresso">The Journal</h1>
          <p className="mt-4 text-espresso-700 max-w-lg mx-auto">
            Styling notes, care guides, and stories from the studio.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <Link to="/journal" className="block aspect-[4x5] overflow-hidden bg-cream-100">
                <img
                  alt={post.title}
                  src={resolveImgUrl(post.imgId) || PLACEHOLDER}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <p className="mt-5 text-[11px] uppercase tracking-widest2 text-gold">{post.category}</p>
              <h2
                id={post.titleId}
                className="mt-2 font-serif text-2xl text-espresso leading-snug group-hover:text-gold transition-colors"
              >
                <Link to="/journal">{post.title}</Link>
              </h2>
              <p className="mt-3 text-sm text-espresso-700 leading-relaxed">{post.excerpt}</p>
              <Link
                to="/journal"
                className="mt-4 inline-block text-[11px] uppercase tracking-widest2 text-espresso-700 hover:text-gold transition-colors underline-offset-4 hover:underline"
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
