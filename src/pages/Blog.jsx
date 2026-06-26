import React from 'react';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    title: "5 Red Flags to Watch for When Choosing a China Manufacturer",
    excerpt: "Importing from China can be highly profitable, but choosing the wrong supplier can lead to financial losses and brand damage. Here are the top red flags to watch for during your selection process.",
    published_at: "2026-05-15T00:00:00Z",
    author: "Li Wei",
    id: "post-1"
  },
  {
    title: "Understanding AQL Standards: A Guide for Quality Inspections",
    excerpt: "What exactly is AQL 2.5/4.0? If you're importing products, understanding Acceptable Quality Levels is crucial for setting clear expectations with your factory and inspection team.",
    published_at: "2026-06-02T00:00:00Z",
    author: "David Chen",
    id: "post-2"
  },
  {
    title: "How to Reduce Shipping Costs from China in 2026",
    excerpt: "Freight rates are constantly fluctuating. Learn the latest strategies for container consolidation, choosing the right Incoterms, and negotiating with freight forwarders.",
    published_at: "2026-06-20T00:00:00Z",
    author: "Sarah Johnson",
    id: "post-3"
  }
];

const Blog = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Knowledge Base</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Expert insights on China sourcing, quality control, shipping logistics, and cross-border trade.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col">
                <div className="h-56 bg-slate-100 flex items-center justify-center text-slate-300">
                  <Clock className="h-12 w-12 opacity-20" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors uppercase-first">{post.title}</h3>
                  <p className="text-slate-600 text-sm mb-8 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <button className="mt-auto flex items-center gap-1 text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    Read Article <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
