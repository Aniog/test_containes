const JournalPage = () => {
  const posts = [
    {
      id: 1,
      title: 'The Art of Layering: A Guide to Stacking Necklaces',
      excerpt: 'Master the effortless layered look with our styling tips for combining chains of different lengths and textures.',
      date: 'June 15, 2026',
    },
    {
      id: 2,
      title: 'Gold Care 101: Keeping Your Jewelry Radiant',
      excerpt: 'Simple steps to maintain the brilliance of your gold-plated pieces, so they stay as stunning as the day you got them.',
      date: 'May 28, 2026',
    },
    {
      id: 3,
      title: '5 Jewelry Trends That Are Defining 2026',
      excerpt: 'From sculptural hoops to personalized pendants, these are the styles dominating the year so far.',
      date: 'May 10, 2026',
    },
  ]

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <h1 className="font-serif text-4xl md:text-5xl text-velmora-text tracking-wide text-center">
          Journal
        </h1>
        <div className="w-12 h-px bg-velmora-gold mx-auto mt-6 mb-16" />

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer border-b border-velmora-border pb-12">
              <p className="text-xs text-velmora-dim uppercase tracking-wider mb-3">{post.date}</p>
              <h2 className="font-serif text-xl md:text-2xl text-velmora-text group-hover:text-velmora-gold transition-colors tracking-wide">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-velmora-muted leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-4 text-xs font-medium uppercase tracking-[0.15em] text-velmora-gold group-hover:text-velmora-gold-light transition-colors">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JournalPage
