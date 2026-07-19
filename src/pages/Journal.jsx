import React from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import { Link } from 'react-router-dom';

const journalPosts = [
  {
    id: 1,
    title: "How to Layer Necklaces Like a Stylist",
    excerpt: "The art of mixing lengths, textures, and metals for an effortless look.",
    date: "July 12, 2026",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
  },
  {
    id: 2,
    title: "The Meaning Behind Our Heirloom Collection",
    excerpt: "Why we design pieces meant to be passed down through generations.",
    date: "June 28, 2026",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
  },
  {
    id: 3,
    title: "Caring for Your Gold Jewelry",
    excerpt: "Simple rituals to keep your pieces looking radiant for years.",
    date: "June 15, 2026",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
  }
];

const Journal = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <div className="mb-12">
          <p className="text-xs tracking-[0.15em] text-[#C5A46E] mb-2">STORIES & INSPIRATION</p>
          <h1 className="font-serif-custom text-4xl tracking-[0.02em]">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalPosts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[16/10] bg-[#1A1816] overflow-hidden mb-5">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <p className="text-xs tracking-[0.1em] text-[#6B665F] mb-2">{post.date}</p>
              <h3 className="font-serif-custom text-xl tracking-[0.02em] mb-3 leading-tight">{post.title}</h3>
              <p className="text-sm text-[#6B665F] mb-4">{post.excerpt}</p>
              <span className="text-xs tracking-[0.1em] border-b border-[#1A1816] pb-0.5 group-hover:text-[#C5A46E] group-hover:border-[#C5A46E] transition-colors">
                READ MORE
              </span>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-[#6B665F]">More stories coming soon.</p>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Journal;
