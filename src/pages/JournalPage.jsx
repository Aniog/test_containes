const journalPosts = [
  {
    id: 1,
    title: 'How to Layer Your Necklaces Like a Pro',
    excerpt: 'Master the art of layering with our guide to creating the perfect necklace stack.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
    date: 'June 15, 2024'
  },
  {
    id: 2,
    title: 'Caring for Your Gold Plated Jewelry',
    excerpt: 'Simple tips to keep your jewelry looking beautiful for years to come.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=400&fit=crop',
    date: 'June 8, 2024'
  },
  {
    id: 3,
    title: 'The Art of Minimalist Jewelry',
    excerpt: 'Discover how less can be more when it comes to accessorizing.',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=400&fit=crop',
    date: 'June 1, 2024'
  }
];

export default function JournalPage() {
  return (
    <div className="pt-[var(--header-height)]">
      {/* Header */}
      <div className="bg-[#F5F0E8] py-16">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-center mb-3">
            Journal
          </h1>
          <p className="text-[#6B6B6B] text-center max-w-md mx-auto">
            Stories, styling tips, and behind-the-scenes moments from our studio.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journalPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[3/2] bg-[#F5F0E8] overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs text-[#9A9A9A] tracking-wider">{post.date}</span>
                <h2 className="font-serif text-xl tracking-wide mt-2 mb-2 group-hover:text-[#C9A962] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}