import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: "negotiating-with-factories",
      title: "How to Negotiate with Chinese Factories Like a Local",
      excerpt: "Negotiation in China goes beyond just lowering the price. Learn how to structure terms, build relationships, and get better quality.",
      date: "Oct 24, 2026",
      category: "Sourcing Strategy"
    },
    {
      id: "shipping-delays-avoid",
      title: "5 Common Causes of Shipping Delays (And How to Prevent Them)",
      excerpt: "From missing documents to port congestion, shipping delays kill margins. Here's a checklist to ensure your cargo leaves on time.",
      date: "Oct 12, 2026",
      category: "Logistics"
    },
    {
      id: "trading-company-vs-factory",
      title: "Trading Company vs. Factory: How to Spot the Difference",
      excerpt: "Many 'manufacturers' on Alibaba are actually middlemen. Here are the tell-tale signs to look for on their profiles and during communication.",
      date: "Sep 28, 2026",
      category: "Supplier Verification"
    },
    {
      id: "quality-fade",
      title: "The Reality of 'Quality Fade' in Manufacturing",
      excerpt: "Why the first order is perfect, but the third order has defects. Understanding quality fade and how consistent inspections solve it.",
      date: "Sep 15, 2026",
      category: "Quality Control"
    },
    {
      id: "incoterms-explained",
      title: "FOB vs. EXW vs. DDP: Which Incoterm is Best for You?",
      excerpt: "A simple guide to shipping terms and understanding exactly who is responsible for the goods at each stage of transit.",
      date: "Aug 30, 2026",
      category: "Logistics"
    },
    {
      id: "protecting-ip",
      title: "Protecting Your IP When Manufacturing in China",
      excerpt: "NNN agreements, trademark registration, and structural strategies to prevent your product from being copied.",
      date: "Aug 18, 2026",
      category: "Legal & Compliance"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen" ref={containerRef}>
      <section 
        className="relative bg-slate-900 py-16 md:py-24 text-white overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 bg-slate-800"
          data-strk-bg-id="blog-header-bg-3b1a9"
          data-strk-bg="[blog-page-desc] [blog-page-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h1 id="blog-page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">Sourcing Insights</h1>
          <p id="blog-page-desc" className="text-xl text-slate-300 max-w-3xl mx-auto">
            Practical advice, industry news, and guides for importing from China.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col cursor-pointer group">
                <div className="aspect-[16/9] bg-slate-200 relative overflow-hidden">
                   <img
                     alt={post.title}
                     className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     data-strk-img-id={`blog-img-${post.id}`}
                     data-strk-img={`[blog-${post.id}-excerpt] [blog-${post.id}-title]`}
                     data-strk-img-ratio="16x9"
                     data-strk-img-width="600"
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                   />
                   <div className="absolute top-4 left-4 z-10">
                     <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{post.category}</span>
                   </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-sm text-slate-500 mb-3">{post.date}</div>
                  <h3 id={`blog-${post.id}-title`} className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p id={`blog-${post.id}-excerpt`} className="text-slate-600 mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
                  <div className="text-primary font-medium flex items-center text-sm">
                    Read Article &rarr;
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <button className="bg-white text-slate-700 font-semibold py-3 px-8 rounded-lg border border-slate-200 hover:bg-slate-50">
               Load More Articles
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};
