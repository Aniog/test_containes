import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const Journal = () => {
  const posts = [
    { id: 1, title: 'How to Style Gold Hoops for Every Occasion', date: 'Jul 12, 2026', imgId: 'journal-1', titleId: 'journal-title-1' },
    { id: 2, title: 'The Art of Layering Necklaces', date: 'Jun 28, 2026', imgId: 'journal-2', titleId: 'journal-title-2' },
    { id: 3, title: 'Why Demi-Fine Jewelry is the New Everyday Luxury', date: 'Jun 10, 2026', imgId: 'journal-3', titleId: 'journal-title-3' },
  ];

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <CartDrawer />
      <main>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-xs uppercase tracking-widest text-brand-accent mb-2">Journal</p>
              <h1 id="journal-page-title" className="font-serif text-3xl md:text-5xl text-brand-ink">Stories & Inspiration</h1>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {posts.map((post) => (
                <article key={post.id} className="group cursor-pointer">
                  <div className="overflow-hidden rounded-sm aspect-[4/3] bg-brand-warm">
                    <img
                      data-strk-img-id={post.imgId}
                      data-strk-img={`[${post.titleId}] [journal-page-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 text-xs text-brand-muted">{post.date}</p>
                  <h2 id={post.titleId} className="mt-2 font-serif text-xl text-brand-ink group-hover:text-brand-accent transition-colors">{post.title}</h2>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Journal;
