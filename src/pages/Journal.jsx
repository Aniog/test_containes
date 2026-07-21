import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: "The Art of Layering: How to Stack Your Necklaces",
      category: "Styling Guide",
      excerpt: "Master the mix of lengths and textures with our foolproof layering guide...",
      date: "July 15, 2026"
    },
    {
      id: 2,
      title: "Gold Vermeil vs. Gold Plated: What's the Difference?",
      category: "Education",
      excerpt: "Understanding the materials that make your jewelry last a lifetime...",
      date: "July 08, 2026"
    },
    {
      id: 3,
      title: "Behind the Design: The Amber Lace Collection",
      category: "Behind the Scenes",
      excerpt: "Take a peek into our studio as we bring our newest collection to life...",
      date: "June 24, 2026"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-background pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-primary uppercase leading-tight">
            The Journal
          </h1>
          <div className="w-12 h-[1px] bg-accent/30 mx-auto" />
          <p className="text-sm text-muted-foreground tracking-widest uppercase max-w-xl">
            Insights into craftsmanship, styling, and the jewelry lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <article key={post.id} className="group space-y-6">
              <div className="aspect-[16/10] bg-muted overflow-hidden">
                <img 
                  data-strk-img-id={`journal-post-${post.id}`}
                  data-strk-img={`aesthetic luxury jewelry lifestyle ${post.category} warm tone`}
                  data-strk-img-ratio="16x10"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-accent">{post.category}</span>
                  <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-serif tracking-tight text-primary group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed italic font-serif">
                  {post.excerpt}
                </p>
                <Button variant="link" className="p-0 h-auto text-[10px] tracking-[0.2em] font-bold uppercase hover:text-accent">
                  Read More —
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
