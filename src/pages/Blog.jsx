import React, { useEffect, useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { format, parseISO } from 'date-fns';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data: response, error } = await client
          .from('BlogPost')
          .select('*')
          .order('published_at', { ascending: false });
        
        if (error) throw error;
        setPosts(response?.data?.list || []);
      } catch (err) {
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">China Sourcing & Logistics Blog</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Expert insights, industry news, and practical guides to help you succeed in the Chinese market.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {posts.map((post) => {
                const data = post.data;
                return (
                  <article key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img 
                        src={data.image_url} 
                        alt={data.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8 flex-grow space-y-4">
                      <div className="flex items-center gap-4 text-xs font-bold text-amber-600 uppercase tracking-widest">
                        {data.tags?.[0] || 'Sourcing'}
                      </div>
                      <h2 className="text-2xl font-extrabold text-slate-900 group-hover:text-blue-900 transition-colors">
                        <Link to={`/blog/${data.slug}`}>{data.title}</Link>
                      </h2>
                      <p className="text-slate-600 line-clamp-3 leading-relaxed">
                        {data.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-500 pt-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {data.published_at ? format(parseISO(data.published_at), 'MMM dd, yyyy') : 'N/A'}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {data.author.split(',')[0]}
                        </div>
                      </div>
                    </div>
                    <div className="p-8 pt-0 mt-auto">
                      <Link 
                        to={`/blog/${data.slug}`}
                        className="flex items-center gap-2 font-bold text-blue-900 hover:gap-3 transition-all"
                      >
                        Read Full Article <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-500">
              <p className="text-xl">No blog posts found at the moment.</p>
              <p className="mt-2">Check back soon for latest insights!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
