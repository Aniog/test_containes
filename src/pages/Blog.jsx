import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: "post-1",
      title: "5 Red Flags to Watch for When Choosing a Chinese Supplier",
      excerpt: "Don't get scammed. Learn the warning signs that a factory might not be as legitimate as they claim on Alibaba.",
      date: "July 12, 2026",
      author: "Li Wei",
      category: "Sourcing Tips"
    },
    {
      id: "post-2",
      title: "The Ultimate Guide to Incoterms 2026 for New Importers",
      excerpt: "FOB, EXW, DDP? We break down the most common shipping terms and which one is best for your business.",
      date: "June 28, 2026",
      author: "Chen Fan",
      category: "Logistics"
    },
    {
      id: "post-3",
      title: "How the Canton Fair is Changing in the Post-Pandemic Era",
      excerpt: "Digital transformation meets physical exhibitions. Here is what you need to know before visiting Guangzhou.",
      date: "May 15, 2026",
      author: "Sarah Johnson",
      category: "Events"
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 id="blog-hero-title" className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Sourcing Insights</h1>
          <p id="blog-hero-subtitle" className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
            Expert advice, market updates, and practical tips for successfully importing from China.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post) => (
              <article key={post.id} className="group flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    data-strk-img-id={`post-img-${post.id}`}
                    data-strk-img={`[post-excerpt-${post.id}] [post-title-${post.id}] sourcing blog post`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-black text-blue-600 mb-4 uppercase tracking-widest">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="text-slate-400">{post.date}</span>
                  </div>
                  <h2 id={`post-title-${post.id}`} className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p id={`post-excerpt-${post.id}`} className="text-slate-600 font-medium leading-relaxed mb-8">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400"><User className="w-4 h-4" /></div>
                      <span className="text-sm font-bold text-slate-500">{post.author}</span>
                    </div>
                    <Link to="#" className="text-blue-600 font-black text-sm flex items-center gap-2 hover:underline">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button variant="outline" size="lg" className="rounded-full px-12 border-2 hover:bg-slate-900 hover:text-white transition-all">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-blue-600 p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
             <div className="relative z-10 text-center md:text-left">
               <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">Stay Updated</h2>
               <p className="text-blue-100 font-medium">Join 5,000+ importers receiving our weekly China market report.</p>
             </div>
             <div className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-4">
               <input type="email" placeholder="Enter your email" className="bg-white/20 border-2 border-white/30 rounded-full h-14 px-8 text-white placeholder:text-blue-100 outline-none focus:bg-white focus:text-slate-900 focus:placeholder:text-slate-400 transition-all min-w-[300px]" />
               <Button variant="white" size="lg" className="rounded-full font-black uppercase tracking-widest px-10 h-14">Subscribe</Button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
