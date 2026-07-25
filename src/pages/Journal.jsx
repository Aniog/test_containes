import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/ui/section-heading'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const POSTS = [
  {
    id: 'journal-layering',
    title: 'The Art of Layering Necklaces',
    date: 'July 2026',
    tag: 'Styling',
    excerpt: 'Three lengths, two textures, one rule — how to build a necklace stack that looks collected, not cluttered.',
    query: 'woman wearing layered gold necklaces of different lengths, close-up editorial photography, warm neutral tones',
  },
  {
    id: 'journal-demi-fine',
    title: 'What “Demi-Fine” Actually Means',
    date: 'June 2026',
    tag: 'Materials',
    excerpt: 'Between fine and fashion jewelry lives a category worth understanding. Here is what to look for before you buy.',
    query: 'macro shot of gold plating detail on a ring, jewelry craftsmanship, warm studio light',
  },
  {
    id: 'journal-gift-guide',
    title: 'A Gift Guide for People Who Hate Gift Guides',
    date: 'May 2026',
    tag: 'Gifting',
    excerpt: 'Five pieces, five personalities, zero guesswork — including the set that has never once been returned.',
    query: 'gold jewelry gift box held in hands with soft warm light, elegant gifting editorial photography',
  },
]

export default function Journal() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-16 sm:pt-20">
      <header className="border-b border-line bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 sm:py-20 lg:px-12">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-luxe text-gold-deep">
            The Journal
          </p>
          <h1 className="font-serif text-4xl font-medium text-ink sm:text-5xl">
            Notes on Gold
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-mocha">
            Styling ideas, material guides, and stories from the atelier.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <SectionHeading eyebrow="Latest" title="From the Journal" />
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-6">
          {POSTS.map((post) => (
            <article key={post.id} className="group flex flex-col">
              <div className="overflow-hidden bg-sand">
                <div className="aspect-[4/3]">
                  <img
                    data-strk-img-id={`${post.id}-img`}
                    data-strk-img={post.query}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-luxe text-gold-deep">
                  {post.tag} · {post.date}
                </p>
                <h2 className="mt-2 font-serif text-2xl font-medium leading-snug text-ink transition-colors group-hover:text-gold-deep">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mocha">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-luxe text-ink">
                  Read
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-14 text-center text-sm text-mocha">
          Looking for something specific?{' '}
          <Link to="/shop" className="font-semibold text-gold-deep underline-offset-4 hover:underline">
            Browse the collection
          </Link>{' '}
          while we prepare the next story.
        </p>
      </div>
    </div>
  )
}
