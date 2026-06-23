import React, { useState, useEffect } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data: response } = await client.from('BlogPost').select('*').eq('status', 'published').order('publishedAt', { ascending: false });
        setPosts(response?.data?.list || []);
      } catch (err) {
        console.error('Failed to fetch blog posts:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-[#1a3d66] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">China Sourcing Blog</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Insights, guides, and tips from our experienced team in China to help you navigate the complexities of international trade.
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ff6b00]"></div>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((site) => {
                const post = site.data;
                const dateStr = post.publishedAt || site.created_at;
                const formattedDate = dateStr ? format(parseISO(dateStr), 'MMMM dd, yyyy') : 'Recently';

                return (
                  <article key={site.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        data-strk-img-id={`blog-img-${site.id}`}
                        data-strk-img={`[blog-title-${site.id}] [blog-category-${site.id}]`}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div id={`blog-category-${site.id}`} className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#1a3d66] px-3 py-1 rounded-md text-xs font-bold shadow-sm">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {formattedDate}</span>
                        <span className="flex items-center gap-1"><User className="w-3 h-3" /> SSourcing Team</span>
                      </div>
                      
                      <h2 id={`blog-title-${site.id}`} className="text-xl font-bold text-[#1a3d66] mb-4 group-hover:text-[#ff6b00] transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h2>
                      
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-auto pt-6 border-t border-slate-50">
                        <Link to={`/blog/${post.slug}`} className="text-[#ff6b00] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                          Read Entire Post <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-500">
              <Tag className="w-16 h-16 mx-auto mb-4 opacity-20" />
              Check back soon for new articles!
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 bg-[#1a3d66] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-6">Stay Informed on China Sourcing</h2>
          <p className="text-lg text-slate-300 mb-10">
            Join 2,000+ buyers who receive our monthly newsletter with the latest industrial hub reports and sourcing strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
            />
            <button className="px-8 py-4 bg-[#ff6b00] hover:bg-[#e65a00] font-bold rounded-md transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
