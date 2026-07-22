export default function Journal() {
  const articles = [
    {
      id: 1,
      title: 'How to Layer Your Necklaces Like a Pro',
      excerpt: 'Master the art of layering with our expert guide to creating the perfect necklace stack.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
      date: 'January 15, 2024'
    },
    {
      id: 2,
      title: 'Caring for Your Gold Plated Jewelry',
      excerpt: 'Learn the best practices to keep your jewelry looking beautiful for years to come.',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=400&fit=crop',
      date: 'January 8, 2024'
    },
    {
      id: 3,
      title: 'The Art of Gifting Jewelry',
      excerpt: 'Discover the meaning behind different jewelry pieces and find the perfect gift.',
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=400&fit=crop',
      date: 'December 20, 2023'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-velmora-sand py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">
            The Journal
          </h1>
          <p className="font-sans text-sm text-velmora-taupe mt-3">
            Styling tips, jewelry care guides, and more
          </p>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={article.id}
              className="group animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="aspect-[3/2] bg-velmora-sand overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <p className="font-sans text-xs text-velmora-taupe">{article.date}</p>
                <h2 className="font-serif text-xl text-velmora-charcoal mt-2 group-hover:text-velmora-gold transition-colors">
                  {article.title}
                </h2>
                <p className="font-sans text-sm text-velmora-charcoal/70 mt-2">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}