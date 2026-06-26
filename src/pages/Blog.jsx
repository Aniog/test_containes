import React from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "How to Verify a Chinese Factory in 2024",
      excerpt: "Don't get scammed. Learn the essential steps to verify factory legitimacy, from business licenses to on-site visits.",
      date: "May 15, 2024",
      author: "Chen Wei",
      category: "Sourcing Tips",
      img: "industrial factory business verification documents",
      id: "blog-1"
    },
    {
      title: "Understanding AQL Quality Inspection Levels",
      excerpt: "A complete guide for buyers on how to set quality standards and understand inspection reports.",
      date: "May 2, 2024",
      author: "Sarah Smith",
      category: "Quality Control",
      img: "quality inspection reports and checklist",
      id: "blog-2"
    },
    {
      title: "Shipping from China: Sea vs Air vs Rail",
      excerpt: "Analyze which shipping method is right for your budget and timeline in the current global logistics climate.",
      date: "April 20, 2024",
      author: "Li Jun",
      category: "Logistics",
      img: "cargo containers at port for shipping",
      id: "blog-3"
    },
    {
      title: "5 Common Mistakes When Negotiating with Suppliers",
      excerpt: "Cultural nuances and business etiquette can make or break your deal. Here's what to avoid.",
      date: "April 5, 2024",
      author: "Chen Wei",
      category: "Negotiation",
      img: "business handshake in office meeting",
      id: "blog-4"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 border-b border-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sourcing Insights</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Expert advice, market trends, and practical guides for buying from China.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Content */}
            <div className="lg:w-2/3 space-y-16">
              {posts.map((post, idx) => (
                <article key={idx} className="group flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/2 w-full aspect-[4/3] rounded-2xl overflow-hidden relative shadow-lg">
                    <div 
                      className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105"
                      data-strk-bg-id={`blog-bg-${post.id}`}
                      data-strk-bg={post.img}
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="600"
                    />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-blue-600">
                      <span>{post.category}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-slate-400 pt-2">
                       <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {post.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" /> {post.author}
                      </span>
                    </div>
                    <button className="flex items-center gap-2 text-blue-600 font-bold text-sm pt-4 group-hover:translate-x-1 transition-transform">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
              
              {/* Pagination */}
              <div className="flex justify-center gap-4 pt-12">
                <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-600 hover:text-blue-600 transition-all">1</button>
                <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-600 hover:text-blue-600 transition-all">2</button>
                <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-600 hover:text-blue-600 transition-all">3</button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-12">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Search</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full pl-4 pr-12 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Categories</h3>
                <ul className="space-y-4">
                  {["Sourcing Tips", "Quality Control", "Logistics", "Negotiation", "Market Trends", "OEM Support"].map((cat, idx) => (
                    <li key={idx} className="flex justify-between items-center text-slate-600 hover:text-blue-600 cursor-pointer group transition-colors">
                      <span className="font-medium">{cat}</span>
                      <span className="bg-white border border-slate-200 text-xs px-2 py-1 rounded-md text-slate-400 group-hover:border-blue-300 transition-colors">12</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-600 p-10 rounded-3xl text-white shadow-xl shadow-blue-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <h3 className="text-2xl font-bold mb-4 relative z-10">Get Our Sourcing Checklist</h3>
                <p className="text-blue-100 text-sm mb-8 relative z-10">Download our free 50-point inspection checklist for China factory audits.</p>
                <button className="w-full bg-white text-blue-600 font-bold py-4 rounded-xl hover:bg-blue-50 transition-all relative z-10">
                  Download Free Guide
                </button>
              </div>
            </aside>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Blog;

