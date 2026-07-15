import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'How to Stack & Layer Gold Jewelry Like a Stylist',
    excerpt: 'The art of mixing textures, lengths, and tones without it looking overdone.',
    date: 'June 28, 2026',
  },
  {
    id: 2,
    title: 'The Rise of Demi-Fine: Why 18K Gold Plated Is the New Fine',
    excerpt: 'How a generation of women are redefining what luxury jewelry means.',
    date: 'May 15, 2026',
  },
  {
    id: 3,
    title: 'Caring for Your Gold Jewelry: A Complete Guide',
    excerpt: 'Simple daily habits to keep your pieces luminous for years to come.',
    date: 'April 10, 2026',
  },
];

export default function Journal() {
  return (
    <div className="pt-20 md:pt-24 pb-20">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="accent-badge mb-4">Journal</span>
            <h1 className="heading-lg mb-3">Stories & Style</h1>
            <p className="body-text">Inspiration, care guides, and behind-the-scenes from the world of Velmora.</p>
          </div>

          <div className="space-y-12">
            {articles.map((article) => (
              <article key={article.id} className="border-b border-velmora-muted pb-10">
                <p className="caption mb-2">{article.date}</p>
                <h2 className="heading-sm mb-3 hover:text-velmora-accent transition-colors cursor-pointer">
                  {article.title}
                </h2>
                <p className="body-text mb-4">{article.excerpt}</p>
                <Link to="/journal" className="text-sm font-medium tracking-wide text-velmora-accent hover:text-velmora-accent-hover transition-colors">
                  Read More &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
