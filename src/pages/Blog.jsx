import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User, Tag, Loader2, FileText } from 'lucide-react';
import Button from '@/components/ui/button';
import { client, getRows, getSchemaData } from '@/api/postgrest-client.js';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    async function fetchPosts() {
      setStatus('loading');
      try {
        const { data: response, error } = await client
          .from('Blog Posts')
          .select('*')
          .eq('status', 'published')
          .order('published_at', { ascending: false });

        if (error) throw error;
        setPosts(getRows(response));
        setStatus('ready');
      } catch (err) {
        console.error('Failed to load blog posts:', err);
        setStatus('error');
      }
    }
    fetchPosts();
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    try {
      return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-4 py-1 rounded-full mb-4">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sourcing Insights & Guides</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Practical advice and industry knowledge to help you source from China more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {status === 'loading' && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
          )}
          {status === 'error' && (
            <div className="text-center py-20">
              <p className="text-gray-500">Unable to load blog posts at this time.</p>
            </div>
          )}
          {status === 'ready' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, idx) => {
                const d = getSchemaData(post);
                return (
                  <article key={post.id} className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                    <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                          <FileText className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-xs font-medium text-primary">{d.category || 'Article'}</p>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(d.published_at)}
                        </span>
                        {d.read_time && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {d.read_time}
                          </span>
                        )}
                      </div>
                      {d.category && (
                        <span className="inline-block text-xs font-semibold text-accent bg-amber-50 px-2.5 py-1 rounded-full mb-3 self-start">
                          {d.category}
                        </span>
                      )}
                      <h2 className="text-lg font-semibold text-primary mb-3 leading-snug">{d.title}</h2>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1">{d.excerpt}</p>
                      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          {d.author || 'SSourcing Team'}
                        </span>
                        <Link to={`/blog/${d.slug || post.id}`} className="text-primary text-sm font-medium hover:text-primary-light transition-colors flex items-center gap-1">
                          Read More
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Stay Informed</h2>
          <p className="text-lg text-gray-600 mb-8">Subscribe to our newsletter for the latest sourcing tips, guides, and industry insights.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            />
            <Button variant="accent">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}