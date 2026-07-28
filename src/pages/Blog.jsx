import React from 'react';
import PageHeader from '@/components/common/PageHeader.jsx';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Top 5 Manufacturing Hubs in China in 2026',
    excerpt: 'Detailed analysis of where you should source your products based on industry specializations...',
    date: 'July 15, 2026',
    imageId: 'blog-post-01'
  },
  {
    title: 'How to Avoid Common Sourcing Scams in China',
    excerpt: 'Expert tips on identifying fake trading companies and verifying business licenses like a pro...',
    date: 'June 28, 2026',
    imageId: 'blog-post-02'
  },
  {
    title: 'Understanding AQL Standards for Quality Control',
    excerpt: 'A beginners guide to understanding Acceptable Quality Levels and how to read QC reports...',
    date: 'June 10, 2026',
    imageId: 'blog-post-03'
  }
];

const Blog = () => {
  return (
    <div>
      <PageHeader 
        title="Sourcing Insights" 
        subtitle="Expert advice and market updates to help you navigate the China supply chain."
        imageId="blog-header"
        searchTerms="China business blog news office"
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="flex flex-col bg-white rounded-xl border border-gray-100 shadow-lg overflow-hidden h-full group">
                <div className="h-56 bg-gray-200 overflow-hidden">
                  <img 
                    data-strk-img-id={post.imageId}
                    data-strk-img={`${post.title} China sourcing manufacturing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-gray-500 mb-4 gap-4">
                    <div className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</div>
                    <div className="flex items-center"><User size={14} className="mr-1" /> SSourcing Team</div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">{post.excerpt}</p>
                  <button className="text-primary font-bold flex items-center group-hover:translate-x-1 transition-transform">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <button className="px-8 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors">
               Load More Articles
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
