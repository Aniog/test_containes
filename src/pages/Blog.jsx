import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import strkImgConfig from '@/strk-img-config.json';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      title: "How to Verify a China Supplier: 5 Red Flags to Watch For",
      date: "Oct 12, 2026",
      author: "David Chen",
      excerpt: "Not all gold shines. Learn how to distinguish a real factory from a trading company pretending to be one.",
      category: "Sourcing Tips",
      imgId: "blog-1"
    },
    {
      title: "A Importer's Guide to AQL Sampling Levels",
      date: "Oct 8, 2026",
      author: "Sarah Wu",
      excerpt: "Understanding quality control standards is essential to managing your expectations and factory relationships.",
      category: "Quality Control",
      imgId: "blog-2"
    },
    {
      title: "Shipping from China in 2026: Cost vs Speed",
      date: "Sept 28, 2026",
      author: "Michael Low",
      excerpt: "An analysis of current freight trends and how to choose between Air, Sea, and Rail for your shipments.",
      category: "Logistics",
      imgId: "blog-3"
    },
    {
      title: "Why Chinese New Year Can Ruin Your Q1 Production",
      date: "Sept 15, 2026",
      author: "David Chen",
      excerpt: "Plan ahead. Discover why you need to place your orders months before the CNY holiday begins.",
      category: "Supply Chain",
      imgId: "blog-4"
    }
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 italic underline underline-offset-8 decoration-secondary">Sourcing Insights</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">Practical advice and market updates for international buyers sourcing from China.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {posts.map((post, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="relative h-72 lg:h-96 rounded-3xl overflow-hidden mb-8 shadow-md">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`${post.title} China business article`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm flex items-center gap-2">
                      <Tag className="w-3 h-3 text-secondary" /> {post.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-4 px-2">
                  <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                    <span className="flex items-center gap-2"><User className="w-4 h-4" /> By {post.author}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-secondary transition-colors leading-snug">{post.title}</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-secondary font-bold text-lg group-hover:translate-x-2 transition-transform">
                    Read Article <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-100 italic">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Subscribe to our Supply Chain Update</h2>
          <p className="text-lg text-slate-600 mb-10">Get monthly insights on Chinese manufacturing trends, shipping rates, and factory data.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Your work email" className="flex-grow px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none shadow-inner" />
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-xl px-8 shadow-lg transition-all active:scale-[0.98]">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
