import React from 'react';
import Layout from '@/Layout';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "How to Verify if a Chinese Supplier is a Factory or a Trading Company",
      excerpt: "Many international buyers struggle with transparency. Learn the 5 key signs to look for on business licenses and during factory walkthroughs.",
      date: "June 10, 2026",
      author: "David Chen",
      category: "Sourcing Tips"
    },
    {
      id: 2,
      title: "Impact of Logistics Costs on 2026 China Sourcing Strategy",
      excerpt: "Sea freight rates are fluctuating. We break down the best strategies for container consolidation and timing your shipments to save costs.",
      date: "June 05, 2026",
      author: "Sarah Wu",
      category: "Logistics"
    },
    {
      id: 3,
      title: "Quality Control Checklist: Home Electronics Manufacturing",
      excerpt: "Don't leave quality to chance. Here is the essential AQL checklist for electronic products sourced from Guangdong province.",
      date: "May 28, 2026",
      author: "Liu Wei",
      category: "Quality Control"
    }
  ];

  return (
    <Layout>
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">China Sourcing Insights</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Expert advice, market trends, and practical tips to help you master sourcing from China.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col">
                <div className="h-48 bg-gray-200 relative">
                   <img 
                    data-strk-img-id={`blog-img-${post.id}`}
                    data-strk-img={`[blog-title-${post.id}] factory china`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                  />
                  <div className="absolute top-4 left-4 bg-[#0F4C81] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center text-xs text-gray-400 mb-4 space-x-4">
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                    <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                  </div>
                  <h2 id={`blog-title-${post.id}`} className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#0F4C81]">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">{post.excerpt}</p>
                  <Link to="/blog" className="text-[#0F4C81] font-bold text-sm flex items-center hover:translate-x-1 transition-transform">
                    Read Full Article <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
             <button className="border-2 border-[#0F4C81] text-[#0F4C81] px-8 py-3 rounded-md font-bold hover:bg-[#0F4C81] hover:text-white transition-all">
               Load More Articles
             </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
