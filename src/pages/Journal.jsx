import React from 'react';
import Footer from '@/components/layout/footer';

const Journal = () => {
  const posts = [
    { id: 1, title: 'How to Style Gold Hoops for Work', date: 'June 28, 2026', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80' },
    { id: 2, title: 'The Art of Gifting Fine Jewelry', date: 'June 14, 2026', image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80' },
    { id: 3, title: 'Why Demi-Fine Is the New Fine', date: 'May 30, 2026', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80' },
  ];

  return (
    <div className="min-h-screen bg-brand-bg">
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=1600&q=80" alt="Journal" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="font-serif text-4xl sm:text-5xl text-white">Journal</h1>
        </div>
      </section>

      <section className="bg-brand-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="group">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-brand-warm">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="mt-4 text-xs text-brand-muted">{post.date}</p>
                <h3 className="mt-2 font-serif text-xl text-brand-ink group-hover:text-brand-accent transition-colors">{post.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Journal;
