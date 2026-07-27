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
      id: 'post-1',
      title: 'How to Prepare for the Chinese New Year Factory Shutdown',
      descId: 'blog-desc-1',
      category: 'Sourcing Tips',
      date: 'Dec 15, 2025',
      author: 'David Chen',
      excerpt: 'The Chinese New Year (CNY) effectively shuts down manufacturing across the country for 3-4 weeks. Here is your timeline for placing orders to avoid disastrous stockouts in Q1.'
    },
    {
      id: 'post-2',
      title: 'Understanding Incoterms: EXW vs. FOB vs. DDP',
      descId: 'blog-desc-2',
      category: 'Logistics',
      date: 'Nov 02, 2025',
      author: 'Sarah Lin',
      excerpt: 'Choosing the right shipping terms can save you thousands. We break down the responsibilities, risks, and costs associated with the most common incoterms used in international trade.'
    },
    {
      id: 'post-3',
      title: 'Red Flags: How to Spot a Fake Factory on Alibaba',
      descId: 'blog-desc-3',
      category: 'Supplier Verification',
      date: 'Oct 18, 2025',
      author: 'Michael Wong',
      excerpt: 'Not everyone with a "Gold Supplier" badge is an actual manufacturer. Learn the subtle signs that indicate you might be communicating with a trading company posing as a factory.'
    },
    {
      id: 'post-4',
      title: 'AQL Basics: What is Acceptable Quality Limit?',
      descId: 'blog-desc-4',
      category: 'Quality Control',
      date: 'Sep 24, 2025',
      author: 'David Chen',
      excerpt: 'Demystifying the industry standard for quality inspection. Learn how AQL tables work, how sample sizes are determined, and how to set the right limits for your product category.'
    },
    {
      id: 'post-5',
      title: 'Essential Clauses for Your China Manufacturing Contract',
      descId: 'blog-desc-5',
      category: 'Legal & Risk',
      date: 'Aug 10, 2025',
      author: 'Sarah Lin',
      excerpt: 'Protecting your IP and ensuring timely delivery starts with a strong, bilingual NNN agreement and manufacturing contract. Here are the 5 clauses you cannot afford to skip.'
    },
    {
      id: 'post-6',
      title: 'Managing Ocean Freight Volatility in 2026',
      descId: 'blog-desc-6',
      category: 'Logistics',
      date: 'Jul 05, 2025',
      author: 'Michael Wong',
      excerpt: 'Container prices continue to fluctuate. Strategies for balancing speed vs. cost, the pros and cons of long-term contracts, and alternative routing options.'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <div className="bg-slate-900 py-16 lg:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 id="page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">Sourcing Insights & News</h1>
          <p id="page-subtitle" className="text-xl text-slate-300 max-w-3xl mx-auto">
            Practical advice, industry updates, and expert tips for navigating the Chinese manufacturing landscape.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="py-20 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="relative aspect-video">
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    {post.category}
                  </span>
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`blog-img-${post.id}`}
                    data-strk-img={`[blog-title-${post.id}] [${post.descId}] global trade business`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h2 id={`blog-title-${post.id}`} className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link to="#" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 mt-auto">
                    Read Full Article <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination (Visual only for mockup) */}
          <div className="mt-16 flex justify-center">
            <nav className="flex items-center gap-2">
              <span className="w-10 h-10 flex items-center justify-center rounded-md border border-slate-200 text-slate-400 bg-slate-50 cursor-not-allowed">
                &laquo;
              </span>
              <span className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-600 text-white font-medium">
                1
              </span>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-slate-200 text-slate-600 hover:bg-slate-100 font-medium transition-colors">
                2
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-slate-200 text-slate-600 hover:bg-slate-100 font-medium transition-colors">
                3
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors">
                &raquo;
              </a>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Newsletter Signup */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Get Sourcing Tips in your Inbox</h2>
            <p className="text-slate-600 mb-8">Join 5,000+ importers receiving our monthly China manufacturing insights.</p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button 
                type="submit" 
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;
