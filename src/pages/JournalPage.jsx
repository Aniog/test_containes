const JournalPage = () => {
  return (
    <div className="pt-20 md:pt-24">
      <div className="container-padding py-16">
        <h1 className="serif-heading text-4xl md:text-5xl font-light text-center mb-4">
          Journal
        </h1>
        <p className="text-center text-muted-foreground mb-16 max-w-md mx-auto">
          Styling tips, behind-the-scenes stories, and the inspiration behind our collections.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'How to Layer Necklaces Like a Pro',
              excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.',
              date: 'July 10, 2026',
            },
            {
              title: 'The Care Guide: Keeping Your Gold Jewelry Beautiful',
              excerpt: 'Simple tips to maintain the luster of your 18K gold plated pieces for years to come.',
              date: 'July 5, 2026',
            },
            {
              title: 'Behind the Design: The Flora Collection',
              excerpt: 'An intimate look at the creative process behind our bestselling floral-inspired pieces.',
              date: 'June 28, 2026',
            },
          ].map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-secondary mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/50 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
              <h2 className="serif-heading text-xl mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalPage;
