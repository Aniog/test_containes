import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const Journal = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const articles = [
    {
      title: "How to Layer Your Necklaces Like a Pro",
      excerpt: "Master the art of the perfect stack with these three simple rules.",
      date: "July 12, 2026",
      category: "Styling Guide"
    },
    {
      title: "The Meaning Behind Our Heirloom Collection",
      excerpt: "Discover the vintage inspirations that shaped our latest designs.",
      date: "June 28, 2026",
      category: "Inside Velmora"
    },
    {
      title: "Sustainable Luxury: Our Commitment to the Planet",
      excerpt: "How we're reducing our footprint while elevating your style.",
      date: "June 15, 2026",
      category: "Values"
    }
  ];

  return (
    <div className="pt-40 pb-20" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-serif mb-6">The Journal</h1>
          <p className="text-muted-foreground font-light italic">Insights, styling tips, and stories from the world of Velmora.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articles.map((article, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-secondary mb-6 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop`}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={`journal-img-${i}`}
                  data-strk-img={`jewelry ${article.category}`}
                  data-strk-img-ratio="4/5"
                  data-strk-img-width="600"
                />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-3">{article.category}</p>
              <h2 className="text-2xl font-serif mb-4 group-hover:text-primary transition-colors">{article.title}</h2>
              <p className="text-sm text-muted-foreground font-light mb-6 line-clamp-2">{article.excerpt}</p>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{article.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
