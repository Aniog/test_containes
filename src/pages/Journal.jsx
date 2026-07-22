import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'The Art of Layering Necklaces',
    excerpt: 'Master the art of layering with our complete guide to creating the perfect necklace stack.',
    image: 'https://images.unsplash.com/photo-1599458252573-56ae36120de1?w=800&q=80',
    date: 'January 15, 2026',
    category: 'Styling',
  },
  {
    id: 2,
    title: 'Gold Jewelry Care 101',
    excerpt: 'Essential tips for keeping your gold-plated jewelry looking radiant for years to come.',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
    date: 'January 8, 2026',
    category: 'Care',
  },
  {
    id: 3,
    title: 'Gift Guide: Meaningful Presents',
    excerpt: 'Find the perfect jewelry gift for every special woman in your life.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    date: 'December 20, 2025',
    category: 'Gifting',
  },
];

export default function Journal() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="bg-ivory-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs tracking-extra-wide uppercase text-gold-600 mb-4 block text-center">
            Journal
          </span>
          <h1 className="section-title text-center mb-4">Stories & Inspiration</h1>
          <p className="text-charcoal-500 text-center max-w-xl mx-auto">
            Styling tips, jewelry care guides, and stories from the Velmora community.
          </p>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to="#" className="block">
                <div className="aspect-[4/3] overflow-hidden mb-4 bg-charcoal-50">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-gold-600 tracking-extra-wide uppercase">
                    {article.category}
                  </span>
                  <span className="text-xs text-charcoal-400">·</span>
                  <span className="text-xs text-charcoal-400">{article.date}</span>
                </div>
                <h2 className="font-serif text-xl text-warmblack mb-2 group-hover:text-gold-700 transition-colors">
                  {article.title}
                </h2>
                <p className="text-charcoal-500 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
