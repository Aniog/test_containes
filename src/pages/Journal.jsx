import React from 'react';
import { Link } from 'react-router-dom';

export default function Journal() {
  const journalPosts = [
    {
      id: 1,
      title: 'How to Style Your Huggies',
      excerpt: 'From minimalist to statement looks, discover the versatile ways to wear your favorite huggie earrings.',
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=400&fit=crop",
      date: 'June 15, 2026',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Art of Layering Necklaces',
      excerpt: 'Master the art of necklace layering with our guide to creating effortlessly elegant combinations.',
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop",
      date: 'June 8, 2026',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Why 18K Gold Plating Matters',
      excerpt: 'Understanding the difference between gold-plated, gold-filled, and solid gold jewelry.',
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=400&fit=crop",
      date: 'May 28, 2026',
      readTime: '6 min read'
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide">
            The Journal
          </h1>
          <div className="hairline w-24 mx-auto mb-6" />
          <p className="text-velmora-text-light max-w-2xl mx-auto">
            Styling tips, jewelry care guides, and stories from the Velmora community.
          </p>
        </div>

        {/* Journal Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {journalPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              {/* Post Image */}
              <div className="relative overflow-hidden bg-velmora-warm-gray aspect-[3/2] mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                />
              </div>

              {/* Post Content */}
              <div>
                <div className="flex items-center space-x-4 mb-3 text-sm text-velmora-text-light">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="font-serif text-xl mb-3 group-hover:text-velmora-gold transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-velmora-text-light leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <span className="text-sm tracking-wider uppercase text-velmora-gold">
                  Read More →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 pt-12 border-t border-velmora-border text-center">
          <h3 className="font-serif text-2xl mb-4">Enjoyed this article?</h3>
          <p className="text-velmora-text-light mb-6">
            Subscribe to The Journal for weekly styling tips and exclusive content.
          </p>
          <Link
            to="/#newsletter"
            className="btn-premium inline-block"
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </div>
  );
}
