import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: "supply-chain-2026",
      title: "Navigating China's Supply Chain Landscape in 2026",
      excerpt: "An overview of the emerging trends, shifts in manufacturing hubs, and what global buyers need to know to stay competitive this year.",
      date: "Jun 15, 2026",
      author: "David Chen",
      category: "Industry Trends"
    },
    {
      id: "factory-audit-guide",
      title: "The Ultimate Factory Audit Checklist",
      excerpt: "Don't place a bulk order without checking these 10 critical factors. Learn how to spot red flags during a factory walkthrough.",
      date: "May 28, 2026",
      author: "Sarah Lin",
      category: "Quality Control"
    },
    {
      id: "negotiate-suppliers",
      title: "How to Negotiate MOQ with Chinese Suppliers",
      excerpt: "Struggling with high Minimum Order Quantities? Discover proven strategies to convince factories to accept smaller initial orders.",
      date: "May 10, 2026",
      author: "Michael Wang",
      category: "Sourcing Strategy"
    },
    {
      id: "shipping-costs",
      title: "5 Ways to Reduce Freight Costs in the Current Market",
      excerpt: "With fluctuating logistics rates, optimizing your shipping strategy is crucial. Here are practical ways to cut down your freight expenses.",
      date: "Apr 22, 2026",
      author: "Anna Zhang",
      category: "Logistics"
    },
    {
      id: "qc-standards",
      title: "Understanding AQL: Acceptable Quality Limits Explained",
      excerpt: "A deep dive into how AQL works in quality inspections and how to choose the right level for your product category.",
      date: "Apr 05, 2026",
      author: "Sarah Lin",
      category: "Quality Control"
    },
    {
      id: "payment-terms",
      title: "Safe Payment Methods for Chinese Suppliers",
      excerpt: "From T/T to Letters of Credit and Alibaba Trade Assurance. What is the safest way to pay your supplier while keeping leverage?",
      date: "Mar 18, 2026",
      author: "David Chen",
      category: "Risk Management"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen" ref={containerRef}>
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h1 id="blog-title" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Sourcing Insights & Updates</h1>
          <p id="blog-subtitle" className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Practical advice, industry news, and expert tips for successfully manufacturing and importing from China.
          </p>
        </div>
      </section>

      {/* Featured Post (Latest) */}
      <section className="py-12 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
           <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col lg:flex-row group cursor-pointer hover:shadow-md transition-all">
              <div className="w-full lg:w-3/5 h-64 lg:h-auto relative overflow-hidden bg-slate-100">
                 <img 
                    data-strk-img-id="blog-featured"
                    data-strk-img={`[featured-title] [featured-cat]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={posts[0].title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                 />
              </div>
              <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                 <span id="featured-cat" className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 inline-block">
                    {posts[0].category}
                 </span>
                 <h2 id="featured-title" className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {posts[0].title}
                 </h2>
                 <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    {posts[0].excerpt}
                 </p>
                 <div className="flex items-center gap-4 text-sm text-slate-500 mb-8">
                    <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4"/> {posts[0].date}</div>
                    <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                    <div className="flex items-center gap-1.5"><User className="w-4 h-4"/> {posts[0].author}</div>
                 </div>
                 <div className="mt-auto">
                    <span className="inline-flex items-center font-medium text-blue-600 group-hover:underline">Read Article <ArrowRight className="ml-1 w-4 h-4"/></span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-20 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <Card key={post.id} className="border-none shadow-sm hover:shadow-md transition-all bg-white cursor-pointer group flex flex-col rounded-xl overflow-hidden">
                <div className="h-48 relative overflow-hidden bg-slate-100">
                   <img 
                      data-strk-img-id={`blog-img-${post.id}`}
                      data-strk-img={`[blog-title-${post.id}] [blog-cat-${post.id}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <span id={`blog-cat-${post.id}`} className="text-blue-600 font-semibold text-xs uppercase tracking-wider mb-3 inline-block">
                    {post.category}
                  </span>
                  <h3 id={`blog-title-${post.id}`} className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5"/> {post.date}</div>
                    <div className="flex items-center gap-1.5"><User className="w-3.5 h-3.5"/> {post.author}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Button variant="outline" size="lg" className="px-8 border-slate-300">
                Load More Articles
             </Button>
          </div>
        </div>
      </section>

    </div>
  );
}