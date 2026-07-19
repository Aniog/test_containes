const JournalPage = () => {
  const articles = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and styles.',
      date: 'July 15, 2026',
      category: 'Styling',
    },
    {
      id: 2,
      title: 'The Care Guide: Keeping Your Gold Jewelry Beautiful',
      excerpt: 'Simple tips to maintain the luster of your 18K gold plated pieces for years to come.',
      date: 'July 8, 2026',
      category: 'Care',
    },
    {
      id: 3,
      title: 'Behind the Design: Our Summer Collection',
      excerpt: 'An exclusive look at the inspiration and craftsmanship behind our latest collection.',
      date: 'June 28, 2026',
      category: 'Collections',
    },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="velmora-serif text-3xl sm:text-4xl text-[var(--velmora-dark)] mb-3">The Journal</h1>
          <p className="text-sm text-[var(--velmora-text-muted)]">Styling tips, care guides, and behind-the-scenes stories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-[var(--velmora-bg-alt)] mb-4 overflow-hidden">
                <div className="w-full h-full bg-[var(--velmora-border)] group-hover:scale-105 transition-transform duration-700" />
              </div>
              <span className="text-xs tracking-widest uppercase text-[var(--velmora-accent)]">{article.category}</span>
              <h2 className="velmora-serif text-xl text-[var(--velmora-dark)] mt-2 mb-2 group-hover:text-[var(--velmora-accent)] transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-[var(--velmora-text-muted)] leading-relaxed mb-3">{article.excerpt}</p>
              <p className="text-xs text-[var(--velmora-text-light)]">{article.date}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalPage;
