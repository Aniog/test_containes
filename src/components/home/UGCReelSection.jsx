const ugcPosts = [
  {
    id: 1,
    caption: 'Everyday elegance ✨',
    author: '@sarah.style',
    query: 'gold jewelry worn on ear closeup elegant woman',
  },
  {
    id: 2,
    caption: 'Layered perfection',
    author: '@emma.jewels',
    query: 'gold necklace layered on woman neck elegant',
  },
  {
    id: 3,
    caption: 'Huggie love',
    author: '@jessica.luxe',
    query: 'gold huggie earrings on ear closeup',
  },
  {
    id: 4,
    caption: 'Golden hour glow',
    author: '@mia.fine',
    query: 'woman wearing gold jewelry warm lighting',
  },
  {
    id: 5,
    caption: 'Stacked & styled',
    author: '@olivia.gold',
    query: 'gold earrings stacked ear styling',
  },
  {
    id: 6,
    caption: 'Minimal luxury',
    author: '@ava.chic',
    query: 'minimal gold jewelry woman portrait',
  },
];

export default function UGCReelSection() {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">As Worn By You</p>
          <h2 className="serif-heading text-3xl md:text-4xl font-light">The Velmora Edit</h2>
        </div>

        {/* Horizontal scroll */}
        <div className="flex gap-4 md:gap-5 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-[180px] md:w-[220px] snap-start"
            >
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden mb-3">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-strk-bg-id={`ugc-${post.id}-bg`}
                  data-strk-bg={post.query}
                  data-strk-bg-ratio="9x16"
                  data-strk-bg-width="400"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="serif-heading text-white text-sm italic mb-1">{post.caption}</p>
                  <p className="text-white/70 text-xs">{post.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
