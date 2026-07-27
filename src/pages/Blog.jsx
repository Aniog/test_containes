import React, { useEffect, useRef } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      title: 'How to Verify a China Supplier in 2026: A Step-by-Step Guide',
      excerpt: 'Learn the essential checks you need to perform before sending deposits to a new manufacturer in China.',
      date: 'July 15, 2026',
      author: 'David Chen',
      img: 'china factory business meeting'
    },
    {
      title: 'Common Sourcing Mistakes to Avoid for First-Time Importers',
      excerpt: 'From ignoring sample testing to poor communication, here is what not to do when sourcing from China.',
      date: 'July 02, 2026',
      author: 'Sarah Lin',
      img: 'logistics container port'
    },
    {
      title: 'Understanding Incoterms 2020: FOB vs EXW vs DDP',
      excerpt: 'A clear explanation of shipping terms and why Choosing the right one can save you thousands in hidden costs.',
      date: 'June 20, 2026',
      author: 'Mike Wang',
      img: 'global shipping logistics warehouse'
    },
    {
      title: 'The Impact of New Sustainability Regulations on China Factories',
      excerpt: 'How the latest environmental laws are affecting production costs and lead times across industrial hubs.',
      date: 'June 05, 2026',
      author: 'David Chen',
      img: 'renewable energy solar panels factory'
    }
  ];

  return (
    <div className="bg-white py-20 lg:py-32" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">China Sourcing Blog</h1>
            <p className="text-xl text-slate-600">
              Expert insights, industry news, and practical guides to help you navigate the complex world of China manufacturing and logistics.
            </p>
          </div>
          <div className="hidden lg:block">
            <button className="px-6 py-3 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  data-strk-img-id={`blog-post-img-${index}`}
                  data-strk-img={post.img}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <div className="flex items-center gap-6 text-xs text-slate-500 mb-4 uppercase tracking-wider font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all">
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="mt-20 flex justify-center">
          <button className="px-8 py-3 bg-slate-100 text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
