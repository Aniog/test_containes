import { Link } from 'react-router-dom';

const journalPosts = [
  {
    id: 1,
    title: 'The Art of Layering Necklaces',
    excerpt: 'Master the art of creating a perfectly layered necklace look with our expert guide.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop',
    date: 'January 15, 2024',
  },
  {
    id: 2,
    title: 'Caring for Your Gold Jewelry',
    excerpt: 'Essential tips to keep your gold-plated pieces looking beautiful for years.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=600&fit=crop',
    date: 'December 28, 2023',
  },
  {
    id: 3,
    title: 'The Perfect Gift: Jewelry for Every Occasion',
    excerpt: 'Find the ideal piece for birthdays, anniversaries, and special moments.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
    date: 'December 10, 2023',
  },
];

export default function Journal() {
  return (
    <div className="min-h-screen bg-velmora-cream pt-20 md:pt-24">
      {/* Header */}
      <div className="text-center py-16 md:py-20">
        <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
          Journal
        </h1>
        <p className="text-velmora-gray max-w-xl mx-auto px-4">
          Stories, styling tips, and inspiration from the world of fine jewelry.
        </p>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {journalPosts.map((post) => (
            <article key={post.id} className="group">
              <Link to="#">
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-velmora-gray text-sm mb-2">{post.date}</p>
                <h2 className="font-serif text-xl text-velmora-charcoal group-hover:text-velmora-gold transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-velmora-gray text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}