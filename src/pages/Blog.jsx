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
      id: 1,
      title: "How to Verify a China Factory Before You Buy",
      excerpt: "Don't let glowing Alibaba profiles fool you. Here is our step-by-step guide to verifying factory legitimacy from overseas.",
      date: "July 12, 2026",
      author: "Leon Wang",
      category: "Sourcing Tips"
    },
    {
      id: 2,
      title: "The Reality of Shipping Costs from China in 2026",
      excerpt: "Understanding the current logistics landscape and how to optimize your shipping strategy to maintain margins.",
      date: "June 28, 2026",
      author: "Emma Zhang",
      category: "Logistics"
    },
    {
      id: 3,
      title: "Top 5 Manufacturing Hubs in China by Industry",
      excerpt: "From Shenzhen electronics to Shaoxing textiles, learn where the heart of your industry beats in China.",
      date: "June 15, 2026",
      author: "David Chen",
      category: "Market Insights"
    }
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-16">
      <section className="bg-navy-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 id="blog-hero-title" className="text-4xl md:text-5xl font-bold mb-6">Sourcing Insights</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Expert advice on navigating the China supply chain.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post) => (
              <article key={post.id} className="bg-white group">
                <div className="overflow-hidden rounded-2xl mb-6 aspect-[16/9]">
                  <img 
                    data-strk-img-id={`blog-img-${post.id}`}
                    data-strk-img={`[post-title-${post.id}] Chinese factory business`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    alt={post.title}
                  />
                </div>
                <div className="flex items-center gap-4 text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider">
                  {post.category}
                </div>
                <h2 id={`post-title-${post.id}`} className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-400 font-bold">
                    <Calendar size={14} /> {post.date}
                  </div>
                  {/* Link should be used here but we don't have individual post pages yet */}
                  <span className="text-navy-900 font-bold flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                    Read More <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
