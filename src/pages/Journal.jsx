import { Link } from 'react-router-dom'
import { useStrkImages, PLACEHOLDER } from '@/hooks/useStrkImages'

const posts = [
  {
    id: 'j1',
    title: 'How to Layer Gold Necklaces',
    excerpt: 'A simple guide to stacking chains at the collarbone without the tangle.',
    titleId: 'journal-1-title',
    descId: 'journal-1-desc',
    imgId: 'journal-1-img',
  },
  {
    id: 'j2',
    title: 'Caring for Gold-Plated Jewelry',
    excerpt: 'Five habits that keep your pieces shining for years, not months.',
    titleId: 'journal-2-title',
    descId: 'journal-2-desc',
    imgId: 'journal-2-img',
  },
  {
    id: 'j3',
    title: 'The Huggie: Our Most-Worn Shape',
    excerpt: 'Why the chunky dome became the everyday earring we cannot stop wearing.',
    titleId: 'journal-3-title',
    descId: 'journal-3-desc',
    imgId: 'journal-3-img',
  },
]

export default function Journal() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <div className="border-b border-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Notes</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">The Journal</h1>
          <p className="text-stone text-base mt-4 max-w-lg mx-auto">
            Styling notes, care guides, and stories from the studio.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream mb-5">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src={PLACEHOLDER}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2
                id={post.titleId}
                className="font-serif text-2xl text-ink leading-tight"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="text-stone text-sm mt-3 leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-deep transition-colors"
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
