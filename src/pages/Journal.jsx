import { Link } from 'react-router-dom'
import { useImageLoader } from '@/hooks/useImageLoader'

const posts = [
  {
    id: 'styling-layered-necklaces',
    title: 'The Art of Layering Necklaces',
    excerpt:
      'How to build a layered look that feels effortless, not overdone.',
  },
  {
    id: 'care-guide',
    title: 'How to Care for Gold-Plated Jewelry',
    excerpt: 'Simple habits to keep your pieces glowing for years.',
  },
  {
    id: 'gift-guide',
    title: 'A Minimal Gift Guide for Her',
    excerpt: 'Thoughtful jewelry gifts for every kind of woman.',
  },
]

export default function Journal() {
  const containerRef = useImageLoader()

  return (
    <div
      ref={containerRef}
      className="bg-velmora-cream min-h-screen pt-28 sm:pt-32 pb-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-velmora-taupe mb-3">
            Journal
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl">Stories & Style</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-velmora-card border border-velmora-hairline overflow-hidden"
            >
              <div className="aspect-[4/3] bg-stone-300 overflow-hidden">
                <img
                  data-strk-img-id={`journal-${post.id}`}
                  data-strk-img={`[${post.id}-title] ${post.excerpt} gold jewelry editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2
                  id={`${post.id}-title`}
                  className="font-serif text-2xl mb-3 group-hover:text-velmora-taupe transition-colors"
                >
                  <Link to="#">{post.title}</Link>
                </h2>
                <p className="text-sm text-velmora-taupe">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
