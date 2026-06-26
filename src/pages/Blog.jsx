import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Layout from '@/Layout';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const posts = [
    {
      title: 'How to Verify a China Factory in 5 Steps',
      excerpt: 'Beyond looking at a gold supplier badge on Alibaba, here are the physical checks you must perform before sending any deposit.',
      author: 'Chen Wei',
      date: 'June 15, 2026',
      readTime: '8 min read',
      category: 'Supplier Verification',
      imgId: 'blog-verify'
    },
    {
      title: 'Understanding Incoterms 2020: FOB vs EXW',
      excerpt: 'Which shipping term is best for your business? We break down the costs and responsibilities for each common shipping method.',
      author: 'Sarah Johnson',
      date: 'May 28, 2026',
      readTime: '12 min read',
      category: 'Shipping & Logistics',
      imgId: 'blog-incoterms'
    },
    {
      title: 'Current Trends in China Manufacturing Costs',
      excerpt: 'Labor costs and raw material prices are shifting. Learn how to maintain your profit margins in the current economic landscape.',
      author: 'Zhuang Li',
      date: 'May 12, 2026',
      readTime: '10 min read',
      category: 'Market Trends',
      imgId: 'blog-trends'
    },
    {
      title: 'The Hidden Risks of Low-Cost Sourcing',
      excerpt: 'When a quote seems too good to be true, it usually is. We explore the common shortcuts factories take to hit ultra-low targets.',
      author: 'Chen Wei',
      date: 'April 22, 2026',
      readTime: '15 min read',
      category: 'Quality Control',
      imgId: 'blog-risks'
    }
  ];

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="bg-primary py-24 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Sourcing & Manufacturing Blog</h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Professional insights, news, and practical guides for global buyers sourcing from China.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {posts.map((post, idx) => (
                <article key={idx} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-3xl mb-8">
                    <img 
                      data-strk-img-id={post.imgId}
                      data-strk-img={`[blog-title-${idx}] [blog-category-${idx}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="1200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6" id={`blog-category-${idx}`}>
                      <span className="bg-accent text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" /> {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" /> {post.readTime}
                    </span>
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4" /> {post.author}
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-primary mb-4 group-hover:text-accent transition-colors" id={`blog-title-${idx}`}>
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                    Read More <ArrowRight className="h-5 w-5 text-accent" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white p-16 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-extrabold text-primary mb-6">Subscribe to our Sourcing Newsletter</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Get the latest China manufacturing news, market trends, and practical sourcing tips delivered to your inbox every two weeks.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your work email" 
                className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                required
              />
              <button type="submit" className="bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;
