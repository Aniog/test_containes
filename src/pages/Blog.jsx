import React, { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      if (ImageHelper && ImageHelper.loadImages && strkImgConfig) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    } catch (e) {
      console.log('ImageHelper not available');
    }
  }, []);

  const posts = [
    {
      id: "b1",
      title: "How to Avoid Scams on Alibaba: A Beginner's Guide",
      excerpt: "Learn the red flags to watch out for when sourcing from Alibaba, including fake factory profiles, bait-and-switch pricing, and dangerous payment terms.",
      date: "May 12, 2026",
      author: "David Chen",
      category: "Sourcing Tips",
      imgQuery: "laptop on desk looking at alibaba website online scams security",
    },
    {
      id: "b2",
      title: "Understanding AQL (Acceptable Quality Limit) in Inspections",
      excerpt: "A comprehensive guide to how professional inspection companies use AQL charts to determine if your mass production run passes or fails.",
      date: "April 28, 2026",
      author: "Sarah Lin",
      category: "Quality Control",
      imgQuery: "quality control worker inspecting goods with caliper factory AQL",
    },
    {
      id: "b3",
      title: "Sea Freight vs Air Freight: Current Cost Breakdown 2026",
      excerpt: "An updated look at the pros, cons, and current pricing structures for shipping goods from China to the US and Europe.",
      date: "April 15, 2026",
      author: "Michael Wong",
      category: "Logistics",
      imgQuery: "cargo ship container port terminal logistics sea freight transport",
    },
    {
      id: "b4",
      title: "The Importance of Pre-Shipment Inspections for Amazon FBA",
      excerpt: "Why skipping quality control checks in China is the fastest way to get your Amazon seller account suspended.",
      date: "March 30, 2026",
      author: "David Chen",
      category: "Amazon FBA",
      imgQuery: "amazon fba boxes warehouse packages scanning barcode",
    },
    {
      id: "b5",
      title: "How to Negotiate MOQs (Minimum Order Quantities) with Suppliers",
      excerpt: "Proven strategies for convincing Chinese factories to accept lower MOQs without significantly increasing the unit price.",
      date: "March 18, 2026",
      author: "Sarah Lin",
      category: "Negotiation",
      imgQuery: "business meeting handshake factory negotiation agreement",
    },
    {
      id: "b6",
      title: "FOB vs EXW vs DDP: Incoterms Explained for Beginners",
      excerpt: "Don't sign a contract until you understand who is responsible for shipping costs and insurance at every stage of the journey.",
      date: "March 05, 2026",
      author: "Michael Wong",
      category: "Logistics",
      imgQuery: "shipping documents paperwork logistics contract delivery terms",
    }
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="container mx-auto px-4 md:px-8 max-w-7xl mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" id="blog-page-title">
          Sourcing Insights & Updates
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto" id="blog-page-desc">
          Expert advice on manufacturing in China, quality control standards, global logistics, and supply chain management.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col h-full">
              <div className="aspect-[16/9] bg-slate-100 relative">
                <img 
                  data-strk-img-id={`blog-img-${post.id}`}
                  data-strk-img={`[blog-title-${post.id}] ${post.imgQuery}`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-primary">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-slate-500 mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-slate-900 mb-3 hover:text-primary transition-colors cursor-pointer" id={`blog-title-${post.id}`}>
                  {post.title}
                </h2>
                
                <p className="text-slate-600 text-sm mb-6 flex-grow" id={`blog-desc-${post.id}`}>
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Link to="#" className="text-primary font-bold text-sm flex items-center hover:underline">
                    Read Full Article <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 md:px-8 max-w-4xl mt-20">
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay updated with sourcing trends</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Join 5,000+ buyers who receive our monthly newsletter featuring factory insights, logistics updates, and sourcing strategies.
          </p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button 
              type="submit" 
              className="bg-primary hover:bg-primary/90 px-6 py-3 rounded-md font-bold transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}