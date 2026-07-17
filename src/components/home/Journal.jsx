import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'The Art of Everyday Layering',
    excerpt: 'How to stack and style your gold jewelry for effortless, everyday polish.',
    tag: 'Style Guide',
  },
  {
    id: 2,
    title: 'Caring for Gold-Plated Jewelry',
    excerpt: 'Simple habits that keep your pieces luminous for years. Our complete care ritual explained.',
    tag: 'Jewelry Care',
  },
  {
    id: 3,
    title: 'The Story Behind Our Spring Collection',
    excerpt: 'Inspired by wildflower meadows and the English countryside after rain.',
    tag: 'Behind the Brand',
  },
];

export default function Journal() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-brand-smoke mb-3">The Journal</p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-hero text-brand-ink">Stories & Style</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {articles.map((article) => (
          <Link key={article.id} to="/" className="group">
            <div className="aspect-[4/3] bg-brand-sand/30 mb-5 flex items-center justify-center overflow-hidden">
              <span className="text-brand-smoke/30 text-xs uppercase tracking-widest">{article.tag}</span>
            </div>
            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-brand-smoke/50 mb-3">{article.tag}</p>
            <h3 className="font-serif text-lg md:text-xl tracking-wide text-brand-ink group-hover:text-brand-gold transition-colors leading-snug mb-2">
              {article.title}
            </h3>
            <p className="font-sans text-sm text-brand-smoke leading-relaxed">{article.excerpt}</p>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/" className="btn-outline">Read the Journal</Link>
      </div>
    </section>
  );
}