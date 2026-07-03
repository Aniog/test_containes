import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const journalPosts = [
  {
    id: 1,
    title: 'The Art of Layering Necklaces',
    excerpt: 'Learn how to create the perfect layered look with our expert tips.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop',
    date: 'June 15, 2024',
  },
  {
    id: 2,
    title: 'Caring for Your Gold Plated Jewelry',
    excerpt: 'Essential tips to keep your pieces looking beautiful for years.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=600&fit=crop',
    date: 'May 28, 2024',
  },
  {
    id: 3,
    title: 'The Perfect Gift: Jewelry for Every Occasion',
    excerpt: 'Find the ideal piece for birthdays, anniversaries, and more.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
    date: 'May 10, 2024',
  },
];

export default function Journal() {
  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-16">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden mb-16">
        <img
          src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1920&h=800&fit=crop"
          alt="Journal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-5xl md:text-6xl text-white">Journal</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalPosts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs text-velmora-taupe mb-2">{post.date}</p>
              <h2 className="font-serif text-2xl mb-2 group-hover:text-velmora-gold transition-colors">
                {post.title}
              </h2>
              <p className="text-velmora-taupe text-sm mb-4">{post.excerpt}</p>
              <Link
                to="#"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-velmora-charcoal hover:text-velmora-gold transition-colors"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}