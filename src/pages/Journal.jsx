import React from 'react'
import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/useStrkImages'

const POSTS = [
  {
    id: 'post-1',
    titleId: 'journal-post-1-title',
    descId: 'journal-post-1-desc',
    imgId: 'journal-post-1-img',
    category: 'Styling',
    title: 'How to Layer Gold Necklaces',
    excerpt:
      'A simple guide to mixing lengths, weights, and pendants for an effortless layered look.',
    date: 'Jun 12, 2026',
  },
  {
    id: 'post-2',
    titleId: 'journal-post-2-title',
    descId: 'journal-post-2-desc',
    imgId: 'journal-post-2-img',
    category: 'Care',
    title: 'Caring for Gold Plated Jewelry',
    excerpt:
      'Keep your pieces shining for years with these simple, everyday care habits.',
    date: 'May 28, 2026',
  },
  {
    id: 'post-3',
    titleId: 'journal-post-3-title',
    descId: 'journal-post-3-desc',
    imgId: 'journal-post-3-img',
    category: 'Gifting',
    title: 'The Art of Gifting Fine Jewelry',
    excerpt:
      'Thoughtful guidance on choosing a piece that says exactly what you mean.',
    date: 'May 10, 2026',
  },
]

export default function Journal() {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="pt-28 md:pt-32">
      <div className="container-velmora text-center pb-12 md:pb-16">
        <p className="eyebrow mb-3">Notes & Stories</p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink">The Journal</h1>
        <p className="mt-4 text-stone max-w-xl mx-auto">
          Styling notes, care guides, and stories from the Velmora studio.
        </p>
      </div>

      <div className="container-velmora pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] bg-sand overflow-hidden mb-5">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="eyebrow mb-2">{post.category}</p>
              <h2
                id={post.titleId}
                className="font-serif text-2xl text-ink group-hover:text-gold transition-colors"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="mt-2 text-sm text-stone leading-relaxed">
                {post.excerpt}
              </p>
              <p className="mt-3 text-xs text-stone">{post.date}</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/shop" className="btn-outline">
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
