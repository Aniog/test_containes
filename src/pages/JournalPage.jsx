import React from 'react';
import { Link } from 'react-router-dom';

export default function JournalPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container-luxury py-20">
        <h1 className="font-serif text-4xl md:text-5xl mb-12 text-center">Journal</h1>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-600 mb-12">
            Stories, styling tips, and insights from the world of demi-fine jewelry.
          </p>

          <div className="grid gap-12">
            {/* Placeholder Journal Entries */}
            {[
              {
                title: 'How to Style Huggie Earrings',
                excerpt: 'From day to night, discover the versatility of huggie earrings...',
                date: 'Coming Soon'
              },
              {
                title: 'The Art of Layering Necklaces',
                excerpt: 'Create your perfect necklace stack with our guide...',
                date: 'Coming Soon'
              },
              {
                title: 'Caring for Your Gold-Plated Jewelry',
                excerpt: 'Tips to keep your Velmora pieces looking beautiful for years...',
                date: 'Coming Soon'
              }
            ].map((post, index) => (
              <article key={index} className="border-b border-gray-200 pb-12">
                <h2 className="font-serif text-2xl mb-3">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <span className="text-[#C9A96E] text-sm uppercase tracking-wider">Read More →</span>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/" className="text-[#C9A96E] hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
