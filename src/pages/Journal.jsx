import { Link } from 'react-router-dom';
import { useImageLoader } from '@/hooks/useImageLoader';

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const posts = [
  {
    id: 'how-to-layer-necklaces',
    title: 'How to Layer Necklaces Like a Stylist',
    excerpt:
      'The simple rules for mixing lengths, weights, and textures without the tangle.',
    date: 'June 15, 2026',
    imgId: 'journal-layering-8f2a9c',
    titleId: 'journal-title-layering',
  },
  {
    id: 'gold-vs-silver-tone',
    title: 'Gold or Silver? Finding Your Metal',
    excerpt:
      'A quick guide to choosing the tone that flatters your skin and your wardrobe.',
    date: 'June 8, 2026',
    imgId: 'journal-metal-7b3d1e',
    titleId: 'journal-title-metal',
  },
  {
    id: 'gift-guide-jewelry',
    title: 'The Minimal Jewelry Gift Guide',
    excerpt:
      'Understated pieces that feel thoughtful — for birthdays, milestones, or just because.',
    date: 'May 28, 2026',
    imgId: 'journal-gift-4c9e5a',
    titleId: 'journal-title-gift',
  },
];

export default function Journal() {
  const containerRef = useImageLoader();

  return (
    <main className="min-h-screen bg-velmora-cream text-velmora-espresso py-20 md:py-28 px-4 md:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto" ref={containerRef}>
        <div className="text-center mb-16">
          <p className="text-velmora-stone uppercase tracking-[0.2em] text-sm mb-3">
            The Journal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl">Style Notes & Stories</h1>
        </div>

        <div className="grid gap-12 md:gap-16">
          {posts.map((post) => (
            <article
              key={post.id}
              className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-start"
            >
              <span id={post.titleId} className="sr-only">
                {post.title}
              </span>
              <Link to={`/journal/${post.id}`} className="block aspect-[4/3] bg-velmora-stone/10 overflow-hidden">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src={SVG_PLACEHOLDER}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </Link>
              <div>
                <p className="text-sm text-velmora-stone mb-2">{post.date}</p>
                <h2 className="font-serif text-2xl md:text-3xl mb-3">
                  <Link to={`/journal/${post.id}`} className="hover:text-velmora-gold transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-velmora-espresso/70 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  to={`/journal/${post.id}`}
                  className="text-sm uppercase tracking-[0.14em] border-b border-velmora-espresso/30 hover:border-velmora-gold hover:text-velmora-gold transition-colors pb-1"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
