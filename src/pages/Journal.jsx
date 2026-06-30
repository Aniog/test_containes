import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useImageLoader } from '@/lib/useImageLoader'
import { PLACEHOLDER_SVG } from '@/components/ui/ProductImage'

const POSTS = [
  {
    id: 'journal-1',
    title: 'How to Build a Curated Ear',
    excerpt: 'A simple guide to stacking huggies, cuffs, and studs for an effortless everyday look.',
    category: 'Styling',
    imgId: 'journal-1-img',
    titleId: 'journal-1-title',
    descId: 'journal-1-desc',
  },
  {
    id: 'journal-2',
    title: 'Caring for Gold Plated Jewelry',
    excerpt: 'Five habits to keep your pieces shining for years — from storage to everyday wear.',
    category: 'Care',
    imgId: 'journal-2-img',
    titleId: 'journal-2-title',
    descId: 'journal-2-desc',
  },
  {
    id: 'journal-3',
    title: 'The Art of Gifting Fine Jewelry',
    excerpt: 'How to choose a piece they will treasure — for milestones, anniversaries, and in-between moments.',
    category: 'Gifting',
    imgId: 'journal-3-img',
    titleId: 'journal-3-title',
    descId: 'journal-3-desc',
  },
]

export default function Journal() {
  const containerRef = useImageLoader([])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-champagne mb-3">The Journal</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">Notes on Gold & Living</h1>
          <p className="mt-4 text-stone max-w-md mx-auto">
            Styling notes, care guides, and stories from the studio.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/3] bg-sand mb-5">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src={PLACEHOLDER_SVG}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-champagne mb-2">
                {post.category}
              </p>
              <h2
                id={post.titleId}
                className="font-serif text-2xl md:text-3xl text-ink leading-tight group-hover:text-champagne transition-colors"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="mt-3 text-stone leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 mt-4 text-[11px] tracking-[0.18em] uppercase text-ink border-b border-ink pb-0.5 group-hover:text-champagne group-hover:border-champagne transition-colors">
                Read More <ArrowRight size={13} strokeWidth={1.5} />
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
