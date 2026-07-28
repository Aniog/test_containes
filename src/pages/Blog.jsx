import React, { useRef, useEffect } from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Blog = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    const posts = [
        {
            id: 1,
            title: 'How to Navigate Chinese New Year Production Delays',
            excerpt: 'CNY is the biggest disruption in the global supply chain. Learn how to plan your inventory, when to place orders, and how to negotiate terms to avoid being left out of stock.',
            date: 'Jan 15, 2026',
            author: 'David Chen',
            category: 'Logistics',
            imgQuery: '[blog-1-title]'
        },
        {
            id: 2,
            title: 'AQL Inspections Explained: What Buyers Need to Know',
            excerpt: 'Acceptable Quality Limit (AQL) is the industry standard for product inspections. We break down how it works, how to choose your sample size, and what defects mean for your shipment.',
            date: 'Dec 02, 2025',
            author: 'Sarah Lin',
            category: 'Quality Control',
            imgQuery: '[blog-2-title]'
        },
        {
            id: 3,
            title: 'Trading Company vs. Factory: How to Spot the Difference',
            excerpt: 'Many suppliers on Alibaba claim to be factories but are actually middlemen who mark up prices. Discover the telltale signs and questions to ask to ensure you are buying direct.',
            date: 'Nov 18, 2025',
            author: 'David Chen',
            category: 'Sourcing Tips',
            imgQuery: '[blog-3-title]'
        },
        {
            id: 4,
            title: 'Incoterms 2024: FOB vs. EXW vs. DDP',
            excerpt: 'Understanding incoterms is crucial for calculating your landed costs. We explain the most common shipping terms used in China and which one is best for your specific business model.',
            date: 'Oct 05, 2025',
            author: 'Michael Zhang',
            category: 'Shipping',
            imgQuery: '[blog-4-title]'
        }
    ];

    return (
        <div ref={containerRef} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Sourcing Insights</h1>
                    <p className="text-xl text-slate-600">
                        Expert advice, industry updates, and practical tips for importing from China securely and profitably.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {posts.map((post) => (
                        <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                            <Link to="#" className="block aspect-w-16 aspect-h-9 bg-slate-100 relative group overflow-hidden">
                                <img
                                    data-strk-img-id={`blog-img-${post.id}`}
                                    data-strk-img={post.imgQuery}
                                    data-strk-img-ratio="16x9"
                                    data-strk-img-width="600"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                    alt={post.title}
                                />
                                <div className="absolute top-4 left-4">
                                     <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-800 text-xs font-bold uppercase tracking-wider rounded-md shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </Link>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center text-sm text-slate-500 mb-4 space-x-4">
                                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" />{post.date}</span>
                                    <span className="flex items-center"><User className="w-4 h-4 mr-1.5" />{post.author}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 line-clamp-2">
                                    <Link to="#" id={`blog-${post.id}-title`} className="hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-slate-600 mb-6 flex-grow line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="pt-4 border-t border-slate-100">
                                    <Link to="#" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700">
                                        Read Full Article <ArrowRight className="ml-1 w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;