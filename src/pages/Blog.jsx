import React, { useEffect, useRef } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: 'post-1',
      title: 'How to Navigate the Canton Fair Like a Pro in 2024',
      excerpt: 'The Canton Fair is massive and overwhelming. Here is our step-by-step guide to finding the right suppliers, avoiding scams, and managing your time effectively.',
      date: 'March 15, 2024',
      author: 'David Chen',
      category: 'Sourcing Guides',
      imgId: 'blog-canton-1a2b',
      imgContext: 'canton fair trade show exhibition crowd business'
    },
    {
      id: 'post-2',
      title: 'Understanding Incoterms: EXW vs. FOB for China Imports',
      excerpt: 'Choosing the right shipping terms is crucial for your bottom line. We break down the differences between Ex Works and Free On Board, and when to use each.',
      date: 'February 28, 2024',
      author: 'Sarah Jenkins',
      category: 'Logistics',
      imgId: 'blog-shipping-3c4d',
      imgContext: 'shipping container port logistics cargo'
    },
    {
      id: 'post-3',
      title: '5 Red Flags During a Factory Audit (And Why You Need One)',
      excerpt: 'Don\'t wire your deposit until you read this. Here are the top warning signs our inspectors look for when conducting on-site factory verification in China.',
      date: 'February 10, 2024',
      author: 'Wei Lin',
      category: 'Quality Control',
      imgId: 'blog-audit-5e6f',
      imgContext: 'factory inspection clipboard quality control manufacturing'
    },
    {
      id: 'post-4',
      title: 'The Hidden Costs of Sourcing from Alibaba',
      excerpt: 'Alibaba is a great starting point, but it comes with hidden risks. Learn about trading company markups, quality fade, and how a sourcing agent can actually save you money.',
      date: 'January 22, 2024',
      author: 'David Chen',
      category: 'Industry Insights',
      imgId: 'blog-alibaba-7g8h',
      imgContext: 'laptop business analysis sourcing ecommerce'
    },
    {
      id: 'post-5',
      title: 'A Guide to Custom Packaging and Private Labeling in China',
      excerpt: 'Standing out on Amazon requires great packaging. This guide covers MOQ requirements, material options, and how to negotiate private labeling with your manufacturer.',
      date: 'January 05, 2024',
      author: 'Sarah Jenkins',
      category: 'Branding',
      imgId: 'blog-packaging-9i0j',
      imgContext: 'cardboard boxes packaging design warehouse'
    },
    {
      id: 'post-6',
      title: 'CNY 2024: How to Manage Chinese New Year Production Delays',
      excerpt: 'Chinese New Year halts production for weeks. If you don\'t plan ahead, you will run out of stock. Here is the ultimate timeline for ordering before the holiday.',
      date: 'December 12, 2023',
      author: 'Wei Lin',
      category: 'Supply Chain Management',
      imgId: 'blog-cny-1k2l',
      imgContext: 'calendar planning supply chain factory'
    }
  ];

  return (
    <div ref={containerRef}>
      <div className="bg-slate-900 py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="page-title" className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Sourcing Insights Blog
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">
            Practical advice, industry news, and expert tips for managing your supply chain in China.
          </p>
        </div>
      </div>

      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const titleId = `post-title-${post.id}`;
              const descId = `post-excerpt-${post.id}`;

              return (
                <article key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow group">
                  <Link to="#" className="block h-48 overflow-hidden relative">
                    <img 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-strk-img-id={post.imgId}
                      data-strk-img={`[${descId}] [${titleId}] ${post.imgContext}`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {post.category}
                    </div>
                  </Link>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-sm text-slate-500 mb-4 gap-4">
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {post.date}</span>
                        <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {post.author}</span>
                    </div>
                    <Link to="#">
                        <h2 id={titleId} className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                        </h2>
                    </Link>
                    <p id={descId} className="text-slate-600 mb-6 flex-grow line-clamp-3">
                        {post.excerpt}
                    </p>
                    <Link to="#" className="text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center mt-auto">
                        Read Article <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-16 flex justify-center">
             <button className="px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                Load More Articles
             </button>
          </div>

        </div>
      </div>
    </div>
  );
}
