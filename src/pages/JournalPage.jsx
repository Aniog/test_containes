import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'How to Style Gold Jewelry for Every Season',
    excerpt: 'From summer layering to winter elegance, discover how to make your Velmora pieces work year-round.',
    date: 'June 15, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
  },
  {
    id: 2,
    title: 'The Art of Gifting Jewelry',
    excerpt: 'A thoughtful guide to choosing the perfect piece for every special someone in your life.',
    date: 'May 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
  },
  {
    id: 3,
    title: 'Behind the Design: Our Golden Sphere Huggies',
    excerpt: 'From sketch to finished piece, learn how our bestselling huggies came to life.',
    date: 'May 10, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
  },
];

const JournalPage = () => {
  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-velmora-warm py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-velmora-black mb-4">
            Journal
          </h1>
          <p className="text-sm md:text-base text-velmora-muted max-w-md mx-auto">
            Stories, style guides, and behind-the-scenes looks at the world of Velmora.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-12 md:py-16 bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {articles.map((article) => (
              <article key={article.id} className="group">
                <Link to={`/journal/${article.id}`} className="block">
                  <div className="aspect-[4/3] bg-velmora-warm overflow-hidden mb-5">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[11px] text-velmora-stone tracking-wide">
                      <span>{article.date}</span>
                      <span>&middot;</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h2 className="font-serif text-xl md:text-2xl font-medium text-velmora-black group-hover:text-velmora-gold-dark transition-colors duration-300 leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-sm text-velmora-muted leading-relaxed">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs font-sans font-medium tracking-widest uppercase text-velmora-black group-hover:text-velmora-gold-dark transition-colors duration-300 mt-2">
                      Read More
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JournalPage;
