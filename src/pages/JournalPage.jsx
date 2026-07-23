const JournalPage = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'The art of layering is all about mixing lengths, textures, and weights. Here\'s our guide to creating the perfect stack.',
      date: 'July 15, 2026',
      category: 'Styling',
    },
    {
      id: 2,
      title: 'The Care Guide: Making Your Gold Last',
      excerpt: 'Simple habits that will keep your demi-fine pieces looking brand new for years to come.',
      date: 'July 8, 2026',
      category: 'Care',
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry for Every Occasion',
      excerpt: 'From birthdays to anniversaries, find the perfect piece for the women in your life.',
      date: 'June 28, 2026',
      category: 'Gifting',
    },
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <div className="bg-[#FAF8F5] py-12 lg:py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="serif-heading text-3xl sm:text-4xl lg:text-5xl text-foreground mb-3">
            The Journal
          </h1>
          <p className="text-[#6B6560]">
            Styling tips, care guides, and stories behind our pieces
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-[#FAF8F5] mb-6 overflow-hidden">
                <div className="w-full h-full bg-[#E8E4DF] group-hover:scale-105 transition-transform duration-700" />
              </div>
              <span className="text-xs uppercase tracking-widest text-accent">{post.category}</span>
              <h2 className="serif-heading text-xl text-foreground mt-2 mb-3 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-[#6B6560] leading-relaxed mb-3">{post.excerpt}</p>
              <span className="text-xs text-[#9B9590]">{post.date}</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalPage;
