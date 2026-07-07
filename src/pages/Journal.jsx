import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useStrkImages } from '@/lib/strk-images'


const POSTS = [
  {
    id: 'journal-1',
    title: 'How to Layer Necklaces Without the Tangle',
    excerpt: 'A simple rule of three — and the lengths that make it work.',
    imgId: 'journal-layer-1a2b',
  },
  {
    id: 'journal-2',
    title: 'Gold Plating, Explained',
    excerpt: 'What 18K gold plating really means, and how to keep it glowing.',
    imgId: 'journal-gold-3c4d',
  },
  {
    id: 'journal-3',
    title: 'The One-Piece Edit: Building a Jewelry Capsule',
    excerpt: 'Five pieces that do the work of fifty. Start here.',
    imgId: 'journal-capsule-5e6f',
  },
]

export default function Journal() {
  const ref = useStrkImages([])
  return (
    <div ref={ref} className="pt-24 md:pt-28">
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-10 md:py-14 text-center border-b border-ink/10">
        <p className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-3">Notes</p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink">The Journal</h1>
        <p className="mt-4 text-stone max-w-xl mx-auto">
          Styling notes, care guides, and the stories behind our pieces.
        </p>
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        {POSTS.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden bg-sand mb-5">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={post.title}
                data-strk-img-id={post.imgId}
                data-strk-img={`[post-${post.id}-title] [post-${post.id}-excerpt]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
            </div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-champagne mb-2">Styling</p>
            <h2
              id={`post-${post.id}-title`}
              className="font-serif text-2xl text-ink leading-snug group-hover:text-champagne transition-colors"
            >
              {post.title}
            </h2>
            <p id={`post-${post.id}-excerpt`} className="mt-2 text-stone leading-relaxed">
              {post.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 mt-4 text-[11px] uppercase tracking-[0.2em] font-medium text-ink border-b border-ink/30 pb-1 group-hover:border-champagne group-hover:text-champagne transition-colors">
              Read More <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </article>
        ))}
      </div>
    </div>
  )
}
