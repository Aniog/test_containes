import React from 'react';
import { Link } from 'react-router-dom';

const journalPosts = [
  {
    id: 1,
    title: "How to Layer Necklaces Without the Tangle",
    excerpt: "A guide to creating effortless, dimensional looks with multiple chains and pendants.",
    date: "JUNE 12, 2026",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    readTime: "6 min",
  },
  {
    id: 2,
    title: "The Quiet Power of Everyday Gold",
    excerpt: "Why the pieces you wear most often often say the most about who you are.",
    date: "MAY 28, 2026",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Caring for Your Demi-Fine Jewelry",
    excerpt: "Simple rituals to keep your gold glowing season after season.",
    date: "MAY 10, 2026",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    readTime: "5 min",
  },
  {
    id: 4,
    title: "Gifting Jewelry: A Modern Guide",
    excerpt: "How to choose a meaningful piece for someone you love — without overthinking it.",
    date: "APRIL 22, 2026",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    readTime: "7 min",
  },
];

const Journal = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-20">
      <div className="max-w-[1100px] mx-auto px-6 py-12">
        <div className="mb-12">
          <span className="text-xs tracking-[3px] text-[#BFA46F]">STORIES</span>
          <h1 className="font-serif text-4xl tracking-[1px] mt-1">The Journal</h1>
          <p className="text-[#4A463F] mt-2">Notes on style, care, and the quiet rituals of adornment.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
          {journalPosts.map((post) => (
            <article key={post.id} className="group">
              <Link to={`/journal/${post.id}`} className="block">
                <div className="aspect-[16/10] bg-[#EDE8DF] overflow-hidden mb-5">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-[1.5px] text-[#8A8175] mb-2">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl tracking-[0.5px] mb-3 group-hover:text-[#BFA46F] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#4A463F] leading-relaxed">{post.excerpt}</p>
                <span className="inline-block mt-3 text-sm tracking-[1.5px] text-[#BFA46F]">READ MORE →</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#D4C9B8] text-center">
          <p className="text-sm text-[#4A463F]">More stories coming soon. Follow us on Instagram for daily inspiration.</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;
