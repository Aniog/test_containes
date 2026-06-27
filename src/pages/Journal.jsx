import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/ui/CartDrawer';

const journalPosts = [
  {
    id: 1,
    title: "The Art of Layering: How to Style Multiple Necklaces",
    excerpt: "A guide to creating dimension and personal meaning through thoughtful layering.",
    date: "June 12, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
  },
  {
    id: 2,
    title: "Why We Choose 18K Gold Plating",
    excerpt: "The difference between fine, demi-fine, and fashion jewelry — and why we land in the middle.",
    date: "May 28, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
  },
  {
    id: 3,
    title: "Behind the Design: The Golden Sphere Huggies",
    excerpt: "From sketch to finished piece — the story of our most beloved everyday earrings.",
    date: "May 3, 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
  },
  {
    id: 4,
    title: "Caring for Your Jewelry: A Simple Ritual",
    excerpt: "How to keep your pieces looking beautiful for years with minimal effort.",
    date: "April 19, 2026",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
  },
];

const Journal = () => {
  return (
    <div className="min-h-screen bg-velmora-bg">
      <Navbar />
      
      <main className="pt-20">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Stories & Rituals</span>
            <h1 className="font-serif text-5xl md:text-6xl tracking-tight mt-2">The Journal</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
            {journalPosts.map((post) => (
              <article key={post.id} className="group">
                <Link to="/journal" className="block">
                  <div className="aspect-[16/10] overflow-hidden bg-velmora-bg-alt mb-6">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-xs tracking-widest text-velmora-text-muted mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-2xl tracking-tight mb-3 group-hover:text-velmora-gold-dark transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-velmora-text-muted">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-4 text-xs tracking-[0.1em] uppercase border-b border-velmora-gold pb-px group-hover:border-velmora-gold-dark">
                    Read More
                  </span>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-sm text-velmora-text-muted">More stories coming soon. Follow us on Instagram for daily inspiration.</p>
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Journal;
