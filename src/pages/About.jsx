import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-28 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Story</p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink leading-tight">
          Jewelry made to live in
        </h1>
        <p className="mt-6 text-base text-muted leading-relaxed">
          Velmora began with a simple frustration: fine jewelry felt out of
          reach, and costume jewelry never lasted. We set out to make demi-fine
          pieces — 18K gold plating over sterling silver, finished by hand —
          that you could put on Monday and forget to take off.
        </p>
        <p className="mt-4 text-base text-muted leading-relaxed">
          Every piece is designed in-house, ethically made in small batches, and
          tested for real life. This is a fuller brand story page — connect real
          content here later.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-flex items-center justify-center bg-gold px-10 py-5 text-xs uppercase tracking-[0.25em] text-ivory hover:bg-gold-deep transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </div>
  )
}
