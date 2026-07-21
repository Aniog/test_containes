import React from 'react';

const journalPosts = [
  {
    id: 1,
    title: 'How to Style Layered Necklaces',
    excerpt: 'Master the art of layering with our guide to creating the perfect necklace stack.',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    date: '2024-01-15'
  },
  {
    id: 2,
    title: 'Caring for Your Gold-Plated Jewelry',
    excerpt: 'Learn how to keep your Velmora pieces looking beautiful for years to come.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    date: '2024-01-10'
  },
  {
    id: 3,
    title: 'The Perfect Gift: Jewelry for Every Occasion',
    excerpt: 'From birthdays to anniversaries, discover the perfect piece for your loved ones.',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    date: '2024-01-05'
  }
];

export default function Journal() {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center py-12">
        <h1 className="font-serif text-5xl uppercase tracking-widest mb-4">Journal</h1>
        <div className="hairline w-24 mx-auto mb-4" />
        <p className="text-gray-600 uppercase tracking-wider text-sm">Stories, styling tips & more</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {journalPosts.map(post => (
          <article key={post.id} className="group cursor-pointer">
            <div className="bg-velmora-warm aspect-[4/3] mb-4 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-sm text-gray-600 uppercase tracking-wider mb-2">
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <h2 className="font-serif text-2xl mb-3 group-hover:text-velmora-gold transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}