import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: 'The Art of Layering Necklaces',
      excerpt: 'Master the art of necklace layering with our guide to mixing lengths, textures, and tones for a look that\'s uniquely yours.',
      date: 'June 15, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80'
    },
    {
      id: 2,
      title: 'Why Demi-Fine Jewelry is the New Luxury',
      excerpt: 'Discover why more women are choosing demi-fine pieces that offer the look of fine jewelry without the prohibitive price tag.',
      date: 'June 8, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80'
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry for Every Personality',
      excerpt: 'From minimalist to maximalist, find the perfect piece for every special someone in your life.',
      date: 'May 28, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="section-title mb-4">The Journal</h1>
          <p className="text-brand-muted max-w-xl mx-auto">
            Stories, guides, and inspiration for the modern jewelry lover.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to={`/journal/${article.id}`} className="block">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-brand-muted">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="font-serif text-xl text-brand-ink group-hover:text-brand-accent transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-brand-muted leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-brand-accent mt-2">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
