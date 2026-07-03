import React from 'react'
import { Link } from 'react-router-dom'

const POSTS = [
  {
    id: 'p1',
    title: 'How to Style Gold Huggies',
    excerpt: 'Three ways to wear the everyday huggie — solo, stacked, and mixed metal.',
    category: 'Styling',
    imgId: 'journal-1-velmora-4d2',
    titleId: 'journal-title-1',
    descId: 'journal-desc-1',
  },
  {
    id: 'p2',
    title: 'Caring for Gold Plated Jewelry',
    excerpt: 'A simple ritual to keep your pieces glowing for years.',
    category: 'Care',
    imgId: 'journal-2-velmora-5e3',
    titleId: 'journal-title-2',
    descId: 'journal-desc-2',
  },
  {
    id: 'p3',
    title: 'The Quiet Luxury Edit',
    excerpt: 'Why understated gold is the defining look of the season.',
    category: 'Edit',
    imgId: 'journal-3-velmora-6f4',
    titleId: 'journal-title-3',
    descId: 'journal-desc-3',
  },
]

export default function Journal() {
  return (
    <div className="pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
          The Journal
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-ink mb-3">
          Notes on Gold
        </h1>
        <p className="text-stone max-w-md mx-auto">
          Styling notes, care rituals, and the stories behind our pieces.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[4/3] bg-sand overflow-hidden mb-5">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-2">
                {post.category}
              </p>
              <h2
                id={post.titleId}
                className="font-serif text-2xl text-ink mb-2 group-hover:text-gold transition-colors"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="text-stone leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="text-[11px] uppercase tracking-[0.25em] text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors"
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
