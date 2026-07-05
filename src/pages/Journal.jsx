import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'The Art of Layering Necklaces',
    excerpt: 'Discover how to create the perfect layered look with our styling guide.',
    category: 'Style Tips',
    date: 'March 15, 2026',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Gold Jewelry Care 101',
    excerpt: 'Essential tips to keep your gold-plated pieces looking radiant for years.',
    category: 'Care Guide',
    date: 'March 8, 2026',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    readTime: '4 min read'
  },
  {
    id: 3,
    title: 'Gifting Made Easy',
    excerpt: 'Find the perfect jewelry gift for every occasion and relationship.',
    category: 'Gift Guide',
    date: 'February 28, 2026',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Embracing Quiet Luxury',
    excerpt: 'How to achieve an effortlessly elegant look with minimal, quality pieces.',
    category: 'Trends',
    date: 'February 20, 2026',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    readTime: '5 min read'
  }
];

export default function Journal() {
  return (
    <main className="pt-20">
      {/* Header */}
      <div className="bg-[#faf9f7] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">
            Journal
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mt-3">
            Stories & Inspiration
          </h1>
          <p className="text-[#1a1a1a]/60 mt-4 max-w-xl mx-auto">
            Discover styling tips, care guides, and the stories behind our 
            beloved pieces.
          </p>
        </div>
      </div>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="#" className="group block relative aspect-[21/9] overflow-hidden">
          <img
            src={articles[0].image}
            alt={articles[0].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <span className="text-[#d4af37] text-xs tracking-[0.2em] uppercase mb-3">
              {articles[0].category}
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-white mb-3 max-w-2xl">
              {articles[0].title}
            </h2>
            <p className="text-white/70 text-sm mb-4 max-w-xl">
              {articles[0].excerpt}
            </p>
            <span className="text-white/60 text-xs">
              {articles[0].date} · {articles[0].readTime}
            </span>
          </div>
        </Link>
      </section>

      {/* Article Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <Link
                key={article.id}
                to="#"
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-[#d4af37] text-xs tracking-[0.2em] uppercase">
                  {article.category}
                </span>
                <h3 className="font-serif text-xl text-[#1a1a1a] mt-2 mb-2 group-hover:text-[#d4af37] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[#1a1a1a]/60 text-sm mb-3 line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="text-[#1a1a1a]/40 text-xs">
                  {article.date} · {article.readTime}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl text-white mb-3">
            Never Miss a Story
          </h2>
          <p className="text-white/60 mb-6">
            Subscribe to our journal for weekly styling inspiration.
          </p>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 bg-white/10 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#d4af37] text-[#1a1a1a] text-sm tracking-[0.1em] uppercase hover:bg-white transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
