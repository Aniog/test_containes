import { StrkImg } from '@/components/ui/StrkImg';

const POSTS = [
  {
    id: 'care',
    title: 'How to Care for Gold-Plated Jewelry',
    excerpt:
      'Simple habits that keep your favorite pieces shining bright for years to come.',
    date: 'June 15, 2026',
  },
  {
    id: 'layering',
    title: 'The Art of Layering Necklaces',
    excerpt: 'Three effortless ways to build a necklace stack that feels intentional.',
    date: 'June 8, 2026',
  },
  {
    id: 'gift',
    title: 'A Gifting Guide for Every Occasion',
    excerpt: 'From birthdays to bridesmaids, discover pieces that feel personal.',
    date: 'May 22, 2026',
  },
];

export function Journal() {
  return (
    <div className="animate-fade-in bg-velmora-cream">
      <div className="mx-auto max-w-3xl px-4 pb-16 pt-28 text-center sm:px-6 lg:px-8">
        <span className="mb-3 block font-sans text-xs font-medium uppercase tracking-[0.28em] text-velmora-gold">
          Journal
        </span>
        <h1 className="font-serif text-4xl text-velmora-base sm:text-5xl lg:text-6xl">
          Stories & Style Notes
        </h1>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <div className="relative mb-5 aspect-[4/5] overflow-hidden bg-velmora-cream-dark">
                <StrkImg
                  id={`journal-${post.id}`}
                  query={`[journal-${post.id}-title] gold jewelry editorial`}
                  ratio="4x5"
                  width={600}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="font-sans text-[11px] uppercase tracking-widest text-velmora-taupe">
                {post.date}
              </span>
              <h2
                id={`journal-${post.id}-title`}
                className="mt-2 font-serif text-2xl text-velmora-base"
              >
                {post.title}
              </h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-velmora-taupe">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
