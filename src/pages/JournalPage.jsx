import { Link } from 'react-router-dom';

const articles = [
  {
    id: 'styling-gold-jewelry',
    title: 'How to Style Gold Jewelry for Every Occasion',
    excerpt: 'From brunch to black tie, our guide to layering and stacking your favorite pieces.',
    date: 'June 28, 2026',
  },
  {
    id: 'caring-for-plated',
    title: 'The Complete Guide to Caring for Gold-Plated Jewelry',
    excerpt: 'Simple habits that keep your demi-fine pieces looking new for years.',
    date: 'June 15, 2026',
  },
  {
    id: 'summer-trends',
    title: 'Summer 2026 Jewelry Trends We\'re Loving',
    excerpt: 'The shapes, textures, and colors defining this season\'s jewelry landscape.',
    date: 'June 02, 2026',
  },
];

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-velmora-cream pt-32 pb-20">
      <div className="section-padding">
        <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-ink text-center mb-4">
          Journal
        </h1>
        <p className="text-velmora-stone text-sm text-center mb-12 max-w-md mx-auto">
          Stories, styling tips, and behind-the-scenes from Velmora
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {articles.map((article) => (
            <Link
              key={article.id}
              to="#"
              className="group block"
            >
              <div className="aspect-[4/3] bg-velmora-sand/30 flex items-center justify-center mb-5">
                <span className="text-velmora-stone/30 text-xs tracking-wider">
                  VELMORA
                </span>
              </div>
              <p className="text-[10px] tracking-wider uppercase text-velmora-stone mb-2">
                {article.date}
              </p>
              <h3 className="font-serif text-lg tracking-wide text-velmora-ink group-hover:text-velmora-gold transition-colors leading-snug mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-velmora-stone leading-relaxed">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}