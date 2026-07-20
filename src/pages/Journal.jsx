import React from 'react';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';

const Journal = () => {
  const posts = [
    { id: 1, title: 'How to Style Gold Huggies for Everyday Wear', date: 'July 12, 2026', image: 'https://placehold.co/800x600/f6f4f0/1c1917?text=Style+Gold+Huggies&font=playfair-display' },
    { id: 2, title: 'The Art of Gifting Fine Jewelry', date: 'June 28, 2026', image: 'https://placehold.co/800x600/f6f4f0/1c1917?text=Gifting+Fine+Jewelry&font=playfair-display' },
    { id: 3, title: 'Why Demi-Fine Jewelry is the New Luxury', date: 'June 10, 2026', image: 'https://placehold.co/800x600/f6f4f0/1c1917?text=Demi-Fine+Luxury&font=playfair-display' },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4f0]">
      <Nav />
      <main className="section-container py-20">
        <h1 className="font-serif text-3xl text-[#1c1917] md:text-5xl">Journal</h1>
        <p className="mt-2 text-sm text-[#5c5650]">Stories, styling tips, and behind-the-scenes.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#f1efe9]">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="mt-4 font-serif text-lg text-[#1c1917] group-hover:text-[#b8860b]">{post.title}</p>
              <p className="mt-1 text-xs text-[#8a827a]">{post.date}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Journal;
