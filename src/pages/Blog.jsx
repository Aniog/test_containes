import React, { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: 'post-1',
      title: 'Top 5 Red Flags When Verifying a Chinese Supplier on Alibaba',
      excerpt: 'Learn how to spot trading companies disguising themselves as manufacturers and avoid common scams when sourcing online.',
      date: 'Oct 15, 2023',
      author: 'David Chen',
      category: 'Supplier Verification',
      imgId: 'blog-img-1',
      imgQuery: '[blog-title-post-1] laptop desk'
    },
    {
      id: 'post-2',
      title: 'Understanding Incoterms 2020: FOB vs EXW vs DDP',
      excerpt: 'A comprehensive guide to choosing the right shipping terms for your imports to minimize cost and liability.',
      date: 'Sep 28, 2023',
      author: 'Sarah Lin',
      category: 'Logistics',
      imgId: 'blog-img-2',
      imgQuery: '[blog-title-post-2] cargo ship'
    },
    {
      id: 'post-3',
      title: 'How to Negotiate Pricing with Chinese Manufacturers',
      excerpt: 'Cultural nuances and practical strategies to get the best pricing without compromising product quality.',
      date: 'Sep 10, 2023',
      author: 'David Chen',
      category: 'Sourcing Strategy',
      imgId: 'blog-img-3',
      imgQuery: '[blog-title-post-3] handshake business'
    },
    {
      id: 'post-4',
      title: 'AQL (Acceptable Quality Limit) Explained for Importers',
      excerpt: 'Everything you need to know about setting quality standards and understanding inspection reports before your goods ship.',
      date: 'Aug 22, 2023',
      author: 'Michael Zhang',
      category: 'Quality Control',
      imgId: 'blog-img-4',
      imgQuery: '[blog-title-post-4] magnifying glass inspection'
    },
    {
      id: 'post-5',
      title: 'The Hidden Costs of Sourcing from China',
      excerpt: 'Tariffs, compliance testing, tooling fees, and exchange rates. Discover the hidden costs that can eat into your margins.',
      date: 'Aug 05, 2023',
      author: 'Sarah Lin',
      category: 'Cost Management',
      imgId: 'blog-img-5',
      imgQuery: '[blog-title-post-5] financial chart calculator'
    },
    {
      id: 'post-6',
      title: 'Why You Need a Sourcing Agent in 2024',
      excerpt: 'As supply chains become more complex, having local representation in China is no longer a luxury, but a necessity.',
      date: 'Jul 18, 2023',
      author: 'David Chen',
      category: 'Industry Trends',
      imgId: 'blog-img-6',
      imgQuery: '[blog-title-post-6]'
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Sourcing Insights</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Expert advice, industry updates, and practical guides on importing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-slate-200 hover:shadow-xl transition-shadow flex flex-col h-full bg-white">
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    data-strk-img-id={post.imgId}
                    data-strk-img={post.imgQuery}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md">
                    {post.category}
                  </div>
                </div>
                
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-slate-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h2 id={`blog-title-${post.id}`} className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-600 mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <Link to="#" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 transition-colors">
                      Read more <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-white border border-slate-300 text-slate-700 font-medium px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;