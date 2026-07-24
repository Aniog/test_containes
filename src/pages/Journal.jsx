import { Link } from 'react-router-dom';

export default function Journal() {
  const articles = [
    {
      id: 'how-to-layer-jewelry',
      title: 'The Art of Layering: Creating Your Perfect Stack',
      excerpt: 'Learn how to mix and match necklaces, bracelets, and rings to create a look that is uniquely yours.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop',
      date: 'January 15, 2024'
    },
    {
      id: 'jewelry-care-guide',
      title: 'Caring for Your Gold-Plated Jewelry',
      excerpt: 'Simple tips and tricks to keep your favorite pieces looking beautiful for years to come.',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=500&fit=crop',
      date: 'December 28, 2023'
    },
    {
      id: 'gift-guide-2024',
      title: 'The Ultimate Gift Guide for Every Occasion',
      excerpt: 'Find the perfect piece for birthdays, anniversaries, holidays, or just because.',
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=500&fit=crop',
      date: 'December 10, 2023'
    }
  ];

  return (
    <div className="pt-[72px]">
      {/* Page Header */}
      <div className="bg-[var(--color-cream-dark)] py-16">
        <div className="container text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-[var(--color-charcoal)]">
            Journal
          </h1>
          <p className="mt-4 text-[var(--color-stone)] max-w-md mx-auto">
            Stories, tips, and inspiration from the world of Velmora
          </p>
        </div>
      </div>

      {/* Articles */}
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Link to={`/journal/${article.id}`}>
                <div className="aspect-[16/10] overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs text-[var(--color-stone)] mb-2">{article.date}</p>
                <h2 className="font-serif text-xl text-[var(--color-charcoal)] group-hover:text-[var(--color-warm-gold)] transition-colors">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm text-[var(--color-stone)] line-clamp-2">
                  {article.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}