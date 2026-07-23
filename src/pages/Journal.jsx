import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Style Gold Jewelry for Work',
      excerpt: 'Five effortless ways to add polish to your 9-to-5 wardrobe.',
      date: 'July 12, 2026',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    },
    {
      id: 2,
      title: 'The Art of Gifting Jewelry',
      excerpt: 'A thoughtful guide to choosing pieces that feel personal.',
      date: 'June 28, 2026',
      image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80',
    },
    {
      id: 3,
      title: 'Behind the Design: Golden Sphere Huggies',
      excerpt: 'From sketch to finished piece, the story behind our bestselling huggies.',
      date: 'June 10, 2026',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    },
  ];

  return (
    <main className="pt-24 md:pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl md:text-5xl text-brand-ink">Journal</h1>
        <p className="mt-3 text-sm text-brand-muted max-w-xl">Stories, styling tips, and behind-the-scenes looks from the Velmora studio.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="overflow-hidden rounded-2xl aspect-[4x3]">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-4">
                <p className="text-xs text-brand-muted">{post.date}</p>
                <h2 className="mt-2 font-serif text-xl text-brand-ink group-hover:text-brand-accent transition-colors">{post.title}</h2>
                <p className="mt-2 text-sm text-brand-muted leading-relaxed">{post.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-ink">
                  Read More <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Journal;
