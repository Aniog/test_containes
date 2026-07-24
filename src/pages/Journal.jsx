import { Link } from 'react-router-dom';

export default function Journal() {
  const articles = [
    {
      id: 1,
      title: 'How to Layer Your Necklaces',
      excerpt: 'Master the art of layering with our complete guide to creating the perfect necklace stack.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
      date: 'January 15, 2024'
    },
    {
      id: 2,
      title: 'Caring for Your Gold Plated Jewelry',
      excerpt: 'Learn how to keep your favorite pieces looking beautiful for years to come.',
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=400&fit=crop',
      date: 'December 28, 2023'
    },
    {
      id: 3,
      title: 'The Art of Gifting Jewelry',
      excerpt: 'Find the perfect piece for every occasion with our gift guide.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop',
      date: 'December 10, 2023'
    }
  ];

  return (
    <div className="pt-[72px]">
      <section className="relative py-20 md:py-32" style={{ backgroundColor: 'var(--color-ivory)' }}>
        <div className="container mx-auto text-center px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Journal
          </h1>
          <p className="font-sans text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            Stories, guides, and inspiration from the Velmora world
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map(article => (
              <article key={article.id} className="group">
                <Link to="/journal" className="block">
                  <div className="aspect-[3/2] overflow-hidden mb-4" style={{ backgroundColor: 'var(--color-ivory)' }}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="font-sans text-xs mb-2" style={{ color: 'var(--color-muted-light)' }}>
                    {article.date}
                  </p>
                  <h2 className="font-serif text-xl mb-2 group-hover:opacity-70 transition-opacity">
                    {article.title}
                  </h2>
                  <p className="font-sans text-sm" style={{ color: 'var(--color-muted)' }}>
                    {article.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}