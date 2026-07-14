import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Stylist',
    category: 'Styling',
    excerpt: 'The art of necklace stacking is simpler than you think. Learn the golden rules from our in-house stylist.',
    date: 'December 12, 2024',
    readTime: '4 min read',
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Ear Cuffs',
    category: 'Trends',
    excerpt: 'From subtle to statement, ear cuffs are the most versatile piece in your jewelry box. Here\'s how to wear them.',
    date: 'December 8, 2024',
    readTime: '3 min read',
  },
  {
    id: 3,
    title: 'Gold Plating 101: Everything You Need to Know',
    category: 'Education',
    excerpt: 'What does 18K gold plated really mean? We break down the jewelry jargon so you can shop smarter.',
    date: 'December 1, 2024',
    readTime: '5 min read',
  },
  {
    id: 4,
    title: 'Gift Guide: The Perfect Present for Every Woman',
    category: 'Gifting',
    excerpt: 'Not sure what to get? Our curated gift guide makes finding the perfect jewelry gift effortless.',
    date: 'November 25, 2024',
    readTime: '6 min read',
  },
];

export function Journal() {
  return (
    <div className="min-h-screen bg-warm-ivory">
      {/* Header */}
      <section className="py-16 md:py-24 bg-warm-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-champagne text-xs tracking-[0.3em] uppercase mb-4">
            Journal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-gray-900 mb-6">
            Stories & Inspiration
          </h1>
          <p className="text-warm-gray-600 text-lg max-w-xl mx-auto">
            Styling tips, jewelry education, and behind-the-scenes stories from the Velmora world.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/journal/layering-necklaces" className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] bg-warm-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-champagne/20 to-soft-gold/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-champagne text-6xl opacity-50">✦</span>
                </div>
              </div>
              <div>
                <span className="text-xs font-medium tracking-wider uppercase text-champagne">
                  Featured Article
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-warm-gray-900 mt-2 mb-4 group-hover:text-champagne transition-colors">
                  How to Layer Necklaces Like a Stylist
                </h2>
                <p className="text-warm-gray-600 mb-4">
                  The art of necklace stacking is simpler than you think. Learn the golden rules 
                  from our in-house stylist and transform your everyday look.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-warm-gray-900 group-hover:text-champagne transition-colors">
                  Read Article <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Article grid */}
      <section className="py-8 pb-24 bg-warm-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <Link 
                key={article.id} 
                to={`/journal/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group block"
              >
                <article>
                  <div className="relative aspect-[4/3] bg-warm-gray-100 mb-4 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-champagne/10 to-soft-gold/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-champagne text-4xl opacity-30">✦</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-champagne font-medium tracking-wider uppercase">
                        {article.category}
                      </span>
                      <span className="text-warm-gray-400">·</span>
                      <span className="text-warm-gray-400">{article.readTime}</span>
                    </div>
                    <h3 className="font-serif text-xl text-warm-gray-900 group-hover:text-champagne transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-warm-gray-600 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Journal;
