import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'How to Style Gold Jewelry for Everyday Wear',
    excerpt: 'Five simple ways to incorporate demi-fine jewelry into your daily wardrobe without feeling overdone.',
    date: 'June 15, 2026',
    readTime: '4 min read',
    image: 'https://placehold.co/800x500/f7f4ef/c9a96e?text=Styling+Gold+Jewelry',
  },
  {
    id: 2,
    title: 'The Art of Gifting Jewelry',
    excerpt: 'A guide to choosing the perfect piece for every personality and occasion.',
    date: 'June 8, 2026',
    readTime: '5 min read',
    image: 'https://placehold.co/800x500/ede6db/a88a4e?text=Gifting+Jewelry',
  },
  {
    id: 3,
    title: 'Behind the Scenes: Our Design Process',
    excerpt: 'From sketch to finished piece — how we bring each Velmora design to life.',
    date: 'May 28, 2026',
    readTime: '6 min read',
    image: 'https://placehold.co/800x500/f7f4ef/3d3530?text=Design+Process',
  },
];

export default function JournalPage() {
  return (
    <div className="bg-velmora-pearl">
      <section className="py-12 sm:py-16 bg-velmora-cream hairline-bottom">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-velmora-charcoal tracking-wide">
            The Journal
          </h1>
          <p className="mt-3 text-sm text-velmora-muted max-w-lg mx-auto">
            Stories, styling tips, and behind-the-scenes looks at the world of Velmora.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {articles.map((article) => (
              <article key={article.id} className="group">
                <Link to={`/journal/${article.id}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm bg-velmora-sand mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs text-velmora-muted">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h2 className="font-serif text-lg sm:text-xl font-semibold text-velmora-charcoal group-hover:text-velmora-gold transition-colors leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-sm text-velmora-ink leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                    <span className="inline-block text-xs font-semibold tracking-editorial uppercase text-velmora-gold group-hover:text-velmora-gold-dark transition-colors">
                      Read More →
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
}
