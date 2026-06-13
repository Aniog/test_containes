import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        try {
            if (strkImgConfig) {
                return ImageHelper.loadImages(strkImgConfig, containerRef.current);
            }
        } catch (e) {
            console.log('ImageHelper config not found yet');
        }
    }, []);

    const posts = [
        {
            id: 'canton-fair-guide',
            title: 'The Ultimate Guide to Attending the Canton Fair',
            excerpt: 'Planning to visit the largest trade fair in the world? Here is what you need to know to maximize your time, negotiate effectively, and avoid common rookie mistakes.',
            date: '2025-10-15',
            author: 'David Chen',
            category: 'Sourcing Tips'
        },
        {
            id: 'understanding-incoterms',
            title: 'Understanding Incoterms: FOB, EXW, CIF Explained',
            excerpt: 'Demystifying the shipping terms you will encounter when importing from China. Learn which Incoterm is best for your business model and risk tolerance.',
            date: '2025-09-28',
            author: 'Sarah Lin',
            category: 'Logistics'
        },
        {
            id: 'quality-fade',
            title: 'What is "Quality Fade" and How to Prevent It',
            excerpt: 'Why do your products look great on the first order, but decline in quality on the third? Learn how to spot and prevent the dreaded "quality fade" phenomenon.',
            date: '2025-08-12',
            author: 'Michael Wong',
            category: 'Quality Control'
        },
        {
            id: 'trading-company-vs-factory',
            title: 'Trading Company vs. Factory: Which Should You Choose?',
            excerpt: 'Not all suppliers on Alibaba are factories. We break down the pros and cons of working with trading companies versus direct manufacturers.',
            date: '2025-07-05',
            author: 'David Chen',
            category: 'Supplier Selection'
        }
    ];

  return (
    <div ref={containerRef} className="pb-20">
      {/* Page Header */}
      <div className="bg-secondary py-16 text-center text-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sourcing Insights</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Expert advice, industry news, and tips for importing from China.</p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {posts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-shadow">
                      <div className="h-56 w-full bg-slate-100 relative overflow-hidden">
                           <img 
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                data-strk-img-id={`blog-img-${post.id}`}
                                data-strk-img={`[blog-title-${post.id}] business articles blog`}
                                data-strk-img-ratio="16x9"
                                data-strk-img-width="600"
                            />
                      </div>
                      <div className="p-6 md:p-8">
                          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                              <span className="text-primary font-medium">{post.category}</span>
                              <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {post.date}</span>
                          </div>
                          <h2 id={`blog-title-${post.id}`} className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                              {post.title}
                          </h2>
                          <p className="text-slate-600 mb-6 line-clamp-3">
                              {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between mt-auto">
                              <div className="flex items-center text-sm text-slate-600">
                                  <User className="w-4 h-4 mr-2" />
                                  <span>{post.author}</span>
                              </div>
                              <button className="text-primary font-medium flex items-center hover:underline">
                                  Read More <ArrowRight className="ml-1 w-4 h-4" />
                              </button>
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