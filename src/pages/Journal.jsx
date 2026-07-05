import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import StockImage from "@/components/ui/StockImage"

const ENTRIES = [
  {
    id: "stack-guide",
    title: "How to build an everyday ear stack",
    excerpt: "A simple formula for combining huggies, cuffs and studs without overdoing it.",
    date: "June 2026",
    imgId: "img-journal-1",
    titleId: "journal-title-1",
    excerptId: "journal-excerpt-1",
  },
  {
    id: "gold-care",
    title: "Three things to never do to your gold-plated jewelry",
    excerpt: "From the atelier: the small habits that keep your pieces looking new, and the ones that age them fast.",
    date: "May 2026",
    imgId: "img-journal-2",
    titleId: "journal-title-2",
    excerptId: "journal-excerpt-2",
  },
  {
    id: "gift-edit",
    title: "The quiet gift edit",
    excerpt: "Our most-loved pieces for the people who are notoriously hard to buy for.",
    date: "April 2026",
    imgId: "img-journal-3",
    titleId: "journal-title-3",
    excerptId: "journal-excerpt-3",
  },
]

export default function Journal() {
  const rootRef = useRef(null)

  useEffect(() => {
    if (!rootRef.current) return undefined
    const id = window.requestAnimationFrame(() => {
      try {
        ImageHelper.loadImages(strkImgConfig, rootRef.current)
      } catch (err) {
        console.warn(err)
      }
    })
    return () => window.cancelAnimationFrame(id)
  }, [])

  return (
    <div ref={rootRef} className="bg-bone">
      <section className="container-editorial pt-12 md:pt-16 pb-10 md:pb-14">
        <p className="eyebrow-gold mb-3">Journal</p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink font-light tracking-tight max-w-2xl">
          Notes from the atelier.
        </h1>
        <p className="mt-3 text-muted max-w-prose2 font-sans text-sm sm:text-base">
          On jewelry, gifting, and the small everyday rituals.
        </p>
      </section>

      <section className="container-editorial pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {ENTRIES.map((entry) => (
            <article key={entry.id} className="group">
              <Link to="/journal" className="block">
                <StockImage
                  imgId={entry.imgId}
                  query={`[${entry.excerptId}] [${entry.titleId}] editorial still life warm`}
                  ratio="4x3"
                  width={900}
                  alt={entry.title}
                  className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
                  imgClassName="w-full h-full object-cover"
                />
                <div className="pt-5">
                  <p className="text-[11px] uppercase tracking-eyebrow text-muted-2 font-sans mb-2">
                    {entry.date}
                  </p>
                  <h2
                    id={entry.titleId}
                    className="font-serif text-2xl sm:text-3xl text-ink font-light leading-tight group-hover:text-ink-soft transition-colors"
                  >
                    {entry.title}
                  </h2>
                  <p id={entry.excerptId} className="mt-2 text-sm text-muted font-sans leading-relaxed">
                    {entry.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-eyebrow text-ink font-sans border-b border-ink pb-0.5">
                    Read More
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
