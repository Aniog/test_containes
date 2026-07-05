import { Link } from 'react-router-dom'

const posts = [
  {
    id: 'how-to-layer-necklaces',
    title: 'The Art of Layering Necklaces',
    excerpt: 'Three simple rules for building a stack that feels effortless and elegant.',
  },
  {
    id: 'gift-guide',
    title: 'A Modern Gift Guide for Her',
    excerpt: 'Thoughtful jewelry gifts for birthdays, anniversaries, and just because.',
  },
  {
    id: 'care-guide',
    title: 'How to Care for Demi-Fine Jewelry',
    excerpt: 'Keep your gold-plated pieces shining for years with these easy tips.',
  },
]

export default function Journal() {
  return (
    <div className="bg-velmora-cream pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-3">Journal</p>
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-ink">Stories & Style Notes</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-velmora-sand mb-5 overflow-hidden strk-placeholder">
                <div
                  data-strk-bg-id={`journal-${post.id}`}
                  data-strk-bg={`[journal-${post.id}-title]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="600"
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E")`,
                  }}
                />
              </div>
              <h2
                id={`journal-${post.id}-title`}
                className="font-serif text-2xl text-velmora-ink mb-2 group-hover:text-velmora-gold transition-colors"
              >
                {post.title}
              </h2>
              <p className="text-sm text-velmora-taupe leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
