import React from 'react';

const articles = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'Master the art of necklace layering with our simple guide. From delicate chains to statement pendants, learn how to create the perfect stacked look.',
    category: 'Styling Tips',
    date: 'July 15, 2026',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Jewelry Care',
    excerpt: 'Keep your Velmora pieces looking as brilliant as the day you got them. Our comprehensive care guide covers everything from daily cleaning to long-term storage.',
    category: 'Care Guide',
    date: 'July 8, 2026',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Behind the Design: Our Creative Process',
    excerpt: 'Take a peek behind the curtain and discover how our design team brings each Velmora collection to life, from initial sketch to finished piece.',
    category: 'Behind the Scenes',
    date: 'June 28, 2026',
    readTime: '6 min read',
  },
];

export default function Journal() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="bg-cream-dark py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal">The Journal</h1>
          <p className="font-sans text-sm text-charcoal-muted mt-3">
            Style guides, care tips, and stories from the world of Velmora
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] bg-cream-dark rounded-xl mb-4 overflow-hidden">
                <div className="w-full h-full bg-cream-darker flex items-center justify-center">
                  <span className="font-serif text-2xl text-charcoal-muted/30">V</span>
                </div>
              </div>
              <div>
                <span className="font-sans text-xs text-gold font-medium tracking-wide-custom uppercase">
                  {article.category}
                </span>
                <h2 className="font-serif text-xl text-charcoal mt-2 group-hover:text-gold transition-colors">
                  {article.title}
                </h2>
                <p className="font-sans text-sm text-charcoal-muted mt-2 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 mt-3 text-xs text-charcoal-muted">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
