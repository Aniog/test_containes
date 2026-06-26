import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: 'incoterms-explained',
      title: 'EXW vs FOB: Which Incoterm should you choose for China imports?',
      excerpt: 'Understanding the differences between EXW and FOB is crucial for calculating your landed costs. We break down when to use each term to avoid unexpected port charges.',
      date: 'June 15, 2026',
      author: 'David Chen',
      category: 'Shipping & Logistics'
    },
    {
      id: 'factory-vs-trading-company',
      title: 'How to Tell if Your Supplier is a Real Factory or a Trading Company',
      excerpt: 'Alibaba and Global Sources are full of trading companies claiming to be factories. Learn the 5 tell-tale signs to verify who you are actually dealing with.',
      date: 'June 02, 2026',
      author: 'Sarah Lin',
      category: 'Supplier Sourcing'
    },
    {
      id: 'aql-standards',
      title: 'AQL 2.5/4.0 Explained: Setting Your Quality Control Standards',
      excerpt: 'Before ordering a pre-shipment inspection, you need to understand AQL (Acceptable Quality Limit). Discover how to set the right inspection level for your consumer goods.',
      date: 'May 28, 2026',
      author: 'Michael Wong',
      category: 'Quality Control'
    },
    {
      id: 'canton-fair-guide',
      title: 'A Buyer\'s Guide to Navigating the Canton Fair in 2026',
      excerpt: 'Planning to visit Guangzhou for the world\'s largest trade fair? Here is our comprehensive guide on how to prepare, negotiate, and follow up with suppliers effectively.',
      date: 'May 10, 2026',
      author: 'David Chen',
      category: 'Industry Events'
    },
    {
      id: 'payment-terms',
      title: 'Safe Payment Methods When Paying Chinese Suppliers',
      excerpt: 'Never pay 100% upfront. Learn the standard 30/70 payment terms, why T/T is standard, and when to use Letters of Credit or Alibaba Trade Assurance.',
      date: 'April 22, 2026',
      author: 'Sarah Lin',
      category: 'Finance'
    },
    {
      id: 'amazon-fba-prep',
      title: 'Amazon FBA Prep in China vs. Using a US Prep Center',
      excerpt: 'Should you have your Chinese factory prep your goods for FBA, or use a third-party prep center? We analyze the costs, risks, and benefits of both approaches.',
      date: 'April 05, 2026',
      author: 'David Chen',
      category: 'Amazon FBA'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Sourcing Insights</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Expert advice, industry news, and practical guides to help you navigate the complexities of manufacturing in China.
          </p>
        </div>
      </div>

      {/* Featured Post (Latest) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition-shadow duration-300">
            <div className="md:w-1/2 aspect-[4/3] md:aspect-auto relative bg-slate-200 overflow-hidden">
              <img
                data-strk-img-id={`blog-img-${posts[0].id}`}
                data-strk-img={`[blog-title-${posts[0].id}] shipping logistics`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={posts[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {posts[0].category}
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {posts[0].date}</span>
                <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {posts[0].author}</span>
              </div>
              <h2 id={`blog-title-${posts[0].id}`} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                <Link to="#">{posts[0].title}</Link>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                {posts[0].excerpt}
              </p>
              <Link to="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 uppercase tracking-wide text-sm">
                Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group">
                <Link to="#" className="block h-48 relative overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id={`blog-img-${post.id}`}
                    data-strk-img={`[blog-title-${post.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                    <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                  </div>
                  <h3 id={`blog-title-${post.id}`} className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    <Link to="#">{post.title}</Link>
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 text-sm uppercase tracking-wide mt-auto">
                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-semibold py-3 px-8 rounded-md transition-colors duration-200">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-50 py-16 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Stay updated on China Sourcing</h2>
          <p className="text-slate-600 mb-8">Get the latest industry news, tips, and guides delivered directly to your inbox every month.</p>
          <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 shrink-0">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-slate-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}
