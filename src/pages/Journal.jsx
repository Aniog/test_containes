import { Link } from 'react-router-dom';
import ImageLoader from '@/components/ImageLoader';

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const posts = [
  {
    id: 'how-to-layer-necklaces',
    title: 'How to Layer Necklaces Like an Editor',
    excerpt: 'The foolproof formula for stacking chains without the tangle.',
    date: 'June 18, 2026',
    query: 'gold layered necklaces editorial close-up warm lighting jewelry styling',
  },
  {
    id: 'demi-fine-guide',
    title: 'What Is Demi-Fine Jewelry?',
    excerpt: 'Why this category is the sweet spot between costume and fine jewelry.',
    date: 'June 10, 2026',
    query: 'gold earrings rings flat lay neutral background editorial jewelry',
  },
  {
    id: 'gift-guide',
    title: 'The Modern Gifting Guide',
    excerpt: 'Meaningful pieces for birthdays, milestones, and just because.',
    date: 'May 28, 2026',
    query: 'gold jewelry gift box ribbon warm editorial lifestyle',
  },
];

export default function Journal() {
  return (
    <ImageLoader>
      <section className="pt-28 pb-16 lg:pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-extra-wide text-gold mb-4">Journal</p>
          <h1 className="font-serif text-5xl lg:text-6xl text-espresso leading-[0.95]">
            Styling Notes & Stories
          </h1>
        </div>
      </section>

      <section className="pb-24 lg:pb-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={post.id} className="group flex flex-col">
                <Link to={`/journal/${post.id}`} className="relative aspect-[4/5] overflow-hidden bg-sand mb-5">
                  <img
                    data-strk-img-id={`journal-${post.id}`}
                    data-strk-img={post.query}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src={PLACEHOLDER}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <p className="text-[10px] uppercase tracking-extra-wide text-taupe mb-2">{post.date}</p>
                <h2 id={`journal-title-${post.id}`} className="font-serif text-2xl text-espresso mb-3">
                  <Link to={`/journal/${post.id}`} className="hover:text-gold transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p id={`journal-excerpt-${post.id}`} className="text-taupe leading-relaxed text-sm mb-4 flex-1">
                  {post.excerpt}
                </p>
                <Link
                  to={`/journal/${post.id}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-extra-wide text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition-colors w-fit"
                >
                  Read More
                </Link>
                {index === 0 && (
                  <span className="sr-only">{post.query}</span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </ImageLoader>
  );
}
