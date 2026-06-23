import React from 'react';
import PageHeader from '../components/shared/PageHeader';

const posts = [
    {
        title: "How to Avoid Scams When Sourcing from Alibaba",
        excerpt: "Not every 'Gold Supplier' is a manufacturer. Learn the warning signs of trading companies posing as factories and how to verify their credentials.",
        date: "June 15, 2026",
        category: "Safety & Verification",
        imgUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Understanding AQL: The Standard for Quality Control",
        excerpt: "What exactly is an Acceptable Quality Limit? We explain how to set AQL levels with your factory to ensure your expectations match reality.",
        date: "May 22, 2026",
        category: "Quality Control",
        imgUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Sea Freight vs Air Freight: 2026 Logistics Guide",
        excerpt: "With recent shifts in global shipping lanes, deciding how to transport your goods requires more than just looking at the base price.",
        date: "April 10, 2026",
        category: "Shipping & Logistics",
        imgUrl: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800"
    }
];

export default function Blog() {
  return (
    <div>
      <PageHeader 
        title="Sourcing Insights" 
        description="Expert advice, market updates, and practical guides for navigating the Chinese manufacturing ecosystem."
        bgImageId="bg-blog-header"
        bgImageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
      />
      
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
                        <div className="aspect-video w-full relative overflow-hidden bg-slate-200">
                            <img 
                                src={post.imgUrl} 
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                                <span className="text-xs text-slate-500">{post.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                                <a href="#" className="hover:text-primary transition-colors">{post.title}</a>
                            </h3>
                            <p className="text-slate-600 mb-6 line-clamp-3">
                                {post.excerpt}
                            </p>
                            <div className="mt-auto pt-4 border-t border-slate-100">
                                <a href="#" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                                    Read Article &rarr;
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            
            <div className="mt-16 text-center">
                <button className="inline-flex h-10 items-center justify-center rounded-md border border-slate-300 bg-white px-8 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none">
                    Load More Articles
                </button>
            </div>
        </div>
      </section>
    </div>
  );
}
