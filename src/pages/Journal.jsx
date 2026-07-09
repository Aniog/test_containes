import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const journalPosts = [
  {
    id: 1,
    title: 'How to Style Gold Jewelry for Every Season',
    excerpt: 'From summer linen to winter wool, discover how to layer and style your favorite pieces year-round.',
    date: 'June 12, 2026',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    readTime: '6 min',
  },
  {
    id: 2,
    title: 'The Art of Gifting Jewelry',
    excerpt: 'A guide to choosing meaningful pieces for the women in your life — and for yourself.',
    date: 'May 28, 2026',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    readTime: '8 min',
  },
  {
    id: 3,
    title: 'Behind the Design: The Amber Lace Earrings',
    excerpt: 'The story of how antique lace and modern minimalism came together in one of our signature pieces.',
    date: 'May 3, 2026',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    readTime: '5 min',
  },
  {
    id: 4,
    title: 'Caring for Your Gold Jewelry',
    excerpt: 'Simple rituals to keep your pieces looking as beautiful as the day you received them.',
    date: 'April 15, 2026',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    readTime: '4 min',
  },
];

const Journal = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      <Navbar />

      <div className="pt-20">
        <div className="container section">
          <div className="max-w-2xl mb-12">
            <span className="text-xs tracking-[0.15em] uppercase text-[#B8976A]">Stories & Reflections</span>
            <h1 className="mt-2">The Journal</h1>
            <p className="mt-4 text-[#6B635C]">
              Notes from the studio, styling inspiration, and the quiet moments that shape how we design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {journalPosts.map((post) => (
              <article key={post.id} className="group">
                <Link to={`/journal/${post.id}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden bg-[#1A1816] mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-xs tracking-[0.1em] uppercase text-[#9A9085] mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl mb-3 group-hover:text-[#B8976A] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#6B635C] leading-relaxed">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-sm tracking-[0.1em] uppercase text-[#B8976A] group-hover:underline">
                    Read More →
                  </span>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-[#6B635C]">
              More stories coming soon. Follow us on <a href="https://instagram.com" className="text-[#B8976A]">Instagram</a> for daily inspiration.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Journal;