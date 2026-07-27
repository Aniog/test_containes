import React, { useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: 'post1',
      title: 'How to Deal with MOQ (Minimum Order Quantity) in China',
      excerpt: 'Struggling with high MOQs? Discover proven negotiation tactics to lower minimum order requirements without sacrificing quality or relationships.',
      date: 'May 12, 2026',
      author: 'David Chen',
      category: 'Sourcing Tips',
      imgId: 'blog-img-1'
    },
    {
      id: 'post2',
      title: 'AQL (Acceptable Quality Limit) Explained for Beginners',
      excerpt: 'A comprehensive guide to understanding AQL standards for your pre-shipment inspections and how to set the right limits for your product.',
      date: 'April 28, 2026',
      author: 'Sarah Lin',
      category: 'Quality Control',
      imgId: 'blog-img-2'
    },
    {
      id: 'post3',
      title: 'Sea Freight vs Air Freight: Which is Right for Your Business?',
      excerpt: 'Analyze the true costs, transit times, and hidden fees of different shipping methods to calculate the most profitable logistics strategy.',
      date: 'April 15, 2026',
      author: 'Michael Wong',
      category: 'Logistics',
      imgId: 'blog-img-3'
    },
    {
      id: 'post4',
      title: 'Red Flags: How to Spot a Fake Trading Company on Alibaba',
      excerpt: 'Learn the critical differences between real manufacturers and trading companies, and how to verify supplier credentials before sending money.',
      date: 'March 30, 2026',
      author: 'David Chen',
      category: 'Supplier Verification',
      imgId: 'blog-img-4'
    },
    {
      id: 'post5',
      title: 'Preparing for Chinese New Year: A Sourcing Survival Guide',
      excerpt: 'Supply chain disruptions during CNY are predictable. Here is our exact timeline and checklist to ensure your business doesn\'t run out of stock.',
      date: 'March 10, 2026',
      author: 'Sarah Lin',
      category: 'Sourcing Tips',
      imgId: 'blog-img-5'
    },
    {
      id: 'post6',
      title: 'Amazon FBA Packaging Requirements from China Direct',
      excerpt: 'Stop paying Amazon prep fees. How to get your Chinese supplier to prep, label, and pack your goods for direct-to-FBA shipping.',
      date: 'February 22, 2026',
      author: 'Michael Wong',
      category: 'Amazon FBA',
      imgId: 'blog-img-6'
    }
  ];

  return (
    <div ref={containerRef} className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 id="page-title" className="text-4xl font-bold font-['Montserrat'] tracking-tight text-slate-900 sm:text-5xl">Sourcing Insights & Resources</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">Expert advice, industry news, and practical guides to master importing from China.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow flex flex-col h-full bg-white">
              <div className="h-48 overflow-hidden relative">
                <img 
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[post-title-${post.id}] blog article china sourcing supply chain`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {post.category}
                </div>
              </div>
              <CardHeader className="flex-grow">
                <CardTitle id={`post-title-${post.id}`} className="text-xl font-bold font-['Montserrat'] line-clamp-2 hover:text-blue-600 transition-colors">
                  <a href="#">{post.title}</a>
                </CardTitle>
                <CardDescription className="text-slate-600 mt-2 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardFooter className="border-t border-slate-100 pt-4 text-sm text-slate-500 flex justify-between">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <button className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium py-3 px-8 rounded-md transition-colors">
             Load More Articles
           </button>
        </div>
      </div>
    </div>
  );
}
