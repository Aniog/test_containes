import React from "react"
import { Link } from "react-router-dom"

const POSTS = [
  { id: "p1", title: "How to Layer Gold Necklaces", excerpt: "Three simple rules for building a layered look that feels effortless.", cat: "Styling", bgId: "journal-bg-p1-velmora", q: "How to Layer Gold Necklaces gold jewelry editorial" },
  { id: "p2", title: "Caring for Gold-Plated Jewelry", excerpt: "Keep your pieces luminous with our everyday care ritual.", cat: "Care", bgId: "journal-bg-p2-velmora", q: "Caring for Gold-Plated Jewelry gold jewelry editorial" },
  { id: "p3", title: "The Story Behind the Heirloom Set", excerpt: "Why we designed a gift set meant to be passed down.", cat: "Behind the Design", bgId: "journal-bg-p3-velmora", q: "The Story Behind the Heirloom Set gold jewelry editorial" },
]

export default function Journal() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-hairline">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-3">Notes</p>
          <h1 className="font-serif text-4xl md:text-6xl text-espresso">The Journal</h1>
        </div>
      </div>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-3 gap-8 md:gap-10">
          {POSTS.map((p) => (
            <article key={p.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] bg-cream overflow-hidden mb-5">
                <div
                  className="absolute inset-0"
                  data-strk-bg-id={p.bgId}
                  data-strk-bg={p.q}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="700"
                />
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-2">{p.cat}</p>
              <h2 className="font-serif text-2xl text-espresso leading-tight group-hover:opacity-70 transition-opacity">
                {p.title}
              </h2>
              <p className="mt-3 text-espresso-soft text-sm leading-relaxed">{p.excerpt}</p>
              <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.18em] text-espresso border-b border-espresso pb-1">
                Read More
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
