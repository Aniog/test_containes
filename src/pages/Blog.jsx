import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    { title: 'How to Avoid Scams on Alibaba: A Comprehensive Guide', date: 'July 20, 2026', author: 'David Chen', excerpt: 'Learning how to spot red flags when dealing with suppliers on online marketplaces...', imgId: 'blog-1' },
    { title: 'Understanding Pre-Shipment Inspection (PSI): Why It Matters', date: 'July 15, 2026', author: 'Sophie Wang', excerpt: 'Why quality control before the items leave the factory is the most critical step...', imgId: 'blog-2' },
    { title: 'China Sourcing Fees: What to Expect in 2026', date: 'July 10, 2026', author: 'Leo Zhang', excerpt: 'A breakdown of sourcing agent fees, commissions, and hidden costs to watch out for...', imgId: 'blog-3' }
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Sourcing Blog</h1>
        <p className="text-xl opacity-90">Insights and tips for successful sourcing in China.</p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <article key={i} className="flex flex-col">
              <img 
                data-strk-img-id={post.imgId}
                data-strk-img={`blog post ${post.title}`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="rounded-xl mb-6 shadow-md hover:opacity-90 transition-opacity cursor-pointer"
              />
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.date}</span>
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 hover:text-accent transition-colors cursor-pointer">{post.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow">{post.excerpt}</p>
              <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">Read More <ArrowRight className="w-4 h-4" /></button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Blog;
