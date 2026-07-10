import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'Master the art of necklace layering with our complete guide to creating the perfect stacked look.',
    category: 'Styling Tips',
    date: 'December 15, 2024',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80'
  },
  {
    id: 2,
    title: 'The Perfect Gift: Jewelry for Every Occasion',
    excerpt: 'From birthdays to anniversaries, find the perfect piece to make any moment unforgettable.',
    category: 'Gift Guide',
    date: 'December 8, 2024',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
  },
  {
    id: 3,
    title: 'Caring for Your Gold-Plated Jewelry',
    excerpt: 'Keep your favorite pieces looking beautiful for years with these simple care tips.',
    category: 'Jewelry Care',
    date: 'December 1, 2024',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
  }
];

export default function JournalPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--cream)' }}>
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--cream-dark)' }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-subheading">Journal</p>
            <h1 className="section-heading mb-6">Stories & Inspiration</h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--espresso-light)' }}>
              Discover styling tips, gift guides, and the stories behind our collections.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="group">
                <Link to={`/journal/${article.id}`} className="block">
                  <div 
                    className="aspect-[4/3] rounded overflow-hidden mb-4"
                    style={{ backgroundColor: 'var(--cream-dark)' }}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs tracking-wider uppercase mb-2" style={{ color: 'var(--gold)' }}>
                    {article.category}
                  </p>
                  <h2 className="font-serif text-xl mb-2 group-hover:text-[var(--gold)] transition-colors" style={{ color: 'var(--espresso-mid)' }}>
                    {article.title}
                  </h2>
                  <p className="text-sm mb-3" style={{ color: 'var(--espresso-light)' }}>
                    {article.excerpt}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--stone-dark)' }}>
                    {article.date}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
