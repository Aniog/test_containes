import { Link } from 'react-router-dom';

export default function JournalPage() {
  const articles = [
    {
      id: 1,
      title: 'How to Layer Your Necklaces Like a Pro',
      excerpt: 'Master the art of layering with our guide to creating the perfect necklace stack.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=500&fit=crop',
      date: 'June 15, 2024'
    },
    {
      id: 2,
      title: 'Caring for Your Gold Plated Jewelry',
      excerpt: 'Simple tips to keep your jewelry looking beautiful for years to come.',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=500&fit=crop',
      date: 'May 28, 2024'
    },
    {
      id: 3,
      title: 'The Art of Gifting Jewelry',
      excerpt: 'Find the perfect piece for every occasion with our gift guide.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop',
      date: 'May 10, 2024'
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h1 className="font-serif text-h1 text-secondary">The Journal</h1>
          <p className="text-body text-secondary-text mt-4 max-w-xl mx-auto">
            Stories about jewelry, style, and the moments that matter
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map(article => (
              <article key={article.id} className="group">
                <Link to={`/journal/${article.id}`}>
                  <div className="aspect-[16/10] overflow-hidden mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-caption text-secondary-text mb-2">{article.date}</p>
                  <h2 className="font-serif text-h4 text-secondary group-hover:text-accent transition-smooth">
                    {article.title}
                  </h2>
                  <p className="text-small text-secondary-text mt-2">
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