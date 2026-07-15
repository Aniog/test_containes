import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'How to Layer Your Necklaces Like a Pro',
    excerpt: 'Learn the art of necklace layering with our complete guide. From chokers to long chains, we show you how to create the perfect layered look.',
    category: 'Styling Tips',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop',
    date: 'December 15, 2024',
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Gold Jewelry Care',
    excerpt: 'Keep your gold-plated jewelry looking its best with our expert care tips. Learn how to clean, store, and maintain your favorite pieces.',
    category: 'Jewelry Care',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop',
    date: 'December 8, 2024',
  },
  {
    id: 3,
    title: 'Gift Guide: Perfect Jewelry for Every Occasion',
    excerpt: 'From birthdays to anniversaries, find the perfect piece of jewelry for every special moment in your life.',
    category: 'Gift Guide',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=600&fit=crop',
    date: 'December 1, 2024',
  },
];

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-velvet-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-sans font-semibold tracking-ultra-wide text-champagne uppercase mb-4">
            Journal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-obsidian mb-6">
            Stories & Inspiration
          </h1>
          <p className="text-velvet-600 font-sans text-lg max-w-2xl mx-auto">
            Discover styling tips, jewelry care guides, and the stories behind our designs.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link className="block group">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <span className="text-xs font-sans font-semibold tracking-ultra-wide text-champagne uppercase">
                  {articles[0].category}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-obsidian mt-3 mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-velvet-600 font-sans leading-relaxed mb-4">
                  {articles[0].excerpt}
                </p>
                <span className="text-sm text-velvet-500">{articles[0].date}</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* More Articles */}
      <section className="py-12 md:py-16 bg-velvet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-obsidian mb-8">
            More from the Journal
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {articles.slice(1).map((article) => (
              <Link key={article.id} className="group">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs font-sans font-semibold tracking-ultra-wide text-champagne uppercase">
                  {article.category}
                </span>
                <h3 className="font-serif text-xl font-semibold text-obsidian mt-2 mb-2">
                  {article.title}
                </h3>
                <p className="text-velvet-600 font-sans text-sm">
                  {article.date}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
