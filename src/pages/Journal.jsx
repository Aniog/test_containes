import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    id: "how-to-layer",
    title: "How to layer a necklace (without trying too hard).",
    excerpt:
      "Three rules our studio lives by — and a few combinations we keep coming back to.",
    date: "July 12, 2026",
    read: "4 min read",
  },
  {
    id: "gold-plating",
    title: "What 18K gold plated actually means.",
    excerpt:
      "Demi-fine isn&rsquo;t a marketing word. It&rsquo;s a process, and the details matter.",
    date: "June 28, 2026",
    read: "6 min read",
  },
  {
    id: "earring-essentials",
    title: "A small, considered earring wardrobe.",
    excerpt:
      "The five pieces that carry you from Monday to a wedding — and back again.",
    date: "June 14, 2026",
    read: "5 min read",
  },
]

export default function Journal() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <header className="container-x py-16 md:py-24 text-center max-w-3xl mx-auto">
        <p className="label-2 text-mist mb-4">Journal</p>
        <h1 className="font-serif text-4xl md:text-6xl leading-tight">
          Notes from the studio.
        </h1>
      </header>

      <div className="container-x pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((p, i) => (
            <article key={p.id} className="group">
              <Link to={`/journal/${p.id}`} className="block">
                <div className="aspect-[4/5] bg-bone overflow-hidden mb-5">
                  <div
                    data-strk-bg-id={`journal-${p.id}`}
                    data-strk-bg={`[journal-${p.id}-title] editorial still life of layered necklaces warm light`}
                    data-strk-bg-ratio="4x5"
                    data-strk-bg-width="800"
                    className="w-full h-full"
                  />
                </div>
                <p className="label-2 text-mist mb-3">
                  {p.date} · {p.read}
                </p>
                <h2
                  id={`journal-${p.id}-title`}
                  className="font-serif text-2xl md:text-3xl leading-snug mb-3 group-hover:text-champagne-deep transition-colors"
                >
                  {p.title}
                </h2>
                <p
                  className="text-ink/70 text-sm leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: p.excerpt }}
                />
                <span className="inline-flex items-center gap-2 label text-ink">
                  Read story
                  <ArrowRight className="w-4 h-4" strokeWidth={1.25} />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
