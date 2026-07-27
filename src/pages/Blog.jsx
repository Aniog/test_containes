import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: "post-1",
    title: "5 Common Sourcing Mistakes in China & How to Avoid Them",
    excerpt: "Many buyers lose thousands of dollars due to simple errors in communication or lack of due diligence. Here's what you need to know.",
    date: "Aug 12, 2026",
    author: "Zhang Wei",
    imgId: "blog-1-img",
    imgQuery: "china factory negotiation business mistake"
  },
  {
    id: "post-2",
    title: "Understanding AQL Quality Standards for Your Inspections",
    excerpt: "What does AQL 2.5/4.0 really mean? Learn how to set the right quality thresholds for your manufacturing projects.",
    date: "Aug 05, 2026",
    author: "Li Na",
    imgId: "blog-2-img",
    imgQuery: "quality control inspection checking products"
  },
  {
    id: "post-3",
    title: "The Ultimate Guide to Shipping from China in 2026",
    excerpt: "Sea freight, air freight, or rail? We break down the costs and timelines for every major shipping route to the West.",
    date: "July 28, 2026",
    author: "Chen Hong",
    imgId: "blog-3-img",
    imgQuery: "shipping container port logistics"
  },
  {
    id: "post-4",
    title: "How to Protect Your IP When Manufacturing in China",
    excerpt: "Intellectual property is a major concern for inventors. Learn how NNN agreements and factory selection can keep your designs safe.",
    date: "July 20, 2026",
    author: "Zhang Wei",
    imgId: "blog-4-img",
    imgQuery: "legal document contract china manufacturing"
  }
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = "Blog | Sourcing Guides & Industry News | SSourcing China";
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen">
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Sourcing Guides & Industry News</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Stay informed with the latest insights on the Chinese manufacturing market, logistics, and quality control.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row border border-slate-100 group">
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                  <img 
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-title-${post.id}] ${post.imgQuery}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="md:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1.5 underline decoration-primary underline-offset-4 decoration-2"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> By {post.author}</span>
                    </div>
                    <h2 id={`blog-title-${post.id}`} className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-sm line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="group/btn">
                      Read Full Article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Monthly Insights</h2>
          <p className="text-slate-600 mb-8">Get the latest pricing trends and factory news from China delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow h-12 px-4 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <Button className="h-12 px-8">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
