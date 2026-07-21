import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import CartDrawer from '@/components/ui/CartDrawer';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: 'How to Layer Necklaces Without the Tangle',
      excerpt: 'A guide to mixing lengths, textures, and metals for an effortless look.',
      date: 'JULY 12, 2026',
      readTime: '6 MIN',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      category: 'STYLING',
    },
    {
      id: 2,
      title: 'The Quiet Power of Everyday Gold',
      excerpt: 'Why the pieces you wear daily matter more than the ones you save.',
      date: 'JUNE 28, 2026',
      readTime: '8 MIN',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      category: 'ESSAY',
    },
    {
      id: 3,
      title: 'Caring for Your Jewelry: A Simple Ritual',
      excerpt: 'Three steps to keep your gold looking warm and luminous for years.',
      date: 'JUNE 10, 2026',
      readTime: '4 MIN',
      image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80',
      category: 'CARE',
    },
    {
      id: 4,
      title: 'Gifting Jewelry: What She Really Wants',
      excerpt: 'Notes from our founder on choosing pieces that feel personal.',
      date: 'MAY 22, 2026',
      readTime: '7 MIN',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      category: 'GIFTING',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F1] text-[#1C1917]">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[3px] text-[#A67C52]">WORDS & WISDOM</span>
            <h1 className="font-serif text-5xl tracking-[1px] mt-3">The Journal</h1>
            <p className="text-[#4A4640] mt-3 max-w-md mx-auto">
              Stories, styling notes, and reflections on the jewelry we wear every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
            {articles.map((article) => (
              <article key={article.id} className="group cursor-pointer">
                <div className="overflow-hidden bg-[#EDE8E0] aspect-[16/10] mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-[1.5px] text-[#8A8178] mb-2">
                  <span>{article.category}</span>
                  <span>·</span>
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl tracking-[0.5px] leading-tight mb-3 group-hover:text-[#A67C52] transition-colors">
                  {article.title}
                </h2>
                <p className="text-[#4A4640] leading-relaxed">{article.excerpt}</p>
                <span className="inline-block mt-4 text-sm tracking-[1.5px] text-[#A67C52] group-hover:underline">
                  READ MORE →
                </span>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/shop"
              className="inline-block border border-[#A67C52] text-[#A67C52] px-8 py-3 text-sm tracking-[1.5px] hover:bg-[#A67C52] hover:text-white transition-all"
            >
              SHOP THE STORIES
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Journal;
