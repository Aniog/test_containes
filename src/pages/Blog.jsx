import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "5 Common Risks When Sourcing from China (and How to Avoid Them)",
      category: "Sourcing Strategy",
      date: "May 15, 2026",
      author: "Alex Cheng",
      summary: "Understand the landscape of China manufacturing beyond just the price tag. We discuss communication, hidden costs, and middleman traps.",
      imgId: "blog-sourcing-risks"
    },
    {
      title: "What is a Pre-Shipment Inspection (PSI) and Why You Need One",
      category: "Quality Control",
      date: "April 28, 2026",
      author: "Michael Li",
      summary: "Don't pay the balance before you know what's in the box. Learn about AQL levels, sampling methods, and inspection checklists.",
      imgId: "blog-quality-control"
    },
    {
      title: "Navigating the New 2026 Export Regulations in China",
      category: "Logistics",
      date: "April 10, 2026",
      author: "Sarah Wang",
      summary: "A breakdown of recent changes in customs procedures and environmental compliance certificates required for overseas shipping.",
      imgId: "blog-export-regulations"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-slate-900 mb-6 font-display">China Sourcing Blog</h1>
            <p className="text-lg text-slate-600 leading-relaxed">Expert insights, tips, and industry updates to help you navigate the complexities of manufacturing and sourcing in China.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Featured Post */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group lg:col-span-2 md:flex-row">
              <div className="md:w-1/2 overflow-hidden aspect-video md:aspect-auto">
                 <img
                    data-strk-img-id="featured-blog-img"
                    data-strk-img="china sourcing professional strategy factory"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Featured Blog"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
              </div>
              <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                <span className="text-blue-700 font-bold text-sm tracking-widest uppercase mb-4">Sourcing Guide</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-blue-700 transition-colors">How to Find a Reliable Manufacturer in China without Visiting</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">Finding a partner you can trust when you're 8,000 miles away is the biggest challenge in global sourcing. We've compiled our 10 years of experience into this definitive guide.</p>
                <button className="flex items-center gap-2 text-slate-900 font-bold hover:gap-3 hover:text-blue-700 transition-all">
                   Continue Reading <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, i) => (
              <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group">
                <div className="aspect-[16/9] overflow-hidden">
                   <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`${post.category} business china`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <div className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</div>
                    <div className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {post.author}</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">{post.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{post.summary}</p>
                  <button className="text-blue-700 text-sm font-bold flex items-center gap-2 hover:underline">
                     Read more <ArrowRight className="w-4 h-4" />
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
