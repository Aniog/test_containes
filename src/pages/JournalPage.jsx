import { Link } from 'react-router-dom';

const JournalPage = () => {
  const articles = [
    {
      id: 'jewelry-trends-2024',
      title: 'Jewelry Trends to Watch in 2024',
      excerpt: 'Discover the styles that are defining this year\'s jewelry landscape, from minimalist pieces to bold statements.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop',
      date: 'January 15, 2024'
    },
    {
      id: 'care-guide',
      title: 'How to Care for Your Gold Plated Jewelry',
      excerpt: 'Learn the essential tips and tricks to keep your gold plated pieces looking beautiful for years to come.',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=500&fit=crop',
      date: 'December 28, 2023'
    },
    {
      id: 'gift-guide',
      title: 'The Ultimate Gift Guide for Jewelry Lovers',
      excerpt: 'Find the perfect piece for every special person in your life, from milestone celebrations to everyday appreciation.',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=500&fit=crop',
      date: 'December 10, 2023'
    }
  ];

  return (
    <main className="pt-20 min-h-screen bg-velmora-cream">
      {/* Header */}
      <div className="bg-velmora-creamDark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-velmora-dark">Journal</h1>
          <p className="mt-4 text-velmora-textLight max-w-xl mx-auto">
            Stories, tips, and inspiration from the world of fine jewelry
          </p>
        </div>
      </div>

      {/* Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="group">
                <Link to="#" className="block">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-velmora-muted uppercase tracking-wider">{article.date}</p>
                    <h2 className="font-serif text-xl text-velmora-dark mt-2 group-hover:text-velmora-gold transition-colors">
                      {article.title}
                    </h2>
                    <p className="mt-2 text-velmora-textLight text-sm">{article.excerpt}</p>
                    <span className="inline-block mt-3 text-sm text-velmora-gold uppercase tracking-wider">
                      Read More
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default JournalPage;