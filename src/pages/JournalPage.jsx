import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'The Art of the Ear Stack',
    excerpt: 'How to curate the perfect combination of studs, huggies, and cuffs for a look that is uniquely yours.',
    category: 'Styling',
    date: 'June 2026',
    query: 'ear stack gold jewelry styling inspiration close up',
    imgId: 'journal-ear-stack',
  },
  {
    id: 2,
    title: 'Why 18K Gold Plating Is the Sweet Spot',
    excerpt: 'The science and craft behind demi-fine jewelry. Understanding what makes gold plating last.',
    category: 'Materials',
    date: 'May 2026',
    query: '18k gold plating process jewelry making workshop',
    imgId: 'journal-gold-plating',
  },
  {
    id: 3,
    title: 'A Guide to Gifting Jewelry',
    excerpt: 'From birthdays to "just because" — our tips for choosing the perfect piece for someone you love.',
    category: 'Gifting',
    date: 'April 2026',
    query: 'jewelry gift box luxury packaging elegant presentation',
    imgId: 'journal-gifting',
  },
  {
    id: 4,
    title: 'Caring for Your Gold-Plated Pieces',
    excerpt: 'Simple habits to keep your jewelry looking as brilliant as the day you got it.',
    category: 'Care',
    date: 'March 2026',
    query: 'jewelry care cleaning gold plated pieces soft cloth',
    imgId: 'journal-care',
  },
];

export default function JournalPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 lg:pt-24 min-h-screen bg-brand-ivory">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 lg:pt-16 pb-6 text-center">
        <p className="text-brand-gold text-[11px] tracking-[0.3em] uppercase font-sans mb-3">
          Stories & Style
        </p>
        <h1 className="font-serif text-3xl lg:text-5xl text-brand-charcoal font-light">
          The Journal
        </h1>
        <p className="text-brand-warm-gray text-sm mt-3 max-w-md mx-auto">
          Styling inspiration, material guides, and the stories behind our collections.
        </p>
        <div className="w-16 h-px bg-brand-gold/40 mx-auto mt-6" />
      </div>

      {/* Articles grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-20 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] bg-brand-cream-dark overflow-hidden mb-5">
                <img
                  data-strk-img-id={article.imgId}
                  data-strk-img={`[journal-title-${article.id}] [journal-cat-${article.id}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span
                    id={`journal-cat-${article.id}`}
                    className="text-brand-gold text-[10px] tracking-[0.2em] uppercase font-sans"
                  >
                    {article.category}
                  </span>
                  <span className="text-brand-taupe/40 text-[10px]">·</span>
                  <span className="text-brand-taupe text-[10px] tracking-wider font-sans">
                    {article.date}
                  </span>
                </div>
                <h2
                  id={`journal-title-${article.id}`}
                  className="font-serif text-xl lg:text-2xl text-brand-charcoal font-light group-hover:text-brand-gold transition-colors"
                >
                  {article.title}
                </h2>
                <p className="text-sm text-brand-warm-gray leading-relaxed">
                  {article.excerpt}
                </p>
                <span className="inline-block text-sm text-brand-charcoal tracking-[0.1em] uppercase font-sans mt-2 group-hover:text-brand-gold transition-colors">
                  Read More →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
