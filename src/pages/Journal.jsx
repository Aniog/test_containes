import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const journalPosts = [
  {
    id: 1,
    title: 'The Art of Layering Necklaces',
    excerpt: 'Learn how to create stunning layered looks with our guide to necklace stacking.',
    date: '2024-12-15',
    category: 'Styling',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
  },
  {
    id: 2,
    title: 'Why Demi-Fine Jewelry is the Future',
    excerpt: 'Discover why more women are choosing demi-fine pieces over traditional fine jewelry.',
    date: '2024-12-08',
    category: 'Journal',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
  },
  {
    id: 3,
    title: 'Holiday Gift Guide 2024',
    excerpt: 'The perfect jewelry gifts for everyone on your list this holiday season.',
    date: '2024-11-28',
    category: 'Gift Guide',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c11ab9d68?w=800&q=80',
  },
];

const Journal = () => {
  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="py-16 md:py-24 bg-base-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">The Journal</h1>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-ink-muted max-w-2xl mx-auto">
            Stories, styling tips, and inspiration from the world of Velmora.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 md:py-32 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {journalPosts.map((post) => (
              <article
                key={post.id}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-base-muted mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-ink-muted">
                    <span className="text-gold uppercase tracking-wider">{post.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl text-cream group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-ink-muted leading-relaxed">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-gold text-sm tracking-wider uppercase group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Journal;
