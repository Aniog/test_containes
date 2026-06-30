import { Link } from 'react-router-dom';

export default function Journal() {
  const articles = [
    {
      id: 1,
      title: 'How to Care for Your Gold Plated Jewelry',
      excerpt: 'Learn the best practices for maintaining the shine and beauty of your demi-fine pieces.',
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=400&fit=crop',
      date: 'January 15, 2024'
    },
    {
      id: 2,
      title: 'The Art of Layering Necklaces',
      excerpt: 'Discover how to create the perfect layered look with our curated necklace collection.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
      date: 'December 28, 2023'
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry for Every Occasion',
      excerpt: 'Find the perfect piece for birthdays, anniversaries, and celebrations.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop',
      date: 'December 10, 2023'
    }
  ];

  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1920&h=600&fit=crop"
            alt="Journal"
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(26,26,26,0.4) 0%, rgba(26,26,26,0.6) 100%)' }}
          />
        </div>
        <div className="relative z-10 text-center text-cream px-6">
          <h1 
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Journal
          </h1>
          <p className="text-cream/80">
            Stories, tips, and inspiration from the world of jewelry
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="group">
                <Link to={`/journal/${article.id}`} className="block">
                  <div className="aspect-[3/2] overflow-hidden mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p 
                    className="text-xs tracking-wider text-stone mb-2"
                    style={{ color: 'var(--color-stone)', letterSpacing: '0.1em' }}
                  >
                    {article.date}
                  </p>
                  <h2 
                    className="font-serif text-xl mb-2 group-hover:text-gold transition-colors"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {article.title}
                  </h2>
                  <p className="text-sm text-stone" style={{ color: 'var(--color-stone)' }}>
                    {article.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}