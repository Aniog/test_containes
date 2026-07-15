const JournalPage = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.',
      date: 'July 10, 2026',
      category: 'Style Guide',
    },
    {
      id: 2,
      title: 'The Care Guide: Making Your Gold Last',
      excerpt: 'Simple tips to keep your demi-fine jewelry looking brand new for years to come.',
      date: 'July 5, 2026',
      category: 'Care',
    },
    {
      id: 3,
      title: 'Behind the Design: The Vivid Aura Collection',
      excerpt: 'Our designer shares the inspiration behind our bestselling ear cuff collection.',
      date: 'June 28, 2026',
      category: 'Behind the Scenes',
    },
  ];

  return (
    <div className="pt-20 md:pt-24">
      <section className="bg-velmora-surface py-12 md:py-16 border-b border-velmora-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-text mb-3">
            The Journal
          </h1>
          <p className="text-velmora-secondary text-base md:text-lg max-w-xl mx-auto">
            Stories, style guides, and behind-the-scenes glimpses.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {posts.map(post => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[16/9] bg-velmora-border/30 mb-6 overflow-hidden">
                  <div className="w-full h-full bg-velmora-border/30 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs tracking-wider uppercase text-velmora-accent">{post.category}</span>
                  <span className="text-xs text-velmora-muted">·</span>
                  <span className="text-xs text-velmora-muted">{post.date}</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-velmora-text group-hover:text-velmora-accent transition-colors mb-3">
                  {post.title}
                </h2>
                <p className="text-velmora-secondary leading-relaxed">{post.excerpt}</p>
                <span className="inline-block mt-4 text-sm text-velmora-accent border-b border-velmora-accent pb-1">
                  Read More
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JournalPage;
