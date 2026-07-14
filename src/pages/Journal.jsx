import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'

const posts = [
  {
    id: 'journal-1',
    title: 'How to Build a Curated Ear',
    excerpt: 'A simple guide to stacking huggies, cuffs, and drops for an effortless everyday look.',
    category: 'Styling',
    imgId: 'journal-img-1',
  },
  {
    id: 'journal-2',
    title: 'Caring for Gold-Plated Jewelry',
    excerpt: 'Keep your pieces glowing for years with these simple care rituals.',
    category: 'Care',
    imgId: 'journal-img-2',
  },
  {
    id: 'journal-3',
    title: 'The Quiet Luxury Edit',
    excerpt: 'Why understated gold is the defining jewelry mood of the season.',
    category: 'Edit',
    imgId: 'journal-img-3',
  },
]

export default function Journal() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-8 md:py-20">
        <p className="text-xs uppercase tracking-widest2 text-gold">The Journal</p>
        <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
          Stories & Styling
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone">
          Notes on craftsmanship, care, and the art of wearing gold.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[journal-${post.id}-excerpt] [journal-${post.id}-title] gold jewelry editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mt-5 text-xs uppercase tracking-widest2 text-gold">
                {post.category}
              </p>
              <h2
                id={`journal-${post.id}-title`}
                className="mt-2 font-serif text-2xl text-ink"
              >
                {post.title}
              </h2>
              <p
                id={`journal-${post.id}-excerpt`}
                className="mt-2 text-sm leading-relaxed text-stone"
              >
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="mt-3 inline-block border-b border-gold pb-0.5 text-xs uppercase tracking-widest2 text-gold"
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
