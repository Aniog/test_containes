export default function Journal() {
  const posts = [
    {
      title: 'How to Layer Necklaces Like a Stylist',
      excerpt: 'The art of stacking is simpler than you think. Here are our top tips for creating a perfectly curated necklace stack.',
      date: 'June 2026',
      category: 'Styling',
      query: 'layered gold necklaces styling editorial flat lay',
    },
    {
      title: 'The Science Behind Hypoallergenic Jewelry',
      excerpt: 'Why does some jewelry irritate your skin? We break down the materials and why 18K gold plating makes all the difference.',
      date: 'May 2026',
      category: 'Materials',
      query: 'hypoallergenic jewelry materials gold science closeup',
    },
    {
      title: '5 Earring Styles Every Woman Should Own',
      excerpt: 'From the everyday huggie to the statement drop, these five styles will cover every occasion in your calendar.',
      date: 'April 2026',
      category: 'Style Guide',
      query: 'earring styles collection gold variety editorial display',
    },
  ]

  return (
    <div className="min-h-screen bg-cream-100 pt-24 pb-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <h1 className="heading-serif text-3xl md:text-5xl text-warm-900 mb-4">The Velmora Journal</h1>
          <p className="text-sm text-warm-800/60 tracking-wide">
            Style tips, material deep-dives, and stories from our studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden mb-5 bg-cream-200/50">
                <img
                  data-strk-img-id={`journal-${i}`}
                  data-strk-img={`[journal-title-${i}] ${post.query}`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-gold-500 font-medium mb-2">
                {post.category} · {post.date}
              </p>
              <h2 id={`journal-title-${i}`} className="heading-serif text-xl text-warm-900 mb-2 group-hover:text-gold-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-warm-800/60 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
