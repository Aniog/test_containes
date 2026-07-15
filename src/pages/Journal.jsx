import React from 'react'

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Care for Your Gold Jewelry",
      excerpt: "Simple rituals to keep your pieces looking as beautiful as the day you received them.",
      date: "June 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "A guide to creating dimension and personal expression through thoughtful layering.",
      date: "May 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    },
    {
      id: 3,
      title: "Why Demi-Fine Jewelry Matters",
      excerpt: "Understanding the space between fine and fashion jewelry—and why it might be perfect for you.",
      date: "April 2026",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">From the Atelier</span>
        <h1 className="serif text-5xl mt-3">Journal</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article key={article.id} className="group">
            <div className="aspect-[16/10] bg-velmora-warm-gray overflow-hidden mb-6 rounded-sm">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="text-xs tracking-[0.1em] text-velmora-text-muted mb-2">{article.date}</div>
            <h3 className="serif text-2xl mb-3 group-hover:text-velmora-gold transition-colors">
              {article.title}
            </h3>
            <p className="text-velmora-text-muted text-sm leading-relaxed">
              {article.excerpt}
            </p>
            <span className="inline-block mt-4 text-xs tracking-[0.08em] uppercase border-b border-velmora-charcoal pb-px group-hover:text-velmora-gold group-hover:border-velmora-gold">
              Read More
            </span>
          </article>
        ))}
      </div>

      <div className="mt-16 pt-10 border-t border-velmora-border text-center text-sm text-velmora-text-muted">
        More stories coming soon. In the meantime, follow us on Instagram for daily inspiration.
      </div>
    </div>
  )
}

export default Journal
