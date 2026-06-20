import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Layer Necklaces Without the Tangle",
      excerpt: "A simple guide to mixing lengths, textures, and metals for an effortless look.",
      date: "June 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 2,
      title: "The Quiet Power of Everyday Gold",
      excerpt: "Why we believe the pieces you reach for daily deserve the same care as your special-occasion jewelry.",
      date: "May 28, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    },
    {
      id: 3,
      title: "Caring for Your Gold: A Seasonal Guide",
      excerpt: "Simple rituals to keep your jewelry looking its best through summer heat, winter cold, and everything in between.",
      date: "May 10, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.2em] text-[#B8865A]">THE JOURNAL</span>
          <h1 className="section-title mt-3">Stories & Notes</h1>
          <p className="text-[#5C5C5C] mt-4 max-w-sm mx-auto">
            Reflections on craft, wear, and the small rituals that make jewelry meaningful.
          </p>
        </div>

        <div className="space-y-12">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to="#" className="block">
                <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="aspect-[16/10] bg-[#F5F2ED] overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3 text-xs tracking-[0.1em] text-[#5C5C5C] mb-3">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h2 className="text-2xl tracking-[0.02em] mb-3 group-hover:text-[#B8865A] transition-colors">
                      {article.title}
                    </h2>
                    <p className="body-text text-[#5C5C5C]">{article.excerpt}</p>
                    <span className="inline-block mt-4 text-sm tracking-[0.1em] text-[#B8865A] group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#EDE8E0] text-center">
          <p className="text-sm text-[#5C5C5C]">More stories coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;