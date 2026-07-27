import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      title: "How to Verify a Chinese Factory Before Sending Money",
      date: "August 15, 2026",
      excerpt: "Learn the crucial steps to verify business licenses, factory capabilities, and avoid common scams when dealing with overseas suppliers.",
      imgId: "blog-01",
      category: "Supplier Verification"
    },
    {
      title: "Understanding Incoterms: FOB, EXW, and DDP Explained",
      date: "July 28, 2026",
      excerpt: "A comprehensive guide to international shipping terms and how to choose the right one for your sourcing project to avoid hidden costs.",
      imgId: "blog-02",
      category: "Shipping & Logistics"
    },
    {
      title: "The Importance of Pre-Shipment Inspections (PSI)",
      date: "July 12, 2026",
      excerpt: "Why skipping quality control checks is the most expensive mistake you can make, and what a thorough PSI should cover.",
      imgId: "blog-03",
      category: "Quality Control"
    }
  ];

  return (
    <div ref={containerRef}>
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" id="blog-page-title">Sourcing Insights & Resources</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" id="blog-page-subtitle">
            Expert advice, industry news, and practical guides to help you navigate China manufacturing.
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
              <div className="aspect-[16/9] relative bg-slate-100 overflow-hidden">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[blog-post-title-${i}] ${post.category} professional`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">{post.category}</span>
                  <span className="text-xs text-slate-400">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2" id={`blog-post-title-${i}`}>
                   <a href="#" className="hover:text-blue-600 transition">{post.title}</a>
                </h2>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 transition">
                    Read More &rarr;
                  </a>
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