import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'How to Find Reliable Suppliers on Alibaba: A Step-by-Step Guide',
    excerpt: 'Alibaba is a goldmine for sourcing, but only if you know how to filter legitimate factories from trading companies...',
    date: 'July 15, 2026',
    category: 'Sourcing Basics',
    imageQuery: 'alibaba website homepage laptop screen'
  },
  {
    id: 2,
    title: 'Understanding AQL Standards: What You Need to Know for Quality Inspection',
    excerpt: 'Acceptable Quality Limit (AQL) is the backbone of QC. Learn how to choose the right level for your niche...',
    date: 'June 28, 2026',
    category: 'Quality Control',
    imageQuery: 'quality inspection paperwork chart data'
  },
  {
    id: 3,
    title: 'China Shipping Crisis: 5 Strategies to Reduce Your Logistics Costs in 2026',
    excerpt: 'Freight rates remain volatile. Here are five actionable tips to keep your shipping margins healthy this year...',
    date: 'June 10, 2026',
    category: 'Logistics',
    imageQuery: 'shipping containers cargo ship ocean'
  }
];

const Blog = () => {
  return (
    <div className="blog-page">
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Sourcing Insights</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Expert advice, industry news, and practical tips to help you master China sourcing.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {blogPosts.map((post) => (
                <article key={post.id} className="group cursor-pointer">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="aspect-[16/9] bg-slate-100 rounded-2xl overflow-hidden shadow-sm">
                      <img 
                        data-strk-img-id={`blog-img-${post.id}`}
                        data-strk-img={`[blog-title-${post.id}] ${post.imageQuery}`}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">{post.category}</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-500 text-sm">{post.date}</span>
                      </div>
                      <h2 id={`blog-title-${post.id}`} className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      <Link to={`/blog/${post.id}`} className="text-slate-900 font-bold flex items-center group-hover:translate-x-2 transition-transform">
                        Read More <span className="ml-2">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="space-y-12">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Subscribe</h3>
                <p className="text-slate-600 mb-6 font-medium">Get the latest sourcing news and insights delivered to your inbox.</p>
                <div className="space-y-3">
                  <input type="email" placeholder="Your email address" className="w-full h-12 px-4 rounded-lg border border-slate-200" />
                  <button className="w-full bg-slate-900 text-white h-12 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                    Join Newsletter
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Categories</h3>
                <ul className="space-y-4">
                  {['Quality Control', 'Sourcing Basics', 'Logistics', 'Factory Audits', 'Negotiation'].map((cat, i) => (
                    <li key={i}>
                      <a href="#" className="flex justify-between items-center text-slate-600 py-2 border-b border-dashed border-slate-200 hover:text-blue-600">
                        <span>{cat}</span>
                        <span className="text-slate-300 text-sm italic"> (12)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
