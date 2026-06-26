import React from 'react';
import { format } from 'date-fns';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'How to Verify if a Chinese Factory is Real',
      date: '2026-05-15',
      author: 'David Zhang',
      excerpt: 'Learn the essential steps to verify factory legitimacy beyond just looking at their website.',
      cat: 'Best Practices',
      id: 'blog-1'
    },
    {
      title: 'Common QC Defects in Electronics Manufacturing',
      date: '2026-06-02',
      author: 'Emily Wu',
      excerpt: 'A checklist for inspecting electronic components and avoiding major product recalls.',
      cat: 'Quality Control',
      id: 'blog-2'
    },
    {
      title: 'Understanding Incoterms for Global Shipping 2026',
      date: '2026-06-10',
      author: 'Shipping Team',
      excerpt: 'FOB, CIF, DDP? We break down which shipping terms are best for your business model.',
      cat: 'Logistics',
      id: 'blog-3'
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-slate-900 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Sourcing Insights</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Practical advice and updates for buying from China effectively.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, idx) => (
              <article key={idx} className="group cursor-pointer">
                <div className="rounded-2xl overflow-hidden mb-6 relative">
                  <span className="absolute top-4 left-4 z-10 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.cat}
                  </span>
                  <div className="h-64 overflow-hidden">
                    <img 
                      data-strk-img-id={`blog-img-${post.id}`}
                      data-strk-img={`China factory business article ${post.title}`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={post.title}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 text-slate-500 text-xs font-medium">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {format(new Date(post.date), 'MMMM d, yyyy')}</span>
                    <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="text-brand-blue font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-20 flex justify-center">
            <button className="border border-slate-200 px-8 py-3 rounded-md font-bold text-slate-600 hover:bg-slate-50 transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
