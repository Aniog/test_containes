import { Link } from 'react-router-dom'

const journalPosts = [
  {
    id: 1,
    title: 'The Art of Layering Necklaces',
    excerpt: 'How to create effortless layered looks with Velmora pieces that complement each other.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
    date: 'June 15, 2026',
    category: 'Style Guide',
  },
  {
    id: 2,
    title: 'Caring for Your Gold Plated Jewelry',
    excerpt: 'Simple tips to keep your Velmora pieces looking as beautiful as the day you got them.',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=400&fit=crop',
    date: 'June 8, 2026',
    category: 'Care Guide',
  },
  {
    id: 3,
    title: 'The Perfect Gift: A Jewelry Edit',
    excerpt: 'Our curated selection of pieces that make unforgettable gifts for every occasion.',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=400&fit=crop',
    date: 'May 28, 2026',
    category: 'Gift Guide',
  },
]

export default function JournalPage() {
  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">The Velmora Journal</p>
          <h1 className="font-serif text-3xl md:text-4xl font-light tracking-wide">Stories & Style</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {journalPosts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[3/2] overflow-hidden mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-xs tracking-widest uppercase text-velmora-gold mb-2">{post.category}</p>
              <h2 className="font-serif text-xl tracking-wide group-hover:text-velmora-gold transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-velmora-gray mt-2 leading-relaxed">{post.excerpt}</p>
              <p className="text-xs text-velmora-stone mt-3">{post.date}</p>
              <Link
                to={`/journal/${post.id}`}
                className="inline-block mt-4 text-xs tracking-widest uppercase text-velmora-charcoal border-b border-velmora-charcoal/30 pb-0.5 hover:border-velmora-gold hover:text-velmora-gold transition-colors"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
