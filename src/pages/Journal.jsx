import React from "react";
import { Link } from "react-router-dom";

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From warm summer evenings to crisp winter layers, discover how to make your gold pieces work year-round.",
      date: "JULY 2026",
      readTime: "6 MIN",
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "A guide to creating dimension and interest with multiple chains, pendants, and charms.",
      date: "JUNE 2026",
      readTime: "5 MIN",
    },
    {
      id: 3,
      title: "Caring for Your Demi-Fine Pieces",
      excerpt: "Simple rituals to keep your gold jewelry looking luminous for years to come.",
      date: "MAY 2026",
      readTime: "4 MIN",
    },
    {
      id: 4,
      title: "The Meaning Behind Our Names",
      excerpt: "Why we chose 'Vivid Aura,' 'Majestic Flora,' and the stories woven into each collection.",
      date: "APRIL 2026",
      readTime: "7 MIN",
    },
  ];

  return (
    <div className="pt-20 bg-[#F9F6F1]">
      <div className="max-w-4xl mx-auto px-6 py-14">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[2px] text-[#C5A46E]">STORIES & INSPIRATION</span>
          <h1 className="font-serif text-5xl tracking-[1px] mt-2">The Journal</h1>
          <p className="text-[#6B6359] mt-3 max-w-md mx-auto">
            Notes on craft, styling, and the quiet moments that jewelry becomes part of.
          </p>
        </div>

        <div className="space-y-10">
          {articles.map((article, idx) => (
            <article key={idx} className="group border-b border-[#E5E0D8] pb-10 last:border-0">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                <span className="text-xs tracking-[2px] text-[#C5A46E]">{article.date}</span>
                <span className="text-xs text-[#9A8F7E]">{article.readTime} READ</span>
              </div>
              <h2 className="font-serif text-3xl tracking-[0.5px] text-[#2C2823] group-hover:text-[#C5A46E] transition-colors mb-3">
                {article.title}
              </h2>
              <p className="text-[#6B6359] leading-relaxed max-w-2xl">{article.excerpt}</p>
              <button className="mt-4 text-sm tracking-[1.5px] text-[#C5A46E] group-hover:text-[#A68B5B] transition-colors">
                READ ARTICLE →
              </button>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/shop" className="text-sm tracking-[1.5px] text-[#C5A46E] hover:text-[#A68B5B]">
            SHOP THE PIECES FEATURED IN OUR STORIES →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;
