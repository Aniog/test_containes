import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { format } from 'date-fns';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const posts = [
    {
      id: 'post-1',
      title: 'AQL Inspections Explained: What Buyers Need to Know',
      excerpt: 'Acceptable Quality Limit (AQL) is the standard used globally for pre-shipment inspections. Learn how to choose the right AQL level for your product.',
      date: '2023-11-12',
      readTime: '5 min read',
      category: 'Quality Control'
    },
    {
      id: 'post-2',
      title: 'How to Spot a Fake Factory on Alibaba',
      excerpt: 'Trading companies often pose as direct manufacturers. We share the tell-tale signs to look for when vetting potential suppliers online.',
      date: '2023-10-28',
      readTime: '7 min read',
      category: 'Supplier Verification'
    },
    {
      id: 'post-3',
      title: 'The Hidden Costs of Shipping from China (And How to Avoid Them)',
      excerpt: 'From unexpected customs fees to port delays, shipping can quickly eat into your margins. Here are the top ways to stabilize your logistics costs.',
      date: '2023-10-05',
      readTime: '6 min read',
      category: 'Logistics'
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          data-strk-bg-id="blog-hero-bg"
          data-strk-bg="[blog-hero-title] sourcing tips"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h1 id="blog-hero-title" className="text-4xl md:text-5xl font-bold mb-6">Sourcing Insights & News</h1>
          <p id="blog-hero-desc" className="text-xl text-slate-300">
            Actionable advice, industry updates, and best practices for importing from China.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4 px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col h-full bg-white">
                <div className="h-48 overflow-hidden relative">
                  <img
                    alt={post.category}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    data-strk-img-id={`blog-img-${post.id}`}
                    data-strk-img={`[blog-title-${post.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-slate-500 mb-4 h-5">
                    <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 id={`blog-title-${post.id}`} className="text-xl font-bold text-slate-900 mb-3 leading-snug hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="px-0 text-blue-600 hover:text-blue-800 justify-start font-semibold mt-auto">
                    Read Full Article &rarr;
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" className="bg-white">
              Load More Articles
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;