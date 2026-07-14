const journalPosts = [
  {
    id: 1,
    title: 'The Art of Layering Necklaces',
    excerpt: 'Master the trend of necklace stacking with our comprehensive guide to creating your perfect layered look.',
    category: 'Styling',
    date: 'December 12, 2024',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
  },
  {
    id: 2,
    title: 'Gold Jewelry Care 101',
    excerpt: 'Essential tips for keeping your gold-plated jewelry looking radiant for years to come.',
    category: 'Care Guide',
    date: 'November 28, 2024',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80'
  },
  {
    id: 3,
    title: 'Gift Guide: Holiday 2024',
    excerpt: 'Find the perfect Velmora piece for everyone on your list, from self-purchase treats to meaningful gifts.',
    category: 'Gift Guide',
    date: 'November 15, 2024',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80'
  }
];

export default function Journal() {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-[#F5F3EF] py-16 md:py-20">
        <div className="container text-center">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#C4A962] mb-4 block">
            Journal
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1C1917] mb-4">
            Stories & Inspiration
          </h1>
          <p className="text-[#57534E] max-w-lg mx-auto">
            Discover styling tips, behind-the-scenes stories, and all things Velmora.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-16">
        <div className="container">
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#C4A962]">
                {journalPosts[0].category}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-[#1C1917] mt-2 mb-4">
                {journalPosts[0].title}
              </h2>
              <p className="text-[#57534E] mb-4">
                {journalPosts[0].excerpt}
              </p>
              <p className="text-sm text-[#A8A29E]">{journalPosts[0].date}</p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={journalPosts[0].image}
                alt={journalPosts[0].title}
                className="w-full aspect-[4/3] object-cover rounded-lg"
              />
            </div>
          </article>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 md:py-16 bg-[#F5F3EF]">
        <div className="container">
          <h2 className="font-serif text-2xl text-[#1C1917] mb-8">More Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journalPosts.slice(1).map(post => (
              <article key={post.id} className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#C4A962]">
                  {post.category}
                </span>
                <h3 className="font-serif text-lg text-[#1C1917] mt-1 mb-2 group-hover:text-[#C4A962] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#57534E] mb-2">{post.excerpt}</p>
                <p className="text-xs text-[#A8A29E]">{post.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
