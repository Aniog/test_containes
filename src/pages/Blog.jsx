import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: 'post-1',
      title: 'How to Verify a Chinese Manufacturer: 5 Red Flags to Watch For',
      excerpt: 'Not every supplier listed on Alibaba is a real factory. Learn how to distinguish between trading companies and genuine manufacturers to get the best prices.',
      date: 'May 12, 2026',
      author: 'David Chen',
      category: 'Supplier Verification'
    },
    {
      id: 'post-2',
      title: 'Incoterms 2026 Explained: EXW, FOB, DDP What You Need to Know',
      excerpt: 'Shipping terms can be confusing. We break down the most common Incoterms used in China manufacturing and what they mean for your bottom line.',
      date: 'April 28, 2026',
      author: 'Sarah Lin',
      category: 'Shipping & Logistics'
    },
    {
      id: 'post-3',
      title: 'The Real Cost of Quality Control in China (And Why You Cannot Skip It)',
      excerpt: 'Skipping a $300 inspection can cost you thousands in defective goods. Discover the standard AQL levels and how to implement effective QC.',
      date: 'April 15, 2026',
      author: 'Michael Wong',
      category: 'Quality Control'
    },
    {
      id: 'post-4',
      title: 'Navigating CNY: How to Prepare for Chinese New Year Factory Shutdowns',
      excerpt: 'The entire country stops for weeks. If you do not plan ahead, your supply chain will break. Here is your timeline for ordering around the holiday.',
      date: 'March 02, 2026',
      author: 'David Chen',
      category: 'Supply Chain Management'
    },
    {
      id: 'post-5',
      title: 'Amazon FBA Direct from China: Pros, Cons, and Common Mistakes',
      excerpt: 'Shipping directly from your Chinese manufacturer to Amazon fulfillment centers saves time, but the labeling requirements are strict. Here is how to do it right.',
      date: 'February 18, 2026',
      author: 'Sarah Lin',
      category: 'Amazon FBA'
    },
    {
      id: 'post-6',
      title: 'OEM vs ODM: Which Manufacturing Strategy is Right for Your Business?',
      excerpt: 'Should you create a custom product from scratch or slap your logo on an existing design? We explore the differences, costs, and lead times.',
      date: 'January 05, 2026',
      author: 'Michael Wong',
      category: 'Product Sourcing'
    }
  ];

  return (
    <div ref={containerRef} className="py-12 lg:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 id="blog-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Sourcing Insights</h1>
          <p id="blog-desc" className="text-xl text-slate-600">
            Expert advice, guides, and industry news to help you navigate importing from China.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
             <Card key={post.id} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col overflow-hidden">
                <div className="h-56 relative overflow-hidden">
                  <img
                     data-strk-img-id={`blog-img-${post.id}`}
                     data-strk-img={`[blog-title-${post.id}] business logistics manufacturing china`}
                     data-strk-img-ratio="16x9"
                     data-strk-img-width="600"
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     alt={post.title}
                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-blue-600 rounded-sm">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-slate-500 mb-4 space-x-4">
                    <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {post.date}</span>
                    <span className="flex items-center"><User className="w-3.5 h-3.5 mr-1" /> {post.author}</span>
                  </div>
                  <h2 id={`blog-title-${post.id}`} className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    <Link to="#">{post.title}</Link>
                  </h2>
                  <p id={`blog-excerpt-${post.id}`} className="text-slate-600 text-sm mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link to="#" className="text-blue-600 font-medium text-sm flex items-center hover:underline mt-auto">
                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
             </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            {/* Simple pagination placeholder */}
            <div className="inline-flex space-x-2">
                <button className="w-10 h-10 rounded-md bg-blue-600 text-white font-medium flex items-center justify-center">1</button>
                <button className="w-10 h-10 rounded-md bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium flex items-center justify-center transition-colors">2</button>
                <button className="w-10 h-10 rounded-md bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium flex items-center justify-center transition-colors">3</button>
                <span className="w-10 h-10 flex items-center justify-center text-slate-500">...</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
