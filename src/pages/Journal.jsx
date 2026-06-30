import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: 'The Art of Layering Necklaces',
      category: 'Style Guide',
      date: 'June 15, 2026',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      excerpt: 'Master the technique of layering necklaces with our comprehensive guide. Learn how to combine different lengths and styles for a effortlessly elegant look.',
    },
    {
      id: 2,
      title: 'Caring for Your Gold-Plated Jewelry',
      category: 'Care Tips',
      date: 'June 8, 2026',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      excerpt: 'With proper care, your gold-plated jewelry can maintain its beautiful shine for years. Here are our expert tips for keeping your pieces looking their best.',
    },
    {
      id: 3,
      title: 'The Perfect Gift: Jewelry for Every Occasion',
      category: 'Gifting',
      date: 'May 28, 2026',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      excerpt: 'From birthdays to anniversaries, find the perfect piece of jewelry to celebrate lifes special moments. Our gift guide makes choosing simple.',
    },
  ];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-20">
      {/* Header */}
      <div className="max-w-content mx-auto px-6 lg:px-12 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-4">
            Journal
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl text-charcoal mb-6">
            Stories & Inspiration
          </h1>
          <p className="font-sans text-warm-gray leading-relaxed">
            Discover styling tips, care guides, and the stories behind our designs.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to={`/journal/${article.id}`} className="block">
                {/* Image */}
                <div className="aspect-[4/3] rounded overflow-hidden mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-sans text-xs uppercase tracking-wider text-gold">
                    {article.category}
                  </span>
                  <span className="font-sans text-xs text-muted-gray">
                    {article.date}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-serif text-xl lg:text-2xl text-charcoal mb-3 group-hover:text-gold transition-colors">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="font-sans text-sm text-warm-gray leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
