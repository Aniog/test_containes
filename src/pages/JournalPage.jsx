import React from 'react';

export default function JournalPage() {
  const posts = [
    {
      id: 1,
      title: 'The Art of Layering Necklaces',
      excerpt: 'How to create the perfect stacked look with our delicate chains.',
      image: 'https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=800&h=500&fit=crop',
      date: 'July 10, 2026',
    },
    {
      id: 2,
      title: 'Caring for Your Gold Plated Jewelry',
      excerpt: 'Simple tips to keep your pieces looking brand new for years to come.',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=500&fit=crop',
      date: 'June 28, 2026',
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry for Every Occasion',
      excerpt: 'From birthdays to anniversaries, find the perfect piece for someone special.',
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=500&fit=crop',
      date: 'June 15, 2026',
    },
  ];

  return (
    <div className="pt-20 md:pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="serif-heading text-4xl md:text-5xl mb-3">The Journal</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Stories, styling tips, and behind-the-scenes from the world of Velmora.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                <h2 className="serif-heading text-xl mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
