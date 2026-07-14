import React from 'react';
import { Link } from 'react-router-dom';

const journalPosts = [
  {
    id: 1,
    title: 'The Art of Layering Necklaces',
    excerpt: 'Discover how to master the layered necklace look with our guide to creating effortless, elegant combinations.',
    date: 'June 15, 2026',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    category: 'Styling Tips'
  },
  {
    id: 2,
    title: 'Why Demi-Fine Jewelry is the Future',
    excerpt: 'Explore the rise of demi-fine jewelry and why its becoming the go-to choice for modern women.',
    date: 'May 28, 2026',
    image: 'https://via.placeholder.com/800x600/FFF8F0/1a1a1a?text=Velmora+Journal',
    category: 'Jewelry Trends'
  },
  {
    id: 3,
    title: 'Caring for Your Gold-Plated Jewelry',
    excerpt: 'Learn the best practices for maintaining your Velmora pieces so they stay beautiful for years to come.',
    date: 'May 10, 2026',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    category: 'Care Guide'
  },
  {
    id: 4,
    title: 'Behind the Design: Majestic Flora Nectar',
    excerpt: 'Take a peek into our design process and discover the inspiration behind one of our bestseling pieces.',
    date: 'April 22, 2026',
    image: 'https://via.placeholder.com/800x600/FFF8F0/1a1a1a?text=Velmora+Journal',
    category: 'Behind the Scenes'
  }
];

export default function Journal() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-velmora-cream">
        <div className="container-velmora text-center">
          <h1
            className="text-5xl md:text-6xl font-light mb-6"
            style={{ fontFamily: 'Cormorant Garamond', serif: true }}
          >
            The Journal
          </h1>
          <div className="hairline w-24 mx-auto mb-8" />
          <p className="text-lg max-w-2xl mx-auto text-velmora-charcoal/80">
            Stories, styling tips, and insights from the world of Velmora. Discover the art of jewelry,
            the craft behind our pieces, and inspiration for every occasion.
          </p>
        </div>
      </section>

      {/* Journal Posts Grid */}
      <section className="py-20 px-4">
        <div className="container-velmora">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {journalPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <Link to={`/journal/${post.id}`} className="block">
                  <div className="mb-6 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div>
                    <span className="text-sm text-velmora-gold uppercase tracking-wider font-medium">
                      {post.category}
                    </span>
                    <h2
                      className="text-2xl font-light mt-3 mb-3 group-hover:text-velmora-gold transition-colors"
                      style={{ fontFamily: 'Cormorant Garamond', serif: true }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-velmora-charcoal/70 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center text-sm text-velmora-charcoal/60">
                      <span>{post.date}</span>
                      <span className="group-hover:text-velmora-gold transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 bg-velmora-charcoal text-white">
        <div className="container-velmora text-center">
          <h2
            className="text-4xl font-light mb-6"
            style={{ fontFamily: 'Cormorant Garamond', serif: true }}
          >
            Stay Inspired
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our journal for exclusive content, styling tips, and first access to new collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-velmora-gold"
            />
            <button className="btn-velmora bg-velmora-gold text-velmora-charcoal hover:bg-white">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
