import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/cart/CartDrawer';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Layer Necklaces Like a Stylist",
      excerpt: "The art of mixing lengths, textures, and metals for an effortlessly curated look.",
      date: "June 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80"
    },
    {
      id: 2,
      title: "The Meaning Behind Heirloom Jewelry",
      excerpt: "Why the pieces we inherit carry more than gold — they carry memory.",
      date: "May 28, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=900&q=80"
    },
    {
      id: 3,
      title: "Caring for Your Gold: A Simple Guide",
      excerpt: "Keep your demi-fine pieces looking luminous for years with these gentle rituals.",
      date: "May 10, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#2C2823]">
      <Navbar />
      
      <div className="max-w-[1100px] mx-auto px-6 pt-24 pb-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[3px] text-[#C5A46E]">THE JOURNAL</span>
          <h1 className="font-serif text-4xl md:text-5xl tracking-[-1px] mt-2">Stories & Notes</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <div className="aspect-[16/10] bg-[#E8E4DC] overflow-hidden mb-5">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center gap-3 text-xs tracking-[1.5px] text-[#6B665F] mb-2">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="font-serif text-xl tracking-[-0.3px] mb-2 group-hover:text-[#C5A46E] transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-[#6B665F] leading-relaxed mb-3">{article.excerpt}</p>
              <span className="text-xs tracking-[2px] text-[#C5A46E] group-hover:underline">READ MORE →</span>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-[#6B665F]">More stories coming soon. Follow us on Instagram for daily inspiration.</p>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Journal;