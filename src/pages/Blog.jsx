import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const posts = [
    {
      id: "verify-suppliers",
      title: "How to Verify Chinese Suppliers: A 5-Point Checklist",
      excerpt: "Don't fall for scams. Learn the essential steps to verify factory legitimacy and business records in China.",
      date: "Oct 12, 2026",
      author: "Li Wei",
      imgId: "blog-verify-img"
    },
    {
      id: "shipping-terms",
      title: "FOB vs CIF vs DDP: Which One is Best for Your Business?",
      excerpt: "Understanding shipping terms is crucial for your profit margin. We break down the pros and cons of each.",
      date: "Oct 5, 2026",
      author: "Chen Juan",
      imgId: "blog-shipping-img"
    },
    {
      id: "qc-process",
      title: "Why Quality Control is More Than Just a Pre-shipment Check",
      excerpt: "Discover why production monitoring is key to preventing defects before they happen.",
      date: "Sep 28, 2026",
      author: "Director Wang",
      imgId: "blog-qc-img"
    },
    {
       id: "market-trends",
       title: "Top 5 Sourcing Trends in China for 2027",
       excerpt: "From sustainable manufacturing to AI-driven logistics, here's what's changing in the sourcing landscape.",
       date: "Sep 20, 2026",
       author: "Li Wei",
       imgId: "blog-trends-img"
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-accent mb-4">
             <BookOpen size={24} />
             <span className="font-bold uppercase tracking-widest text-sm">Expert Insights</span>
          </div>
          <h1 id="blog-page-title" className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">China Sourcing Guide & Blog</h1>
          <p id="blog-page-subtitle" className="text-xl text-slate-600 max-w-2xl font-medium">
            Learn how to navigate the complexities of sourcing from China with our expert tips and industry insights.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 font-medium">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <article key={post.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img 
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-title-${post.id}] [blog-page-subtitle] china manufacturing business`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center text-xs text-slate-500 space-x-4">
                    <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
                    <span className="flex items-center"><User size={14} className="mr-1" /> {post.author}</span>
                  </div>
                  <h2 id={`blog-title-${post.id}`} className="text-xl font-bold text-slate-900 group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center text-accent font-bold text-sm pt-2">
                    Read Full Article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <button className="btn-outline px-10">Load More Articles</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
