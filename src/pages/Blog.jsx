import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "Top 5 Sourcing Hubs in China You Should Know",
      excerpt: "From Yiwu to Shenzhen, explore the key provinces and cities for different industrial categories in China.",
      date: "June 10, 2026",
      category: "Market Guide",
      query: "shenzhen skyline city lights"
    },
    {
      title: "How to Avoid Scams When Sourcing on Alibaba",
      excerpt: "Red flags to watch out for and professional vetting techniques to ensure you're dealing with a legitimate factory.",
      date: "May 28, 2026",
      category: "Security",
      query: "professional business meeting china"
    },
    {
      title: "Demystifying AQL: A Guide to Quality Inspections",
      excerpt: "Everything you need to know about Acceptable Quality Levels and how to read a QC inspection report.",
      date: "May 15, 2026",
      category: "Quality Control",
      query: "quality inspection tools caliper"
    },
    {
      title: "The Future of China Manufacturing in 2026",
      excerpt: "Trends in automation, sustainable production, and shifting cost structures in the Chinese market.",
      date: "May 02, 2026",
      category: "Industry News",
      query: "robotic arm assembly factory"
    }
  ];

  return (
    <div className="pt-24 pb-24">
      <section className="bg-slate-50 py-24 mb-16 text-center border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 italic tracking-tight">Expert Sourcing Insights</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Latest trends, guides, and tips to help you navigate the complex China sourcing landscape.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post, idx) => (
            <article key={idx} className="group cursor-pointer">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 shadow-lg border border-slate-100">
                <img
                  data-strk-img-id={`blog-post-${idx}`}
                  data-strk-img={post.query}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full" />
                  <span className="text-slate-400">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-600 leading-relaxed truncate-3-lines">
                  {post.excerpt}
                </p>
                <div className="pt-2 flex items-center text-primary font-bold gap-2 group-hover:gap-4 transition-all">
                  Read Full Article
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
           <button className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 transition-all shadow-sm">Load More Articles</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
