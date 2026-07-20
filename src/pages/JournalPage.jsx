import { Link } from 'react-router-dom';

function JournalPage() {
  const articles = [
    {
      id: 'how-to-layer-necklaces',
      title: 'The Art of Layering Necklaces',
      excerpt: 'Master the art of creating the perfect layered necklace look with our expert guide.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      date: 'January 15, 2025'
    },
    {
      id: 'jewelry-care-guide',
      title: 'Caring for Your Gold Plated Jewelry',
      excerpt: 'Learn how to keep your favorite pieces looking beautiful for years to come.',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      date: 'December 20, 2024'
    },
    {
      id: 'gift-guide',
      title: 'The Perfect Gift: Jewelry for Every Occasion',
      excerpt: 'Find the ideal piece to celebrate birthdays, anniversaries, and special moments.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      date: 'November 28, 2024'
    }
  ];

  return (
    <main className="pt-24 lg:pt-32 pb-16">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-primary">Journal</h1>
          <p className="mt-4 text-secondary max-w-2xl mx-auto">
            Stories, styling tips, and inspiration from the Velmora world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={article.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link to={`/journal/${article.id}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-xs text-secondary">{article.date}</p>
                <h2 className="mt-2 font-serif text-xl text-primary group-hover:text-accent transition-colors">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm text-secondary">
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

export default JournalPage;