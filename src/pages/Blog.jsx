import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "5 Common Scams to Avoid When Sourcing from Alibaba",
      excerpt: "Alibaba is a great tool, but it's full of trading companies posing as factories. Learn the red flags our agents look for.",
      tag: "Sourcing Guide",
      date: "Oct 12, 2025",
      id: "blog-post-1"
    },
    {
      title: "How to Calculate the Landed Cost of Your Goods",
      excerpt: "The factory price is just the beginning. We break down shipping, duties, taxes, and hidden fees to help your margins.",
      tag: "Logistics",
      date: "Sep 28, 2025",
      id: "blog-post-2"
    },
    {
      title: "Manufacturing in Vietnam vs. China in 2026",
      excerpt: "Supply chains are shifting. We compare infrastructure, labor costs, and material availability between the two giants.",
      tag: "Industry Insight",
      date: "Sep 15, 2025",
      id: "blog-post-3"
    },
    {
      title: "The Ultimate Guide to China Factory Audits",
      excerpt: "What exactly happens during an on-site audit? We explain the checklist for capacities, social compliance, and quality systems.",
      tag: "Quality Control",
      date: "Aug 30, 2025",
      id: "blog-post-4"
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 italic">The Sourcing Insider</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Expert tips, industry trends, and practical guides for navigating the Chinese manufacturing landscape.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
          {posts.map((post, idx) => (
            <article key={idx} className="group border-b border-slate-100 pb-12 last:border-0 hover:bg-slate-50 transition-all p-6 rounded-2xl">
              <div className="h-64 rounded-xl overflow-hidden mb-8 relative">
                <img 
                  data-strk-img-id={post.id}
                  data-strk-img={`[${post.id}-title] [${post.id}-excerpt]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">{post.tag}</div>
              </div>
              <div className="flex items-center text-xs text-slate-400 mb-4 space-x-6">
                <div className="flex items-center"><Calendar size={14} className="mr-2" /> {post.date}</div>
                <div className="flex items-center"><User size={14} className="mr-2" /> SSourcing Editorial</div>
              </div>
              <h2 id={`${post.id}-title`} className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-500 transition-colors leading-tight">{post.title}</h2>
              <p id={`${post.id}-excerpt`} className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{post.excerpt}"</p>
              <button className="text-amber-600 font-bold inline-flex items-center group-hover:translate-x-2 transition-transform">
                Read Full Article <ArrowRight size={16} className="ml-2" />
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
