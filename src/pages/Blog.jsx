import React from 'react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: "factory-vs-trading-company",
      title: "How to Tell a Real Factory from a Trading Company on Alibaba",
      excerpt: "Many suppliers on Alibaba claim to be factories but are actually middlemen taking a cut. Learn the 5 definitive signs to identify true manufacturers.",
      date: "Oct 15, 2025",
      category: "Sourcing Tips"
    },
    {
      id: "quality-control-guide",
      title: "The Ultimate Guide to Pre-Shipment Inspections in China",
      excerpt: "Don't pay your final balance blindly. Discover how AQL standards work and what your inspector should be checking before the container is sealed.",
      date: "Sep 28, 2025",
      category: "Quality Control"
    },
    {
      id: "negotiating-moq",
      title: "Strategies for Negotiating Lower MOQs with Chinese Suppliers",
      excerpt: "Factory Minimum Order Quantities (MOQ) can kill a startup. Here are proven strategies to get factories to accept smaller trial orders.",
      date: "Sep 12, 2025",
      category: "Negotiation"
    },
    {
      id: "shipping-incoterms",
      title: "FOB vs EXW vs DDP: Which Incoterm is Best for Your Import Business?",
      excerpt: "Shipping terms dictate who bears the cost and risk. Make the wrong choice and your margins will evaporate at customs. Here's a clear breakdown.",
      date: "Aug 30, 2025",
      category: "Shipping"
    }
  ];

  return (
    <div className="bg-slate-50 py-16" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Sourcing Insights Blog</h1>
          <p className="text-xl text-slate-600">
            Expert advice, industry news, and practical guides for navigating the Chinese manufacturing landscape.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row">
                <div className="md:w-1/3 relative min-h-[200px] bg-slate-200">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    data-strk-img-id={`blog-post-${post.id}`}
                    data-strk-img={`${post.category} ${post.title} business concept`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3 flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                    <span className="text-blue-600">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-6 flex-grow">{post.excerpt}</p>
                  <Link to={`/blog`} className="text-blue-600 font-medium hover:text-blue-800 self-start">
                    Read Full Article
                  </Link>
                </div>
              </article>
            ))}
            
            {/* Pagination Placeholder */}
            <div className="flex justify-center gap-2 pt-8">
              <button className="w-10 h-10 rounded-md bg-blue-600 text-white font-bold">1</button>
              <button className="w-10 h-10 rounded-md bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50">2</button>
              <button className="w-10 h-10 rounded-md bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50">3</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm sticky top-28">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Need Sourcing Help?</h3>
              <p className="text-slate-600 mb-6">
                Stop struggling with unresponsive suppliers and quality issues. Schedule a free consultation with our sourcing experts today.
              </p>
              <Link to="/contact" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors mb-8">
                Get a Quote
              </Link>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 pt-8 border-t border-slate-100">Categories</h3>
              <ul className="space-y-3">
                <li><Link to="/blog" className="text-slate-600 hover:text-blue-600 flex justify-between"><span>Sourcing Tips</span> <span className="bg-slate-100 px-2 rounded-full text-xs flex items-center">12</span></Link></li>
                <li><Link to="/blog" className="text-slate-600 hover:text-blue-600 flex justify-between"><span>Quality Control</span> <span className="bg-slate-100 px-2 rounded-full text-xs flex items-center">8</span></Link></li>
                <li><Link to="/blog" className="text-slate-600 hover:text-blue-600 flex justify-between"><span>Shipping & Logistics</span> <span className="bg-slate-100 px-2 rounded-full text-xs flex items-center">5</span></Link></li>
                <li><Link to="/blog" className="text-slate-600 hover:text-blue-600 flex justify-between"><span>Negotiation</span> <span className="bg-slate-100 px-2 rounded-full text-xs flex items-center">7</span></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}