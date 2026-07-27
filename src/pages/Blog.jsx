import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      title: "How to Verify a Chinese Factory License (Expert Guide)",
      id: "blog-verify",
      date: "Oct 24, 2026",
      author: "James Chen",
      excerpt: "Don't fall for fake business licenses. Learn our 5-step verification process to ensure your supplier is legitimate.",
      category: "Verification"
    },
    {
      title: "Sea Freight vs Air Freight: Choosing the Right Method in 2026",
      id: "blog-shipping",
      date: "Oct 12, 2026",
      author: "Sarah Wu",
      excerpt: "Current trends in global logistics and how to optimize your shipping costs for maximum profitability.",
      category: "Logistics"
    },
    {
      title: "Top 5 Mistakes Small Businesses Make When Sourcing from China",
      id: "blog-mistakes",
      date: "Sep 28, 2026",
      author: "David Lee",
      excerpt: "Avoid common pitfalls like skipping QC or misinterpreting technical specifications with your manufacturer.",
      category: "Sourcing Tips"
    }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-primary mb-6 italic">Sourcing Insights</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Practical advice and industry news to help you navigate the complexities of China manufacturing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <article key={idx} className="flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 group">
              <div className="h-56 overflow-hidden">
                <img 
                  alt={post.title}
                  data-strk-img-id={`blog-img-${idx}`}
                  data-strk-img={`[${post.id}] office documents analytics sourcing factory`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center space-x-4 mb-4 text-xs font-bold text-accent uppercase tracking-widest">
                  <span>{post.category}</span>
                </div>
                <h3 id={post.id} className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{post.excerpt}</p>
                
                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-slate-400 text-xs">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <Link to="#" className="text-primary text-sm font-bold flex items-center">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
