import { useImageLoader } from '@/hooks/useImageLoader';

const posts = [
  {
    id: 'how-to-layer-necklaces',
    title: 'How to Layer Necklaces Like a Stylist',
    excerpt:
      'The art of layering is all about balance. Mix delicate chains with one statement piece for an effortless, editorial look.',
    date: 'July 14, 2026',
  },
  {
    id: 'gold-jewelry-care',
    title: 'Caring for Your Gold-Plated Jewelry',
    excerpt:
      'Keep your pieces sparkling for years with these simple care tips — from storage to cleaning and everyday wear.',
    date: 'July 7, 2026',
  },
  {
    id: 'gifting-guide',
    title: 'The Modern Gifting Guide',
    excerpt:
      'Whether it is a birthday, anniversary, or just because, discover how to choose a piece that feels personal and memorable.',
    date: 'June 29, 2026',
  },
];

export default function Journal() {
  const containerRef = useImageLoader();

  return (
    <div ref={containerRef} className="bg-background pt-[88px] md:pt-[104px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="text-center mb-14 md:mb-20">
          <p className="text-xs uppercase tracking-extra-wide text-muted mb-3">The Journal</p>
          <h1 className="font-serif text-3xl md:text-5xl font-light text-foreground">
            Style Notes & Stories
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post, index) => (
            <article key={post.id} className="group cursor-pointer">
              <div
                className="aspect-[4/3] mb-6 overflow-hidden bg-surface"
                data-strk-bg-id={`journal-thumb-${post.id}`}
                data-strk-bg={`[journal-${post.id}-title] [journal-${post.id}-excerpt]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="600"
              />
              <p className="text-xs text-muted uppercase tracking-extra-wide mb-2">{post.date}</p>
              <h2
                id={`journal-${post.id}-title`}
                className="font-serif text-xl text-foreground mb-3 group-hover:text-accent transition-colors"
              >
                {post.title}
              </h2>
              <p id={`journal-${post.id}-excerpt`} className="text-sm text-muted leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
