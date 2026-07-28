import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card.tsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: 'how-to-verify-supplier',
      title: '5 Red Flags When Verifying a Chinese Supplier on Alibaba',
      excerpt: 'Not every "Gold Supplier" is a real manufacturer. Learn the top 5 warning signs that you might be dealing with a trading company or a potential scam.',
      date: 'May 12, 2024',
      author: 'David Chen',
      category: 'Supplier Verification',
      imgQuery: 'alibaba supplier verification factory check'
    },
    {
      id: 'aql-inspection-guide',
      title: 'A Beginner\'s Guide to AQL Inspections in China',
      excerpt: 'What is Acceptable Quality Limit (AQL) and how do you determine the right sample size for your product inspection? We break down the math.',
      date: 'April 28, 2024',
      author: 'Sarah Wu',
      category: 'Quality Control',
      imgQuery: 'quality control inspection measurement test'
    },
    {
      id: 'shipping-incoterms',
      title: 'FOB vs EXW vs DDP: Which Incoterm Should You Choose?',
      excerpt: 'Choosing the wrong shipping terms can cost you thousands. Here is a simple explanation of the most common incoterms for importing from China.',
      date: 'April 15, 2024',
      author: 'Michael Lin',
      category: 'Logistics',
      imgQuery: 'shipping container cargo freight shipping terms'
    },
    {
      id: 'canton-fair-tips',
      title: 'How to Prepare for the Canton Fair: A Buyer\'s Checklist',
      excerpt: 'Planning to visit Guangzhou? Make sure you maximize your time at the world\'s largest trade fair with these essential preparation tips.',
      date: 'March 30, 2024',
      author: 'David Chen',
      category: 'Sourcing Tips',
      imgQuery: 'canton fair guangzhou trade show exhibition'
    },
    {
      id: 'mold-ownership',
      title: 'Who Owns the Product Mold? Securing Your IP in China',
      excerpt: 'If you pay for tooling, make sure you legally own it. Learn how to draft proper agreements before developing a custom product.',
      date: 'March 12, 2024',
      author: 'Sarah Wu',
      category: 'Legal & Contracts',
      imgQuery: 'injection molding factory legal contract signed'
    },
    {
      id: 'chinese-new-year',
      title: 'Surviving the Chinese New Year Manufacturing Shutdown',
      excerpt: 'CNY effectively halts Chinese manufacturing for nearly a month. Here is your timeline for placing orders to avoid running out of stock.',
      date: 'February 05, 2024',
      author: 'Michael Lin',
      category: 'Production Planning',
      imgQuery: 'calendar planning chinese new year factory schedule'
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      <section className="bg-slate-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 id="page-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Sourcing Insights</h1>
          <p id="page-subtitle" className="text-lg md:text-xl text-slate-600">
            Expert advice, industry news, and practical guides for importing from China successfully.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow bg-white flex flex-col h-full group">
                <Link to={`/blog/${post.id}`} className="block relative h-56 w-full overflow-hidden">
                    <img
                        data-strk-img-id={`blog-img-${post.id}`}
                        data-strk-img={`[blog-title-${post.id}] ${post.imgQuery}`}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                    </div>
                </Link>
                <CardHeader>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <CardTitle id={`blog-title-${post.id}`} className="text-xl text-slate-900 hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-slate-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter>
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center text-primary font-medium hover:underline">
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};