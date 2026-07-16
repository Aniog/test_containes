export default function Journal() {
  const posts = [
    {
      id: 1,
      title: 'The Art of Layering Necklaces',
      excerpt: 'Master the effortless layered look with our guide to combining different chain lengths and pendant styles.',
      category: 'Styling',
      date: 'July 10, 2026',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Caring for Your Gold-Plated Jewelry',
      excerpt: 'Simple tips to keep your demi-fine pieces looking radiant for years to come.',
      category: 'Care Guide',
      date: 'June 28, 2026',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Summer Jewelry Trends We Love',
      excerpt: 'From chunky huggies to delicate chains — the pieces defining this season\'s style.',
      category: 'Trends',
      date: 'June 15, 2026',
      image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=600&h=400&fit=crop',
    },
  ]

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-3">
            The Velmora Journal
          </p>
          <h1 className="font-serif text-heading-lg text-warm-black">
            Stories & Style
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[3/2] bg-cream overflow-hidden mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="text-[10px] text-gold font-medium tracking-[0.15em] uppercase mb-2">
                {post.category}
              </p>
              <h2 className="font-serif text-xl text-warm-black group-hover:text-gold-dark transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-text mt-2 leading-relaxed">
                {post.excerpt}
              </p>
              <p className="text-xs text-warm-gray mt-3">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
