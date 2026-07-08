import { Link } from 'react-router-dom';

const journalPosts = [
  {
    id: 1,
    title: 'The Art of Layering Necklaces',
    excerpt: 'Learn how to create the perfect layered necklace look with our expert tips.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
    date: 'June 15, 2024',
  },
  {
    id: 2,
    title: 'Caring for Your Gold Plated Jewelry',
    excerpt: 'Essential tips to keep your jewelry looking beautiful for years to come.',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=400&fit=crop',
    date: 'May 28, 2024',
  },
  {
    id: 3,
    title: 'The Perfect Gift: Jewelry for Every Occasion',
    excerpt: 'Discover how to choose the perfect piece for birthdays, anniversaries, and more.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop',
    date: 'May 10, 2024',
  },
];

export default function Journal() {
  return (
    <main className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
            Journal
          </h1>
          <p className="font-sans text-velmora-taupe max-w-xl mx-auto">
            Stories, tips, and inspiration from the world of fine jewelry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalPosts.map((post) => (
            <article key={post.id} className="group">
              <Link to={`/journal/${post.id}`}>
                <div className="aspect-[3/2] bg-velmora-sand overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="font-sans text-xs text-velmora-taupe">
                  {post.date}
                </span>
                <h2 className="font-serif text-xl text-velmora-charcoal mt-2 group-hover:text-velmora-gold transition-colors">
                  {post.title}
                </h2>
                <p className="font-sans text-sm text-velmora-taupe mt-2">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}