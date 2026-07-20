import React from "react";

const journalPosts = [
  {
    title: "The Art of Layering Gold",
    excerpt: "How to stack and layer your gold pieces for a sophisticated, curated look.",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=85",
    date: "July 8, 2026",
  },
  {
    title: "Caring for Your Demi-Fine Jewelry",
    excerpt: "Simple tips to keep your gold pieces looking brilliant for years to come.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=85",
    date: "June 22, 2026",
  },
  {
    title: "The Perfect Gift: A Guide",
    excerpt: "Finding the right piece for every woman in your life.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=85",
    date: "June 5, 2026",
  },
];

export default function Journal() {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="section-title">Journal</h1>
          <p className="section-subtitle">
            Stories, style guides, and behind-the-scenes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {journalPosts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-velmora-cream overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5">
                <p className="text-xs text-velmora-stone font-sans">{post.date}</p>
                <h2 className="font-serif text-lg tracking-wider uppercase text-velmora-ebony mt-2 group-hover:opacity-70 transition-opacity">
                  {post.title}
                </h2>
                <p className="text-sm text-velmora-pewter mt-2 leading-relaxed font-sans">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}