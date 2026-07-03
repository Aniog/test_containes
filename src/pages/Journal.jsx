import React from "react"

const POSTS = [
  {
    id: "journal-1",
    title: "Why we don't believe in seasonal drops",
    excerpt:
      "Jewelry that lasts shouldn't be designed to be replaced. A short note on the kind of wear we make for.",
    date: "March 2026",
    imgId: "journal-1-img-3a2b1c",
    query: "gold jewelry on table soft morning light editorial still life",
    readTime: "3 min read",
  },
  {
    id: "journal-2",
    title: "How to clean gold-plated jewelry at home",
    excerpt:
      "Three things you have in the kitchen right now, and the one product to avoid at all costs.",
    date: "February 2026",
    imgId: "journal-2-img-9c4d2e",
    query: "hands cleaning gold jewelry with cloth warm soft light",
    readTime: "4 min read",
  },
  {
    id: "journal-3",
    title: "Layering huggies: a 5-piece edit",
    excerpt:
      "From second-piercing to third — our founder on how to build a huggie stack that looks intentional, not crowded.",
    date: "January 2026",
    imgId: "journal-3-img-5e1f8a",
    query: "model with multiple gold huggie earrings in ear editorial",
    readTime: "5 min read",
  },
]

export default function Journal() {
  return (
    <>
      <header className="border-b border-sand-200 bg-ivory-50 pt-28 md:pt-32">
        <div className="container-velmora pb-12 md:pb-16">
          <p className="eyebrow">The Velmora Journal</p>
          <h1 className="editorial-h1 mt-4 text-espresso sm:text-[64px]">
            Notes from the bench
          </h1>
          <p className="mt-4 max-w-xl text-[15px] text-stone-300">
            Quiet writing about jewelry, care, and the kind of beauty that
            gets better with wear.
          </p>
        </div>
      </header>

      <section className="container-velmora py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[journal-${post.id}-title] ${post.title} ${post.excerpt} gold jewelry editorial`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="pt-5">
                <p className="font-sans text-[11px] uppercase tracking-widest2 text-stone-300">
                  {post.date} · {post.readTime}
                </p>
                <h2
                  id={`journal-${post.id}-title`}
                  className="mt-3 font-serif text-2xl leading-tight text-espresso sm:text-[26px]"
                >
                  {post.title}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-stone-300">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
