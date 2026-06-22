import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: "canton-fair-guide",
    title: "The Ultimate Guide to Attending the Canton Fair",
    excerpt: "Everything you need to know about preparing for, navigating, and successfully sourcing products at China's largest trade fair.",
    date: "May 15, 2026",
    category: "Sourcing Tips"
  },
  {
    id: "quality-control-basics",
    title: "AQL Explained: How to Read Quality Control Reports",
    excerpt: "Understanding Acceptable Quality Limits (AQL) is crucial for managing your risk. Learn how we set standards before production begins.",
    date: "April 22, 2026",
    category: "Quality Control"
  },
  {
    id: "shipping-terms",
    title: "FOB vs EXW vs DDP: Which Shipping Incoterm is Best?",
    excerpt: "A breakdown of common international shipping terms and how choosing the right one can save you thousands of dollars.",
    date: "March 10, 2026",
    category: "Logistics"
  },
  {
    id: "vietnam-vs-china",
    title: "Sourcing in China vs. Southeast Asia in 2026",
    excerpt: "An objective look at the current manufacturing landscape, comparing costs, infrastructure, and capabilities across regions.",
    date: "February 28, 2026",
    category: "Industry News"
  }
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl" id="blog-title">Sourcing Insights</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600 max-w-2xl mx-auto" id="blog-desc">
            Expert advice, industry news, and practical tips for global buyers sourcing from China.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl bg-slate-100 overflow-hidden sm:aspect-[2/1] lg:aspect-[3/2]">
                  <img
                    data-strk-img-id={`blog-img-${post.id}`}
                    data-strk-img={`[post-title-${post.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-slate-500">
                    {post.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-slate-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-2xl font-bold leading-6 text-slate-900 group-hover:text-slate-600" id={`post-title-${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-base leading-6 text-slate-600">{post.excerpt}</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                   Read Article <ArrowRight className="h-4 w-4" />
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