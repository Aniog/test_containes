export default function JournalPage() {
  const posts = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'The art of the layered look — from delicate chains to statement pendants.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      date: 'July 15, 2026',
      category: 'Styling',
    },
    {
      id: 2,
      title: 'The Care Guide: Making Gold Last',
      excerpt: 'Simple habits that keep your 18K gold plated pieces looking brand new for years.',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
      date: 'July 8, 2026',
      category: 'Care',
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry She\'ll Actually Wear',
      excerpt: 'Thoughtful picks for every type of woman — from minimalists to maximalists.',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
      date: 'June 28, 2026',
      category: 'Gifts',
    },
  ]

  return (
    <main className="pt-20 md:pt-24">
      <section className="bg-velmora-100/50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-600 text-xs tracking-widest uppercase mb-3 font-sans">The Journal</p>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal-900 tracking-wide">
            Stories & Style
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-12">
          {posts.map((post, i) => (
            <article
              key={post.id}
              className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`aspect-[4/3] bg-velmora-100 overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="lazy"
                />
              </div>
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <span className="text-gold-600 text-xs tracking-widest uppercase font-sans">{post.category}</span>
                <h2 className="font-serif text-2xl md:text-3xl text-charcoal-900 mt-2 mb-3 tracking-wide">
                  {post.title}
                </h2>
                <p className="text-charcoal-500 text-sm mb-4">{post.date}</p>
                <p className="text-charcoal-600 leading-relaxed mb-4">{post.excerpt}</p>
                <button className="text-sm text-charcoal-900 tracking-widest uppercase font-sans font-medium hover:text-gold-600 transition-colors border-b border-charcoal-900 pb-1">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
