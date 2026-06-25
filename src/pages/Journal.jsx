import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const POSTS = [
  { id: 'j1', title: 'How to Layer Gold Necklaces', excerpt: 'A simple guide to building a layered look that feels effortless.', cat: 'Styling' },
  { id: 'j2', title: 'Caring for Gold-Plated Jewelry', excerpt: 'Keep your pieces glowing with a few gentle habits.', cat: 'Care' },
  { id: 'j3', title: 'The Quiet Luxury Edit', excerpt: 'Why understated gold is the new statement.', cat: 'Edit' },
]

export default function Journal() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Notes</p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink">The Journal</h1>
        <p className="text-taupe mt-4 max-w-md mx-auto">
          Styling notes, care guides, and stories from the Velmora studio.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-5 md:px-8 pb-20 md:pb-28">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {POSTS.map((p) => (
            <article key={p.id} className="group">
              <div className="relative aspect-[4x3] overflow-hidden bg-sand/30 border border-sand/40">
                <img
                  alt={p.title}
                  data-strk-img-id={`journal-${p.id}`}
                  data-strk-img={`[journal-excerpt-${p.id}] [journal-title-${p.id}] gold jewelry`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold mt-5">{p.cat}</p>
              <h2
                id={`journal-title-${p.id}`}
                className="font-serif text-2xl text-ink mt-2 leading-tight group-hover:text-gold transition-colors"
              >
                {p.title}
              </h2>
              <p id={`journal-excerpt-${p.id}`} className="text-taupe text-sm mt-2 leading-relaxed">{p.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 mt-4 text-[11px] uppercase tracking-[0.2em] text-ink group-hover:text-gold transition-colors">
                Read <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
