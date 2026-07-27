import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

export const Blog = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    const posts = [
        {
            id: 'post1',
            title: 'How to Identify Fake Factories on Alibaba in 2026',
            excerpt: 'Trading companies often pose as manufacturers on B2B platforms. Discover the 5 key signs to look for before sending your deposit.',
            date: 'July 15, 2026',
            author: 'David Chen',
            readTime: '6 min read',
            category: 'Sourcing Tips'
        },
        {
            id: 'post2',
            title: 'AQL Inspections Explained: What Buyers Need to Know',
            excerpt: 'Acceptable Quality Limit (AQL) is the industry standard for pre-shipment inspections. Learn how to determine the right sample size and defect limits for your products.',
            date: 'July 02, 2026',
            author: 'Sarah Lin',
            readTime: '8 min read',
            category: 'Quality Control'
        },
        {
            id: 'post3',
            title: 'Sea Freight vs. Air Freight: Cost Analysis for Amazon FBA',
            excerpt: 'When does it make sense to use air freight? We break down the break-even points, transit times, and hidden costs for Amazon sellers.',
            date: 'June 20, 2026',
            author: 'Michael Wong',
            readTime: '5 min read',
            category: 'Logistics'
        },
        {
            id: 'post4',
            title: 'Negotiating with Chinese Suppliers: Cultural Nuances',
            excerpt: 'Price negotiation in China is different from the West. Understand the concept of "Guanxi" and how to negotiate without compromising product quality.',
            date: 'June 05, 2026',
            author: 'David Chen',
            readTime: '7 min read',
            category: 'Business Culture'
        },
        {
            id: 'post5',
            title: 'The Real Cost of Poor Sourcing: A Case Study',
            excerpt: 'How saving 5% on initial unit costs led to a 20% return rate for an electronics brand, and how to avoid the same mistake.',
            date: 'May 22, 2026',
            author: 'Sarah Lin',
            readTime: '6 min read',
            category: 'Case Studies'
        },
        {
            id: 'post6',
            title: 'Essential Certifications for Importing Electronics to the EU/US',
            excerpt: 'CE, FCC, RoHS, UL—what do they mean and who is actually responsible for compliance? A simple guide for importers.',
            date: 'May 10, 2026',
            author: 'Michael Wong',
            readTime: '9 min read',
            category: 'Compliance'
        }
    ];

    return (
        <div className="w-full bg-white pb-20" ref={containerRef}>
             <div className="bg-gray-50 py-16 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4" id="blog-title">Sourcing Insights & Updates</h1>
                    <p className="text-xl text-gray-600" id="blog-desc">Expert advice, industry news, and actionable tips for importing from China.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow border-gray-100 flex flex-col h-full">
                            <CardContent className="p-0 flex flex-col h-full">
                                <div className="relative">
                                    <img 
                                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                        alt={post.title}
                                        className="w-full h-52 object-cover"
                                        data-strk-img-id={`blog-img-${post.id}`}
                                        data-strk-img={`[blog-title-${post.id}]`}
                                        data-strk-img-ratio="16x9"
                                        data-strk-img-width="600"
                                    />
                                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        <span id={`blog-category-${post.id}`}>{post.category}</span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer" id={`blog-title-${post.id}`}>
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    
                                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500 mt-auto">
                                        <div className="flex items-center space-x-4">
                                            <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {post.date}</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                                         <span className="flex items-center"><User className="h-4 w-4 mr-1" /> {post.author}</span>
                                         <span className="flex items-center"><Clock className="h-4 w-4 mr-1" /> {post.readTime}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <Button variant="outline" className="px-8 py-2">Load More Articles</Button>
                </div>
            </div>
        </div>
    );
};