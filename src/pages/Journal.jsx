import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "How to Style Gold Huggies for Everyday Wear",
    excerpt: "Five easy ways to make huggies feel intentional from morning to evening.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    date: "July 2026",
  },
  {
    id: 2,
    title: "The Art of Layering Necklaces",
    excerpt: "Build a necklace stack that feels balanced, personal, and timeless.",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80",
    date: "June 2026",
  },
  {
    id: 3,
    title: "Why Demi-Fine Jewelry Is the New Everyday Luxury",
    excerpt: "Why more women are choosing quality over quantity when it comes to jewelry.",
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80",
    date: "May 2026",
  },
];

const FALLBACK_POST_IMAGE = 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80';

const Journal = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="font-serif text-3xl md:text-4xl">Journal</h1>
        <p className="mt-2 text-sm text-gray-600">Stories, styling ideas, and behind-the-scenes from Velmora.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = FALLBACK_POST_IMAGE;
                  }}
                />
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-500">{post.date}</p>
                <h2 className="mt-1 font-serif text-lg text-gray-900 group-hover:text-gold-800 transition-colors">{post.title}</h2>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{post.excerpt}</p>
                <Link to="#" className="mt-3 inline-flex text-sm font-medium text-gold-800 hover:text-gold-900">Read more</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
