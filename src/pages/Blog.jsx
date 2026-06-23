import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: "post-1",
      title: "How to Avoid Scams on Alibaba: A Buyer's Guide",
      excerpt: "Not every 'Gold Supplier' is a manufacturer. Learn the red flags to watch out for, how to verify business licenses, and the right questions to ask before sending your deposit.",
      date: "May 15, 2026",
      author: "David Chen",
      category: "Sourcing Tips",
      imgQuery: "typing on laptop researching business verified supplier scam prevention"
    },
    {
      id: "post-2",
      title: "Understanding AQL (Acceptable Quality Limit) in Inspections",
      excerpt: "Demystifying the industry standard for quality control. We explain how AQL tables work, how sample sizes are determined, and how to choose the right strictness level for your product.",
      date: "April 28, 2026",
      author: "Sarah Lin",
      category: "Quality Control",
      imgQuery: "quality control inspector using clipboard checklist examining products"
    },
    {
      id: "post-3",
      title: "Sea Freight vs. Air Freight: Which Should You Choose?",
      excerpt: "A comprehensive breakdown of shipping costs, transit times, and risk factors to help you optimize your logistics strategy and protect your margins.",
      date: "April 10, 2026",
      author: "Michael Wang",
      category: "Logistics",
      imgQuery: "cargo ship containers ocean freight logistics transportation"
    },
    {
      id: "post-4",
      title: "The Importance of NNN Agreements in China",
      excerpt: "Why a standard Western NDA might not protect your Intellectual Property. Learn about Non-Disclosure, Non-Use, and Non-Circumvention agreements tailored for Chinese law.",
      date: "March 22, 2026",
      author: "David Chen",
      category: "Legal & IP",
      imgQuery: "signing legal document business contract agreement"
    },
    {
      id: "post-5",
      title: "Navigating Chinese New Year: Supply Chain Survival Guide",
      excerpt: "CNY causes massive disruptions every year. We share strategies on when to place orders, how much buffer stock to hold, and how to avoid the pre-holiday quality rush.",
      date: "January 05, 2026",
      author: "Sarah Lin",
      category: "Sourcing Tips",
      imgQuery: "chinese new year celebration factory closure planning logistics"
    },
    {
      id: "post-6",
      title: "Cost Breakdown: Hidden Fees When Importing from China",
      excerpt: "The FOB price is just the beginning. Discover the truth about port fees, customs duties, inland transportation, and currency conversion costs that affect your landed price.",
      date: "December 12, 2025",
      author: "Michael Wang",
      category: "Finance",
      imgQuery: "calculator financial documents business planning costs"
    }
  ];

  return (
    <div ref={containerRef} className="pt-8 pb-24 top-padding">
       <div className="bg-slate-50 py-20 mb-16 border-b">
         <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-6 text-slate-900">
               Sourcing Insights & Resources
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
               Expert advice, industry updates, and practical guides to help you navigate international trade and manufacturing in China.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
               <article key={post.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg flex flex-col group hover:shadow-xl transition-shadow">
                  <div className="h-56 overflow-hidden relative">
                     <img 
                        data-strk-img-id={`blog-img-${post.id}`}
                        data-strk-img={post.imgQuery}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                     <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                     </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                     <div className="flex items-center text-sm text-slate-500 mb-4 space-x-4">
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {post.date}</span>
                        <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {post.author}</span>
                     </div>
                     <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                        <Link to={`/blog#${post.id}`}>{post.title}</Link>
                     </h2>
                     <p className="text-slate-600 line-clamp-3 mb-6 flex-grow">
                        {post.excerpt}
                     </p>
                     <Link to={`/blog#${post.id}`} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 mt-auto">
                        Read full article <ArrowRight className="w-4 h-4 ml-1" />
                     </Link>
                  </div>
               </article>
            ))}
         </div>

         {/* Newsletter Signup (Visual only) */}
         <div className="mt-24 bg-slate-900 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Stay updated</h3>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">Get the best sourcing tips and industry news delivered straight to your inbox once a month. No spam, ever.</p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
               <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
               />
               <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                  Subscribe
               </button>
            </form>
         </div>
      </div>
    </div>
  );
}