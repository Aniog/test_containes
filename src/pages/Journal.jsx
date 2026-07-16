import React, { useEffect, useRef } from 'react';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Journal = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From sunlit summer layers to winter's quiet warmth—our guide to wearing gold year-round.",
      date: "JUL 12, 2026",
      imageQuery: "gold jewelry styled on woman seasonal fashion editorial",
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "A considered approach to mixing lengths, textures, and tones for a look that feels uniquely yours.",
      date: "JUN 28, 2026",
      imageQuery: "layered gold necklaces on model close up",
    },
    {
      id: 3,
      title: "Behind the Craft: Our Gold Plating Process",
      excerpt: "Why we choose 18K gold plating, and how we ensure every piece meets our standards for beauty and durability.",
      date: "JUN 15, 2026",
      imageQuery: "jewelry workshop artisan hands gold plating process",
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F8F5F1]">
      <Navigation />

      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center border-b border-[#E5DDD1]">
          <p className="text-xs tracking-[0.15em] text-[#B89778] mb-2">STORIES & INSPIRATION</p>
          <h1 className="font-serif text-5xl tracking-wide">The Journal</h1>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="space-y-16">
            {articles.map((article, index) => (
              <article key={article.id} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className={`aspect-[16/10] bg-[#F0EBE3] overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    data-strk-img-id={`journal-${article.id}`}
                    data-strk-img={article.imageQuery}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs tracking-[0.1em] text-[#B89778] mb-2">{article.date}</p>
                  <h2 className="font-serif text-2xl tracking-wide mb-4">{article.title}</h2>
                  <p className="text-[#5C4E42] mb-6 leading-relaxed">{article.excerpt}</p>
                  <a href="#read" className="text-sm tracking-wider hover:text-[#B89778] transition-colors">
                    READ MORE →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="bg-[#1C1917] text-[#F8F5F1] py-12 text-center">
          <p className="text-sm tracking-wider mb-2">WANT MORE STORIES IN YOUR INBOX?</p>
          <Link to="/" className="text-[#B89778] hover:underline">JOIN OUR NEWSLETTER</Link>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Journal;
