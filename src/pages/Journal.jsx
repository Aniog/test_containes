import React from "react"
import { Link } from "react-router-dom"
import JewelryArt from "@/components/ui/JewelryArt"

const articles = [
  {
    title: "How to layer necklaces without overthinking it",
    excerpt: "Three formulas that always work — and a few to break when you're feeling bold.",
    art: "floralNecklace",
    palette: "midnight",
    date: "Read · 5 min",
  },
  {
    title: "The case for demi-fine",
    excerpt: "Why we chose 18K gold over solid gold — and what it means for the way you wear your jewelry.",
    art: "earCuff",
    palette: "aubergine",
    date: "Read · 4 min",
  },
  {
    title: "Gifting, slowly",
    excerpt: "A short guide to choosing something that lasts longer than the moment.",
    art: "giftSet",
    palette: "oxblood",
    date: "Read · 6 min",
  },
]

const Journal = () => {
  return (
    <main className="bg-ivory">
      <section className="container-wrap pt-32 lg:pt-40 pb-16 lg:pb-20">
        <span className="eyebrow">The Journal</span>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-[72px] leading-[1.05] tracking-tight text-ink max-w-3xl">
          Notes on jewelry, gifting, and slow style.
        </h1>
        <p className="mt-6 max-w-2xl text-[15px] sm:text-base text-muted leading-relaxed">
          A small, slow-growing archive. We write when we have something to say.
        </p>
      </section>

      <section className="container-wrap pb-24 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((a, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-ink">
                <JewelryArt
                  art={a.art}
                  palette={a.palette}
                  ratio="4/5"
                  className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-5">
                <p className="eyebrow">{a.date}</p>
                <h3 className="mt-2 font-serif text-2xl text-ink leading-snug group-hover:text-gold-deep transition-colors duration-300">
                  {a.title}
                </h3>
                <p className="mt-2 text-[14px] text-muted leading-relaxed">{a.excerpt}</p>
                <Link to="/journal" className="link-arrow mt-4 inline-flex">
                  Read
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Journal
