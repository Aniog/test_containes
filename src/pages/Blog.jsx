import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "5 Red Flags When Sourcing from Alibaba",
            excerpt: "Alibaba is a great directory, but it's full of trading companies disguised as factories. Here's how to spot them.",
            date: "June 15, 2026",
            category: "Supplier Verification",
            imgId: "blog-image-1"
        },
        {
            id: 2,
            title: "Understanding Incoterms: FOB vs EXW vs DDP",
            excerpt: "A simple breakdown of the most common shipping terms and which one you should choose for your specific situation.",
            date: "May 28, 2026",
            category: "Shipping & Logistics",
            imgId: "blog-image-2"
        },
        {
            id: 3,
            title: "Why AQL Standards Matter in Quality Control",
            excerpt: "Acceptable Quality Limit (AQL) is the international standard for inspections. Learn how it works and how to set your limits.",
            date: "April 10, 2026",
            category: "Quality Control",
            imgId: "blog-image-3"
        }
    ];

    return (
        <div className="flex flex-col">
            <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Sourcing Insights</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Actionable advice, guides, and industry news to help you navigate the complexities of manufacturing in China.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article key={post.id} className="bg-white border text-left border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
                                <div className="h-48 overflow-hidden relative">
                                    <img 
                                        data-strk-img-id={post.imgId}
                                        data-strk-img={`[blog-title-${post.id}] article`}
                                        data-strk-img-ratio="16x9"
                                        data-strk-img-width="600"
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform hover:scale-105"
                                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-blue-800 rounded-full">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="text-sm text-slate-500 mb-3">{post.date}</div>
                                    <h2 id={`blog-title-${post.id}`} className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                                        <Link to="#" className="hover:text-blue-600">{post.title}</Link>
                                    </h2>
                                    <p className="text-slate-600 mb-6 flex-grow">{post.excerpt}</p>
                                    <Link to="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 mt-auto">
                                        Read Article <ArrowRight className="ml-1 w-4 h-4"/>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                    
                    <div className="mt-16 text-center">
                        <button className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-6 py-3 rounded-md shadow-sm transition inline-flex items-center">
                            <BookOpen className="mr-2 w-4 h-4" /> Load More Articles
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;