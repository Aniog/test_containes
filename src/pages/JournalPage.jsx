import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'Master the art of necklace layering with our complete guide to creating effortlessly elegant stacks.',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
    date: 'June 15, 2026',
    category: 'Styling',
  },
  {
    id: 2,
    title: 'The Perfect Gift: Jewelry for Every Milestone',
    excerpt: 'From birthdays to anniversaries, discover the perfect Velmora piece to celebrate lifes special moments.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    date: 'June 8, 2026',
    category: 'Gifting',
  },
  {
    id: 3,
    title: 'Caring for Your Gold-Plated Jewelry',
    excerpt: 'Pro tips to keep your favorite pieces looking radiant for years to come.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    date: 'May 28, 2026',
    category: 'Care',
  },
  {
    id: 4,
    title: 'Spring Trends: The Jewelry Shapes We Love',
    excerpt: 'Discover which jewelry silhouettes are dominating the season and how to wear them.',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
    date: 'May 20, 2026',
    category: 'Trends',
  },
];

export function JournalPage() {
  return (
    <main className="min-h-screen bg-cream-50">
      {/* Header */}
      <section className="bg-cream-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title mb-4">The Journal</h1>
          <p className="text-charcoal-500 font-light max-w-lg mx-auto">
            Styling tips, jewelry guides, and inspiration for the modern woman
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="group">
                <Link to={`/journal/${article.id}`} className="block">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-sans tracking-wider uppercase text-gold-500">
                      {article.category}
                    </span>
                    <span className="text-xs text-charcoal-400">
                      {article.date}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl md:text-2xl text-charcoal-800 mb-2 group-hover:text-gold-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-charcoal-500 font-light text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-charcoal-800">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl text-cream-50 mb-3">
            Never Miss a Story
          </h3>
          <p className="text-cream-100/70 font-light text-sm mb-6">
            Subscribe to receive new journal entries and styling inspiration
          </p>
          <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 bg-transparent border border-cream-100/20 text-cream-50 placeholder:text-cream-100/40 rounded focus:outline-none focus:border-cream-100/40"
            />
            <button className="px-6 py-3 bg-gold-500 text-white text-sm font-sans tracking-wider uppercase rounded hover:bg-gold-600 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
