import { Link } from 'react-router-dom';

export default function Journal() {
  const articles = [
    {
      id: 'how-to-layer-jewelry',
      title: 'How to Layer Your Necklaces Like a Pro',
      excerpt: 'Master the art of layering necklaces with our expert guide.',
      date: 'July 15, 2024',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop'
    },
    {
      id: 'jewelry-care-guide',
      title: 'Caring for Your Gold-Plated Jewelry',
      excerpt: 'Tips and tricks to keep your jewelry looking brand new.',
      date: 'July 8, 2024',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=400&fit=crop'
    },
    {
      id: 'gift-guide',
      title: 'The Ultimate Gift Guide for Jewelry Lovers',
      excerpt: 'Find the perfect piece for every special occasion.',
      date: 'July 1, 2024',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop'
    }
  ];

  return (
    <main className="pt-8 pb-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-charcoal)] mb-4">
            Journal
          </h1>
          <p className="text-[var(--color-taupe)] max-w-md mx-auto">
            Stories, tips, and inspiration from the world of fine jewelry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to={`/journal/${article.id}`}>
                <div className="aspect-[3/2] overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs text-[var(--color-taupe)]">{article.date}</span>
                <h2 className="font-serif text-xl text-[var(--color-charcoal)] mt-2 mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-[var(--color-charcoal-light)]">
                  {article.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}